// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Foundation config — change-controlled (see CLAUDE.md §4). Frozen ≠ read-only.
export default defineConfig({
  site: 'https://thedronebrothers.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
