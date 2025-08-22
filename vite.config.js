import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vending-machine-website/', // Add base for GitHub Pages
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})
