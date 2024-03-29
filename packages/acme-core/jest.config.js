module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  modulePaths: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
};
