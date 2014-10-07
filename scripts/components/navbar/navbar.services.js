angular.module('app')
  .factory('Navbar', function(){
    // User login status
    var loggedIn = false;
  
    return {
      loggedIn: loggedIn
    };
  })

  .factory('PopUp', ['$materialDialog', function($materialDialog){
    return {
      PopUpCall: function(e, pathToTemplate, context){
        $materialDialog({
          templateUrl: pathToTemplate,
          targetEvent: e,
          scope: {
            value: '=ngModel'
          },
          controller: ['$scope', '$http', '$state', '$hideDialog', 'Navbar', function($scope, $http, $state, $hideDialog, Navbar) {
            $scope.showSignUp = context;

            $scope.toggleSignUp = function() {
              $scope.showSignUp = !$scope.showSignUp;
            };

            $scope.newUser = {};
            $scope.existingUser = {};

            $scope.signUp = function(newUser) {
              $http({
                url: 'http://localhost:8080/signup',
                method: 'POST',
                data: JSON.stringify(newUser),
                headers: {'Content-type': 'application/json'}
              }).success(function(data, status, headers, config) {

              }).error(function(data, status, headers, config) {

              });
            };

            $scope.logIn = function(user) {
              $http({
                url: 'http://localhost:8080/login',
                method: 'POST',
                data: JSON.stringify(user),
                headers: {'Content-type': 'application/json'}
              }).success(function(data, status, headers, config) {

              }).error(function(data, status, headers, config) {

              });
            };

            $scope.facebookSignUp = function() {
              $http({
                url: 'http://localhost:8080/facebook/signup',
                method: 'POST',
                headers: {'Content-type': 'application/json'}
              }).success(function(data, status, headers, config) {

              }).error(function(data, status, headers, config) {

              });
            };

            $scope.facebookLogIn = function() {
              $http({
                url: 'http://localhost:8080/facebook/login',
                method: 'POST',
                headers: {'Content-type': 'application/json'}
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