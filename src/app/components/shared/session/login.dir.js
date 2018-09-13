angular.module('app').directive('loginForm', function(){
	return {
		restrict: "E",
		templateUrl: "login.html",
		controller: "SessionCtrl"
	};
});