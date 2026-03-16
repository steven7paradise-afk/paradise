module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', '.next'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    es2022: true,
    node: true,
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['apps/web/**/*.{ts,tsx}'],
      extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier']
    }
  ]
};
