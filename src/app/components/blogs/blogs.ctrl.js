angular.module('app').controller('BlogsCtrl', function($scope, BlogsSvc){

	$scope.addPost = function(){		

		if($scope.postBody) {
			var post = {
				username : $scope.currentUser.username,
				title: $scope.title,
				body : $scope.postBody,
				tags : $scope.tags,
				body : $scope.date
			};
			console.log("POST: 1st step");
			BlogsSvc.create(post)
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
		console.log('GETposts');
		BlogsSvc.fetch()
		  .then(function(posts){ $scope.posts = posts.data; console.log('GET: success');}, 
		  function(data, status, headers, config) {
			console.log('GET: Error');
		});
	};

});