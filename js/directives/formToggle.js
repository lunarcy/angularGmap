// Self defined Directives. 
app.directive('formToggle', function(){
  return {
    restrict: 'E', 	// directive as elemment
    scope: { }, 
    templateUrl: 'js/directives/formToggle.html',	// load the html tamplate.
    link: function(scope, element, attrs) {
    	// Set the Text on the self defined button.
	    scope.buttonText = "Toggle", 

	    // init the form Field default values.
	    scope.$parent.init();

	    // Call the Parent toggle() function, which is in mainController.
	    scope.toggle = function() {
	      scope.$parent.toggle();
		}
	}
  };
}); 