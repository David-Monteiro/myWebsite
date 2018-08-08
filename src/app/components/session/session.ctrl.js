angular.module('app')
.controller('SessionCtrl', function($scope, UserSvc) {

	$scope.signIn = false;
	$scope.signUp = false;

	$scope.login = function(username, password){
		UserSvc.login(username, password)
			.then(function(user){
				$scope.$emit('login', user.data);
				$scope.setLocalUser(user.data);
				//$scope.getLocalUser();
				//$scope.clearLocalUser();
		})
	}

	$scope.logout = function() {

				console.log("logout");
				$scope.$emit('logout');
				$scope.clearLocalUser();
				//$scope.getLocalUser();
				//$scope.clearLocalUser();
	}

	$scope.getLocalUser = function(){
		console.log("getting local user");
		var user = UserSvc.getLocalUser('user')
		if(user){
			$scope.$emit('getLocalUser', user);
			console.log(user);
			console.log("getting local user");

		}
	}
	//setLocalUser is not necessary
	//clearLocalUser is not necessary
	//getLocalUser can be added as it is

	//when I press login in the navbar if signIn is true set it to false 
	//else set it to true and also set singUp to false 
	//when I press register in the navbar if signUp is true set it to false 
	//else set it to true and also set singIn to false 

    $scope.setLocalUser = function( user ){
		UserSvc.setLocalUser('user', user);
		console.log("local is set");
		console.log(JSON.stringify(user));
    }

    $scope.clearLocalUser = function(){
		UserSvc.clearLocalUser('user');
		console.log("local is removed");
    }


});
