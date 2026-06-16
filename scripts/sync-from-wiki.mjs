#!/usr/bin/env node
/**
 * Wiki → src/content/books sync.
 *
 * Usage:
 *   node scripts/sync-from-wiki.mjs              # sync all publish:true wiki books
 *   node scripts/sync-from-wiki.mjs --dry-run    # report only, write nothing
 *   node scripts/sync-from-wiki.mjs <slug>       # sync one book by slug
 *
 * Behavior:
 *   - Walks ~/kwharrison13-wiki/wiki/books/*.md
 *   - For each book where frontmatter.publish === true:
 *     - Parses the wiki page (Key Takeaways / Public Interconnections /
 *       Private Interconnections / Highlights structure)
 *     - Computes the website slug (matches src/lib/bookSlug)
 *     - Reads the existing website file (if any) to preserve website-only
 *       frontmatter fields (cover, readwise_url, readwise_book_id)
 *     - Writes src/content/books/<slug>.md with:
 *         * frontmatter: title, author, cover?, year_read, rating, quake?,
 *           tags, readwise_url?, readwise_book_id?, last_imported (today),
 *           key_takeaways_status: 'written'
 *         * body: ## Key Takeaways, ## Interconnections, ## Highlights
 *         * Private Interconnections section is dropped
 *         * [[wikilinks]] in Interconnections → [Title](/books/slug)
 *         * [[wikilinks]] elsewhere → unwrapped to plain text
 *
 * No third-party dependencies. Node ≥ 18.
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const WIKI_BOOKS = path.join(WIKI_ROOT, 'wiki', 'books');
const WEBSITE_BOOKS = path.join(WEBSITE_ROOT, 'src', 'content', 'books');

// ---------- args ----------

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const slugArg = args.find((a) => !a.startsWith('--'));

// ---------- slug (mirrors src/lib/bookSlug) ----------

function bookSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------- minimal frontmatter parser (subset of YAML we use) ----------

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: text };
  const fm = {};
  const lines = m[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let val = kv[2];
    // Multiline array
    if (val === '' || val === '~' || val === 'null') {
      // Look ahead for list items
      const items = [];
      while (i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
        i++;
        items.push(parseScalar(lines[i].replace(/^\s+-\s+/, '')));
      }
      fm[key] = items.length ? items : null;
      continue;
    }
    // Inline array
    if (val.startsWith('[') && val.endsWith(']')) {
      const inner = val.slice(1, -1).trim();
      fm[key] = inner === '' ? [] : inner.split(',').map((s) => parseScalar(s.trim()));
      continue;
    }
    fm[key] = parseScalar(val);
  }
  return { frontmatter: fm, body: m[2] };
}

function parseScalar(v) {
  if (v === '') return '';
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v === 'null' || v === '~') return null;
  // Number
  if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
  // Quoted string
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

// ---------- frontmatter serializer (matches Astro content collection shape) ----------

function serializeFrontmatter(fm) {
  const lines = ['---'];
  const fields = [
    'title',
    'author',
    'cover',
    'year_read',
    'rating',
    'quake',
    'tags',
    'readwise_url',
    'readwise_book_id',
    'last_imported',
    'key_takeaways_status',
  ];
  for (const k of fields) {
    if (fm[k] === undefined || fm[k] === null) continue;
    const v = fm[k];
    if (Array.isArray(v)) {
      if (v.length === 0) {
        lines.push(`${k}: []`);
      } else {
        lines.push(`${k}:`);
        for (const item of v) lines.push(`  - ${formatScalar(item)}`);
      }
    } else if (typeof v === 'string') {
      lines.push(`${k}: ${quoteIfNeeded(v)}`);
    } else {
      lines.push(`${k}: ${v}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function formatScalar(v) {
  if (typeof v === 'string') return quoteIfNeeded(v);
  return String(v);
}

function quoteIfNeeded(s) {
  if (s === '') return '""';
  if (/^[A-Za-z0-9_\-/.]+$/.test(s)) return `"${s}"`;
  return `"${s.replace(/"/g, '\\"')}"`;
}

// ---------- section parser ----------

function parseSections(body) {
  // Strip leading H1 (drop everything before the first `## `).
  const sections = {};
  const re = /^## (.+?)\r?\n([\s\S]*?)(?=^## |\Z)/gm;
  let match;
  while ((match = re.exec(body)) !== null) {
    sections[match[1].trim()] = match[2].trim();
  }
  return sections;
}

// ---------- wikilink transforms ----------

function transformInterconnectionLinks(text) {
  // [[Other Book|display]] or [[Other Book]] → [display](/books/slug)
  return text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const display = alias || target;
    const slug = bookSlug(target);
    return `[${display}](/books/${slug})`;
  });
}

function unwrapWikilinks(text) {
  // [[X|display]] → display; [[X]] → X
  return text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => alias || target);
}

// ---------- today (ISO date) ----------

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ---------- per-book sync ----------

function syncBook(wikiFile) {
  const raw = fs.readFileSync(wikiFile, 'utf8');
  const { frontmatter: wfm, body: wbody } = parseFrontmatter(raw);

  // Wiki filenames are now title-case (e.g. "Berkshire Hathaway Annual Letters.md").
  // Derive the website's kebab-case slug from the frontmatter title.
  const wikiBasename = path.basename(wikiFile, '.md');
  const slug = wfm.title ? bookSlug(wfm.title) : bookSlug(wikiBasename);

  if (wfm.publish !== true) {
    return { slug, action: 'skipped', reason: 'publish: false' };
  }

  const targetPath = path.join(WEBSITE_BOOKS, `${slug}.md`);

  // Preserve website-only frontmatter fields from existing file
  let preserved = {};
  if (fs.existsSync(targetPath)) {
    const existing = parseFrontmatter(fs.readFileSync(targetPath, 'utf8'));
    for (const k of ['cover', 'readwise_url', 'readwise_book_id']) {
      if (existing.frontmatter[k] !== undefined) preserved[k] = existing.frontmatter[k];
    }
  }

  const newFm = {
    title: wfm.title,
    author: wfm.author,
    cover: preserved.cover,
    year_read: wfm.year_read,
    rating: wfm.rating,
    quake: wfm.quake,
    tags: wfm.tags,
    readwise_url: preserved.readwise_url,
    readwise_book_id: preserved.readwise_book_id,
    last_imported: todayISO(),
    key_takeaways_status: 'written',
  };

  // Parse wiki body into sections
  const sections = parseSections(wbody);
  const keyTakeaways = sections['Key Takeaways'] || '_Under Consideration — to be added._';
  const publicInter = sections['Public Interconnections'] || '_No cross-book interconnections identified yet._';

  // Preserve the existing Highlights section verbatim — import-readwise.mjs owns
  // that with rwid block-ref dedup, and overwriting it here would orphan those
  // refs and break future Readwise updates.
  let existingHighlightsBlock = '';
  if (fs.existsSync(targetPath)) {
    const existingBody = parseFrontmatter(fs.readFileSync(targetPath, 'utf8')).body;
    const m = existingBody.match(/^## Highlights\s*\n([\s\S]*)$/m);
    if (m) existingHighlightsBlock = m[1].trim();
  }

  const bodyParts = [
    '## Key Takeaways',
    '',
    '<!-- key-takeaways -->',
    unwrapWikilinks(keyTakeaways),
    '<!-- /key-takeaways -->',
    '',
    '## Interconnections',
    '',
    '<!-- interconnections -->',
    transformInterconnectionLinks(publicInter),
    '<!-- /interconnections -->',
    '',
    '## Highlights',
    '',
    existingHighlightsBlock,
  ];

  const output = serializeFrontmatter(newFm) + '\n\n' + bodyParts.join('\n') + '\n';

  if (dryRun) {
    return { slug, action: 'would-write', target: targetPath, bytes: output.length };
  }

  fs.writeFileSync(targetPath, output);
  return { slug, action: 'wrote', target: targetPath, bytes: output.length };
}

// ---------- main ----------

function main() {
  if (!fs.existsSync(WIKI_BOOKS)) {
    console.error(`error: wiki books dir not found: ${WIKI_BOOKS}`);
    process.exit(1);
  }
  if (!fs.existsSync(WEBSITE_BOOKS)) {
    console.error(`error: website books dir not found: ${WEBSITE_BOOKS}`);
    process.exit(1);
  }

  let files = fs.readdirSync(WIKI_BOOKS).filter((f) => f.endsWith('.md') && !f.startsWith('.'));
  if (slugArg) {
    files = files.filter((f) => f === `${slugArg}.md`);
    if (files.length === 0) {
      console.error(`error: no wiki book matches slug "${slugArg}"`);
      process.exit(1);
    }
  }

  const results = files.map((f) => syncBook(path.join(WIKI_BOOKS, f)));

  // Report
  const wrote = results.filter((r) => r.action === 'wrote');
  const would = results.filter((r) => r.action === 'would-write');
  const skipped = results.filter((r) => r.action === 'skipped');

  if (dryRun) {
    console.log(`[dry-run] ${would.length} would write, ${skipped.length} would skip`);
  } else {
    console.log(`${wrote.length} wrote, ${skipped.length} skipped`);
  }
  for (const r of wrote) console.log(`  ✓ ${r.slug} → ${path.relative(WEBSITE_ROOT, r.target)}`);
  for (const r of would) console.log(`  · ${r.slug} → ${path.relative(WEBSITE_ROOT, r.target)} (${r.bytes} bytes)`);
  for (const r of skipped) console.log(`  – ${r.slug} (${r.reason})`);
}

main();
