import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Go-Digital-24x7/',
  plugins: [react(), tailwindcss()]
});
