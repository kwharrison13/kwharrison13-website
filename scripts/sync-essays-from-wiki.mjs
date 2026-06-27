#!/usr/bin/env node
/**
 * Wiki essays → src/content/essays sync (wiki is the source of truth).
 *
 * The wiki (`~/kwharrison13-wiki/wiki/essays/*.md`) is now canonical for essays.
 * This script regenerates each website essay file from its wiki counterpart:
 *
 *   - Maps wiki frontmatter → the website essay schema (title, date, tags,
 *     excerpt, slug, type, substack_url), matching the existing on-disk format so
 *     unchanged essays produce a zero-byte diff.
 *   - Body is the wiki essay body verbatim, MINUS the Connections block (between
 *     `<!-- connections-start -->` / `<!-- connections-end -->`). The website's
 *     Connections aside is owned by add-essay-interconnections.py and is preserved
 *     here (re-prepended) so a standalone run doesn't drop it; publish.sh refreshes
 *     it right after.
 *   - Essay bodies are written verbatim (NOT run through the wikilink resolver), to
 *     match current behavior and avoid mangling literal Roam `[[ ]]` syntax that is
 *     intentionally wrapped in inline code.
 *
 * This REPLACES the old website→wiki direction (scripts/import-essays.py), which is
 * now a one-time bootstrap only. Do not run import-essays.py in the normal flow or
 * it will clobber wiki-side edits.
 *
 * Usage:
 *   node scripts/sync-essays-from-wiki.mjs              # full sync
 *   node scripts/sync-essays-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ESSAYS = path.join(os.homedir(), 'kwharrison13-wiki', 'wiki', 'essays');
const WEBSITE_ESSAYS = path.join(WEBSITE_ROOT, 'src', 'content', 'essays');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

const CONN_RE = /<!-- connections-start -->[\s\S]*?<!-- connections-end -->\s*/;

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Unwrap a scalar YAML value, properly unescaping double-quoted strings so the
// in-memory value is the true text (e.g. `"\"Biology\""` → `"Biology"`). Without
// this, escaped quotes survive into quote() and get double-escaped.
function unquote(v) {
  v = v.trim();
  if (v.length >= 2 && v[0] === '"' && v[v.length - 1] === '"') {
    return v.slice(1, -1).replace(/\\(["\\])/g, '$1');
  }
  if (v.length >= 2 && v[0] === "'" && v[v.length - 1] === "'") {
    return v.slice(1, -1).replace(/''/g, "'");
  }
  return v;
}

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
      if (!Array.isArray(fm[curKey])) fm[curKey] = [];
      fm[curKey].push(unquote(listMatch[1]));
      continue;
    }
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!kv) { curKey = null; continue; }
    const k = kv[1]; let v = kv[2];
    curKey = k;
    if (v === '') { fm[k] = []; continue; }
    if (v.startsWith('[') && v.endsWith(']')) {
      const inner = v.slice(1, -1).trim();
      fm[k] = inner === '' ? [] : inner.split(',').map((s) => unquote(s));
      continue;
    }
    fm[k] = unquote(v);
  }
  return { frontmatter: fm, body: m[2] };
}

