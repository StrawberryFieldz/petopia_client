angular.module('app')
  .controller('PrivateProfileController', ['$scope', '$state', 'SitterManager', 'PopUp', '$materialDialog', 'PrivateProfileService', '$http', function($scope, $state, SitterManager, PopUp, $materialDialog, PrivateProfileService, $http){

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
      console.log("placeholder");
    };

    $scope.rating = 1;

    $scope.rateUser = function(e){
      $materialDialog({
        templateUrl: './scripts/components/navbar/navbar-popup-templates/rating_popup.tmpl.html',
        targetEvent: e,
        controller: ['$scope', '$hideDialog', 'Navbar', function($scope, $hideDialog, Navbar) {
          $scope.close = function() {
            $hideDialog();
          };
          $scope.submitRating = function(number){
            $scope.rating = number;
            console.log($scope.rating);
            $scope.close();
          };
        }]
      });       
    };

  }]);
