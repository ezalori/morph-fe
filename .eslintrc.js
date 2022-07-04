module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  globals: {
    $router: false,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    eqeqeq: 'off',
    'import/first': 'off',
    indent: 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off',
  }
}
