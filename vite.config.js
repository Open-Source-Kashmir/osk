import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  // Vercel serves the app at the domain root by default.
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
