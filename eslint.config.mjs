// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
    // Your custom configs here
    {
        rules: {
            "vue/html-indent": ["error", 4],
            "vue/multi-word-component-names": "off",
            "vue/max-attributes-per-line": [
                "error",
                {
                    singleline: {
                        max: 3,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
            "vue/singleline-html-element-content-newline": "off",
            "vue/multiline-html-element-content-newline": "off",
            "vue/component-definition-name-casing": ["error", "PascalCase"],
            "vue/no-v-html": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            semi: ["error", "always"],
            quotes: ["error", "single"],
            indent: ["error", 4],
            "comma-dangle": ["error", "never"],
        },
        ignores: ["eslint.config.mjs"],
    },
    eslintConfigPrettier,
);
