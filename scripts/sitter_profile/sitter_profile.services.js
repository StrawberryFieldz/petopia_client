// Basic structure for a factory
angular.module('app')
  .factory('SitterProfile', ['$http', function($http){
    var sitterStub = {
      username: "iamtyler",
      name: "Tyler",
      bio: "Lorem ipsum dolor sit amet, ne quod novum mei.Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.",
      location: "San Francisco",
      zip: 94103,
      photo: "https://avatars1.githubusercontent.com/u/7740415?v=2&s=400",
      cost: 35,
      rating: 4,
      dogs:true,
      cats: false
    };
    return {
      GetSitter: function(callback){
        //use stub data until rest api is implemented.
        return this.GetStubData();
      },
      GetStubData: function(callback){
        return sitterStub;
      }
    };
  }]);

