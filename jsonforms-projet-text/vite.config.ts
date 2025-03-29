import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Configuration pour le déploiement sur GitHub Pages
  base: '/form-projet-vite/', 

  plugins: [react()],

  build: {
    outDir: 'dist', 
  },
});
