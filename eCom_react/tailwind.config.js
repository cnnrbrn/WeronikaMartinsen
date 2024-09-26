import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This is the folder where your site will be built
    rollupOptions: {
      input: "./index.html", // Tell Vite where the entry HTML file is (root in your case)
    },
  },
  base: "/", // If deploying to the root domain, keep this as "/"
});
