angular.module('app', ['ui.router', 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // Routes to home page on default
  $urlRouterProvider 
    .otherwise('/');

  // State routes
  $stateProvider

    // Home/splash page state
    .state('splash', {
      url: '/',
      templateUrl: 'scripts/splash/splash.html',
      controller: 'SplashController'
    })

    .state('search', {
      url: '/search',
      templateUrl: 'scripts/search/search.html',
      controller: 'SearchController'
    })

    .state('searchCard', {
      url: '/search_card',
      templateUrl: 'scripts/search_card/search_card.html',
      controller: 'SearchCardController'
    })

    .state('privateProfile', {
      url: '/private_profile',
      templateUrl: 'scripts/private_profile/private_profile.html',
      controller: 'PrivateProfileController'
    })

    .state('popup', {
      url: '/popup',
      templateUrl: 'scripts/components/popup/popup.html',
      controller: 'PopupController'
    });

    // Login popup
    // Signup popup

}]);
