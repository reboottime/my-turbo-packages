module.exports = {
  root: true,
  extends: ["@katenpm2021/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
  ignorePatterns: ["*.spec.tsx", "*.test.tsx", "*.spec.ts", "*.test.ts"],
};
