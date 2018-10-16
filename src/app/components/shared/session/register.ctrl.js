angular.module('app')
.controller('RegisterCtrl', function($scope, $window, UserSvc) {

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

	$scope.outOfOrder = function() {
		$window.alert("Sorry...\nTemporarily out of service");
	};

});
