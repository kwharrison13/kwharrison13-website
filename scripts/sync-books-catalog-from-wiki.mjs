#!/usr/bin/env node
/**
 * sync-books-catalog-from-wiki.mjs
 *
 * Generates the library catalog `src/data/books.json` FROM the wiki's book pages
 * (`~/kwharrison13-wiki/wiki/books/*.md`). This inverts the old model where
 * books.json was hand-curated: the wiki is now the single source of truth, and
 * this catalog is a build artifact.
 *
 * books.json drives BOTH the /bookshelf cards AND which /books/<slug> pages exist
 * (books/[slug].astro getStaticPaths reads the catalog, not the content files).
 * So dropping a book here removes its public page. That is why this script is
 * DRY-RUN BY DEFAULT and prints a reconciliation report before it will overwrite
 * anything.
 *
 * Usage:
 *   node scripts/sync-books-catalog-from-wiki.mjs            # dry-run: report only, no write
 *   node scripts/sync-books-catalog-from-wiki.mjs --write    # write books.json (after you've reviewed the report)
 *
 * Output shape (unchanged from the existing catalog):
 *   { quake_books: [ {title, author, cover, year_read, tags} ],
 *     library: { "2025": [ {title, author, rating, tags, quake} ], ..., "pre-2016": [...] } }
 */

import fs from 'fs';
import path from 'path';
import os from 'os';

const WEBSITE_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const WIKI_BOOKS = path.join(os.homedir(), 'kwharrison13-wiki', 'wiki', 'books');
const CATALOG_PATH = path.join(WEBSITE_ROOT, 'src', 'data', 'books.json');

const WRITE = process.argv.includes('--write');

