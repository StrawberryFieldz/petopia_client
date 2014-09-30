angular.module('app')
  .controller('BecomeSitterController', ['$scope', '$state', 'PrivateProfileService', function($scope, $state, PrivateProfileService){
    $scope.petSitter = {
      name: '',
      userLocation: '',
      bio: '',
      dailyRate: '',
      petToWatchObject: {
        dog: false,
        cat: false
      }
    };

    $scope.setPetSitterInfo = PrivateProfileService.setPetSitterInfo;

  }]);
