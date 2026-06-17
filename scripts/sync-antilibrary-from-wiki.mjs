#!/usr/bin/env node
/**
 * Wiki books-to-read (anti-library) → src/data/antilibrary.json sync.
 *
 * Reads every page in ~/kwharrison13-wiki/wiki/books-to-read/ and emits a flat
 * JSON catalog that src/pages/bookshelf.astro imports to render the
 * "Anti-Library" tab grid. Mirrors the static-data pattern of src/data/books.json.
 *
 * Each entry's `related:` [[wikilinks]] are resolved (books > essays > notes)
 * into {title, url} connection objects so the grid can link them. Each row also
 * links to its own /notes/<slug> page (synced separately by sync-notes-from-wiki.mjs).
 *
 * Usage:
 *   node scripts/sync-antilibrary-from-wiki.mjs              # write the JSON
 *   node scripts/sync-antilibrary-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const SRC = path.join(WIKI_ROOT, 'wiki', 'books-to-read');
const WIKI_BOOKS = path.join(WIKI_ROOT, 'wiki', 'books');
const WIKI_ESSAYS = path.join(WIKI_ROOT, 'wiki', 'essays');
const NOTE_DIRS = [
  path.join(WIKI_ROOT, 'wiki', 'concepts'),
  path.join(WIKI_ROOT, 'wiki', 'people'),
  path.join(WIKI_ROOT, 'wiki', 'long-forms'),
  path.join(WIKI_ROOT, 'wiki', 'books-to-read'),
];
const OUT = path.join(WEBSITE_ROOT, 'src', 'data', 'antilibrary.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

// Same kebab-case slug as src/lib/bookSlug.ts and the other sync scripts.
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Minimal frontmatter parser (mirrors sync-notes-from-wiki.mjs).
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: text };
  const fm = {};
  const lines = m[1].split(/\r?\n/);
  let curKey = null;
  for (const line of lines) {
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
  return { frontmatter: fm, body: m[2] };
}

// Build the cross-collection resolver: lowercased name → {slug, kind}.
function indexCollection(dir, kind) {
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const stem = f.replace(/\.md$/, '');
    const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(path.join(dir, f), 'utf8'));
    const title = fm.title || stem;
    const slug = kind === 'essays' && fm.website_slug ? fm.website_slug : slugify(title);
    const names = new Set([stem, title]);
    if (Array.isArray(fm.aliases)) for (const a of fm.aliases) names.add(a);
    for (const n of names) out.set(String(n).toLowerCase().trim(), { slug, kind });
  }
  return out;
}

function mergeMaps(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) if (!out.has(k)) out.set(k, v);
  return out;
}

// books > essays > notes priority (same convention as the notes sync).
const resolver = mergeMaps(
  indexCollection(WIKI_BOOKS, 'books'),
  indexCollection(WIKI_ESSAYS, 'essays'),
  ...NOTE_DIRS.map((dir) => indexCollection(dir, 'notes')),
);
const slugToKind = new Map();
for (const { slug, kind } of resolver.values()) if (!slugToKind.has(slug)) slugToKind.set(slug, kind);

function resolveTarget(target) {
  const hit = resolver.get(target.toLowerCase().trim());
  if (hit) return hit;
  const slug = slugify(target);
  const kind = slugToKind.get(slug);
  return kind ? { slug, kind } : null;
}

// "[[Target|Display]]" or "[[Target]]" → {title, url} or null if unresolved.
function resolveWikilink(raw) {
  const m = String(raw).match(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/);
  const inner = m ? m[1] : String(raw);
  const display = (m && m[2]) || inner;
  const hit = resolveTarget(inner.trim());
  if (!hit) return { title: display.trim(), url: null };
  return { title: display.trim(), url: `/${hit.kind}/${hit.slug}` };
}

function buildEntry(filePath) {
  const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(filePath, 'utf8'));
  const title = fm.title || path.basename(filePath, '.md');
  const related = Array.isArray(fm.related) ? fm.related : (fm.related ? [fm.related] : []);
  const where = Array.isArray(fm.where_seen) ? fm.where_seen : (fm.where_seen ? [fm.where_seen] : []);
  const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);
  return {
    title,
    full_title: fm.full_title || title,
    author: fm.author || '',
    published: fm.source_published != null ? String(fm.source_published) : '',
    pages: fm.page_count != null ? fm.page_count : null,
    amazon_url: fm.url || '',
    where_seen: where,
    connections: related.map(resolveWikilink).filter(c => c.url),
    tags,
    slug: slugify(title),
  };
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.log(`no books-to-read dir at ${SRC} — writing empty antilibrary.json`);
    if (!dryRun) fs.writeFileSync(OUT, '[]\n');
    return;
  }
  const files = fs.readdirSync(SRC).filter(f => f.endsWith('.md') && !f.startsWith('.'));
  const entries = files
    .map(f => buildEntry(path.join(SRC, f)))
    .sort((a, b) => a.title.localeCompare(b.title));

  if (dryRun) {
    console.log(`[dry-run] ${entries.length} anti-library entries:`);
    for (const e of entries) console.log(`  - ${e.title} (${e.connections.length} connections)`);
    return;
  }
  fs.writeFileSync(OUT, JSON.stringify(entries, null, 2) + '\n');
  console.log(`wrote ${entries.length} anti-library entries → ${path.relative(WEBSITE_ROOT, OUT)}`);
}

main();
