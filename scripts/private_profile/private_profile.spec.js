describe('private_profile', function () {
  'use strict';

  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $injector) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('PrivateProfileController', {
      $scope: scope
    });

  }));

  it('PrivateProfileController should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  xit('Name should be a string', function(){
    expect(scope.petSitter['name']).to.be.a('string');
  });

  xit('Location should be a string', function(){
    expect(scope.petSitter['userLocation']).to.be.a('string');
  });

  xit('Bio should be a string', function(){
    expect(scope.petSitter['bio']).to.be.a('string');
  });

  xit('Cost should be a number', function(){
    expect(scope.petSitter['dailyRate']).to.be.a('number');
  });

  xit('petToWatchObject should be an object', function(){
    expect(scope.petSitter['petToWatchObject']).to.be.a('object');
  });

});
