import { Config } from 'karma';

module.exports = function(config: Config) {
  config.set({
    frameworks: ['mocha', 'chai', 'karma-typescript'],
    files: [{ pattern: 'src/**/*.ts' }],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    reporters: ['mocha', 'karma-typescript'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  });
};
