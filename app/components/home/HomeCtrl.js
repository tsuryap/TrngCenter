app.controller('HomeCtrl', ['$scope','Constants',function($scope,Constants){
	$scope.test1 = 'I am home state from html file.';
	$scope.imageUrl = Constants.common_constants.homeImgUrl;
	console.log($scope.imageUrl);
}]);

