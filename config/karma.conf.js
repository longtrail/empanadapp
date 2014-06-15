module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular/angular.js',
      'www/lib/angular*/angular*.js',
      'test/lib/angular/angular-mocks.js',
      'www/lib/lodash/dist/lodash.js',
      'www/js/**/*.js',
      'test/unit/**/*Spec.js'
    ],
      
    exclude : [
    'www/lib/angular*/angular*.min*',
    'www/lib/angular-i18n/*',
    'www/lib/ionic/js/*.min.js'
    ],

    autoWatch : true,

    frameworks: ['mocha','chai'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-chai',
            'phantomjs'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

});};