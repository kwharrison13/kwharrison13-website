import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Remark plugin: strip rwid block-ref HTML comments at render time.
 *
 * The `<!--rwid:rwid-XXX-->` markers live in src/content/books markdown
 * for dedup in scripts/import-readwise.mjs. They render as visible text
 * in some markdown contexts, which we don't want on the public site.
 * This plugin walks the AST and clears any `html` node matching the pattern.
 */
function remarkStripRwid() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'html' && /<!--\s*rwid:/.test(node.value)) {
        node.value = '';
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://kwharrison13.com',
  integrations: [sitemap()],
  // Collapsed duplicate essays that the additive wiki→website sync left behind.
  // Each essay had a stale title-slugged file (old import-essays.py schema, image-poor)
  // alongside the canonical wiki-synced file (respects `website_slug`, has the images).
  // The canonical slug is authoritative; preserve the old URLs so inbound links survive.
  redirects: {
    '/essays/roam-investing': '/essays/networked-conviction-roam-investing',
    '/essays/the-productization-of-venture-capital': '/essays/productization',
    '/essays/whats-in-a-valuation': '/essays/valuations',
    '/essays/why-most-vcs-suck-at-talent': '/essays/talent',
    '/essays/i-love-the-taste-of-pain-in-the-morning': '/essays/pain',
    '/essays/renegade-spotlight-homebrew': '/essays/homebrew',
    '/essays/renegade-spotlight-lowercarbon': '/essays/lowercarbon',
  },
  markdown: {
    remarkPlugins: [remarkStripRwid],
  },
});
