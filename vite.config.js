import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Removed broken Tailwind Vite plugin - use PostCSS
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
