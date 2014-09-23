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
    ctrl = $controller('SplashController', {
      $scope: scope
    });

  }));

  it('SplashController should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  it('SplashController should have a getCity function', function() {
    expect(scope.getCity).to.be.a('function');
  });

});
