import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths — required so the built app works when Electron
  // loads dist/index.html via the file:// protocol (absolute "/assets/..."
  // paths resolve to the OS root there, not the app folder).
  base: './',
  plugins: [react()],
})
