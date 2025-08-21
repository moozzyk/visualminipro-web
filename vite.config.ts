import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base: "/<repo>/"
export default defineConfig({
  plugins: [react()],
  // base: "/visual-minipro-site/"
});
