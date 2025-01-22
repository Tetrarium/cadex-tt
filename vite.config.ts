import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    emptyOutDir: true,
    outDir: './dist',
  },
  server: {
    open: true,
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    }
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src'),
      }
    ]
  }
});
