module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'max-len': ['error', {code: 300}],
    'linebreak-style': [0, 'error', 'windows'],
  },
};
