angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', function($scope, $state, CityFactory, SitterManager){
    $scope.cityName = CityFactory.getCity();
    $scope.data = SitterManager.GetStubData();
  }]);