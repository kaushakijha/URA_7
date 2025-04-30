import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port : 5173},

  build: {
    outDir: 'dist', // Output directory for the build files
    emptyOutDir: true, // Clean the output directory before building
  },
})
