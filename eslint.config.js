import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "src/tests",
      "node_modules",
      "build",
      "dist-ssr",
      ".vscode",
      "public",
      "*.test.js",
      "*.test.jsx",
      "*.test.ts",
      "*.test.tsx",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          usePrettierrc: true,
        },
      ],
      "no-nested-ternary": "error",
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: ["default", "then"],
        },
      ],
      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message:
            "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message:
            "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
        "addEventListener",
        "blur",
        "close",
        "closed",
        "confirm",
        "defaultStatus",
        "defaultstatus",
        "event",
        "external",
        "find",
        "focus",
        "frameElement",
        "frames",
        "history",
        "innerHeight",
        "innerWidth",
        "length",
        "location",
        "locationbar",
        "menubar",
        "moveBy",
        "moveTo",
        "name",
        "onblur",
        "onerror",
        "onfocus",
        "onload",
        "onresize",
        "onunload",
        "open",
        "opener",
        "opera",
        "outerHeight",
        "outerWidth",
        "pageXOffset",
        "pageYOffset",
        "parent",
        "print",
        "removeEventListener",
        "resizeBy",
        "resizeTo",
        "screen",
        "screenLeft",
        "screenTop",
        "screenX",
        "screenY",
        "scroll",
        "scrollbars",
        "scrollBy",
        "scrollTo",
        "scrollX",
        "scrollY",
        "self",
        "status",
        "statusbar",
        "stop",
        "toolbar",
        "top",
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message:
            "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "no-return-assign": ["error", "always"],
      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: false,
        },
      ],
      "no-unused-vars": "off",
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      "prefer-const": "error",
      "no-console": [
        "warn",
        {
          allow: ["assert"],
        },
      ],
    },
  },
);
