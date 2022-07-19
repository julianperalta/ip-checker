/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleNameMapper: {
  //   'react-leaflet': '<rootDir>/node_modules/react-leaflet/lib/index.js',
  // },
  transformIgnorePatterns: [
    "/node_modules/react-leaflet"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/react-leaflet"
  ]
};