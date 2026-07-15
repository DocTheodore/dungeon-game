import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3100,
    host: true,
  }
});