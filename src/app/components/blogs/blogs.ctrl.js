angular.module('app').controller('BlogsCtrl', function($scope, BlogsSvc){
	var numTags = 1;
	$scope.tags = [];

	$scope.addPost = function(){		
		//for (i = 0; i < numTags; i++) { 
			$scope.tags.push($scope.tag1);
		//}
		if($scope.currentUser){
			if($scope.postBody) {
				var post = {
					username : $scope.currentUser.username,
					title: $scope.title,
					postBody : $scope.postBody,
					tags : $scope.tags,
					date : $scope.date
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
				$scope.username = null;
				$scope.title = null;
				$scope.postBody = null;
				$scope.tags = [];
				$scope.date = null;
			}
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

	$scope.addTag = function(elem){
		//elem = elem.target.parentElement.parentElement.parentElement;
		console.log('run e ' );
		numTags++;
		var newTagElemSection = "<div class='form-group row'><label class='col-sm-2 col-form-label'>Tag</label><div class='col-7'><input ng-model='tag" + numTags +"' class='form-control' /></div><span class='input-group-btn'><button class='btn btn-success' ng-click='addTag($event)' type='button'><span class='fa fa-plus' id='tagSpan' ></span></button></span></div>";
		var currentTagElemSection = "<div class='form-group row'><label class='col-sm-2 col-form-label'>Tag</label><div class='col-7'><input ng-model='tag" + (numTags - 1) +"' class='form-control' /></div><span class='input-group-btn'><button class='btn btn-danger' ng-click='removeTag($event)' type='button'><span class='fa fa-minus'></span></button></span></div>";

		var tagClass = angular.element( elem.currentTarget.parentElement.parentElement );
		//var tagBtn = angular.element( document.querySelector( '#tagBtn' ) );
		//var tagSpan = angular.element( document.querySelector( '#tagSpan' ) );

		tagClass.after(newTagElemSection);

		tagClass.replaceWith(currentTagElemSection);

		console.log('type of: ' +  elem.target.parentNode.parentNode.parentNode );
		console.log('type of: ' +  elem.currentTarget.parentElement.parentElement.classList );
		//elem.currentTarget.removeClass('btn-danger').addClass('btn-success');
		//elem.currentTarget.removeClass('fa-minus').addClass('fa-plus');
		
		//tagBtn.removeClass('btn-success').addClass('btn-danger');
		//tagSpan.removeClass('fa-plus').addClass('fa-minus');
	};

	$scope.removeTag = function(elem){
		//var btnClass = angular.element( document.querySelector( '#tagBtn' ) );
		//var spanClass = angular.element( document.querySelector( '#tagSpan' ) );
		numTags--;
		var tagClass = angular.element( elem.currentTarget.parentElement.parentElement );
		tagClass.remove();


		console.log('remove of: ' +  tagClass.attr );
		//elem.currentTarget.removeClass('btn-danger').addClass('btn-success');
		//elem.currentTarget.removeClass('fa-minus').addClass('fa-plus');
		//elem.currentTarget.after('<span >test</span>');
		console.log('value of: ' + elem.currentTarget.value);
	};


});