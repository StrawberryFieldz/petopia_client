angular.module('app')
.factory('GoogleMapManager', ['$http', function($http){
    return {
      lookupGeoCode: function(city, zip, callback){
        $http({
          method: 'GET',
          url:'https://maps.googleapis.com/maps/api/geocode/json?address='+city+zip
        }).success(function(data){
          callback(data);
        });
      }
    };
  }]);