// ---------- slug (mirrors src/lib/bookSlug) ----------
function bookSlug(title) {
  return String(title)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------- minimal frontmatter parser (copied from sync-from-wiki.mjs) ----------
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
    if (val === '' || val === '~' || val === 'null') {
      const items = [];
      while (i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
        i++;
        items.push(parseScalar(lines[i].replace(/^\s+-\s+/, '')));
      }
      fm[key] = items.length ? items : null;
      continue;
    }
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
  if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

// ---------- helpers ----------
// Normalize year_read (scalar int, "pre-2016" string, or list) to an array of
// string year-bucket keys.
function yearBuckets(year_read) {
  const arr = Array.isArray(year_read) ? year_read : [year_read];
  return arr.filter((y) => y !== null && y !== undefined && y !== '').map((y) => String(y));
}

// For quake_books, year_read is a single value (earliest read). "pre-2016" sorts first.
function earliestYear(year_read) {
  const buckets = yearBuckets(year_read);
  if (buckets.length === 0) return null;
  const rank = (y) => (y === 'pre-2016' ? -1 : parseInt(y, 10));
  buckets.sort((a, b) => rank(a) - rank(b));
  const first = buckets[0];
  return first === 'pre-2016' ? 'pre-2016' : parseInt(first, 10);
}

// Year-key ordering used by the bookshelf: numeric desc, "pre-2016" last.
function sortYearKeys(keys) {
  return keys.slice().sort((a, b) => {
    if (a === 'pre-2016') return 1;
    if (b === 'pre-2016') return -1;
    return parseInt(b, 10) - parseInt(a, 10);
  });
}

// ---------- read existing catalog (for cover fallback + ordering + reconciliation) ----------
let existing = { quake_books: [], library: {} };
try {
  existing = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
} catch (e) {
  console.warn(`[warn] could not read existing ${CATALOG_PATH}: ${e.message}`);
}
const existingCoverBySlug = new Map();
for (const b of existing.quake_books || []) existingCoverBySlug.set(b.slug || bookSlug(b.title), b.cover);
// current order of titles within each year, and within quake_books
const existingYearOrder = {}; // year -> [slug,...]
for (const [yr, books] of Object.entries(existing.library || {})) {
  existingYearOrder[yr] = books.map((b) => b.slug || bookSlug(b.title));
}
const existingQuakeOrder = (existing.quake_books || []).map((b) => b.slug || bookSlug(b.title));

// ---------- read wiki book pages ----------
if (!fs.existsSync(WIKI_BOOKS)) {
  console.error(`wiki books dir not found: ${WIKI_BOOKS}`);
  process.exit(1);
}
const files = fs.readdirSync(WIKI_BOOKS).filter((f) => f.endsWith('.md') && !f.startsWith('.'));

const books = []; // { slug, title, author, rating, tags, quake, cover, years:[...] }
const problems = [];
for (const file of files) {
  const text = fs.readFileSync(path.join(WIKI_BOOKS, file), 'utf8');
  const { frontmatter: fm } = parseFrontmatter(text);
  if (fm.type !== 'book') continue;
  if (!fm.title) { problems.push(`${file}: missing title`); continue; }
  // Honor website_slug override (e.g. long title "Evicted: ..." → URL /books/evicted).
  // Emit an explicit slug field on the catalog entry ONLY when it differs from
  // bookSlug(title), so the renderers can keep the short URL.
  const overrideSlug = fm.website_slug && fm.website_slug !== bookSlug(fm.title) ? fm.website_slug : null;
  const slug = overrideSlug || bookSlug(fm.title);
  const years = yearBuckets(fm.year_read);
  if (years.length === 0) problems.push(`${file}: missing/empty year_read`);
  const quake = fm.quake === true;
  let cover = fm.cover || existingCoverBySlug.get(slug) || null;
  if (quake && !cover) problems.push(`${file}: quake book has no cover (frontmatter or existing catalog)`);
  books.push({
    slug,
    overrideSlug,
    title: fm.title,
    author: fm.author ?? '',
    rating: typeof fm.rating === 'number' ? fm.rating : 0,
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    quake,
    cover,
    years,
    year_read: fm.year_read,
  });
}

// ---------- build the new catalog ----------
// library buckets, ordered to match the existing file (minimal diff): existing
// order first, then any new books appended alphabetically by title.
const libraryMap = {}; // year -> [bookEntry]
for (const b of books) {
  for (const yr of b.years) {
    (libraryMap[yr] ||= []).push(b);
  }
}
const library = {};
for (const yr of sortYearKeys(Object.keys(libraryMap))) {
  const entries = libraryMap[yr];
  const order = existingYearOrder[yr] || [];
  const rank = (b) => {
    const i = order.indexOf(b.slug);
    return i === -1 ? Infinity : i;
  };
  entries.sort((a, b) => {
    const ra = rank(a), rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.title.localeCompare(b.title);
  });
  library[yr] = entries.map((b) => ({
    title: b.title,
    ...(b.overrideSlug ? { slug: b.overrideSlug } : {}),
    author: b.author,
    rating: b.rating,
    tags: b.tags,
    quake: b.quake,
  }));
}

// quake_books, ordered to match existing then appended.
const quakeBooks = books.filter((b) => b.quake);
quakeBooks.sort((a, b) => {
  const ra = existingQuakeOrder.indexOf(a.slug);
  const rb = existingQuakeOrder.indexOf(b.slug);
  if ((ra === -1) !== (rb === -1)) return ra === -1 ? 1 : -1;
  if (ra !== -1 && rb !== -1) return ra - rb;
  return (earliestYear(a.year_read) ?? 0) - (earliestYear(b.year_read) ?? 0);
});
const quake_books = quakeBooks.map((b) => ({
  title: b.title,
  ...(b.overrideSlug ? { slug: b.overrideSlug } : {}),
  author: b.author,
  cover: b.cover,
  year_read: earliestYear(b.year_read),
  tags: b.tags,
}));

const generated = { quake_books, library };

// ---------- reconciliation report ----------
function catalogSlugYears(cat) {
  const map = new Map(); // slug -> { title, years:Set, quake, rating, tags, author }
  for (const [yr, list] of Object.entries(cat.library || {})) {
    for (const b of list) {
      const s = b.slug || bookSlug(b.title);
      const e = map.get(s) || { title: b.title, years: new Set(), quake: false, rating: b.rating, tags: b.tags, author: b.author };
      e.years.add(yr);
      if (b.quake) e.quake = true;
      map.set(s, e);
    }
  }
  return map;
}
const curMap = catalogSlugYears(existing);
const newMap = catalogSlugYears(generated);

const dropped = [...curMap.keys()].filter((s) => !newMap.has(s));      // in catalog, not in wiki -> page would 404
const added = [...newMap.keys()].filter((s) => !curMap.has(s));        // in wiki, not in catalog -> new
const fieldChanges = [];
for (const [s, ne] of newMap) {
  const ce = curMap.get(s);
  if (!ce) continue;
  const diffs = [];
  if ((ce.author || '') !== (ne.author || '')) diffs.push(`author "${ce.author}"→"${ne.author}"`);
  if ((ce.rating || 0) !== (ne.rating || 0)) diffs.push(`rating ${ce.rating}→${ne.rating}`);
  if (!!ce.quake !== !!ne.quake) diffs.push(`quake ${ce.quake}→${ne.quake}`);
  const cy = [...ce.years].sort().join(','), ny = [...ne.years].sort().join(',');
  if (cy !== ny) diffs.push(`years [${cy}]→[${ny}]`);
  const ct = (ce.tags || []).join('|'), nt = (ne.tags || []).join('|');
  if (ct !== nt) diffs.push(`tags [${ct}]→[${nt}]`);
  if (diffs.length) fieldChanges.push(`  ${ne.title}: ${diffs.join('; ')}`);
}

const countEntries = (cat) =>
  (cat.quake_books?.length || 0) + Object.values(cat.library || {}).reduce((n, l) => n + l.length, 0);

console.log('\n=== books.json reconciliation (wiki → catalog) ===');
console.log(`wiki book pages read:        ${books.length}`);
console.log(`unique books (current → new): ${curMap.size} → ${newMap.size}`);
console.log(`library entries (current → new, incl re-reads): ${countEntries(existing)} → ${countEntries(generated)}`);
console.log(`quake_books (current → new): ${existing.quake_books?.length || 0} → ${generated.quake_books.length}`);

console.log(`\n[DROPPED] in catalog but NOT in wiki — these /books/<slug> pages would 404 (${dropped.length}):`);
dropped.forEach((s) => console.log(`  - ${curMap.get(s).title}  (slug: ${s})`));
console.log(`\n[ADDED] in wiki but NOT in current catalog — newly listed (${added.length}):`);
added.forEach((s) => console.log(`  + ${newMap.get(s).title}  (slug: ${s})`));
console.log(`\n[CHANGED] field differences on matched books (${fieldChanges.length}):`);
if (fieldChanges.length) console.log(fieldChanges.join('\n'));

if (problems.length) {
  console.log(`\n[WARNINGS] (${problems.length}):`);
  problems.forEach((p) => console.log(`  ! ${p}`));
}

// ---------- write (only with --write) ----------
if (WRITE) {
  if (dropped.length) {
    console.log(`\n*** Refusing to --write: ${dropped.length} book(s) would be dropped (pages would 404).`);
    console.log('*** Resolve the [DROPPED] list first (add wiki pages, or confirm intentional removal).');
    process.exit(2);
  }
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(generated, null, 2) + '\n', 'utf8');
  console.log(`\n✓ Wrote ${CATALOG_PATH} (${newMap.size} unique books).`);
} else {
  console.log('\n(dry-run — no files written. Re-run with --write once the report looks right.)');
}
