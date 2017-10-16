app.controller('TrngCtrl',['$scope','UtilServices','DashboardService','$timeout',function($scope,UtilServices,DashboardService,$timeout){
	$scope.status = UtilServices.getSuccessObj();
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
		console.log(trngObj);
		DashboardService.traingList.push(trngObj);
		$scope.status.success = true;
		$scope.status.successMsg = "Traning Saved Success fully";
		$scope.resetForm(form);
		$timeout(function(){
			$scope.status = UtilServices.getSuccessObj();
		},5000);
	};
}]);