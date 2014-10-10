angular.module('app')
  .controller('BecomeSitterController', ['$scope', '$state', 'PrivateProfileService', function($scope, $state, PrivateProfileService){
    $scope.petSitter = {
      name: '',
      location: '',
      zip: '',
      bio: '',
      cost: '',
      dogs: false,
      cats: false
    };

    $scope.setPetSitterInfo = PrivateProfileService.setPetSitterInfo;

  }]);
