import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://arunsetty.github.io',
  integrations: [
    react(),
    mdx(),
  ],
});
