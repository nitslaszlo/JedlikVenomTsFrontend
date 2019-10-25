module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "@typescript-eslint/explicit-function-return-type": ["warn", {
      "allowExpressions": true
    }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}
