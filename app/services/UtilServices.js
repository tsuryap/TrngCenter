app.factory('UtilServices', function() {

	var obj = {
		hideOrShowErrors: function(form, touched) {
		   form.$setUntouched(!touched);
		},
		getSuccessObj: function() {
			var status = {
				success: false,
				failure: false,
				successMsg: '',
				failureMsg: ''
			};
			return status;
		}
	}
	return obj;
});