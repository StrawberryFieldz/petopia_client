angular.module('app')
  .factory('GetCityFactory', function(){
    return{
      getCity: function(cityName){
        console.log(cityName);
      }
    }
  });
