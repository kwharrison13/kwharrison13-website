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
 *     - Parses the wiki page (Key Takeaways / Public Connections /
 *       Private Connections / Highlights structure)
 *     - Computes the website slug (matches src/lib/bookSlug)
 *     - Reads the existing website file (if any) to preserve website-only
 *       frontmatter fields (cover, readwise_url, readwise_book_id)
 *     - Writes src/content/books/<slug>.md with:
 *         * frontmatter: title, author, cover?, year_read, rating, quake?,
 *           tags, readwise_url?, readwise_book_id?, last_imported (today),
 *           key_takeaways_status: 'written'
 *         * body: ## Key Takeaways, ## Connections, ## Highlights
 *         * Private Connections section is dropped
 *         * [[wikilinks]] in Connections → [Title](/books/slug)
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
const WIKI_ESSAYS = path.join(WIKI_ROOT, 'wiki', 'essays');
const WIKI_CONCEPTS = path.join(WIKI_ROOT, 'wiki', 'concepts');
const WIKI_PEOPLE = path.join(WIKI_ROOT, 'wiki', 'people');
// wiki/gospel-study is intentionally NOT in the resolver — kept private (never synced).
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

// The set of slugs that actually have a rendered /books/<slug> page. Book pages
// are generated EXCLUSIVELY from the books.json catalog (see books/[slug].astro
// getStaticPaths), NOT from wiki/books/*.md. So a wikilink to a book that isn't
// in the catalog (e.g. a publish:false stub for a book merely cited inside
// another book, like "Stuck in Place") would resolve to a /books/ URL that 404s
// — books have no "private note" landing fallback the way notes do. Gate book
// wikilinks on catalog membership; non-catalog books unwrap to plain text.
let _catalogBookSlugs = null;
function getCatalogBookSlugs() {
  if (_catalogBookSlugs) return _catalogBookSlugs;
  _catalogBookSlugs = new Set();
  try {
    const catalog = JSON.parse(
      fs.readFileSync(path.join(WEBSITE_ROOT, 'src', 'data', 'books.json'), 'utf8'),
    );
    const add = (b) => { if (b && b.title) _catalogBookSlugs.add(b.slug || bookSlug(b.title)); };
    for (const b of catalog.quake_books || []) add(b);
    for (const books of Object.values(catalog.library || {})) {
      for (const b of books) add(b);
    }
  } catch (e) {
    console.warn('[resolver] could not load books.json catalog:', e.message);
  }
  return _catalogBookSlugs;
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
  // Escape backslashes before quotes so a literal backslash in a value can't
  // produce invalid YAML that breaks the whole build (see sync-notes quote()).
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

// ---------- section parser ----------

function parseSections(body) {
  // Split on H2 headings. The capture group keeps each heading's text, so
  // parts = [preamble, heading1, content1, heading2, content2, ...].
  // NOTE: the previous implementation used /...(?=^## |\Z)/ — but JS regex has
  // no \Z anchor, so it degraded to a literal "Z" and silently truncated every
  // section at its first capital Z (e.g. "[[American Zion]]" → "[[American ").
  const sections = {};
  const parts = body.split(/^## (.+)$/m);
  for (let i = 1; i < parts.length; i += 2) {
    sections[parts[i].trim()] = (parts[i + 1] || '').trim();
  }
  return sections;
}

// ---------- resolver-aware wikilink transform ----------

// Resolves [[Target]] across all wiki collections. Built lazily on first call
// from filesystem state (filename + frontmatter title + aliases).
let _resolver = null;
function getResolver() {
  if (_resolver) return _resolver;
  _resolver = new Map();
  const sources = [
    [WIKI_BOOKS, 'books'],
    [WIKI_ESSAYS, 'essays'],
    [WIKI_CONCEPTS, 'notes'],
    [WIKI_PEOPLE, 'notes'],
    // gospel-study intentionally excluded — kept private (not synced to notes),
    // so links to gospel-study pages unwrap to plain text on the public site.
  ];
  for (const [dir, kind] of sources) {
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md') || f.startsWith('.')) continue;
      const full = path.join(dir, f);
      const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(full, 'utf8'));
      const title = fm.title || f.replace(/\.md$/, '');
      // Essays are addressed by their website slug, which can diverge from
      // bookSlug(title) — e.g. title "Investing 101 2.0" lives at /essays/coming-soon.
      // Using bookSlug(title) would invent a non-existent route and could collide
      // with a same-named concept's slug, tripping the heal pass into a broken link.
      // Essays and books can both pin a website_slug that diverges from
      // bookSlug(title) — e.g. a book whose page title is the full subtitle
      // ("Evicted: Poverty and Profit in the American City") but whose URL
      // stays /books/evicted. Concept/people pages always derive from title.
      const slug =
        (kind === 'essays' || kind === 'books') && fm.website_slug
          ? fm.website_slug
          : bookSlug(title);
      // A book wikilink only resolves if the book actually renders, i.e. its
      // slug exists in the books.json catalog. Otherwise skip it so the link
      // unwraps to plain text instead of pointing at a 404.
      if (kind === 'books' && !getCatalogBookSlugs().has(slug)) continue;
      const stem = f.replace(/\.md$/, '');
      const names = new Set([stem, title]);
      if (Array.isArray(fm.aliases)) for (const a of fm.aliases) names.add(a);
      for (const n of names) {
        const k = n.toLowerCase().trim();
        if (!_resolver.has(k)) _resolver.set(k, { kind, slug });
      }
    }
  }
  return _resolver;
}

