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

  it('should have a getRating function', function(){
    expect(scope.getRating).to.be.a('function');
  });

  it('should have a GoToProfile function', function(){
    expect(scope.GoToProfile).to.be.a('function');
  });

});

xdescribe('SitterManager', function(){
  'use strict';

  beforeEach(module('app'));


  xit('should contain GetSitters function', function(){});
  xit('should return a list of sitters when GetSitters is called', function(){});




});
