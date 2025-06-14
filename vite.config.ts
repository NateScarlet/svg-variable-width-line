import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'demo',
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
