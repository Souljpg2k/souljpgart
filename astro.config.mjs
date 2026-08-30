// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Souljpg2k.github.io',
  base: '/souljpgart',
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});