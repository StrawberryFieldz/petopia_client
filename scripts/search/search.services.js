// Basic structure for a factory
angular.module('app')
  .factory('SitterManager', ['$http', 'CityFactory', function($http, CityFactory){
  	
  	return {
  		GetSitters: function(callback){
  			$http({
  			  method: 'GET',
  			  url: 'http://localhost:8080/api/search' 
  			}).success(function(data){
  			  callback(data);
  			});
        //use stub data until rest api is implemented.

  		},

  		FindSitter: function(username, callback){
  			for(var i=0; i<stub.length; i++){
  				if(stub[i].name === username){
  					callback(stub[i]);
  					return;
  				}
  			}

  			callback(null);
  		},
  		GetStubData: function(callback){
  			return stub;
  		}
  	};
  }])

  .factory('PawIconManager', function(){
  	return {
  		GetIcons: function(num){
  			var array = [];
  			for(var i = 0; i < num; i++){
  			  array.push("../../assets/images/pawprint.png");
  			}
  			while(array.length < 5){
  			  array.push("../../assets/images/graypaw.png")
  			}
  			return array;
  		}
  	}
  })

  .filter('matchCity', function () {
	  return function (items, letter) {
	  	console.log(typeof letter);
	  	if(letter === undefined || parseInt(letter)){
	  	  return items;
	  	}
	    var filtered = [];
	    var letterMatch = new RegExp(letter, 'i');
	    for (var i = 0; i < items.length; i++) {
	      var item = items[i];
	      if (letterMatch.test(item.location.substring(0, letter.length))) {
	        filtered.push(item);
	      }
	    }
	    return filtered;
	  };
	})

  .filter('matchMaxPrice', function () {
	  return function (items, maxPrice) {
	  	if(maxPrice === undefined || maxPrice === '' || !parseInt(maxPrice)){
	  	  return items;
	  	}
	    var filtered = [];
	    for (var i = 0; i < items.length; i++) {
	      var item = items[i];
	      if (maxPrice > item.cost) {
	        filtered.push(item);
	      }
	    }
	    return filtered;
	  };
	})

   .filter('minRating', function () {
  	  return function (items, minRating) {
  	  	if(minRating === undefined || minRating < 1 || minRating > 5){
  	  	  return items;
  	  	}
  	    var filtered = [];
  	    for (var i = 0; i < items.length; i++) {
  	      var item = items[i];
  	      if (minRating <= item.rating) {
  	        filtered.push(item);
  	      }
  	    }
  	    return filtered;
  	  };
  	})

