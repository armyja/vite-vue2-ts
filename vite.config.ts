import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      public: path.resolve(__dirname, "./public"),
    },
  },
});
