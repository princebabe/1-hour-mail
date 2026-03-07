import { defineConfig } from 'vite';

export default defineConfig({
  // Use the repo sub-path as base when building for GitHub Pages.
  // Locally (dev server) we keep '/' so localhost:5173 works as-is.
  base: process.env.GITHUB_ACTIONS ? '/1-hour-mail/' : '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
