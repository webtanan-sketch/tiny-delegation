import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/module/index.ts',
      formats: ['es'],
      fileName: () => 'tiny-delegation.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'lucide-react'],
    },
    cssCodeSplit: false,
    outDir: 'dist-module',
    emptyOutDir: true,
  },
});