function quote(s) {
  return `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

// Serialize to the website essay schema, in the exact field order/format the
// existing files use, so unchanged essays don't churn.
function serializeFrontmatter(fm) {
  const lines = ['---'];
  lines.push(`title: ${quote(fm.title)}`);
  lines.push(`date: ${fm.date}`); // unquoted ISO date, matches on-disk convention
  if (Array.isArray(fm.tags) && fm.tags.length) {
    lines.push(`tags: [${fm.tags.map(quote).join(', ')}]`);
  }
  if (fm.excerpt) lines.push(`excerpt: ${quote(fm.excerpt)}`);
  if (fm.slug) lines.push(`slug: ${quote(fm.slug)}`);
  if (fm.type) lines.push(`type: ${quote(fm.type)}`);
  if (fm.substack_url) lines.push(`substack_url: ${quote(fm.substack_url)}`);
  lines.push('---');
  return lines.join('\n');
}

function syncOne(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { frontmatter: wfm, body: wbody } = parseFrontmatter(raw);
  const title = wfm.title || path.basename(filePath, '.md');
  const slug = wfm.website_slug || slugify(title);

  // Publish gate: an essay goes public ONLY when explicitly `publish: true`. A
  // draft / under-construction essay (publish: false, or the field absent) is
  // NEVER synced — and if a website copy already exists, it is pruned, so flipping
  // an essay back to private actually takes it down off the live site. (Drafts can
  // therefore safely live in wiki/essays/ with publish:false; wiki/essays-research/
  // is a separate dir that never reaches this script at all.)
  const isPublic = String(wfm.publish).toLowerCase() === 'true';
  if (!isPublic) {
    const target = slug ? path.join(WEBSITE_ESSAYS, `${slug}.md`) : null;
    let removed = false;
    if (target && fs.existsSync(target)) {
      if (!dryRun) fs.rmSync(target);
      removed = true;
    }
    return { private: true, slug, removed, file: path.basename(filePath) };
  }

  const date = wfm.date_published || wfm.date || wfm.created;
  if (!slug) return { skipped: true, reason: 'empty slug', file: path.basename(filePath) };
  if (!date) return { skipped: true, reason: 'no date', file: path.basename(filePath) };

  const webFm = {
    title,
    date,
    tags: Array.isArray(wfm.tags) ? wfm.tags : (wfm.tags ? [wfm.tags] : []),
    excerpt: wfm.excerpt || '',
    slug,
    type: wfm.post_type || '',
    substack_url: wfm.substack_url || '',
  };

  // essay content = wiki body minus the Connections block
  const content = wbody.replace(CONN_RE, '').trim();

  // preserve the existing website Connections aside (owned by interconnections script)
  const target = path.join(WEBSITE_ESSAYS, `${slug}.md`);
  let aside = '';
  if (fs.existsSync(target)) {
    const cur = fs.readFileSync(target, 'utf8');
    const m = cur.match(/<!-- connections-start -->[\s\S]*?<!-- connections-end -->/);
    if (m) aside = m[0] + '\n\n';
  }

  const out = serializeFrontmatter(webFm) + '\n\n' + aside + content + '\n';

  if (fs.existsSync(target) && fs.readFileSync(target, 'utf8') === out) {
    return { unchanged: true, slug };
  }
  if (dryRun) return { wrote: false, slug, target };
  fs.mkdirSync(WEBSITE_ESSAYS, { recursive: true });
  fs.writeFileSync(target, out);
  return { wrote: true, slug };
}

function main() {
  if (!fs.existsSync(WIKI_ESSAYS)) {
    console.error(`error: wiki essays dir not found: ${WIKI_ESSAYS}`);
    process.exit(1);
  }
  let wrote = 0, unchanged = 0, skipped = [];
  const seen = new Map();
  const collisions = [];
  for (const f of fs.readdirSync(WIKI_ESSAYS)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const r = syncOne(path.join(WIKI_ESSAYS, f));
    if (r.skipped) { skipped.push(`${r.file} (${r.reason})`); continue; }
    if (seen.has(r.slug)) collisions.push(`${r.slug}  <- ${f} & ${seen.get(r.slug)}`);
    else seen.set(r.slug, f);
    if (r.unchanged) unchanged++;
    else wrote++;
  }
  console.log(
    `${dryRun ? '[dry-run] ' : ''}essays: ${wrote} ${dryRun ? 'would write' : 'written'}, ${unchanged} unchanged, ${skipped.length} skipped`,
  );
  if (skipped.length) for (const s of skipped.slice(0, 20)) console.log(`  skip: ${s}`);
  if (collisions.length) {
    console.log(`\nslug collisions: ${collisions.length}`);
    for (const c of collisions.slice(0, 20)) console.log(`  - ${c}`);
  }

  // Orphan warning: this sync only WRITES files — it never prunes. If an essay's
  // website_slug changes (or is newly added), the old title-slugged file is left
  // behind and the site serves two URLs for one essay (image-poor stale copy +
  // canonical). Flag any website essay file whose slug no wiki essay produces, so
  // the orphan gets a redirect (astro.config.mjs) and is deleted before it ships.
  if (fs.existsSync(WEBSITE_ESSAYS)) {
    const orphans = [];
    for (const f of fs.readdirSync(WEBSITE_ESSAYS)) {
      if (!f.endsWith('.md') || f.startsWith('.')) continue;
      const { frontmatter } = parseFrontmatter(fs.readFileSync(path.join(WEBSITE_ESSAYS, f), 'utf8'));
      const slug = frontmatter.slug || path.basename(f, '.md');
      if (!seen.has(slug)) orphans.push(`${f} (slug: ${slug})`);
    }
    if (orphans.length) {
      console.log(`\n⚠️  orphan website essays (no wiki source — stale dupes or website-only): ${orphans.length}`);
      for (const o of orphans) console.log(`  - ${o}`);
      console.log('  → add a redirect in astro.config.mjs and `git rm` the file, or restore it to the wiki.');
    }
  }
}

main();
