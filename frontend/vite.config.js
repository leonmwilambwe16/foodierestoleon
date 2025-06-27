import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', 
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4005',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist', 
  },
})
