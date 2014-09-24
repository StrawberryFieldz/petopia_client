angular.module('app')
  .controller('NavbarController',[ '$scope', '$state', 'Navbar', '$materialDialog', 'PopUp', function($scope, $state, Navbar, $materialDialog, PopUp){
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

    // Calls sign up/log in popup view
    $scope.callPopup = function(context) {
      // Will need to include Popup factory and pass context to Popup function that handles
      //   sign up vs. log in views
      $state.go('popup');
    };

    // Directs users to private profile page with context of becoming a sitter
    $scope.becomeSitter = function() {
      // If users are not authenticated, will need to callPopup to sign them up or log them in
      // Otherwise, direct users to their private profile page
      // Also, will likely need some way to delineate the fact that they are actively wanting to
      //   become a sitter, not just wanting to see their profile page
      $state.go('privateProfile');
    };

    $scope.signup = function(e) {
      PopUp.PopUpCall(e, './scripts/components/navbar/navbar-popup-templates/popup.tmpl.html', true);
    };

    $scope.login = function(e) {
      PopUp.PopUpCall(e, './scripts/components/navbar/navbar-popup-templates/popup.tmpl.html', false);
    };
  }]);
