import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Keep same as CRA for gh-pages
  },
  base: "/rations/",
  server: {
    port: 3000,
  },
});