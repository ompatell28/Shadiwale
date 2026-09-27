import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Case-mismatch fixer: ભલે કોડમાં .png લખ્યું હોય કે .PNG, આ ફાઈલ શોધી લેશે
      { find: /^(.+)\.png$/, replacement: '$1.PNG' },
    ],
  },
});