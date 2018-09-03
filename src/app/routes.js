angular.module('app')
	.config( function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'homePage.html'		
			})
			.when('/blogs', {
				templateUrl: 'blogs.html',
				controller: 'BlogsCtrl'				
			})
			.when('/resume', {
				templateUrl: 'resumePage.html'/*,
				controller: 'PostsCtrl'		*/		
			})

});


	  