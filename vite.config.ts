import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Base URL configuration for GitHub Pages
  // In development, base URL is '/'
  // In production, use the repository name as the base URL: '/<repo-name>/'
  // base: process.env.NODE_ENV === 'production' ? '/gurmukhi-word-games/' : '/',
  base: '/', //published to apex of a subdomain gurmukhi.har-rai.uk
})
