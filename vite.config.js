import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/3d-model-viewer/';
  return {
    base,
  };
});
