angular.module('app')
  .controller('PrivateProfileController', ['$scope', '$state', function($scope, $state){
    $scope.petSitter = {
      name: '',
      userLocation: '',
      bio: '',
      cost: 0,
      petToWatchArray: []
    };
  }]);
