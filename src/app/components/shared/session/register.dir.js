angular.module('app').directive('registerForm', function(){
	return {
		restrict: "E",
		templateUrl: "register.html",
		controller: "RegisterCtrl"
	};
});