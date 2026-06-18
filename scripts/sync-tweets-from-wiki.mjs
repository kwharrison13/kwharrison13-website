#!/usr/bin/env node
/**
 * Wiki tweets → portfolio-ideas.json "feed" arrays.
 *
 * The wiki is the single source of truth for saved tweets. Each page in
 * ~/kwharrison13-wiki/wiki/tweets/ is one tweet (publish: true by default).
 *
 * VISIBILITY GATE: a tweet shows on the website ONLY if its frontmatter
 * `portfolio_ideas:` lists one or more portfolio-idea slugs (the taxonomy:
 * capital-allocation, city-building, …). For each such slug, the tweet is
 * injected into that idea's `feed` array, where the "Latest Saved" / Feed tab
 * renders it (src/pages/portfolio/[slug].astro). A tweet connected only to
 * concepts (empty portfolio_ideas) stays wiki-only and never appears here.
 *
 * This script OWNS every idea's `feed` array — it rebuilds them from scratch on
 * each run (any non-tweet feed items would be dropped; the feed is tweets-only
 * by design). Everything else in portfolio-ideas.json (essays, books, projects,
 * descriptions) is left untouched.
 *
 * The full tweet text is lifted verbatim from the page body, from the `## Tweet`
 * heading up to the next `##` heading. Screenshots come from frontmatter `media`,
 * one flat string per image: "image|/images/tweets/<file>|<alt text>".
 *
 * Usage:
 *   node scripts/sync-tweets-from-wiki.mjs              # rebuild feeds, write JSON
 *   node scripts/sync-tweets-from-wiki.mjs --dry-run    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEBSITE_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = path.join(os.homedir(), 'kwharrison13-wiki');
const TWEETS_DIR = path.join(WIKI_ROOT, 'wiki', 'tweets');
const IDEAS_JSON = path.join(WEBSITE_ROOT, 'src', 'data', 'portfolio-ideas.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

// Hand-rolled frontmatter parser, matching the other sync scripts (handles
// scalars, inline arrays, and block lists of strings).
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
    else fm[k] = v.replace(/^['"]|['"]$/g, '');
  }
  return { frontmatter: fm, body: m[2] };
}

// Lift the verbatim tweet text from the `## Tweet` section up to the next heading.
function extractTweetText(body) {
  const m = body.match(/^##\s+Tweet\s*\r?\n([\s\S]*?)(?:\r?\n##\s|\s*$)/m);
  return m ? m[1].trim() : '';
}

// "image|/images/tweets/x.jpg|alt text" → { kind, src, alt }
function parseMedia(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const entry of list) {
    const idx1 = entry.indexOf('|');
    if (idx1 < 0) continue;
    const idx2 = entry.indexOf('|', idx1 + 1);
    const kind = entry.slice(0, idx1).trim() || 'image';
    const src = (idx2 < 0 ? entry.slice(idx1 + 1) : entry.slice(idx1 + 1, idx2)).trim();
    const alt = idx2 < 0 ? '' : entry.slice(idx2 + 1).trim();
    if (src) out.push({ kind, src, alt });
  }
  return out;
}

function main() {
  if (!fs.existsSync(TWEETS_DIR)) {
    console.log('No wiki/tweets/ directory — nothing to sync.');
    return;
  }

  const ideas = JSON.parse(fs.readFileSync(IDEAS_JSON, 'utf8'));
  const validIdeas = new Set(ideas.map((i) => i.id));
  const byIdea = new Map(); // idea id → [{ item, sortKey }]
  let tweetCount = 0;
  let wikiOnly = 0;
  const warnings = [];

  for (const f of fs.readdirSync(TWEETS_DIR)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    const { frontmatter: fm, body } = parseFrontmatter(fs.readFileSync(path.join(TWEETS_DIR, f), 'utf8'));
    const content = extractTweetText(body);
    if (!content) { warnings.push(`${f}: no "## Tweet" text found — skipped`); continue; }
    if (!fm.url) { warnings.push(`${f}: missing url — skipped`); continue; }

    const item = {
      type: 'tweet',
      source: fm.handle || fm.author || '',
      author: fm.author || '',
      handle: fm.handle || '',
      date: fm.tweet_date || '',
      content,
      url: fm.url,
    };
    const media = parseMedia(fm.media);
    if (media.length) item.media = media;

    const ideaSlugs = Array.isArray(fm.portfolio_ideas) ? fm.portfolio_ideas : [];
    if (ideaSlugs.length === 0) { wikiOnly++; continue; } // concept-only → never on site
    tweetCount++;

    for (const slug of ideaSlugs) {
      if (!validIdeas.has(slug)) { warnings.push(`${f}: unknown portfolio idea "${slug}"`); continue; }
      if (!byIdea.has(slug)) byIdea.set(slug, []);
      // sortKey: tweet date descending ("Latest Saved")
      byIdea.get(slug).push({ item, sortKey: Date.parse(fm.tweet_date) || 0 });
    }
  }

  // Rebuild each idea's feed (tweets-only, newest first).
  let touched = 0;
  for (const idea of ideas) {
    const entries = byIdea.get(idea.id) || [];
    entries.sort((a, b) => b.sortKey - a.sortKey);
    const newFeed = entries.map((e) => e.item);
    const before = JSON.stringify(idea.feed || []);
    if (JSON.stringify(newFeed) !== before) touched++;
    idea.feed = newFeed;
  }

  console.log(
    `${dryRun ? '[dry-run] ' : ''}${tweetCount} tweet→idea links across ${byIdea.size} ideas; ` +
    `${wikiOnly} wiki-only tweet(s) hidden; ${touched} idea feed(s) ${dryRun ? 'would change' : 'updated'}.`
  );
  for (const w of warnings) console.log(`  ⚠ ${w}`);

  if (!dryRun) {
    // Escape non-ASCII back to \uXXXX to match the file's original style, so the
    // diff is confined to the feed arrays and never touches the hand-curated
    // descriptions/projects (which were already \u-escaped).
    const json = JSON.stringify(ideas, null, 2).replace(/[^\x00-\x7F]/g, (c) =>
      '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')
    );
    fs.writeFileSync(IDEAS_JSON, json + '\n');
  }
}

main();
