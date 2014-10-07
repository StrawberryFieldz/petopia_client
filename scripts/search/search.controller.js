angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', 'PawIconManager', function($scope, $state, CityFactory, SitterManager, PawIconManager){

    $scope.sitters = SitterManager.GetStubData();
    
    $scope.setCity = function(cityName){
      console.log(cityName);
      CityFactory.setCity(cityName);
      $scope.city = CityFactory.getCity();
    };

    $scope.getRating = function(sitter){
      return PawIconManager.GetIcons(sitter.rating);
    };
    
    $scope.GoToProfile = function(sitter){
      $state.go('sitterProfile', {username:sitter.name});
    };

    $scope.city = CityFactory.getCity();
  }]);