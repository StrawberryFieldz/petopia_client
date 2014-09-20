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

  it('should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  it('should store city search input in scope', function() {
    expect(scope.citySearch).to.be.a('string');
  });

  it('should have a search function', function() {
    expect(scope.search).to.be.a('function');
  });

});