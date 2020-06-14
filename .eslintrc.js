module.exports = {
  'env': {
    'browser': true,
    'es2020': true
  },
  'extends': 'airbnb',
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      },
      'ecmaVersion': 11,
      'sourceType': 'module'
  },
  'plugins': [
      'react',
      '@typescript-eslint'
  ],
  'rules': {
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'eol-last': ['error', 'never'],
    'no-shadow': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-return-await': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
  }
};
