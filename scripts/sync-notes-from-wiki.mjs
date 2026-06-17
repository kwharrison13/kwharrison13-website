#!/usr/bin/env node
/**
 * Wiki concepts + people + long-forms → src/content/notes sync.
 *
 * Mirrors EVERY page in ~/kwharrison13-wiki/wiki/{concepts,people,long-forms}/
 * into src/content/notes/<slug>.md (regardless of publish state) so URLs
 * always resolve. The /notes/[slug].astro route then decides whether to show
 * the full content (publish: true) or a "private note" landing (publish: false).
 *
 * - Transforms [[wikilinks]] in the body into Astro-friendly markdown links
 *   that target the right collection (books / essays / notes).
 * - Drops `<!--rwid:-->` markers (not relevant outside book pages).
 * - Slug is the same kebab-case bookSlug() used elsewhere.
 *
 * Usage:
 *   node scripts/sync-notes-from-wiki.mjs              # full sync
 *   node scripts/sync-notes-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const WIKI_DIRS = [
  path.join(WIKI_ROOT, 'wiki', 'concepts'),
  path.join(WIKI_ROOT, 'wiki', 'people'),
  path.join(WIKI_ROOT, 'wiki', 'long-forms'),
];
const WIKI_BOOKS = path.join(WIKI_ROOT, 'wiki', 'books');
const WIKI_ESSAYS = path.join(WIKI_ROOT, 'wiki', 'essays');
const NOTES_DIR = path.join(WEBSITE_ROOT, 'src', 'content', 'notes');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: text, rawFm: '' };
  const fm = {};
  const lines = m[1].split(/\r?\n/);
  let curKey = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && curKey) {
      const v = listMatch[1].trim().replace(/^['"]|['"]$/g, '');
      if (!Array.isArray(fm[curKey])) fm[curKey] = [];
      fm[curKey].push(v);
      continue;
    }
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!kv) { curKey = null; continue; }
    const k = kv[1]; let v = kv[2];
    curKey = k;
    if (v === '') { fm[k] = []; continue; }
    if (v.startsWith('[') && v.endsWith(']')) {
      const inner = v.slice(1, -1).trim();
      fm[k] = inner === '' ? [] : inner.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      continue;
    }
    if (v === 'true') fm[k] = true;
    else if (v === 'false') fm[k] = false;
    else if (/^-?\d+$/.test(v)) fm[k] = parseInt(v, 10);
    else fm[k] = v.replace(/^['"]|['"]$/g, '');
  }
  return { frontmatter: fm, body: m[2], rawFm: m[1] };
}

// Build resolver maps so [[wikilinks]] can route to /books, /essays, or /notes
function indexCollection(dir, kind) {
  const out = new Map(); // lowercased name → {slug, kind}
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const full = path.join(dir, f);
    const stem = f.replace(/\.md$/, '');
    const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(full, 'utf8'));
    const title = fm.title || stem;
    // Essays resolve to their website slug, which can differ from slugify(title)
    // (e.g. title "Investing 101 2.0" lives at /essays/coming-soon).
    const slug = kind === 'essays' && fm.website_slug ? fm.website_slug : slugify(title);
    const names = new Set([stem, title]);
    if (Array.isArray(fm.aliases)) for (const a of fm.aliases) names.add(a);
    for (const n of names) {
      out.set(n.toLowerCase().trim(), { slug, kind });
    }
  }
  return out;
}

function mergeMaps(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) if (!out.has(k)) out.set(k, v);
  return out;
}

// Convention: any name found in books wins over essays wins over notes
// (book/essay names are more "concrete" and less likely to be re-used as concepts)
const resolver = mergeMaps(
  indexCollection(WIKI_BOOKS, 'books'),
  indexCollection(WIKI_ESSAYS, 'essays'),
  ...WIKI_DIRS.map((dir) => indexCollection(dir, 'notes')),
);

// slug → kind, with book > essay > notes priority (resolver insertion order),
// so a target that matches no name can still route to the canonical owner by slug.
const slugToKind = new Map();
for (const { slug, kind } of resolver.values()) if (!slugToKind.has(slug)) slugToKind.set(slug, kind);

function transformLinks(text) {
  // Defensive: strip backticks directly around a wikilink so it resolves into a
  // real link instead of rendering as inline code (mirrors sync-from-wiki.mjs).
  // Without this, `[[X]]` / `#[[X]]` written as inline code becomes a markdown
  // link trapped in backticks → renders as literal code, not a link.
  text = text.replace(/`(\[\[[^\]]+\]\])`/g, '$1');
  text = text.replace(/`(#\[\[[^\]]+\]\])`/g, '$1');
  // Protect any remaining inline-code spans so a wikilink deliberately quoted as
  // code (e.g. `#[[Roam Brainstorm]] - note`) is left verbatim rather than having
  // its slug syntax exposed inside the code box.
  const _code = [];
  text = text.replace(/`[^`]*`/g, (m) => { _code.push(m); return `\x00${_code.length - 1}\x00`; });
  // Resolve a target: exact name/alias first, then fall back to its normalized slug
  // so punctuation/conjunction variants (e.g. "Boom — Bubbles and the End of
  // Stagnation" vs the book "Boom: Bubbles & The End of Stagnation") route to the
  // canonical owner (book > essay > notes).
  const lookup = (target) => {
    const hit = resolver.get(target.toLowerCase().trim());
    if (hit) return hit;
    const slug = slugify(target);
    const kind = slugToKind.get(slug);
    return kind ? { slug, kind } : null;
  };
  // [[Target|Display]] or [[Target]] → [Display](/<kind>/<slug>)
  // Unresolved → just unwrap to the display text (no broken link)
  text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const display = alias || target;
    const hit = lookup(target);
    if (!hit) return display;
    return `[${display}](/${hit.kind}/${hit.slug})`;
  });
  // #[[Tag]] (Roam-style hashtag wikilink) → same
  text = text.replace(/#\[\[([^\]]+)\]\]/g, (_, target) => {
    const display = target;
    const hit = lookup(target);
    if (!hit) return display;
    return `[${display}](/${hit.kind}/${hit.slug})`;
  });
  // Strip <!--rwid:--> markers if any leaked through
  text = text.replace(/<!--rwid:[^>]+-->/g, '');
  // Restore protected code spans.
  text = text.replace(/\x00(\d+)\x00/g, (_, i) => _code[Number(i)]);
  return text;
}

function serializeFrontmatter(fm) {
  const lines = ['---'];
  const ordered = [
    'title', 'type', 'format', 'publish', 'excerpt', 'author', 'url', 'source_published',
    'confidence', 'created', 'updated',
    'last_updated_by', 'sources', 'tags', 'aliases', 'related', 'reference_count',
  ];
  for (const k of ordered) {
    if (fm[k] === undefined || fm[k] === null) continue;
    const v = fm[k];
    if (Array.isArray(v)) {
      if (v.length === 0) { lines.push(`${k}: []`); continue; }
      lines.push(`${k}:`);
      for (const item of v) lines.push(`  - ${quote(String(item))}`);
    } else if (k === 'source_published') {
      // Always a string in the schema — a bare YAML year (e.g. 2014) parses as a
      // number, so coerce + quote to avoid an InvalidContentEntryData build break.
      lines.push(`${k}: ${quote(String(v))}`);
    } else if (typeof v === 'boolean' || typeof v === 'number') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: ${quote(String(v))}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function quote(s) {
  if (s === '') return '""';
  if (/^[A-Za-z0-9_\-./]+$/.test(s)) return `"${s}"`;
  return `"${s.replace(/"/g, '\\"')}"`;
}

function syncOne(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(raw);
  const title = frontmatter.title || path.basename(filePath, '.md');
  const slug = slugify(title);
  if (!slug) return { skipped: true, reason: 'empty slug' };

  // Coerce reference_count to a number
  if (typeof frontmatter.reference_count === 'string') {
    frontmatter.reference_count = parseInt(frontmatter.reference_count, 10) || undefined;
  }

  const transformedBody = transformLinks(body);
  const out = serializeFrontmatter(frontmatter) + '\n\n' + transformedBody.trim() + '\n';
  const target = path.join(NOTES_DIR, `${slug}.md`);
  if (dryRun) return { wrote: false, slug, target };
  fs.mkdirSync(NOTES_DIR, { recursive: true });
  fs.writeFileSync(target, out);
  return { wrote: true, slug, target };
}

function main() {
  let count = 0;
  let seenSlugs = new Set();
  let collisions = [];
  for (const dir of WIKI_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md') || f.startsWith('.')) continue;
      const r = syncOne(path.join(dir, f));
      if (r.skipped) continue;
      if (seenSlugs.has(r.slug)) collisions.push(r.slug);
      else seenSlugs.add(r.slug);
      count++;
    }
  }
  console.log(`${dryRun ? '[dry-run] would write' : 'wrote'} ${count} notes`);
  if (collisions.length) {
    console.log(`\nSlug collisions (later file wins): ${collisions.length}`);
    for (const c of collisions.slice(0, 20)) console.log(`  - ${c}`);
  }
}

main();
