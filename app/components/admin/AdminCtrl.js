app.controller('AdminCtrl',['$scope','Constants','AdminService',function($scope,Constants,AdminService){
	$scope.formsList = Constants.adminConstants.form_types;
	$scope.tutorObj = {};
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