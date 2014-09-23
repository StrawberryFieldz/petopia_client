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

});
