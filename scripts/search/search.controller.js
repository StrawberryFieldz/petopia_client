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
      var array = [];
      for(var i = 0; i < sitter.rating; i++){
        array.push("../../assets/images/pawprint.png");
      }
      while(array.length < 5){
        array.push("../../assets/images/graypaw.png")
      }
      return array;
    };

    $scope.GoToProfile = function(sitter){
      $state.go('sitterProfile', {username:sitter.name});
    };

    $scope.city = CityFactory.getCity();
  }]);