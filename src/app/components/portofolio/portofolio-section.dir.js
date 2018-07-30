angular.module('app').directive('portofolioSection', function(){
	return {
		restrict: "E",
		templateUrl: "templates/portofolio-section.html",
		controller: "portofolioCtrl"
	};
});