app.controller('AdminCtrl', ['$scope', 'Constants', 'AdminService', 'UtilServices', function($scope, Constants, AdminService, UtilServices) {
	$scope.formsList = Constants.adminConstants.form_types;
	$scope.tutorObj = {};
	$scope.courseObj = {};
	$scope.phoneNumbr = Constants.common_constants.phoneRegex;
	$scope.resetForm = function(form, formName) {
		UtilServices.hideOrShowErrors(form, false);
		if (formName === 'tutor') {
			$scope.tutorObj = {};
			$scope.tutorObj.email = "";
			$scope.tutorObj.phone = "";
		}else if(formName === 'course'){
			$scope.courseObj = {};
		}
	};
	$scope.addForm = function(form, formName) {
		if (form.$invalid) {
			UtilServices.hideOrShowErrors(form, true);
			return false;
		}
		if (formName === 'tutor') {
			AdminService.tutorList.push($scope.tutorObj);
		}else if(formName === 'course'){
			AdminService.courseList.push($scope.courseObj);
		}
		debugger;
	};
}]);