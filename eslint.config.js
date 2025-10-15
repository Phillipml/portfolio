import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  {
    ignores: [
      "dist/**/*",
      ".next/**/*",
      ".storybook/**/*",
      "playwright.config.ts",
      ".jest/**/*",
      "**/*.test.tsx",
      "**/*.stories.tsx"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off', // Allow triple slash references in Next.js env file
    }
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': 'error',
      'import/no-extraneous-dependencies': 'off', // Disable for Next.js projects
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];