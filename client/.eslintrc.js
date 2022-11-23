module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    "extends": [
      'react-app',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: { 
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: 'module'
    },
    plugins: ['react', 'import', 'jsx-a11y'],
    rules: {
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx']
        }
      ],
      'import/extensions': [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      "import/no-extraneous-dependencies" : ["error", {"devDependencies": true}],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {}
      },
      react: {
        version: "detect"
      }
    }
  };