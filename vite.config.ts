import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Plugin to copy index.html to 404.html for GitHub Pages SPA support
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.join(distPath, 'index.html');
    const notFoundPath = path.join(distPath, '404.html');
    
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('✅ Created 404.html for GitHub Pages SPA routing');
    }
  },
});

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/futsal-league/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


