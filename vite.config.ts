import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "../e-commerce/", // Set this to your subpath if needed (e.g., '/my-app/')
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
