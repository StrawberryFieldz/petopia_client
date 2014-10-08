angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', 'PawIconManager', function($scope, $state, CityFactory, SitterManager, PawIconManager){

    var city = CityFactory.getCity();

    SitterManager.GetSitters(function(data){
      $scope.sitters = data;
    });

    $scope.newSearchCity = function(cityName){
      $scope.sitters = [];
      CityFactory.setCity(cityName);
      SitterManager.GetSitters(function(data){
        $scope.sitters = data;
      });
      $scope.cityName = "";
    }

    $scope.getRating = function(sitter){
      return PawIconManager.GetIcons(sitter.rating);
    };
    
    $scope.GoToProfile = function(sitter){
      $state.go('sitterProfile', {username:sitter.name});
    };

    $scope.city = CityFactory.getCity();
  }]);