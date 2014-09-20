angular.module('app')
  .controller('NavbarController', function($scope, $state){
    // User login status
    $scope.loggedIn = false;

    // Directs user to home page
    $scope.goHome = function() {
      $state.go('splash');
    };

  });
