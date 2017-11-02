app.service('Constants', ['$http', function($http){
	this.common_constants = {
		homeImgUrl : 'assests/images/home.jpg',
		myappName : 'test',
		sucessImgUrl : 'assests/images/accept.png',
		failImgUrl : 'assests/images/cancel2.png',
		phoneRegex: /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/
	};
	this.adminConstants = {
		form_types: [
 			{formValue: 'tutor',formDisplayName: 'Add Tutor'},
 			{formValue: 'course',formDisplayName: 'Add Training'}
		]
	};

}]);