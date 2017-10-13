app.factory('UtilServices', function(){
	var obj = {
		hideOrShowErrors: function(form,touched){
			var errorObj = form.$error;
			for(var key in errorObj) {
				if(errorObj.hasOwnProperty(key)){
					var array = errorObj[key];
					for(var i= 0;i< array.length;i++){
						array[i].$touched = touched;
					}
				}
		    }
		}
	}
	return obj;
});