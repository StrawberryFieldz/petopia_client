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
 			  controller: ['$scope', '$hideDialog', function($scope, $hideDialog) {
          $scope.showSignUp = context;

          $scope.toggleSignUp = function() {
            $scope.showSignUp = !$scope.showSignUp;
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
        value: '=ngModel'
      },
      template: 
        '<material-input-group>' +
          '<label for="{{fid}}">{{label}}</label>' +
          '<material-input id="{{fid}}" type="text" ng-model="value">' +
        '</material-input-group>'
    };
  });
