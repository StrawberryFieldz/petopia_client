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
				rating: 4,
				bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
	      dogs:true,
	      cats: false
			},
			{
				name: "Wil",
				location: "San Bruno",
				zip: 94103,
				photo: "https://avatars2.githubusercontent.com/u/7147319?v=2&s=400",
				cost: 99,
				rating: 5,
				bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
	      dogs:true,
	      cats: false
			},
			{
				name: "Dominic",
				location: "LA",
				zip: 84732,
				photo: "https://avatars2.githubusercontent.com/u/6237873?v=2&s=400",
				cost: 60,
				rating: 4,
				bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
	      dogs:true,
	      cats: true
			},
			{
				name: "SomeBozo",
				location: "Boston",
				zip: 03062,
				photo: "https://avatars2.githubusercontent.com/u/7004952?v=2&s=400",
				cost: 40,
				rating: 1,
				bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
	      dogs:false,
	      cats: false
			},
			{
				name: "Bob",
				location: "San Francisco",
				zip: 12345,
				photo: "http://www.mateoj.com/bayside/wp-content/uploads/2014/07/521013543_1385596410.jpg",
				cost: 15,
				rating: 2,
				bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
	      dogs:true,
	      cats: false
			},
			{
				name: "Sam",
				location: "San Francisco",
				zip: 94103,
				photo: "http://static.ddmcdn.com/gif/dog-breed-dog-breed-pictures1.jpg",
				cost: 65,
				rating: 3
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
				rating: 1
			},
			{
				name: "Bob",
				location: "San Francisco",
				zip: 12345,
				photo: "http://www.mateoj.com/bayside/wp-content/uploads/2014/07/521013543_1385596410.jpg",
				cost: 15,
				rating: 2
			},
			{
				name: "Sam",
				location: "San Francisco",
				zip: 94103,
				photo: "http://static.ddmcdn.com/gif/dog-breed-dog-breed-pictures1.jpg",
				cost: 65,
				rating: 3
			},{
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
				rating: 1
			},
			{
				name: "Bob",
				location: "San Francisco",
				zip: 12345,
				photo: "http://www.mateoj.com/bayside/wp-content/uploads/2014/07/521013543_1385596410.jpg",
				cost: 15,
				rating: 2
			},
			{
				name: "Sam",
				location: "San Francisco",
				zip: 94103,
				photo: "http://static.ddmcdn.com/gif/dog-breed-dog-breed-pictures1.jpg",
				cost: 65,
				rating: 3
			},{
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
				rating: 1
			},
			{
				name: "Bob",
				location: "San Francisco",
				zip: 12345,
				photo: "http://www.mateoj.com/bayside/wp-content/uploads/2014/07/521013543_1385596410.jpg",
				cost: 15,
				rating: 2
			},
			{
				name: "Sam",
				location: "San Francisco",
				zip: 94103,
				photo: "http://static.ddmcdn.com/gif/dog-breed-dog-breed-pictures1.jpg",
				cost: 65,
				rating: 3
			},
		];
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
  }]);

