import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // or '0.0.0.0'
    port: 5173, // Optional: default is 5173
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-utils': ['gl-matrix', 'lucide-react']
        }
      }
    },
    // Generate sub-500kb chunks safely without warnings
    chunkSizeWarningLimit: 600,
  },
  assetsInclude: ['**/*.glb'],
});
