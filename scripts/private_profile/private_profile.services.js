angular.module('app')
  .factory('PrivateProfileService', function($http, $storage){
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
      }
    };
  })

  .directive('message', function() {
    return  {
      restrict: 'E',
      templateUrl: './scripts/private_profile/private_profile.message.html'
    };
  })

  .directive('transaction', function(){
    return {
      restrict: 'E',
      scope: {
        value: '=ngModel'
      },
      controller: 'PrivateProfileController',
      templateUrl: './scripts/private_profile/private_profile.transaction.html'
    };
  });
