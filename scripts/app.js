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

    .state('becomeSitter', {
      url: '/become_sitter',
      templateUrl: 'scripts/become_sitter/become_sitter.html',
      controller: 'BecomeSitterController'
    })

    .state('popup', {
      url: '/popup',
      templateUrl: 'scripts/components/popup/popup.html',
      controller: 'PopupController'
    })

    .state('sitterProfile', {
      url: '/sitter_profile?username',
      templateUrl: 'scripts/sitter_profile/sitter_profile.html',
      controller: 'SitterProfileController'
    });

}])

.service('$storage', function() {
  this.get = function(key) {
    return localStorage.getItem(key);
  };

  this.set = function(key, value) {
    localStorage.setItem(key, value);
  };

  this.getObject = function(key) {
    return JSON.parse(localStorage.getItem(key));
  };

  this.setObject = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  this.clear = function() {
    localStorage.clear();
  };
});
