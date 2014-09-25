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

  it('Name should be a string', function(){
    expect(scope.petSitter['name']).to.be.a('string');
  });

  it('Location should be a string', function(){
    expect(scope.petSitter['userLocation']).to.be.a('string');
  });

  it('Bio should be a string', function(){
    expect(scope.petSitter['bio']).to.be.a('string');
  });

  it('Cost should be a number', function(){
    expect(scope.petSitter['cost']).to.be.a('number');
  });

  it('petToWatchArray should be an array', function(){
    expect(Array.isArray(scope.petSitter['petToWatchArray'])).to.equal(true);
  });

});
