angular.module('app')
  .controller('PrivateProfileController', ['$scope', '$state', 'SitterManager', 'PopUp', 'PrivateProfileService', function($scope, $state, SitterManager, PopUp, PrivateProfileService){
    
    // change this to call the database and pull in any information for the user
    $scope.petSitter = {
      name: 'Tyler',
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

    $scope.rating = 3;
    
    $scope.submitRating = function(number){
      console.log(number);
    }

    $scope.rateUser = function(e){
      PopUp.PopUpCall(e, './scripts/components/navbar/navbar-popup-templates/rating_popup.tmpl.html', true);
    }

  }]);
