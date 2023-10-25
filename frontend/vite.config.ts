import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://yrq7dy-3001.csb.app/',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
});
