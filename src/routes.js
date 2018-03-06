angular.module('app')
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				controller: 'Posts.Crtl.js',
				templateUrl: 'posts.html'
		});
});