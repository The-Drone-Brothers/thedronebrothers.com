// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Foundation config — change-controlled (see CLAUDE.md §4). Frozen ≠ read-only.
export default defineConfig({
  site: 'https://thedronebrothers.com',
  output: 'static',
  integrations: [
    sitemap({
      // Keep noindex/internal pages out of the sitemap.
      filter: (page) =>
        !page.includes('/styleguide') && !page.includes('/search') && !page.includes('__example'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
