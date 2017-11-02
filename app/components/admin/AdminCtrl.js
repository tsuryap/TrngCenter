app.controller('AdminCtrl',['$scope','Constants','AdminService','UtilServices',function($scope,Constants,AdminService,UtilServices){
	$scope.formsList = Constants.adminConstants.form_types;
	$scope.tutorObj = {};
	$scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
	$scope.resetForm = function(form){
		UtilServices.hideOrShowErrors(form,false);
		$scope.tutorObj = {};
	};
	$scope.addForm = function(form,formName){
		if(form.$invalid) {
			UtilServices.hideOrShowErrors(form,true);
			return false;
		}
		if(formName === 'tutor') {
			AdminService.tutorList.push($scope.tutorObj);
		}
	};
}]);