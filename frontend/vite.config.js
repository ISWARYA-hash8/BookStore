import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/books': {
        target: `${process.env.REACT_APP_BACKEND_URL}`,
        changeOrigin: true,
      },
    },
  },
});
