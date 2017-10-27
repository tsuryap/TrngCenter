app.controller('AdminCtrl',['$scope','Constants',function($scope,Constants){
	$scope.formsList = Constants.adminConstants.form_types;
	console.log($scope.formsList);
}]);