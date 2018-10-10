module.exports = {
  globals: {
    'ts-jest': {
      useBabelrc: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    // tslint:disable-next-line:object-literal-sort-keys
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^Test(.*)$': '<rootDir>/Test$1',
    '^data(.*)$': '<rootDir>/data$1',
    '^src/lib/ioc$': '<rootDir>/Test/iocMock.ts',
    // tslint:disable-next-line:object-literal-sort-keys
    '^src(.*)$': '<rootDir>/src$1'
  },
  modulePaths: ['<rootDir>/src/'],

  roots: ['<rootDir>/'],
  setupFiles: ['<rootDir>/test-shim.js', '<rootDir>/test-setup.js'],
  testMatch: ['**/*.(spec|test).(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
    //'^.+\\.(ts|tsx)$': '<rootDir>/test-preprocessor.js'
  }
};