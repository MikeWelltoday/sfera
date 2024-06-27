module.exports = {
  env: {
    'jest/globals': true
  },
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],

  plugins: ['jest'],
}