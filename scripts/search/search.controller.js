angular.module('app')
  .controller('SearchController', ['$scope', '$state', 'CityFactory', 'SitterManager', 'PawIconManager', function($scope, $state, CityFactory, SitterManager, PawIconManager){

    var city = CityFactory.getCity();
    console.log("city is currently: ",city);

    SitterManager.GetSitters(function(data){
      console.log(data);
      $scope.sitters = data;
    });
    
    // $scope.setCity = function(cityName){
    //   console.log(cityName);
    //   CityFactory.setCity(cityName);
    //   // $scope.city = CityFactory.getCity();
    // };

    $scope.getRating = function(sitter){
      return PawIconManager.GetIcons(sitter.rating);
    };
    
    $scope.GoToProfile = function(sitter){
      $state.go('sitterProfile', {username:sitter.name});
    };

    $scope.city = CityFactory.getCity();
  }]);