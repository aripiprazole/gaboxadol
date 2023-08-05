module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'google',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'require-jsdoc': ['off'],
    'react/prop-types': ['off'],
    'spaced-comment': ['off'],
    'prettier/prettier': ['error', {}, {usePrettierrc: true}],
    'react/no-children-prop': ['off'],
    'indent': ['off'],
    'quotes': ['off'],
    'max-len': ['off'],
    'operator-linebreak': [
      'error',
      'after',
      {overrides: {'?': 'before', ':': 'before'}},
    ],
  },
}
