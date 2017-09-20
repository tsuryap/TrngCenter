var app = angular.module('trngctr', ['ui.router']);

app.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('home',{
		url: '/home',
		templateUrl: 'app/components/home/home.html',
		controller: 'HomeCtrl'
	});
	$stateProvider.state('dashboard',{
		url: '/dashboard',
		templateUrl: 'app/components/dashboard/dashboard.html'
	});
	$stateProvider.state('trng',{
		url: '/trng',
		templateUrl: 'app/components/trng/trng.html',

	});
	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: 'app/components/admin/admin.html'
	});
}]);