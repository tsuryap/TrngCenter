app.controller('DashboardCtrl',['$scope','DashboardService',function($scope,DashboardService){
	$scope.traingList = DashboardService.traingList;
}]);