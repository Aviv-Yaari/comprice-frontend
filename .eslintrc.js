module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  ignorePatterns: [
    'react-app-env.d.ts',
    'reportWebVitals.ts'
  ],
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 1
  }
// eslint-disable-next-line semi
};
