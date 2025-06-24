import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (e.g., 'development' or 'production')
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/books': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
