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
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    rules: {
        "dot-notation": 0,
    },
};
