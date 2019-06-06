// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {

  process.env.NO_PROXY = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876'; process.env.no_proxy = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876';
  
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/SmartSession-WebClient'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeDebugging'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: [ 
            '--remote-debugging-port=9876',
            '--no-sandbox',
            '--proxy-bypass-list=*',
            '--proxy-server=\'http:proxy.korbicom.int:8080\''
          ]
      }
    }
  });
};
