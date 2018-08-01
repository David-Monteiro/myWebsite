angular.module('app').service('BlogsSvc', function ($http) {

	this.fetch = function() {
		return $http.get('/api/posts');
	};

	this.create = function(post) {
		return $http.post('/api/posts', post);
	};

});