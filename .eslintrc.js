define(function (require, exports, module) {
  module.exports = {
    extends: ["eslint:recommended", "plugin:prettier/recommended"],

    rules: {
      'prettier/prettier': 'warn',
      indent: ["error", 2],
      semi: ["error", "always"],
    },
  };
});