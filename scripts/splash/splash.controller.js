angular.module('app')
  .controller('SplashController', ['$scope', '$state', '$location', '$anchorScroll', 'CityFactory', function($scope, $state, $location, $anchorScroll, CityFactory) {
    

    $scope.setCity = function(cityName){
      console.log(CityFactory.getCity());
      if(CityFactory.getCity()){
        $state.go('search');
      } else {

        CityFactory.setCity(cityName);
        // CityFactory.getCity();
        $state.go('search');
      }

    };

    function initialize() {
      // Create the autocomplete object, restricting the search
      // to geographical location types.
      autocomplete = new google.maps.places.Autocomplete(
          /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
          { types: ['geocode'], 
            componentRestrictions: {country: "us"} });
      // When the user selects an address from the dropdown,
      // populate the address fields in the form.
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace().formatted_address.split(',')[0];   
        console.log(place);     
        CityFactory.setCity(place);
      });
    }
    initialize();

    // jump to bottom of page when user clicks on white down arrow
    $scope.goToBottom = function(){
      //set the location.hash to id="bottom" in the "meetTheTeamSection" material-toolbar
      $location.hash('bottom');
      //call $anchorScroll() to jump to bottom of page
      $anchorScroll();
      //clear url path so that it does not display the id in the url path
      $location.url($location.path());
    };

  }]);
