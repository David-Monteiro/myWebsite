angular.module('app')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: 'posts.html',
				controller: 'PostsCtrl'
				
		});
}]);