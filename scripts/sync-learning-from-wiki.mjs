#!/usr/bin/env node
/**
 * Wiki learning pages → src/content/learning sync.
 *
 * Mirrors every page in ~/kwharrison13-wiki/wiki/learning/
 * into src/content/learning/<slug>.md.
 * Transforms [[wikilinks]] to Astro-friendly markdown links.
 *
 * Usage:
 *   node scripts/sync-learning-from-wiki.mjs              # full sync
 *   node scripts/sync-learning-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const WIKI_LEARNING = path.join(WIKI_ROOT, 'wiki', 'learning');
const WIKI_BOOKS = path.join(WIKI_ROOT, 'wiki', 'books');
const WIKI_ESSAYS = path.join(WIKI_ROOT, 'wiki', 'essays');
const WIKI_CONCEPTS = path.join(WIKI_ROOT, 'wiki', 'concepts');
const WIKI_PEOPLE = path.join(WIKI_ROOT, 'wiki', 'people');
const LEARNING_DIR = path.join(WEBSITE_ROOT, 'src', 'content', 'learning');

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
  return { frontmatter: fm, body: m[2], rawFm: m[1] };
}

function indexCollection(dir, kind) {
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const full = path.join(dir, f);
    const stem = f.replace(/\.md$/, '');
    const { frontmatter: fm } = parseFrontmatter(fs.readFileSync(full, 'utf8'));
    const title = fm.title || stem;
    const slug = slugify(title);
    const names = new Set([stem, title]);
    if (Array.isArray(fm.aliases)) for (const a of fm.aliases) names.add(a);
    for (const n of names) out.set(n.toLowerCase().trim(), { slug, kind });
  }
  return out;
}

function buildResolver() {
  const books = indexCollection(WIKI_BOOKS, 'books');
  const essays = indexCollection(WIKI_ESSAYS, 'essays');
  const notes = new Map([
    ...indexCollection(WIKI_CONCEPTS, 'notes'),
    ...indexCollection(WIKI_PEOPLE, 'notes'),
  ]);
  return { books, essays, notes };
}

function resolveTarget(target, resolver) {
  const key = target.toLowerCase().trim();
  if (resolver.books.has(key)) {
    const { slug } = resolver.books.get(key);
    return `/books/${slug}`;
  }
  if (resolver.essays.has(key)) {
    const { slug } = resolver.essays.get(key);
    return `/essays/${slug}`;
  }
  if (resolver.notes.has(key)) {
    const { slug } = resolver.notes.get(key);
    return `/notes/${slug}`;
  }
  return null;
}

function transformLinks(body, resolver) {
  // Strip backtick-wrapped wikilinks
  body = body.replace(/`(\[\[.*?\]\])`/g, '$1');

  // [[Target|display]] and [[Target]]
  body = body.replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (match, target, display) => {
    const label = display || target;
    const url = resolveTarget(target.trim(), resolver);
    if (url) return `[${label}](${url})`;
    return label;
  });

  // #[[Target]] Roam-style
  body = body.replace(/#\[\[([^\]]+?)\]\]/g, (match, target) => {
    const url = resolveTarget(target.trim(), resolver);
    if (url) return `[${target}](${url})`;
    return target;
  });

  return body;
}

function serializeFrontmatter(fm) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fm)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      if (v.length === 0) {
        lines.push(`${k}: []`);
      } else {
        lines.push(`${k}:`);
        for (const item of v) lines.push(`  - ${JSON.stringify(item)}`);
      }
    } else if (typeof v === 'boolean') {
      lines.push(`${k}: ${v}`);
    } else if (typeof v === 'number') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: ${JSON.stringify(String(v))}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function sync() {
  if (!fs.existsSync(WIKI_LEARNING)) {
    console.log('wiki/learning/ not found — nothing to sync');
    return;
  }
  if (!dryRun) fs.mkdirSync(LEARNING_DIR, { recursive: true });

  const resolver = buildResolver();
  const files = fs.readdirSync(WIKI_LEARNING).filter(f => f.endsWith('.md') && !f.startsWith('.'));

  let synced = 0;
  let skipped = 0;

  for (const f of files) {
    const src = path.join(WIKI_LEARNING, f);
    const raw = fs.readFileSync(src, 'utf8');
    const { frontmatter: fm, body } = parseFrontmatter(raw);

    const title = fm.title || f.replace(/\.md$/, '');
    const slug = slugify(title);
    const dest = path.join(LEARNING_DIR, `${slug}.md`);

    const transformedBody = transformLinks(body, resolver);
    const outFm = { ...fm };
    delete outFm.last_updated_by;

    const output = `${serializeFrontmatter(outFm)}\n\n${transformedBody.trimStart()}`;

    if (dryRun) {
      console.log(`[dry-run] would write → ${path.relative(WEBSITE_ROOT, dest)}`);
      skipped++;
    } else {
      fs.writeFileSync(dest, output, 'utf8');
      console.log(`  synced → ${path.relative(WEBSITE_ROOT, dest)}`);
      synced++;
    }
  }

  console.log(`\nLearning sync: ${synced} written, ${skipped} dry-run skipped`);
}

sync();
