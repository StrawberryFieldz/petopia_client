// angular.module('app')
// .directive('googlemap', [function(){
//   return {
//           restrict: 'E',  // restricts this directive just to elements
//           template: '<div id="gmaps"></div>',  // this is what will replace the directive
//           replace: true,  // replaces the direct in the HTML
//           scope: {
//             onCreate: '&'
//           },
//           link: function ($scope, $element, $attr) {
//             function initialize() {
//               var mapOptions = {
//                 center: new google.maps.LatLng(37.7850179, -122.4326714), // coordinates for San Francisco
//                   zoom: 13, // sets initial zoom for default map
//                   mapTypeId: google.maps.MapTypeId.ROADMAP, // google maps option
//                   scrollwheel: false // disables scrollwheel functionality on map
//               };
//               var map = new google.maps.Map($element[0], mapOptions);  // creates a new map
//               console.log('The map: ', map);
//               $scope.onCreate({map: map}); // links this map to the controller
//             }
//             initialize();
//           }
//         };
//     }]);