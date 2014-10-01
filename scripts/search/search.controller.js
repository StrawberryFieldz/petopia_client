angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', function($scope, $state, CityFactory, SitterManager){

    $scope.sitters = SitterManager.GetStubData();

    // uncomment to get data from server
    // $scope.sitters;
    // SitterManager.GetSitters(function(data){
    //   console.log(data);
    //   $scope.sitters = data;
    // });
    
    $scope.setCity = function(cityName){
      console.log(cityName);
      CityFactory.setCity(cityName);
      $scope.city = CityFactory.getCity();
    };

    $scope.getRating = function(sitter){
      return new Array(sitter.rating);
    };

    $scope.GoToProfile = function(sitter){
      $state.go('sitterProfile', {username:sitter.name});
    };

    $scope.city = CityFactory.getCity();
  }]);