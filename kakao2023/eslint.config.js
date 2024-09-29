import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-curly-brace-presence': 'error',
      'no-return-await': 'warn',
      'no-case-declarations': 'off',
      'prefer-const': 'error',
      'prettier/prettier': [
        'error',
        {
          parser: 'typescript',
          singleQuote: true,
          printWidth: 120,
          tabWidth: 2,
          trailingComma: 'all',
          bracketSpacing: true,
          semi: true,
          useTabs: false,
          arrowParens: 'avoid',
          endOfLine: 'auto',
        },
      ],
    },
  },
);
