angular.module('app')
  .controller('SplashController', ['$scope', '$state', 'GetCityFactory', function($scope, $state, GetCityFactory) {
    $scope.getCity = GetCityFactory.getCity;
  }]);
