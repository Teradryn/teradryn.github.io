var mainApp = angular.module('MainApp');

mainApp.controller('AboutSectionCtrl', ['$scope', function($scope){
	$scope.aboutColumns = [

		{
			title:   "One",
			image:   "/images/test.png",
			content: "This is the first column in the main points sub section of the about section of the main website, you can see it towards the top."
		},
		{
			title:   "Two",
			image:   "/images/test.png",
			content: "Please change the content that is in these columns they need to say something that is general enough about the company."
		},
		{
			title:   "Three",
			image:   "/images/test.png",
			content: "Try to make all of the content the same length and keep the titles to one word or two small words. This column has two sentences."
		}
	];

}]);