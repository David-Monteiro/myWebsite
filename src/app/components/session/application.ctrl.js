angular.module('app')
	.controller('ApplicationCtrl', function ($scope) {
		$scope.$on('login', function (_, user) {
			$scope.currentUser = user;
		});

		$scope.$on('getLocalUser', function (_, user) {
			$scope.currentUser = user;
			console.log("success getLocal");
		});

		$scope.$on('logout', function (_) {
			$scope.currentUser = null;
			console.log($scope.currentUser);
			console.log("success application logout");
		});
});