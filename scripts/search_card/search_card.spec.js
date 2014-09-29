describe('SearchCardController', function() {
  'use strict';

  beforeEach(module('app'));

  var controller, scope;
  //inject the $controller and $rootScope services
  //in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $injector){
    //Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    controller = $controller('SearchCardController', {
      $scope: scope
    });

  }));

  it('SearchCardController should exisit', function(){
    expect(controller).to.not.equal(undefined);
  });

  xit('should load pet sitter\'s username', function(){
    expect(scope.petSitter['name']).to.be.a('string');
  });

  xit('should load pet sitter\'s rating', function(){
    expect(scope.rating).to.not.equal(undefined);
  });

  xit('should load pet sitter\'s location', function(){
    expect(scope.petSitter['userLocation']).to.be.a('string');
  });

  xit('should load pet sitter\'s bio', function(){
    expect(scope.petSitter['bio']).to.be.a('string');
  });

  xit('should load pet sitter\'s pet watching preferences', function(){
    expect(scope.petSitter['petToWatchObject']).to.be.a('object');
  })

  xit('should load pet sitter\'s rate', function(){
    expect(scope.petSitter['dailyRate']).to.be.a('number');
  });

});
