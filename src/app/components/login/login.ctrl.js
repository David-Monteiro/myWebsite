angular.module('app')
.controller('LoginCtrl', function($scope, LoginSvc) {
    $scope.login = function(username, password){
        LoginSvc.login(username, password)
            .then(function(user){
                console.log(user);
        })
    }
});