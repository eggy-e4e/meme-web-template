import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://example.pump.fun',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
