angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc) {
    $scope.login = function(username, password){
        LoginSvc.login(username, password)
            .then(function(user){
            	$scope.$emit('login', user.data);
                console.log(user);
        })
    }
});