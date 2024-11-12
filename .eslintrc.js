module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression']
      }
    ],
    'event-handler-timeout': [
      'error',
      {
        'on': true,
        'timeout': 10000
      }
    ]
  },
  settings: {
    react: { version: 'detect' }
  },
  env: {
    browser: true,
    es2021: true
  }
};
