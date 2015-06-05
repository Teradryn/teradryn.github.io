var homePage = angular.module('MainApp', [
	'ngMaterial',
]);


// Main controller
homePage.controller('HomePageCtrl', ['$scope', '$mdSidenav', '$mdUtil', '$window', function(scope, sidenav, mdUtil, win) {
	// Coming Soon
	scope.comingSoon	= '/partials/coming-soon.html';
	scope.emailSignUp	= '/partials/email-sign-up.html';
	scope.splash		= '/partials/splash.html';
	// Headers
	scope.splashHeader	= '/partials/headers/splash-header.html';
	scope.navHeader	= '/partials/headers/nav-header.html';
	// Sections
	scope.aboutSection	= '/partials/sections/about-section.html';
	scope.hubSection	= '/partials/sections/hub-section.html';
	scope.callToAction	= '/partials/sections/call-to-action.html';
	scope.teamMembers	= '/partials/sections/team.html';

	var contentRef = "";
	scope.invokeSidebar = function(contentId) {
		if(contentRef == contentId){
			sidenav('right').close()
			contentRef = "";
		}else{
			contentRef = contentId;
			var content = angular.element('#'+contentId).html();
			angular.element('#sidenav-content').html(content)
			sidenav('right').open()
		}
	}
	
	scope.close = function() {
		sidenav('right').close();
		contentRef = "";
	}

	scope.adjustTeamMembers = function() {
		var teamMemebers = angular.element(document.getElementsByClassName('team-member'));
		for (var i = 0; i < teamMemebers.length; i++) {
			var el = angular.element(teamMemebers[i]);
			el.css({height: el.width() + 'px'});
		};
	}

	// scope.$watch(function() {}, scope.adjustTeamMembers);
	angular.element(win).bind('resize', scope.adjustTeamMembers);
}]);