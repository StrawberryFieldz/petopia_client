angular.module('app')
  .controller('SplashController', ['$scope', '$state', 'CityFactory', function($scope, $state, CityFactory) {
    $scope.setCity = function(cityName){
      CityFactory.setCity(cityName);
      if(CityFactory.getCity()){
        $state.go('search');
      }

    };

  }]);
