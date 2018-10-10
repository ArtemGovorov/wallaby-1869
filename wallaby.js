var compilerOptions = require('./tsconfig.json');
compilerOptions.module = 'commonJS';

module.exports = function(wallaby) {
  return {
    files: ['tsconfig.json', 'jest.config.js', 'test-setup.js', 'test-shim.js', 'Test/iocMock.ts', 'Test/Mock.ts', { pattern: 'src/**/*.ts' }],

    tests: [{ pattern: 'Test/**/*.test.ts' }],

    env: {
      runner: 'node',
      type: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions)
    },

    preprocessors: {
      '**/*.js?(x)': file =>
        require('babel-core').transform(file.content, { sourceMap: true, filename: file.path, presets: ['babel-preset-jest'], babelrc: true })
    },

    // tslint:disable-next-line:no-shadowed-variable
    setup: function(wallaby) {
      var jestConfig = require('./jest.config.js');
      Object.keys(jestConfig.moduleNameMapper).forEach(
        k => (jestConfig.moduleNameMapper[k] = jestConfig.moduleNameMapper[k].replace('<rootDir>', wallaby.localProjectDir))
      );
      wallaby.testFramework.configure(jestConfig);
    },

    debug: true
  };
};