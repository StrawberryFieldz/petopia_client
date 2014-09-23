angular.module('app')
  .controller('SplashController', ['$scope', '$state', 'GetCityFactory', function($scope, $state, GetCityFactory) {
    $scope.setCity = function(){
      GetCityFactory.setCity($scope.cityName);
      if(GetCityFactory.getCity()){
        $state.go('search');
      }

    }

  }]);
