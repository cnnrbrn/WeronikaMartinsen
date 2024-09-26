import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // The output directory after the build, this is where Netlify will look.
    rollupOptions: {
      input: "./index.html", // Specify that the entry point is index.html in the root
    },
  },
  base: "/", // If deploying to a subfolder, adjust this, but "/" is fine for the root.
});
