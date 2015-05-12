var mainApp = angular.module('MainApp');

mainApp.controller('NavHeaderCtrl', ['$scope', function($scope){
	$scope.tabs = [
		'Documentation',
		'About us',
		'Order'
	];
}]);