app.controller('DashboardCtrl',['$scope','DashboardService',function($scope,DashboardService){
	$scope.traingList = DashboardService.traingList;
	$scope.doVote = function(voteType, trngItem) {
		(voteType === 'up') ? trngItem.votes++ : trngItem.votes--;
	}
}]);