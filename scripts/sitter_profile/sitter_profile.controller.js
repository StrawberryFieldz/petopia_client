angular.module('app')
  .controller('SitterProfileController', ['$scope', '$state', 'SitterManager', 'PawIconManager', 'GoogleMapManager', 'PopUp', function($scope, $state, SitterManager, PawIconManager, GoogleMapManager, PopUp){
    SitterManager.FindSitter($state.params.username, function(sitter){
      if(sitter)
        $scope.sitter = sitter;
      else{
        console.log("no sitter found");
      }
    });

    $scope.getRating = function(sitter){
      return PawIconManager.GetIcons(sitter.rating);
    };

    $scope.getLatLong = function(sitter){

    };

    $scope.backToSearch = function(){
      $state.go('search');
    };

    $scope.mapCreated = function(map) {
        $scope.map = map;  // this sets the map we just created in our directive to the $scope
        $scope.placeMarkers(); // this places the first marker on our map
    };

    $scope.schedule = function(e){
      PopUp.PopUpCall(e, './scripts/sitter_profile/sitter_profile.popup.html');
    };

  }])
  .directive('googlemap', ['GoogleMapManager', function(GoogleMapManager){
  return {
          restrict: 'E',  // restricts this directive just to elements
          template: '<div id="gmaps"></div>',  // this is what will replace the directive
          replace: true,  // replaces the direct in the HTML
          scope: {
            onCreate: '&'
          },
          link: function ($scope, $element, $attr) {
            function initialize() {

              GoogleMapManager.lookupGeoCode('San Francisco', '94105', function(data){
                console.log("Inside lookupGeoCode callback", data);
                var latitude = data.results[0].geometry.location.lat;
                var longitude = data.results[0].geometry.location.lng;

                var mapOptions = {
                  center: new google.maps.LatLng(latitude, longitude), // coordinates for San Francisco
                    zoom: 13, // sets initial zoom for default map
                    mapTypeId: google.maps.MapTypeId.ROADMAP, // google maps option
                    scrollwheel: false // disables scrollwheel functionality on map
                };
                console.log('latitude,longitude' + latitude+","+longitude);
                var map = new google.maps.Map($element[0], mapOptions);  // creates a new map
                console.log('The map: ', map);
                $scope.onCreate({map: map}); // links this map to the controller
              });
            }
            initialize();
          }
        };
    }]);
