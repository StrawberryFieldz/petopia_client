angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', function($scope, $state, CityFactory){
    $scope.cityName = CityFactory.getCity();
  }]);