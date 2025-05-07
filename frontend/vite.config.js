import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // This allows access from external URLs like ngrok
    port: 5173,
    allowedHosts: ['85f8-49-47-219-149.ngrok-free.app']    // Optional: you can change this if needed
  }
})
