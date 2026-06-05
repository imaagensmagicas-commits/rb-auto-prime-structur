import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstack: {
    start: {
      ssr: false
    }
  },
  build: {
    outDir: "dist",
  },
});
