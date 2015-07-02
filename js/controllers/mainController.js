/**
* Javascript Exercise 2 - AngularJS - Directives.
* @ Bin Jiang, 10 June, 2015
* 
**/

// Controller of the app. 
app.controller('formControl', function($scope, $http){ 
	
	// read the data for fields.
	$scope.car = { make:  "volvo", model: "s60", year:  "2012", color: "white" };
	// Also could load data for fields from Http AJAX call.
    /*$http.get("js/car.json").success( function(response) { $scope.rentCar = angular.copy(response); });*/

    // Set the Field Hide Flag as True for Default. 
	$scope.hidField = true;

	// Init Function for init and reset the form Field default values.
	$scope.init = function() {
        $scope.rentCar = angular.copy($scope.car);
    };

    // Toggle the editable/uneditable state of a set of form fields, reset the fields values.
    $scope.toggle = function() {
    	$scope.init();
        if($scope.hidField) { 
	        $scope.hidField = false; 
		  }
	      else {
			$scope.hidField = true; 
		  }
    };
});
