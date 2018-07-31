angular.module('app').directive('blogs', function(){
	return {
		restrict: "E",
		templateUrl: "blogs.html",
		controller: "PostsCtrl"
	};
});