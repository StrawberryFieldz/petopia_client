angular.module('app')
  .factory('Navbar', function(){
    // User login status
    var loggedIn = false;
  
    return {
      loggedIn: loggedIn
    };
  });
