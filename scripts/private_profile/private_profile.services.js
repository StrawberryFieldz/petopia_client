angular.module('app')
  .factory('PrivateProfileService', function(){
    return {
      setPetSitterInfo: function(info){
        //this will ultimately send the info to the database
        console.log(info);
      }
    };
  })

  .directive('message', function() {
    return  {
      restrict: 'E',
      templateUrl: './scripts/private_profile/private_profile.message.html'
    };
  });
