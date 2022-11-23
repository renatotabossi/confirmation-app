module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        es6: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
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
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
    },
    rules: {
        "dot-notation": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },
};
