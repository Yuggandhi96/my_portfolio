import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Option 1: Increase warning limit
    chunkSizeWarningLimit: 1000,

    // Option 2: Better chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          external: ['three']

        },
      },
    },
  },
});
