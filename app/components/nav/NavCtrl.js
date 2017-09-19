app.controller('NavCtrl', ['$scope',function($scope){
	$scope.appName = 'Online Training Center';
	$scope.navHeaders = [
        {
        	headerName: 'Dashboard',
        	href:'#dashboard'
        },
        {
        	headerName: 'Trainings',
        	href:'#trng'
        },
        {
        	headerName: 'Admin',
        	href:'#admin'
        }
	];
}]);