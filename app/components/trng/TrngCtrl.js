app.controller('TrngCtrl',['$scope',function($scope){
	$scope.resetForm = function(){
		$scope.trngObj = {};
	};
	$scope.saveForm = function(form){
		if(form.$invalid) {
			return false;
		}

	};	
}]);