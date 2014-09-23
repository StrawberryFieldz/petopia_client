angular.module('app')
  .factory('CityFactory', function(){
    var currentCity = null;
    return{

      getCity: function(){
        return currentCity;          
      },

      setCity: function(cityName){
        currentCity = cityName;
      }
    };
  });
