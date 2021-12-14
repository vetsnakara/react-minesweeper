module.exports = {
    // Specifies TypeScript parser as ESLint parser
    parser: "@typescript-eslint/parser",

    parserOptions: {},

    env: {
        browser: true,
        node: true,
        es2021: true,
    },

    extends: [
        // Basic ESLint rules
        "eslint:recommended",
        // Rules for React
        "plugin:react/recommended",
        // Rules for React Hooks
        "plugin:react-hooks/recommended",
        // Rules for TypeScript
        "plugin:@typescript-eslint/recommended",
        // eslint-config-prettier: turns off ESLint rules that conflict with Prettier formatting rules (implicit and explicit in .prettierrc)
        // eslint-plugin-prettier: Prettier rules (implicit and explicit in .prettierrc) are used as ESLint rules
        // Using ESLint with `--fix` option runs Prettier under the hood to format code according its rules
        // Should be the last config in extends array
        "plugin:prettier/recommended",
    ],

    plugins: [],

    rules: {},

    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect",
        },
    },
};
