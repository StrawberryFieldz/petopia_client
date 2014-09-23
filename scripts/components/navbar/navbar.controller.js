angular.module('app')
  .controller('NavbarController',[ '$scope', '$state', 'Navbar', function($scope, $state, Navbar){
    // User login status
    $scope.loggedIn = Navbar.loggedIn;

    // Toggle login status if user is logged in or if user logs out
    $scope.toggleLoginStatus = function() {
      Navbar.loggedIn = !Navbar.loggedIn;
      $scope.loggedIn = Navbar.loggedIn;
    };

    // Directs user to home page
    $scope.goHome = function() {
      $state.go('splash');
    };

    $scope.callPopup = function(context) {
      // Will need to include Popup factory and pass context to Popup function that handles
      // sign up vs. log in views
      $state.go('popup');
    };

  }]);
