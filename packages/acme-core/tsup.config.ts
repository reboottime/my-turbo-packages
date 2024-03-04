import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "index": "src/index.tsx",
    "button": "src/Button.tsx",
    "input": "src/Input.tsx",
  },
  banner: {
    js: "'use client'",
  },
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  minify: true,
  clean: true,
  platform: 'browser',
});
