var app = angular.module('trngctr', ['ui.router']);

app.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('home',{
		url: '/home',
		template: '<h1> I am home state </h1>'
	});
	$stateProvider.state('dashboard',{
		url: '/dashboard',
		template: '<h1> I am Dashboard state </h1>'
	});
	$stateProvider.state('trng',{
		url: '/trng',
		template: '<h1> I am Training state </h1>'
	});
	$stateProvider.state('admin',{
		url: '/admin',
		template: '<h1> I am admin state </h1>'
	});
}]);