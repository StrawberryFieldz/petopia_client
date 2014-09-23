angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'GetCityFactory', function($scope, $state, GetCityFactory){
    $scope.cityName = GetCityFactory.getCity();
  }]);