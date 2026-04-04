import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kwharrison13.com',
  integrations: [sitemap()],
});
