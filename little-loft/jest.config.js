// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'jest-preset-angular',
//   setupFilesAfterEnv: ['./src/setup-jest.ts'],
//   testMatch: ['**/+(*.)+(spec).+(ts)'],
//   transform: {
//     '^.+\\.(ts|js)$': 'jest-preset-angular',
//   },
//   moduleNameMapper: {
//     '^@app/(.*)$': '<rootDir>/src/app/$1',
//     '^@env/(.*)$': '<rootDir>/environments/$1',
//   },
//   collectCoverage: true,
//   coverageReporters: ['html', 'lcov', 'text'],
//   rootDir: './',
// };

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
  },
  rootDir: './',
};
