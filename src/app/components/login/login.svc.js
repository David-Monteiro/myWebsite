angular.module('app')
.service('LoginSvc', function($http){
    var svc = this;
    svc.getUser = function(){
        return $http.get('/api/users', {
            headers: { 'X-Auth': this.token }
        });
    }
    svc.login = funcion(username, password) {
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (val) {
            svc.token = val.data;
            return svc.getUser();
        })
    }
});