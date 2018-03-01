angular.module('app', []);
angular.module('app').controller('PostsCtrl', function($scope, PostSvc){

	$scope.addPost = function(){		

		if($scope.postBody) {
			var post = {
				username : "david",
				body : $scope.postBody
			};
			console.log("POST: 1st step");
			PostSvc.create(post)
			.then( function(data, status, headers, config) {
				$scope.getPosts();
				console.log("POST: success");
			}, 
			function(data, status, headers, config) {
				console.error('POST: Error');
			});	
				
			// Making the field empty
			$scope.postBody=null;
		}
	};

	$scope.getPosts = function(){
		PostSvc.fetch()
		  .then(function(posts){ $scope.posts = posts.data; }, 
		  function(data, status, headers, config) {
			console.log('GET: Error');
		});
	};

});
angular.module('app').service('PostSvc', function ($http) {

	this.fetch = function() {
		return $http.get('/api/posts');
	};

	this.create = function(post) {
		return $http.post('/api/posts', post);
	};
	
});