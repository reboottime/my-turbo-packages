import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "index": "src/index.tsx",
    "button": "src/button.tsx",
    "input": "src/input.tsx",
  },
  banner: {
    js: "'use client'",
  },
  format: ["cjs", "esm"],
  target: "es5",
  treeshake: true,
  external: ["react"],
  // generate types (.d.ts files)
  dts: true,
  // minify .js files
  minify: true,
  // clean dist folder before building
  clean: true,
  platform: 'browser',
});
