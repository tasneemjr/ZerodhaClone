import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    },
    include: ['src/**/*.js']
  }, // Allow JSX in .js files during dependency scanning and build
  // Place Vite cache outside OneDrive to avoid Windows/OneDrive file locks (EPERM)
  cacheDir: path.resolve(os.tmpdir(), 'vite_cache_zerodha_dashboard')
})
