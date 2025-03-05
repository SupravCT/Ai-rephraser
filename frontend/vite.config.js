import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  define: {
    
    'global.Buffer': 'globalThis.Buffer',
  },
  optimizeDeps: {
    include: ['buffer'], 
  },
  resolve: {
    alias: {
      'use-sync-external-store/shim/with-selector.js': 'use-sync-external-store/shim/with-selector.js',
    },
  },
});
