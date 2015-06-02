var homePage = angular.module('HomePageApp', []);


// Main controller
homePage.controller('HomePageCtrl', ['$scope', function($scope) {
	$scope.comingSoon	= '/partials/comingSoon.html';
}]);


// Coming soon controller, move to module in new js file.
homePage.controller('ComingSoon', ['$scope', '$interval', function($scope, $interval) {
	// Map time to launch to scope variables
	var releaseDay 		= moment('06-01-2015 00:00:00', 'MM-DD-YYYY HH:mm:ss');
	var today			= moment();

	$scope.days 	= releaseDay.diff(today, 'days');
	$scope.hours 	= releaseDay.diff(today, 'hours') 	% 24; // 24 hours in a day
	$scope.minutes	= releaseDay.diff(today, 'minutes') % 60; // 60 minutes in an hour
	$scope.seconds	= releaseDay.diff(today, 'seconds') % 60; // 60 seconds in a minute

	// Timer function
	function tickDown(){
		// reduce seconds
		if($scope.seconds > 0) {
			$scope.seconds--;
		} else {
		$scope.seconds = 60;
		// reduce minutes
		if ($scope.minutes > 0) {
			$scope.minutes--;
		} else {
		// reduce hours
		if ($scope.hours > 0) {
			$scope.hours--;
		} else {
		// reduce days
		if ($scope.days > 0) {
			$scope.days--;
		}}}}
	}
	
	// Call timer function per second
	$interval(tickDown, 1000);
}]);

homePage.controller('EmailSignUp', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.email = '';
	$scope.status = 'waiting';

	$scope.submit = function(e) {
		// This is an example for css and html flow
		$scope.status = 'sending';
		$timeout(function() {$scope.status = 'sent'; console.log('sent')}, 1000);

		// Todo Make an api call to add to email list.
	}

}]);