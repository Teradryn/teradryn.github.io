var mainApp = angular.module('MainApp');

mainApp.controller('AboutSectionCtrl', ['$scope', function($scope){
	$scope.aboutColumns = [

		{
			title:   "Fast",
			image:   "/images/fun.png",
			// content: "All of our products, while created by skilled engineers"
		},
		{
			title:   "Fun",
			image:   "/images/rocket.svg",
			// content: "Please change the content that is in these columns they need to say something that is general enough about the company."
		},
		{
			title:   "Affordable",
			image:   "/images/affordable.png",
			// content: "Try to make all of the content the same length and keep the titles to one word or two small words. This column has two sentences."
		}
	];

}]);