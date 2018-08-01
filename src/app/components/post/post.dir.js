angular.module('app').directive('postSection', function(){
	return {
		restrict: "E",
		scope: {
			username : '@',
			title : '@',
			body : '@',
			tags : '@',
			date : '@'
		},
		templateUrl: "templates/post.html"
		
	};
});