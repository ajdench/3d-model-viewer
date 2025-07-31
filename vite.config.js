import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3d-model-viewer/',
  build: {
    chunkSizeWarningLimit: 1000, // Set warning limit to 1000 kB
  },
});
