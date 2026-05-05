import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // CHANGED: Use "/" instead of "./" to ensure absolute asset paths
  base: "/", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    // Ensures local dev handles routing refreshes
    historyApiFallback: true,
  }
});