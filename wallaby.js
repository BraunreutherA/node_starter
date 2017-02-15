module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js',
      'test/helpers.js',
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

    testFramework: 'ava',

    workers: {
      recycle: true,
      initial: 1,
      regular: 1,
    },
  };
};
