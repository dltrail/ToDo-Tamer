import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // Enables global imports for test functions
    environment: 'jsdom', // Simulates a browser environment
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '/'),
    },
  },
});
