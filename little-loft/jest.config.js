/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/app/$1",
  },
  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text"],
};
