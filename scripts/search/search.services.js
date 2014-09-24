// Basic structure for a factory
angular.module('app')
  .factory('SitterManager', ['$http', 'CityFactory', function($http, CityFactory){
  	var stub = [
			{
				name: "Tyler",
				location: "San Francisco",
				zip: 94103,
				photo: "https://avatars1.githubusercontent.com/u/7740415?v=2&s=400",
				cost: 35,
				rating: 0.5
			},
			{
				name: "Wil",
				location: "San Bruno",
				zip: 94103,
				photo: "https://avatars2.githubusercontent.com/u/7147319?v=2&s=400",
				cost: 1,
				rating: 0
			},
			{
				name: "Dominic",
				location: "LA",
				zip: 84732,
				photo: "https://avatars2.githubusercontent.com/u/6237873?v=2&s=400",
				cost: 60,
				rating: 4
			},
			{
				name: "Jeff",
				location: "Boston",
				zip: 03062,
				photo: "https://avatars2.githubusercontent.com/u/7004952?v=2&s=400",
				cost: 40,
				rating: 5
			},
			{
				name: "Bob",
				location: "San Francisco",
				zip: 12345,
				photo: "http://www.mateoj.com/bayside/wp-content/uploads/2014/07/521013543_1385596410.jpg",
				cost: 15,
				rating: 1
			},
			{
				name: "Sam",
				location: "San Francisco",
				zip: 94103,
				photo: "http://static.ddmcdn.com/gif/dog-breed-dog-breed-pictures1.jpg",
				cost: 65,
				rating: 3.5
			},
		]
  	return {
  		GetSitters: function(callback){
        //use stub data until rest api is implemented.
        return this.GetStubData();
  		},
  		GetStubData: function(callback){
  			return stub;
  		}
  	}
  }]);

