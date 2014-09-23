angular.module('app')
  .controller('SplashController', ['$scope', '$state', 'CityFactory', function($scope, $state, CityFactory) {
    $scope.setCity = function(){
      CityFactory.setCity($scope.cityName);
      if(CityFactory.getCity()){
        $state.go('search');
      }

    };

  }]);
