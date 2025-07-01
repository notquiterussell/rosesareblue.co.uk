import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        files: ["src/**/*.{ts,tsx}", "./eslint.config.mjs",],


        plugins: {
            "@typescript-eslint": tsPlugin,
            '@stylistic': stylistic,
        },

        languageOptions: {
            parser: tsParser,

            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            "comma-dangle": ["error", {
                arrays: "always",
                objects: "always",
                imports: "always",
                exports: "always",
                functions: "always",
            },],
            '@stylistic/semi': 'error',
            "@stylistic/no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 0,},],
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@stylistic/member-delimiter-style": ["error", {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true,
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false,
                },
                "multilineDetection": "brackets",
            },],
        },
    },
];