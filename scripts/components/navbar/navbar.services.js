angular.module('app')
  .factory('Navbar', function(){
    // User login status
    var loggedIn = false;
  
    return {
      loggedIn: loggedIn
    };
  })

  // .factory('PopUp', function(pathToTemplate){
  // 	$materialDialog({
  // 	  templateUrl: './scripts/components/navbar/my-dialog.tmpl.html',
  // 	  targetEvent: e,
  // 	  controller: ['$scope', '$hideDialog', function($scope, $hideDialog) {
  // 	    $scope.close = function() {
  // 	      $hideDialog();
  // 	    };
  // 	  }]
  // 	});
  // })

  .directive('ig', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        fid: '@',
        label: '@'
      },
      template: 
        '<material-input-group>' +
          '<label for="{{fid}}">{{label}}</label>' +
          '<material-input id="{{fid}}" type="text" ng-model="data.description">' +
        '</material-input-group>'
    };
  });

