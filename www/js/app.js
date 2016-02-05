// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'EmployeePanda.services' is found in services.js
// 'EmployeePanda.controllers' is found in controllers.js
angular.module('EmployeePanda', ['ionic', 'EmployeePanda.controllers', 'EmployeePanda.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/appComponents/menu.html'
  })
  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'views/appComponents/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        }
      }
    })

   .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'views/appComponents/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'signup'
        }
      }
    })
    
 .state('app.vendorlist', {
    url: '/vendorlist',
    views: {
      'menuContent': {
        templateUrl: 'views/employee/vendorlist.html',
        controller: 'VendorListController',
        controllerAs: 'vendorList'
      }
    }
  })

  .state('app.vendorhome', {
      url: '/vendorhome',
      views: {
        'menuContent': {
          templateUrl: 'views/vendor/vendorHome.html',
          controller: 'VendorCtrl',
          controllerAs: 'vendor'
        }
      }
    })
    
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'views/employee/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'views/employee/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
