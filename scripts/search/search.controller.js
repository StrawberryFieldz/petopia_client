angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', function($scope, $state, CityFactory, SitterManager){
    $scope.sitters = SitterManager.GetSitters();
    $scope.setCity = function(cityName){
      console.log(cityName);
      CityFactory.setCity(cityName);
      $scope.city = CityFactory.getCity();
    };

    $scope.city = CityFactory.getCity();
  }]);