// Basic structure for a factory
angular.module('app')
  .factory('SitterManager', ['$http', 'CityFactory', '$storage', function($http, CityFactory, $storage){
    var currentSitter;
  	return {
  		GetSitters: function(callback){
        var city = CityFactory.getCity();
  			$http({
  			  method: 'GET',
  			  url: 'http://petopia-server.azurewebsites.net/api/search/location/'+city
  			}).success(function(data){
  			  callback(data);
  			});

  		},

      SetSitter: function(sitter){
        $storage.setObject('sitter', sitter);
      },

      GetSitter: function(sitter){
        return $storage.getObject('sitter');
      },

      GetAllUserInfo: function(user, callback) {
        console.log(user);
        return $http({
          url: 'http://petopia-server.azurewebsites.net/api/users/' + user,
          method: 'GET'
        }).success(function(data) {
          callback(data);
        }).error(function(err) {
          //
        });
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
  			  array.push("../../assets/images/graypaw.png");
  			}
  			return array;
  		}
  	};
  })

  .filter('matchCity', function () {
	  return function (items, letter) {
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

   .filter('dogFilterer', function () {
  	  return function (items, dogFilter, catFilter) {
        var filtered = [];
        if(!dogFilter && !catFilter){
          return items;
        }
        if(dogFilter && catFilter){
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.dogs === true && item.cats === true) {
              filtered.push(item);
            }
          }
          return filtered;
        } else if(dogFilter && !catFilter){
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.dogs === true) {
              filtered.push(item);
            }
          }
          return filtered;
        } else if(!dogFilter && catFilter){
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.cats === true) {
              filtered.push(item);
            }
          }
          return filtered;
        }
  	  };
  	})

    .filter('catFilterer', function () {
      return function (items, catFilter) {
        if(catFilter === false || catFilter === undefined){
          return items;
        }
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (item.dogs === true) {
            filtered.push(item);
          }
        }
        return filtered;
      };
    });

