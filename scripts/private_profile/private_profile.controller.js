angular.module('app')
  .controller('PrivateProfileController', ['$scope', '$state', 'SitterManager', 'PrivateProfileService', function($scope, $state, SitterManager, PrivateProfileService){
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

    $scope.userPhoto = (function(){
      var user = SitterManager.GetStubData()[0];
      return user.photo;
    })();

    $scope.uploadImage = function(){
      console.log("placeholder")
    }

  }]);
