angular.module('app')
.controller('RegisterCtrl', function($scope, UserSvc) {

//add confirmation to register scope
	$scope.register = function(username, password, passValidator){
		if(password === passValidator)
			UserSvc.register(username, password)
			.then(function(user){
				$scope.$root.$broadcast('login', user.data);
				console.log(user);
			});
	}

	$scope.closeRegisterForm = function() {
		$scope.$root.$broadcast('closeModal');
	}

});