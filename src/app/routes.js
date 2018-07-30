angular.module('app')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'homePage.html',
				controller: 'RegisterCtrl'			
			})
			.when('/login', {
				templateUrl: 'login.html',
				controller: 'LoginCtrl'				
			})
			.when('/posts', {
				templateUrl: 'posts.html',
				controller: 'PostsCtrl'				
			})
}]);