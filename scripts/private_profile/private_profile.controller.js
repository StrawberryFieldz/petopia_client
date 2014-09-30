angular.module('app')
  .controller('PrivateProfileController', ['$scope', '$state', 'SitterManager', 'PrivateProfileService', function($scope, $state, SitterManager, PrivateProfileService){
    
    // change this to call the database and pull in any information for the user
    $scope.petSitter = {
      name: 'Jeff',
      userLocation: 'San Francisco',
      bio: '',
      dailyRate: '$10',
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
