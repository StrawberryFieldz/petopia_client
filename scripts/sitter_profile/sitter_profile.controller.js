angular.module('app')
  .controller('SitterProfileController', ['$scope', '$state', 'SitterManager', 'PawIconManager', function($scope, $state, SitterManager, PawIconManager){
    SitterManager.FindSitter($state.params.username, function(sitter){
      if(sitter)
        $scope.sitter = sitter;
      else{
        console.log("no sitter found");
      }
    });

    $scope.getRating = function(sitter){
      return PawIconManager.GetIcons(sitter.rating);
    };

    $scope.getLatLong = function(sitter){

    };

  }]);
