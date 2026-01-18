import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  // Explicitly set public directory
  publicDir: 'public',
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion/react'],
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-accordion',
            '@radix-ui/react-select',
            '@radix-ui/react-label',
          ],
        },
      },
    },
    // Minification - esbuild is faster than terser
    minify: 'esbuild',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps disabled for production
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'esnext',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion/react'],
  },
})
