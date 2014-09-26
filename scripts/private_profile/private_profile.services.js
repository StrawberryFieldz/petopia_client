angular.module('app')
  .factory('PrivateProfileService', function(){
    return {
      setPetSitterInfo: function(info){
        //this will ultimately send the info to the database
        console.log(info);
      }
    };
  });
