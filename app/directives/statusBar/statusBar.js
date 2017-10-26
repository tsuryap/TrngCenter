app.directive('statusBar', ['UtilServices', function(UtilServices){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: "app/directives/statusBar/status.html",
		scope: {
			msg: '='
		},
		controller: 'statusBarCtrl'
	};
}]);