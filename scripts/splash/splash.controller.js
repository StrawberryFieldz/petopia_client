angular.module('app')
  .controller('SplashController', ['$scope', '$state', '$location', '$anchorScroll', 'CityFactory', function($scope, $state, $location, $anchorScroll, CityFactory) {
    $scope.setCity = function(cityName){
      CityFactory.setCity(cityName);
      if(CityFactory.getCity()){
        $state.go('search');
      }

    };

    // jump to bottom of page when user clicks on white down arrow
    $scope.goToBottom = function(){
      //set the location.hash to id="bottom" in the "meetTheTeamSection" material-toolbar
      $location.hash('bottom');
      //call $anchorScroll() to jump to bottom of page
      $anchorScroll();
      //clear url path so that it does not display the id in the url path
      $location.url($location.path());
    };

  }]);
