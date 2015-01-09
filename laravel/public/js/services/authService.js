/**
 * Created by sabau on 12/10/14.
 */

var login = angular.module('AuthSrvc',[]);

login.factory('Login',function($http){
	return{
		auth:function(credentials){
			var authUser = $http({method:'POST',url:'/api/auth/login',params:credentials});
			return authUser;
		}
	}
});

//persistent data
login.factory('SessionService',function(){
	return{
		get:function(key){
			return sessionStorage.getItem(key);
		},
		set:function(key,val){
			return sessionStorage.setItem(key,val);
		},
		unset:function(key){
			return sessionStorage.removeItem(key);
		}
	}
});

