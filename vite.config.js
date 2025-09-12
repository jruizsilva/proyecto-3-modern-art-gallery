import { defineConfig } from "vite";

export default defineConfig({
  base: "/proyecto-3-modern-art-gallery",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        location: "./location.html",
      },
    },
  },
});
