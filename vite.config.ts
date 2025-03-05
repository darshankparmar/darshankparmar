
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/darshankparmar/", // Add this line for GitHub Pages compatibility
  build: {
    outDir: 'dist', // This should match your workflow
  },
  plugins: [react()].filter(Boolean)
}));
