angular.module('app')
  .controller('SitterProfileController', ['$scope', '$state', 'SitterProfile', function($scope, $state, SitterProfile){
  
    $scope.sitter = SitterProfile.GetSitter();

    $scope.getRating = function(){
      return new Array($scope.sitter.rating);
    };

    $scope.getLatLong = function(sitter){

    };

  }]);
