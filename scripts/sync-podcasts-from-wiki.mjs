#!/usr/bin/env node
/**
 * Wiki podcasts → src/content/podcasts sync (wiki is the source of truth).
 *
 * Mirrors EVERY page in ~/kwharrison13-wiki/wiki/podcasts/ into
 * src/content/podcasts/<slug>.md so /podcasts/<slug> always resolves. Podcasts
 * are public media (like books), so they default to publish: true; a page with
 * publish: false is pruned from the site (the /podcasts/[slug] route still has a
 * private landing, but the listing hides it).
 *
 * - Transforms [[wikilinks]] in the body into Astro-friendly markdown links that
 *   target the right collection (books / essays / notes / podcasts) — the same
 *   resolver used by sync-notes-from-wiki.mjs, so a podcast's `## Connections`
 *   block links straight to the referenced books and essays (and shows up as a
 *   backlink on those pages via src/lib/backlinks.ts).
 * - Drops <!--rwid:--> markers if any leak through.
 * - Slug is the same kebab-case slugify() used elsewhere (website_slug wins).
 * - Prunes stale files whose source wiki page was renamed/merged/deleted, and
 *   prunes publish: false pages (they are not surfaced publicly).
 *
 * Usage:
 *   node scripts/sync-podcasts-from-wiki.mjs              # full sync
 *   node scripts/sync-podcasts-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const WIKI_PODCASTS = path.join(WIKI_ROOT, 'wiki', 'podcasts');
const WIKI_BOOKS = path.join(WIKI_ROOT, 'wiki', 'books');
const WIKI_ESSAYS = path.join(WIKI_ROOT, 'wiki', 'essays');
const WIKI_NOTE_DIRS = [
  path.join(WIKI_ROOT, 'wiki', 'concepts'),
  path.join(WIKI_ROOT, 'wiki', 'people'),
  path.join(WIKI_ROOT, 'wiki', 'companies'),
  path.join(WIKI_ROOT, 'wiki', 'long-reads'),
  path.join(WIKI_ROOT, 'wiki', 'books-to-read'),
];
const PODCASTS_DIR = path.join(WEBSITE_ROOT, 'src', 'content', 'podcasts');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Slugs that actually have a rendered /books/<slug> page (catalog membership).
let _catalogBookSlugs = null;
function getCatalogBookSlugs() {
  if (_catalogBookSlugs) return _catalogBookSlugs;
  _catalogBookSlugs = new Set();
  try {
    const catalog = JSON.parse(
      fs.readFileSync(path.join(WEBSITE_ROOT, 'src', 'data', 'books.json'), 'utf8'),
    );
    const add = (b) => { if (b && b.title) _catalogBookSlugs.add(b.slug || slugify(b.title)); };
    for (const b of catalog.quake_books || []) add(b);
    for (const books of Object.values(catalog.library || {})) {
      for (const b of books) add(b);
    }
  } catch (e) {
    console.warn('[resolver] could not load books.json catalog:', e.message);
  }
  return _catalogBookSlugs;
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
    else fm[k] = v.replace(/^['"]|['"]$/g, '');
  }
  return { frontmatter: fm, body: m[2], rawFm: m[1] };
}

// Build resolver maps so [[wikilinks]] can route to /books, /essays, /notes, /podcasts
function indexCollection(dir, kind) {
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const full = path.join(dir, f);
    const stem = f.replace(/\.md$/, '');
    const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(full, 'utf8'));
    const title = fm.title || stem;
    const slug = (kind === 'essays' || kind === 'books') && fm.website_slug ? fm.website_slug : slugify(title);
    if (kind === 'books' && !getCatalogBookSlugs().has(slug)) continue;
    const names = new Set([stem, title]);
    if (Array.isArray(fm.aliases)) for (const a of fm.aliases) names.add(a);
    for (const n of names) out.set(n.toLowerCase().trim(), { slug, kind });
  }
  return out;
}

function mergeMaps(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) if (!out.has(k)) out.set(k, v);
  return out;
}

// book > essay > podcast > notes priority for name collisions.
const resolver = mergeMaps(
  indexCollection(WIKI_BOOKS, 'books'),
  indexCollection(WIKI_ESSAYS, 'essays'),
  indexCollection(WIKI_PODCASTS, 'podcasts'),
  ...WIKI_NOTE_DIRS.map((dir) => indexCollection(dir, 'notes')),
);

const slugToKind = new Map();
for (const { slug, kind } of resolver.values()) if (!slugToKind.has(slug)) slugToKind.set(slug, kind);

function transformLinks(text) {
  text = text.replace(/`(\[\[[^\]]+\]\])`/g, '$1');
  text = text.replace(/`(#\[\[[^\]]+\]\])`/g, '$1');
  const _code = [];
  text = text.replace(/`[^`]*`/g, (m) => { _code.push(m); return `\x00${_code.length - 1}\x00`; });
  const lookup = (target) => {
    const hit = resolver.get(target.toLowerCase().trim());
    if (hit) return hit;
    const slug = slugify(target);
    const kind = slugToKind.get(slug);
    return kind ? { slug, kind } : null;
  };
  text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const display = alias || target;
    const hit = lookup(target);
    if (!hit) return display;
    return `[${display}](/${hit.kind}/${hit.slug})`;
  });
  text = text.replace(/#\[\[([^\]]+)\]\]/g, (_, target) => {
    const display = target;
    const hit = lookup(target);
    if (!hit) return display;
    return `[${display}](/${hit.kind}/${hit.slug})`;
  });
  text = text.replace(/<!--rwid:[^>]+-->/g, '');
  text = text.replace(/\x00(\d+)\x00/g, (_, i) => _code[Number(i)]);
  return text;
}

function quote(s) {
  if (s === '') return '""';
  if (/^[A-Za-z0-9_\-./]+$/.test(s)) return `"${s}"`;
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function serializeFrontmatter(fm) {
  const lines = ['---'];
  const ordered = [
    'title', 'type', 'format', 'category', 'role', 'publish', 'excerpt',
    'show', 'host', 'guest', 'episode_date', 'source', 'url', 'youtube_id', 'image',
    'slug', 'confidence', 'created', 'updated', 'last_updated_by',
    'sources', 'tags', 'aliases', 'related',
  ];
  for (const k of ordered) {
    if (fm[k] === undefined || fm[k] === null) continue;
    const v = fm[k];
    if (Array.isArray(v)) {
      if (v.length === 0) { lines.push(`${k}: []`); continue; }
      lines.push(`${k}:`);
      for (const item of v) lines.push(`  - ${quote(String(item))}`);
    } else if (typeof v === 'boolean') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: ${quote(String(v))}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function syncOne(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseFrontmatter(raw);
  const title = frontmatter.title || path.basename(filePath, '.md');
  const slug = frontmatter.website_slug || slugify(title);
  if (!slug) return { skipped: true, reason: 'empty slug' };

  // Publish gate: publish:false podcasts are pruned from the public site.
  const isPublic = frontmatter.publish === true || String(frontmatter.publish).toLowerCase() === 'true';
  if (!isPublic) {
    const target = path.join(PODCASTS_DIR, `${slug}.md`);
    let removed = false;
    if (fs.existsSync(target)) { if (!dryRun) fs.rmSync(target); removed = true; }
    return { private: true, slug, removed };
  }

  frontmatter.slug = slug;
  const transformedBody = transformLinks(body);
  const out = serializeFrontmatter(frontmatter) + '\n\n' + transformedBody.trim() + '\n';
  const target = path.join(PODCASTS_DIR, `${slug}.md`);
  if (dryRun) return { wrote: false, slug, target };
  fs.mkdirSync(PODCASTS_DIR, { recursive: true });
  fs.writeFileSync(target, out);
  return { wrote: true, slug, target };
}

function main() {
  if (!fs.existsSync(WIKI_PODCASTS)) {
    console.log('No wiki/podcasts/ directory — nothing to sync.');
    return;
  }
  let count = 0, priv = 0;
  const seenSlugs = new Set();
  const collisions = [];
  for (const f of fs.readdirSync(WIKI_PODCASTS)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const r = syncOne(path.join(WIKI_PODCASTS, f));
    if (r.skipped) continue;
    if (r.private) { priv++; continue; }
    if (seenSlugs.has(r.slug)) collisions.push(r.slug);
    else seenSlugs.add(r.slug);
    count++;
  }
  console.log(`${dryRun ? '[dry-run] would write' : 'wrote'} ${count} podcasts (${priv} private, skipped)`);
  if (collisions.length) {
    console.log(`\nSlug collisions (later file wins): ${collisions.length}`);
    for (const c of collisions.slice(0, 20)) console.log(`  - ${c}`);
  }

  // Prune stale files (renamed/merged/deleted source, or flipped private).
  if (fs.existsSync(PODCASTS_DIR)) {
    const stale = fs.readdirSync(PODCASTS_DIR)
      .filter((f) => f.endsWith('.md') && !f.startsWith('.'))
      .filter((f) => !seenSlugs.has(f.slice(0, -3)));
    if (stale.length) {
      console.log(`\n${dryRun ? '[dry-run] would prune' : 'pruned'} ${stale.length} stale podcasts:`);
      for (const f of stale) {
        console.log(`  - ${f}`);
        if (!dryRun) fs.rmSync(path.join(PODCASTS_DIR, f));
      }
    }
  }
}

main();
