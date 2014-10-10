angular.module('app')
  .factory('Navbar', ['$state', '$http', '$storage', function($state, $http, $storage){
    // User login status
    var loggedIn = false;
  
    var logout = function(){
      $http({
        url: 'http://petopia-server.azurewebsites.net/logout',
        method: 'GET',
        headers: {'Content-type': 'application/json'}        
      }).success(function(data, status, headers, config) {
        $storage.clear();
        console.log($state.current);
        if($state.current.name === 'splash'){
          $state.go($state.current, {}, {reload: true});
        } else {
          $state.go('splash');
        }
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

            $scope.scheduleForm = {
              dog: false,
              cat: false
            };

            $scope.submitSchedule = function() {
              var sitter = $storage.getObject('sitter');
              var messageToUser = 'You requested that ' + sitter.username + ' watch your ';
              var user = $storage.get('user');
              console.log(user)
              var pets = '';
              if($scope.scheduleForm.dog && $scope.scheduleForm.cat) { pets += 'cat and dog.'; }
              else if($scope.scheduleForm.dog) { pets += 'dog.'; }
              else if($scope.scheduleForm.cat) { pets += 'cat.'; }
              messageToUser += pets;

              var startDateArray = $scope.scheduleForm.startDate.toString().split(' ');
              var endDateArray = $scope.scheduleForm.endDate.toString().split(' ');

              var days = {
                'Mon': 'Monday',
                'Tue': 'Tuesday',
                'Wed': 'Wednesday',
                'Thu': 'Thursday',
                'Fri': 'Friday',
                'Sat': 'Saturday',
                'Sun': 'Sunday'
              };

              var months = {
                'Jan': 'January',
                'Feb': 'February',
                'Mar': 'March',
                'Apr': 'April',
                'May': 'May',
                'Jun': 'June',
                'Jul': 'July',
                'Aug': 'August',
                'Sep': 'September',
                'Oct': 'October',
                'Nov': 'November',
                'Dec': 'December'
              };

              var setDate = function(array) {
                return days[array[0]] + ', ' + months[array[1]] + ' ' + array[2] + ', ' + array[3];
              };

              startDate = setDate(startDateArray);
              endDate = setDate(endDateArray);

              var requestBody = {
                message: messageToUser,
                date: {
                  start: startDate,
                  end: endDate
                }
              };
              
              // $http({
              //   url: 'http://petopia-server.azurewebsites.net/api/users/messages/' + user,
              //   method: 'POST',
              //   data: JSON.stringify(requestBody)
              // }).success(function(data, status, headers, config) {
              //   $scope.close();
              // }).error(function(data, status, headers, config) {

              // });

              var messageToSitter = user + ' requested that you watch their ' + pets;
              requestBody.message = messageToSitter;

              $http({
                url: 'http://petopia-server.azurewebsites.net/api/users/messages/' + sitter.username,
                method: 'POST',
                data: JSON.stringify(requestBody)
              }).success(function(data, status, headers, config) {
                $scope.close();
              }).error(function(data, status, headers, config) {

              });

            };

            $scope.addPetForm = {
              dog: false,
              cat: false
            };

            $scope.addPet = function(){
              console.log($scope.addPetForm);
              $http({
                url: 'http://petopia-server.azurewebsites.net/api/',
                method: 'POST',
                data: JSON.stringify($scope.addPetForm)
              }).success(function(data, status, headers, config){

              }).error(function(data, status, headers, config){

              });
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