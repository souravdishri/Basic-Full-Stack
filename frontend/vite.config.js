import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
    '/api': 'http://localhost:3000',
    }
  },
  plugins: [react()],
})
//Like this change for production also

// "proxy" : "http://localhost:3000"  //In case of core react and include it in package.json file