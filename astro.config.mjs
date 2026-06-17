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
  // Collapsed the duplicate "Networked Conviction" essay (was published at both
  // /essays/roam-investing and /essays/networked-conviction-roam-investing).
  // The full-title slug is canonical; preserve the old URL so inbound links survive.
  redirects: {
    '/essays/roam-investing': '/essays/networked-conviction-roam-investing',
  },
  markdown: {
    remarkPlugins: [remarkStripRwid],
  },
});
