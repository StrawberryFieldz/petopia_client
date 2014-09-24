describe('SearchController', function () {
  'use strict';

  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $injector) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('SearchController', {
      $scope: scope
    });

  }));

  it('should exist', function() {
    expect(ctrl).to.not.equal(undefined);
  });

  it('should load sitters', function(){
    expect(scope.sitters).to.not.equal(undefined);
  });

  it('should handle if no sitters are present', function(){
    // if no sitters are present display a message to the user
    // and 
    
  });


});

describe('SitterManager', function(){
  'use strict';

  beforeEach(module('app'));


  it('should contain GetSitters function', function(){});
  it('should return a list of sitters when GetSitters is called', function(){});




});
