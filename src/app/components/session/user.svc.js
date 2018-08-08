angular.module('app')
.service('UserSvc', function($http, $window){
    var svc = this;
    svc.getUser = function(){
        return $http.get('/api/users', {
            headers: { 'X-Auth': this.token }
        });
    }

    svc.login = function(username, password) {
        console.log("test");
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (val) {
            svc.token = val.data;
            return svc.getUser();
        });
    }

    svc.register = function(username, password) {
        return $http.post('/api/users', {
            username: username, password: password
        }).then(function() {
            return svc.login(username, password);
        });
    }

    svc.setLocalUser = function(key, value) {
        try{
            if( $window.Storage ){
                $window.localStorage.setItem(key, JSON.stringify(value));
                console.log(value);
                return true;
            } else {
                return false;
            }
        } catch( error ){
            console.error( error, error.message );
        }
    }

    svc.getLocalUser = function(key){
        
        try{
            if( $window.Storage ){
                //console.log($window.JSON.parse($window.localStorage.getItem(key)));
                //return JSON.parse($window.localStorage.getItem(key));
                return JSON.parse($window.localStorage.getItem(key));

            } else {
                return false;
            }
        } catch( error ){
            console.error( error, error.message );
        }
    }

    svc.clearLocalUser = function(key){
        try{
            if( $window.Storage ){
                return $window.localStorage.removeItem(key);
            } else {
                return false;
            }
        } catch( error ){
            console.error( error, error.message );
        }
    }

});