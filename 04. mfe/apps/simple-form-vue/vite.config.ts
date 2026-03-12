import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/apps/simple-form-vue',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5001,
    cors: true,
  },
});
