angular.module('app')
  .factory('GetCityFactory', function(){
    var currentCity = null;
    return{

      getCity: function(){
        console.log('getCity');
        if(currentCity){
          return currentCity;          
        }

        return null
      },

      setCity: function(cityName){
        currentCity = cityName;
      }
    };
  });
