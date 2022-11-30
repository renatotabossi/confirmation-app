module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        es6: true,
        node: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "prettier",
        "standard-with-typescript",
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./server/tsconfig.json"]
    },
    rules: {
        "dot-notation": 0,
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            "checksVoidReturn": false
          }
        ],
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/unbound-method": 0,
        "import/extensions": [
            "error",
            "never",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      }
}
