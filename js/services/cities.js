// Angular service, to get the json data thru http AJAX.
appMap.factory('cities', ['$http', 
	function($http){
		return $http.get('js/city.json')
			.success(function(data){
				return data;
			})
			.error(function(err){
				return err;
			});
	}]);
