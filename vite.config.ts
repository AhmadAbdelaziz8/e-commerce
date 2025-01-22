import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Optional: if using SVGs as icons
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Add parentheses to invoke as function
        autoprefixer(), // Add parentheses here too
      ],
    },
  },
  resolve: {
    alias: {
      // Add any necessary aliases here
      "@": "/src",
    },
  },
});
