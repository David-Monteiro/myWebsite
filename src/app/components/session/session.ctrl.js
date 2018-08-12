angular.module('app')
.controller('SessionCtrl', function($scope, UserSvc) {

	$scope.login = function(username, password){
		UserSvc.login(username, password)
			.then(function(user){
				$scope.$root.$broadcast('login', user.data);
				UserSvc.setLocalUser('user', user.data);
		})
	}

	$scope.logout = function() {
		UserSvc.clearLocalUser('user');
		$scope.$emit('logout');		
	}

	$scope.closeLoginForm = function() {
		$scope.$root.$broadcast('closeModal');
	}

	$scope.getLocalUser = function(){
		var user = UserSvc.getLocalUser('user')
		if(user) $scope.$emit('getLocalUser', user);
	}

});