// Build a reverse map slug → kind so we can heal stale links when a page
// moves between collections (e.g. essay deleted, replaced by a concept note).
let _slugToKind = null;
function getSlugToKind() {
  if (_slugToKind) return _slugToKind;
  _slugToKind = new Map();
  for (const { kind, slug } of getResolver().values()) {
    if (!_slugToKind.has(slug)) _slugToKind.set(slug, kind);
  }
  return _slugToKind;
}

// Transform every [[Target]] and #[[Target]] to a markdown link if the target
// resolves to a known wiki page, otherwise unwrap to plain display text. Also
// heals existing /books/X /essays/X /notes/X markdown links whose page has
// since moved to a different collection.
// Used everywhere — Key Takeaways, Connections, and Highlights.
function resolveWikilinks(text) {
  const r = getResolver();
  // Defense: strip backticks directly around wikilinks. An old synthesis-script
  // habit produced `[[X]]` (inline code) which broke link rendering downstream.
  text = text.replace(/`(\[\[[^\]]+\]\])`/g, '$1');
  text = text.replace(/`(#\[\[[^\]]+\]\])`/g, '$1');
  // Also strip backticks around a bare #hashtag, but ONLY when it resolves to a
  // page — otherwise leave it as literal code (e.g. `#define`). Without this, a
  // `#tag` written as inline code becomes `#[tag](/notes/tag)` (a markdown link
  // trapped in backticks), which renders as literal code instead of a link.
  text = text.replace(/`(#[A-Za-z][A-Za-z0-9_-]*)`/g, (full, tag) =>
    r.get(tag.slice(1).toLowerCase().trim()) ? tag : full);
  // Protect any remaining inline-code spans so a wikilink deliberately quoted as
  // code (e.g. `#[[Roam Brainstorm]] - note`) is left verbatim rather than having
  // its slug syntax exposed inside the code box. Lone wikilinks wrapped in backticks
  // were already unwrapped above, so those still become real links.
  const _code = [];
  text = text.replace(/`[^`]*`/g, (m) => { _code.push(m); return `\x00${_code.length - 1}\x00`; });
  // Heal stale internal markdown links — re-route if slug now lives elsewhere.
  const slugToKind = getSlugToKind();
  text = text.replace(/\]\((\/(books|essays|notes)\/([a-z0-9-]+))\)/g, (full, _path, kind, slug) => {
    const correct = slugToKind.get(slug);
    if (!correct || correct === kind) return full;
    return `](/${correct}/${slug})`;
  });
  // Resolve a wikilink target: exact name/alias first, then fall back to its
  // normalized slug. The fallback lets punctuation/conjunction variants (e.g.
  // "Boom — Bubbles and the End of Stagnation" vs the book "Boom: Bubbles & The
  // End of Stagnation") route to the canonical owner (book > essay > notes), since
  // bookSlug() collapses both forms to the same slug.
  const lookup = (target) => {
    const hit = r.get(target.toLowerCase().trim());
    if (hit) return hit;
    const slug = bookSlug(target);
    const kind = slugToKind.get(slug);
    return kind ? { kind, slug } : null;
  };
  text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const display = alias || target;
    const hit = lookup(target);
    if (!hit) return display;
    return `[${display}](/${hit.kind}/${hit.slug})`;
  });
  text = text.replace(/#\[\[([^\]]+)\]\]/g, (_, target) => {
    const hit = lookup(target);
    if (!hit) return target;
    return `[${target}](/${hit.kind}/${hit.slug})`;
  });
  // Bare Roam-style hashtags: #reading, #books-to-read, #ThisIsMyTown.
  // Match a # followed by a letter (not preceded by alnum/# so we don't catch
  // C#, ##headings, numeric #1, etc.) and route through the resolver. Display
  // text preserves the original casing Kyle wrote.
  text = text.replace(/(?<![A-Za-z0-9#\[])#([A-Za-z][A-Za-z0-9_-]+)\b/g, (full, tag) => {
    const hit = r.get(tag.toLowerCase().trim());
    if (!hit) return full;
    return `#[${tag}](/${hit.kind}/${hit.slug})`;
  });
  // Restore protected code spans.
  text = text.replace(/\x00(\d+)\x00/g, (_, i) => _code[Number(i)]);
  return text;
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
  // A book may pin website_slug to keep a short URL while the page title is the
  // full subtitle (e.g. /books/evicted with title "Evicted: Poverty and Profit…").
  const wikiBasename = path.basename(wikiFile, '.md');
  const slug = wfm.website_slug
    ? wfm.website_slug
    : wfm.title
    ? bookSlug(wfm.title)
    : bookSlug(wikiBasename);

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
  const publicInter = sections['Public Connections'] || '_No cross-book interconnections identified yet._';

  // Highlights (incl. Kyle's `> **Kyle:**` notes) come from the WIKI page — the
  // wiki is the single source of truth, so edits made in Obsidian propagate here.
  // The `## Highlights` section is the last in a book page, so grab everything from
  // that heading to EOF (a highlight quote could itself contain a `## ` line, which
  // a section-splitter would wrongly cut). Run it through resolveWikilinks so any
  // [[X]]/#[[X]] inside a note becomes a /notes link; rwid markers + blockquotes
  // pass through untouched. Falls back to preserving the existing website block only
  // if the wiki page has no Highlights (defensive — shouldn't happen for publish:true).
  let existingHighlightsBlock = '';
  const wikiHl = wbody.match(/^## Highlights\s*\n([\s\S]*)$/m);
  if (wikiHl) {
    existingHighlightsBlock = resolveWikilinks(wikiHl[1].trim());
  } else if (fs.existsSync(targetPath)) {
    const existingBody = parseFrontmatter(fs.readFileSync(targetPath, 'utf8')).body;
    const m = existingBody.match(/^## Highlights\s*\n([\s\S]*)$/m);
    if (m) existingHighlightsBlock = resolveWikilinks(m[1].trim());
  }

  const bodyParts = [
    '## Key Takeaways',
    '',
    '<!-- key-takeaways -->',
    resolveWikilinks(keyTakeaways),
    '<!-- /key-takeaways -->',
    '',
    '## Connections',
    '',
    '<!-- interconnections -->',
    resolveWikilinks(publicInter),
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
    // Match the arg against the filename, the title-derived slug, or a pinned
    // website_slug — so `sync-from-wiki.mjs evicted` finds a book whose page
    // title is the full subtitle but whose URL stays /books/evicted.
    const want = slugArg.toLowerCase();
    files = files.filter((f) => {
      if (f.toLowerCase() === `${want}.md`) return true;
      const { frontmatter: fm } = parseFrontmatter(
        fs.readFileSync(path.join(WIKI_BOOKS, f), 'utf8'),
      );
      if (fm.website_slug && fm.website_slug.toLowerCase() === want) return true;
      const title = fm.title || f.replace(/\.md$/, '');
      return bookSlug(title) === want;
    });
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
