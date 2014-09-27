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
   			  controller: ['$scope', '$hideDialog', 'Navbar', function($scope, $hideDialog, Navbar) {
            $scope.showSignUp = context;

            $scope.toggleSignUp = function() {
              $scope.showSignUp = !$scope.showSignUp;
            };

            $scope.newUser = {};
            $scope.existingUser = {};

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
