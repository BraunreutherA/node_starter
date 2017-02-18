module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js',
    ],

    tests: [
      'src/**/*.spec.js',
    ],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    bootstrap() {
      require('babel-polyfill');
    },

    testFramework: 'ava',

    workers: {
      recycle: true,
      initial: 1,
      regular: 1,
    },
  };
};
