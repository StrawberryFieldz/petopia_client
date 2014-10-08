angular.module('app')
  .factory('Navbar', ['$state', '$http', '$storage', function($state, $http, $storage){
    // User login status
    var loggedIn = false;
  
    var logout = function(){
      $http({
        url: 'http://localhost:8080/logout',
        method: 'GET',
        headers: {'Content-type': 'application/json'}        
      }).success(function(data, status, headers, config) {
        $storage.clear();
        $state.go('splash');
      }).error(function(data, status, headers, config) {
      });
    };

    return {
      loggedIn: loggedIn,
      logout: logout
    };
  }])

  .factory('PopUp', ['$materialDialog', function($materialDialog){
    return {
      PopUpCall: function(e, pathToTemplate, context){
        $materialDialog({
          templateUrl: pathToTemplate,
          targetEvent: e,
          scope: {
            value: '=ngModel'
          },
          controller: ['$scope', '$http', '$state', '$hideDialog', '$storage', function($scope, $http, $state, $hideDialog, $storage) {
            $scope.showSignUp = context;

            $scope.toggleSignUp = function() {
              $scope.showSignUp = !$scope.showSignUp;
            };

            $scope.newUser = {};
            $scope.existingUser = {};

            $scope.signUp = function(newUser) {
              $http({
                url: 'http://petopia-server.azurewebsites.net/signup',
                method: 'POST',
                data: JSON.stringify(newUser),
                headers: {'Content-type': 'application/json'}
              }).success(function(data, status, headers, config) {
                $storage.set('user', $scope.newUser.username);
                $scope.close();
                $state.go($state.current, {}, {reload: true});
              }).error(function(data, status, headers, config) {
                $scope.newUser = {};
              });
            };

            $scope.logIn = function(user) {
              $http({
                url: 'http://petopia-server.azurewebsites.net/login',
                method: 'POST',
                data: JSON.stringify(user),
                headers: {'Content-type': 'application/json'}
              }).success(function(data, status, headers, config) {
                $storage.set('user', $scope.existingUser.username);
                $scope.close();
                $state.go($state.current, {}, {reload: true});
              }).error(function(data, status, headers, config) {
                $scope.existingUser = {};
              });
            };

            $scope.facebookLogIn = function() {
              $http({
                url: 'http://localhost:8080/facebook/login',
                method: 'GET'
              }).success(function(data, status, headers, config) {

              }).error(function(data, status, headers, config) {

              });
            };  

            $scope.close = function() {
              $hideDialog();
            };
          }]
        });       
      }
    };

  }])

  .directive('ig', function() {
    return {
      restrict: 'E',
      scope: {
        fid: '@',
        label: '@',
        value: '=ngModel',
        type: '@'
      },
      template: 
        '<material-input-group>' +
          '<label for="{{fid}}">{{label}}</label>' +
          '<material-input id="{{fid}}" type="{{type}}" ng-model="value">' +
        '</material-input-group>'
    };
  });