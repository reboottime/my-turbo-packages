module.exports = {
  root: true,
  extends: ["@reboot/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["*.spec.tsx", "*.test.tsx", "*.spec.ts", "*.test.ts"],
};
