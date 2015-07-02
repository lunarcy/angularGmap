// Defined Directives for the Centering map button. 
appMap.directive('mapCenter', function(){
  return {
    restrict: 'EA', 	// directive as elemment
    scope: false,
    //scope: { gmap : "=", center : "&" }  // define isolate scope
    templateUrl: 'js/directives/mapCenter.html',	// load the html tamplate.
    link: function(scope, element, attrs) {
    	// Set the Text on the self defined button.
	    scope.buttonText = "Center Map";

	    // if use isolate Scope, Call the Parent centerMap() function in mapController, with the 'map' object as input param.
	    /*scope.centerMap = function() {
	      scope.centerMap(scope.$parent.map);
		  }*/
	  }
  };
}); 
