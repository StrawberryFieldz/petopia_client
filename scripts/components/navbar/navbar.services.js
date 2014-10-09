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

            $scope.scheduleForm = {
              dog: false,
              cat: false
            };

            $scope.submitSchedule = function(data){
              // $http({
              //   data: JSON.stringify(data);
              // }).success(function(data, status, headers, config){
              //   $hideDialog();
              // }).error(function(data, status, headers, config){
              //   console.log("Error in sumbitSchedule");
              // });
              
              var username = $storage.get('user');
              var dog = data.dog;
              var cat = data.cat;
              var pet = '';
              if(dog && cat) { pet = 'dog and cat' }
              else if(dog) { pet = 'dog' }
              else if(cat) { pet = 'cat' }
              console.log(data.startDate);
              console.log(data.startDate);

              var startDateArray = data.startDate.toString().split(' ');
              var endDateArray = data.endDate.toString().split(' ');

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

              var message = 'Hello fellow Petopia member! Can you please watch my ' + pet + ' from ' + setDate(startDateArray) + ' to ' + setDate(endDateArray) + '? \n' +
                            'Thank you! \n' +
                            '-'+username;
              window.open('mailto:tyhlewis@gmail.com?subject=Petopia Pet Sitter Request&body=' + message);
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