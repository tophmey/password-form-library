import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "lib"),
    },
  },
  root: "demo",
  publicDir: path.resolve(__dirname, "demo/public"),
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "AWeberPass",
      fileName: "aweber-pass",
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
