angular.module('app')
  .controller('SplashController', function($scope, $state, GetCityFactory) {
    $scope.getCity = GetCityFactory.getCity;
  });
