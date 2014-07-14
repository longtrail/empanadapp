// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('empanadapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.costos', {
      url: '/costos',
      views: {
        'tab-costos': {
          templateUrl: 'templates/tab-costos.html',
          controller: 'CostosCtrl'
        }
      }
    })

    .state('tab.pedido', {
      url: '/pedido',
      views: {
        'tab-pedido': {
          templateUrl: 'templates/tab-pedido.html',
          controller: 'PedidoCtrl'
        }
      }
    })

    .state('tab.pedido-persona', {
      url: '/pedido/:personaId',
      views: {
        'tab-pedido': {
          templateUrl: 'templates/tab-pedido-persona.html',
          controller: 'PedidoPersonaCtrl'
        }
      }
    })

    .state('tab.resumen', {
      url: '/resumen',
      views: {
        'tab-resumen': {
          templateUrl: 'templates/tab-resumen.html',
          controller: 'ResumenCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pedido');

});

