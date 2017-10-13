app.controller('TrngCtrl',['$scope','UtilServices',function($scope,UtilServices){
	$scope.resetForm = function(form){
		$scope.trngObj = {};
		UtilServices.hideOrShowErrors(form,false);
	};
	$scope.saveForm = function(form){
		if(form.$invalid) {
			UtilServices.hideOrShowErrors(form,true);
			return false;
		}

	};	
}]);