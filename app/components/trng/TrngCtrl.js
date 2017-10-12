app.controller('TrngCtrl',['$scope',function($scope){
	$scope.resetForm = function(form){
		$scope.trngObj = {};
		var errorObj = form.$error;
			for(var key in errorObj) {
				var array = errorObj[key];
				for(var i= 0;i< array.length;i++){
					array[i].$touched = false;
				}
		 }
	};
	$scope.saveForm = function(form){
		if(form.$invalid) {
			var errorObj = form.$error;
			for(var key in errorObj) {
				var array = errorObj[key];
				for(var i= 0;i< array.length;i++){
					array[i].$touched = true;
				}
			}
			return false;
		}

	};	
}]);