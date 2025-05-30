import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/books': {
        target: 'http://localhost:5555',
        changeOrigin: true,
      },
    },
  },
});
