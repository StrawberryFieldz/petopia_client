describe('SplashController', function () {
  'use strict';

  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $injector) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('SitterProfileController', {
      $scope: scope
    });

  }));

  it('SitterController should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  it('SitterController should have a getRating function', function() {
    expect(scope.getRating).to.be.a('function');
  });

  it('SitterController should have a getLatLong function', function() {
    expect(scope.getLatLong).to.be.a('function');
  });



});
