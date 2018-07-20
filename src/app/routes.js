angular.module('app')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'login.html',
				controller: 'LoginCtrl'			
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