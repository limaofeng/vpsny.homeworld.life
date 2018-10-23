module.exports = wallaby => ({
  files: [
    { pattern: 'views/**/*.+(hbs|js)', instrument: false },
    { pattern: '.env.local', instrument: false },
    'config/**/*.js',
    'src/**/*.ts*'
  ],
  tests: ['tests/**/*.test.ts'],
  compilers: {
    '**/*.ts?(x)': wallaby.compilers.typeScript({
      typescript: require('typescript'),
      module: 'commonjs'
    })
  },
  env: {
    type: 'node',
    runner: 'node'
  },
  testFramework: 'jest',
  setup(wallaby) {
    const jestConfig = require('./package.json').jest;
    jestConfig.globals = { __DEV__: true };
    wallaby.testFramework.configure(jestConfig);
  },
  debug: true
});
