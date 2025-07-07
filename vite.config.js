import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  test: {
    environment: 'jsdom',   // browser-like DOM
    globals: true,          // use `describe/it/expect` without imports
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'html']
    }
  }
})