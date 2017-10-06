app.controller('TrngCtrl',['$scope',function($scope){
	$scope.resetForm = function(){
		$scope.trainingName = '';
		$scope.tutorName = '';
		$scope.description = '';
	};
	$scope.saveForm = function(){
		
	}	
}]);