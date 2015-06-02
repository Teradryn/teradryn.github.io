var second = 1000; // miniseconds to seconds


var mainApp = angular.module('MainApp');

mainApp.controller('EmailSignupCtrl', ['$scope', '$http', '$timeout', function(scope, http, timeout){
	scope.emailInfo = {
		name: "",
		email: ""
	};
	scope.status = "waiting";
	scope.signup = function() {
		scope.status = "sending";
		http({
			url: 	'http://teradryn-mgmt.appspot.com/email-list',
			method: 'get',
			params: scope.emailInfo
		}).success(function(data) {
			console.log(data);
			scope.status = "sent";
		}).error(function(err) {
			scope.status = "waiting";
			scope.error  = err;
			console.error(err);
		});
	}
}]);