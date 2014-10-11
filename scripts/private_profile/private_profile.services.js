angular.module('app')
  .factory('PrivateProfileService', ['$http', '$storage', '$state', function($http, $storage, $state){
    return {
      setPetSitterInfo: function(info, callback){
        var user = $storage.get('user');
        $http({
          method: 'POST',
          url: 'http://petopia-server.azurewebsites.net/api/users/'+user,
          data: info
        }).success(function(data){
          console.log("posted to server");
        });
      },

      acceptRequest: function(user, acceptObject){
        $http({
          method: 'POST',
          url: 'http://petopia-server.azurewebsites.net/api/users/transactions/' + user,
          data: JSON.stringify(acceptObject)
        }).success(function(data){
          $state.go($state.current, {}, {reload: true});
        }).error(function(data){
          console.log('error in acceptRequest');
        });
      }
    };
  }])

  .directive('message', function() {
    return {
      restrict: 'E',
      controller: ['$scope', '$storage', 'PrivateProfileService', function($scope, $storage, PrivateProfileService) {
        $scope.requestStatus = 'Pending';
        $scope.canceled = false;
        $scope.accepted = false;
        $scope.declined = false;

        $scope.cancelRequest = function() {
          $scope.canceled = true;
        };

        $scope.acceptRequest = function() {
          $scope.name;

          var nameSplit = $scope.name.split(' ');

          var acceptObject = {
            transaction_name: nameSplit[0],
            transaction_type: 'watched',
            transaction_cost: $scope.user.cost,
            transaction_isRated: false
          };
          var user = $storage.get('user');
          console.log('acceptObject: ', acceptObject);
          PrivateProfileService.acceptRequest(user, acceptObject);

          $scope.accepted = true;
        };

        $scope.declineRequest = function() {
          $scope.declined = true;
        };
      }],
      templateUrl: './scripts/private_profile/private_profile.message.html'
    };
  })

  .directive('transaction', function(){
    return {
      restrict: 'E',
      controller: 'PrivateProfileController',
      templateUrl: './scripts/private_profile/private_profile.transaction.html'
    };
  });
