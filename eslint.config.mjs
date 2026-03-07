// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";

export default withNuxt(
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
          js: "espree",
          "<template>": "espree",
        },
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "vue/html-indent": ["error", 2],
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
      "vue/no-multiple-template-root": "off",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "never"],
      "no-unused-vars": "off",
    },
    ignores: ["eslint.config.mjs"],
  },
  eslintConfigPrettier,
);
