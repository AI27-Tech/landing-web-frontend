import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    // La landing se sirve estatica desde un CDN. El bundle es pequena, pero
    // conviene partir los SVG pesados del Hero del JS en vez de meterlos dentro.
    assetsInlineLimit: 4096,
  },
});
