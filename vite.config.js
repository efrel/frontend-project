import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// import ViteTailwindCSS from 'vite-plugin-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
});
