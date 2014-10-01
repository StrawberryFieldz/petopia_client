angular.module('app')
  .controller('SitterProfileController', ['$scope', '$state', 'SitterManager', function($scope, $state, SitterManager){
    SitterManager.FindSitter($state.params.username, function(sitter){
      if(sitter)
        $scope.sitter = sitter;
      else{
        console.log("no sitter found");
      }
    });

    $scope.getRating = function(){
      return new Array($scope.sitter.rating);
    };

    $scope.getLatLong = function(sitter){

    };

  }]);
