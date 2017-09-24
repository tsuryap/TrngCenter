angular.module('common',[]);
var app = angular.module('trngctr', ['ui.router','common']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('home',{
		url: '/home',
		templateUrl: 'app/components/home/home.html',
		controller: 'HomeCtrl'
	});
	$stateProvider.state('dashboard',{
		url: '/dashboard',
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	});
	$stateProvider.state('trng',{
		url: '/trng',
		templateUrl: 'app/components/trng/trng.html',
		controller:'TrngCtrl'
	});
	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: 'app/components/admin/admin.html',
		controller :'AdminCtrl'
	});
	$urlRouterProvider.otherwise('/home');
}]);
