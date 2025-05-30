import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...jest.environments.globals.globals
      }
    },
    plugins: {
      jest
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    },
    ignores: ['**/eslint.config.js', '**/.eslintrc.js', '**/.eslintignore', '**/tests/**', '**/*.json']
  }
];
