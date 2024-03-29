module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/semi": [
      "error"
    ],
    "prettier/prettier": 2,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-case-declarations": "off",
    "@typescript-eslint/comma-dangle": 2,
    "@typescript-eslint/brace-style": 2,
    "@typescript-eslint/comma-spacing": 2,
    "@typescript-eslint/func-call-spacing": 2,
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": 2,
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": 2,
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": 2,
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": 2,
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": 2,
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": 2,
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": 2,
    "arrow-spacing": "error"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
   project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  }
}
