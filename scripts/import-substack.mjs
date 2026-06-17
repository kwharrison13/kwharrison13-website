#!/usr/bin/env node
/**
 * Import Substack posts into the website essays collection.
 *
 * For each slug:
 *   1. Fetch https://investing101.substack.com/api/v1/posts/<slug> (full body_html).
 *   2. Parse body_html into a hast tree and walk it -> faithful markdown.
 *   3. Download every in-body image's full-resolution original (the S3 URL
 *      embedded in Substack's CDN fetch link) into public/images/<slug>-<hash>.<ext>.
 *   4. Write src/content/essays/<slug>.md with the project's frontmatter schema.
 *
 * The first image becomes the "Header image for <Title>" block, mirroring the
 * existing essays. The Wiki Connections aside is NOT added here — that is the
 * job of the wiki's add-essay-interconnections.py.
 *
 * Usage:
 *   node scripts/import-substack.mjs <slug> [<slug> ...]
 *   node scripts/import-substack.mjs --all          (reads /tmp/substack_urls.txt)
 *   node scripts/import-substack.mjs --dry-run <slug>
 *
 * Relies on hast-util-from-html etc., already present via Astro's deps.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { fromHtml } from 'hast-util-from-html';
import { toText } from 'hast-util-to-text';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ESSAYS_DIR = path.join(ROOT, 'src', 'content', 'essays');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const PUBLICATION = 'https://investing101.substack.com';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
let slugs = args.filter(a => !a.startsWith('--'));
if (args.includes('--all')) {
  slugs = fs.readFileSync('/tmp/substack_urls.txt', 'utf8')
    .split('\n').map(l => l.trim()).filter(Boolean)
    .map(u => u.split('/p/')[1]).filter(Boolean);
}
if (slugs.length === 0) {
  console.error('No slugs given. Pass slugs or --all.');
  process.exit(1);
}

// ---------- helpers ----------

const className = n => (n.properties && [].concat(n.properties.className || []).join(' ')) || '';

// Pull the original (full-res) image URL out of a Substack CDN fetch URL.
// e.g. https://substackcdn.com/image/fetch/$s_!x!,.../https%3A%2F%2F...s3...png
function originalImageUrl(url) {
  if (!url) return null;
  const i = url.indexOf('/https%3A');
  if (i !== -1) return decodeURIComponent(url.slice(i + 1));
  const j = url.indexOf('/http');
  if (j !== -1 && j !== url.indexOf('://')) {
    const tail = url.slice(j + 1);
    if (/^https?%3A/i.test(tail)) return decodeURIComponent(tail);
    if (/^https?:\/\//i.test(tail)) return tail;
  }
  return url; // already a plain URL
}

function extFromUrl(u) {
  const m = u.match(/\.(png|jpe?g|gif|webp)(?:$|\?)/i);
  return m ? '.' + m[1].toLowerCase().replace('jpeg', 'jpg') : '.png';
}

const imageJobs = []; // {origUrl, localPath, ref}
function planImage(slug, rawUrl) {
  const orig = originalImageUrl(rawUrl);
  if (!orig) return null;
  const hash = crypto.createHash('md5').update(orig).digest('hex').slice(0, 8);
  const ext = extFromUrl(orig);
  const file = `${slug}-${hash}${ext}`;
  const ref = `/images/${file}`;
  if (!imageJobs.find(j => j.ref === ref)) {
    imageJobs.push({ origUrl: orig, localPath: path.join(IMAGES_DIR, file), ref });
  }
  return ref;
}

// Find the best image URL inside a <figure>/image node (prefer the <a> href,
// fall back to <img src> or the largest srcSet entry).
function imageUrlFromNode(node) {
  let href = null, src = null, srcset = null;
  (function dig(n) {
    if (!n || n.type !== 'element') return;
    if (n.tagName === 'a' && n.properties?.href) href = href || n.properties.href;
    if (n.tagName === 'img' && n.properties?.src) src = src || n.properties.src;
    if (n.tagName === 'source' && n.properties?.srcSet) srcset = srcset || n.properties.srcSet;
    (n.children || []).forEach(dig);
  })(node);
  if (href) return href;
  if (src) return src;
  if (srcset) return srcset.split(',').pop().trim().split(/\s+/)[0];
  return null;
}

function figcaptionText(node) {
  let cap = '';
  (function dig(n) {
    if (!n || n.type !== 'element') return;
    if (n.tagName === 'figcaption') { cap = toText(n).trim(); return; }
    (n.children || []).forEach(dig);
  })(node);
  return cap;
}

// ---------- inline (phrasing) rendering ----------

function renderInline(node) {
  if (node.type === 'text') return node.value.replace(/\s+/g, ' ');
  if (node.type !== 'element') return '';
  const inner = () => (node.children || []).map(renderInline).join('');
  switch (node.tagName) {
    case 'strong': case 'b': { const t = inner(); return t.trim() ? `**${t}**` : t; }
    case 'em': case 'i': { const t = inner(); return t.trim() ? `*${t}*` : t; }
    case 'a': {
      const href = node.properties?.href || '';
      const t = inner();
      if (!href || href.startsWith('#')) return t;
      return `[${t}](${href})`;
    }
    case 'br': return '  \n';
    case 'code': return '`' + inner() + '`';
    default: return inner();
  }
}

// ---------- block rendering ----------

const SKIP_TEXT_PREFIXES = [
  'This is a free weekly newsletter',
  'Thanks for reading',
  'Subscribe now',
  'Share',
  'Leave a comment',
];

function isBoilerplate(node) {
  const cls = className(node);
  if (/subscription|subscribe|button-wrapper|footer|paywall|comments|share/i.test(cls)) return true;
  if (node.tagName === 'p' || node.tagName === 'div') {
    const t = toText(node).trim();
    if (SKIP_TEXT_PREFIXES.some(p => t.startsWith(p))) return true;
  }
  return false;
}

let firstImageRef = null;

// Returns an array of block-level markdown strings.
function renderBlocks(node) {
  if (node.type === 'text') {
    const t = node.value.replace(/\s+/g, ' ');
    return t.trim() ? [t.trim()] : [];
  }
  if (node.type !== 'element') return [];
  if (['button', 'svg'].includes(node.tagName)) return [];
  if (isBoilerplate(node)) return [];

  const tag = node.tagName;

  // Image container / figure
  if (tag === 'figure' || className(node).includes('captioned-image-container') ||
      (tag === 'div' && node.children?.some(c => c.type === 'element' && c.tagName === 'figure'))) {
    const url = imageUrlFromNode(node);
    if (!url) return [];
    const ref = planImage(CURRENT_SLUG, url);
    if (!ref) return [];
    const cap = figcaptionText(node);
    if (!firstImageRef) { firstImageRef = ref; return ['HEADER' + ref]; } // marker, handled later
    return [`![${cap}](${ref})`];
  }

  switch (tag) {
    case 'h1': return ['# ' + renderInlineChildren(node)];
    case 'h2': return ['## ' + renderInlineChildren(node)];
    case 'h3': return ['### ' + renderInlineChildren(node)];
    case 'h4': return ['#### ' + renderInlineChildren(node)];
    case 'p': {
      const t = renderInlineChildren(node).trim();
      return t ? [t] : [];
    }
    case 'hr': return []; // Substack hrs here are subscribe-widget chrome, not authored breaks
    case 'blockquote': {
      const inner = (node.children || []).flatMap(renderBlocks).filter(Boolean);
      const quoted = inner.join('\n\n').split('\n').map(l => l === '' ? '>' : '> ' + l).join('\n');
      return quoted.trim() ? [quoted] : [];
    }
    case 'ul': case 'ol': {
      const ordered = tag === 'ol';
      const items = (node.children || []).filter(c => c.type === 'element' && c.tagName === 'li');
      const lines = items.map((li, idx) => {
        const t = renderInlineChildren(li).trim();
        return (ordered ? `${idx + 1}. ` : '- ') + t;
      });
      return lines.length ? [lines.join('\n')] : [];
    }
    case 'div': case 'section': case 'article': {
      // structural wrapper -> recurse
      return (node.children || []).flatMap(renderBlocks);
    }
    default: {
      const t = renderInlineChildren(node).trim();
      return t ? [t] : [];
    }
  }
}

// For a block element, render its children as inline (phrasing) text,
// but if it contains nested block elements, fall through to block rendering.
function renderInlineChildren(node) {
  return (node.children || []).map(renderInline).join('').replace(/[ \t]+\n/g, '  \n').trim();
}

// ---------- frontmatter ----------

function yamlEscape(s) { return String(s).replace(/"/g, '\\"'); }

function buildFrontmatter(post) {
  const date = (post.post_date || '').slice(0, 10);
  const excerpt = (post.subtitle || '').trim();
  const lines = [
    '---',
    `title: "${yamlEscape(post.title)}"`,
    `date: ${date}`,
    `tags: ["essay"]`,
  ];
  if (excerpt) lines.push(`excerpt: "${yamlEscape(excerpt)}"`);
  lines.push(`slug: "${post.slug}"`);
  lines.push(`type: "${post.type || 'newsletter'}"`);
  lines.push(`substack_url: "${PUBLICATION}/p/${post.slug}"`);
  lines.push('---');
  return lines.join('\n');
}

// ---------- per-post ----------

let CURRENT_SLUG = null;

async function fetchPost(slug) {
  const res = await fetch(`${PUBLICATION}/api/v1/posts/${slug}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${slug}`);
  return res.json();
}

async function downloadImages() {
  for (const job of imageJobs) {
    if (fs.existsSync(job.localPath)) { continue; }
    const res = await fetch(job.origUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.warn(`  ! image ${res.status}: ${job.origUrl}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    if (!DRY) fs.writeFileSync(job.localPath, buf);
    console.log(`  img ${(buf.length / 1024).toFixed(0)}KB -> ${path.basename(job.localPath)}`);
  }
}

function assembleMarkdown(post, blocks) {
  // Pull the header marker out, place at top followed by ---
  let header = null;
  const body = [];
  for (const b of blocks) {
    if (b.startsWith('HEADER')) {
      const ref = b.slice('HEADER'.length);
      header = `![Header image for ${post.title}](${ref})`;
    } else {
      body.push(b);
    }
  }
  const parts = [];
  if (header) parts.push(header, '---');
  parts.push(...body);
  return parts.join('\n\n') + '\n';
}

async function processSlug(slug) {
  CURRENT_SLUG = slug;
  firstImageRef = null;
  // reset image jobs per-post so hashes/refs are scoped correctly
  imageJobs.length = 0;

  console.log(`\n=== ${slug} ===`);
  const post = await fetchPost(slug);
  const tree = fromHtml(post.body_html || '', { fragment: true });
  const blocks = (tree.children || []).flatMap(renderBlocks).filter(b => b && b.length);

  await downloadImages();

  const md = buildFrontmatter(post) + '\n\n' + assembleMarkdown(post, blocks);
  const outPath = path.join(ESSAYS_DIR, `${slug}.md`);
  if (DRY) {
    console.log(`  [dry-run] would write ${outPath} (${md.length} chars, ${imageJobs.length} imgs)`);
    fs.writeFileSync(`/tmp/preview-${slug}.md`, md);
    console.log(`  preview -> /tmp/preview-${slug}.md`);
  } else {
    fs.writeFileSync(outPath, md);
    console.log(`  wrote ${outPath} (${md.length} chars, ${imageJobs.length} imgs)`);
  }
}

for (const slug of slugs) {
  await processSlug(slug);
}
console.log('\nDone.');
