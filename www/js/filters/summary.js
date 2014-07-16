var app = angular.module('empanadapp');

app.filter('summary', function(){
	return function(text, maxLength) {
		if (text.length > maxLength - 3) {
			return text.slice(0, maxLength - 3) + '...'
		}
		return text
	}
})