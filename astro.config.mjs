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
  // Canonical host is www (apex 307-redirects to www). Using the apex here made
  // the generated sitemap advertise non-canonical URLs that all redirect.
  site: 'https://www.kwharrison13.com',
  integrations: [sitemap()],
  // Collapsed duplicate essays that the additive wiki→website sync left behind.
  // Each essay had a stale title-slugged file (old import-essays.py schema, image-poor)
  // alongside the canonical wiki-synced file (respects `website_slug`, has the images).
  // The canonical slug is authoritative; preserve the old URLs so inbound links survive.
  redirects: {
    // Long-Forms section renamed to Long Reads; preserve the old listing URL.
    '/articles': '/long-reads',
    '/essays/roam-investing': '/essays/networked-conviction-roam-investing',
    '/essays/the-productization-of-venture-capital': '/essays/productization',
    '/essays/whats-in-a-valuation': '/essays/valuations',
    '/essays/why-most-vcs-suck-at-talent': '/essays/talent',
    '/essays/i-love-the-taste-of-pain-in-the-morning': '/essays/pain',
    '/essays/renegade-spotlight-homebrew': '/essays/homebrew',
    '/essays/renegade-spotlight-lowercarbon': '/essays/lowercarbon',
    // Book retitled "Benjamin Franklin" → "Benjamin Franklin: An American Life"
    // (disambiguated from the person page); preserve the old book URL.
    '/books/benjamin-franklin': '/books/benjamin-franklin-an-american-life',
    // Book retitled "Howard W. Hunter" → "Howard W. Hunter by Eleanor Knowles"
    // (disambiguated from the person page, and reconnects the synced highlights);
    // preserve the old book URL that was previously indexed.
    '/books/howard-w-hunter': '/books/howard-w-hunter-by-eleanor-knowles',
    // "The Navalmanack" is the informal name for "The Almanack of Naval Ravikant"
    // (the catalog title / canonical /books slug); a dup stub page was deleted.
    '/books/the-navalmanack': '/books/the-almanack-of-naval-ravikant',
  },
  markdown: {
    remarkPlugins: [remarkStripRwid],
  },
});
