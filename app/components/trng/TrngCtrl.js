app.controller('TrngCtrl',['$scope','UtilServices','DashboardService','$timeout','AdminService',function($scope,UtilServices,DashboardService,$timeout,AdminService){
	$scope.status = UtilServices.getSuccessObj();
	$scope.tutorList = AdminService.tutorList;
	$scope.courseList = AdminService.courseList;
	$scope.resetForm = function(form){
		UtilServices.hideOrShowErrors(form,false);
		$scope.trngObj = {};
	};
	$scope.saveForm = function(form){
		if(form.$invalid) {
			UtilServices.hideOrShowErrors(form,true);
			return false;
		}
		var trngObj =$scope.trngObj;
		trngObj.votes = 0;
		trngObj.date = new Date();
		trngObj.trngId = Math.floor((Math.random() * 10000) + 1);
		DashboardService.traingList.push(trngObj);
		$scope.status.success = true;
		$scope.status.successMsg = "Traning Saved Success fullysdsdsdsds";
		$scope.resetForm(form);
		$timeout(function(){
			$scope.status = UtilServices.getSuccessObj();
		},5000);
	};
		
}]);