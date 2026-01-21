module.exports = {
  // Indicates this is the root ESLint configuration file
  root: true,

  // Define the environment for the code
  env: { browser: true, es2020: true },

  // Extend from recommended configurations for ESLint and React plugins
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  // Patterns to ignore during linting
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Parser options for ECMAScript version and module type
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  // Settings for React version detection
  settings: { react: { version: '18.2' } },

  // Additional plugins to use
  plugins: ['react-refresh'],

  // Custom rules configuration
  rules: {
    // Warn about exporting non-component items from component files
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
