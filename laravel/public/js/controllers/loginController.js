/**
 * Created by sabau on 12/10/14.
 */

var login = angular.module('LoginCtrl',[]);

login.controller('LoginController',function($scope,$location,Login,SessionService,$auth){

    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
    };

	$scope.loginSubmit = function(){
		var auth = Login.auth($scope.loginData);
		auth.success(function(response){
			if(response.id){
				SessionService.set('auth',true); //This sets our session key/val pair as authenticated
				$location.path('/dashboard');
			}else alert('could not verify your login');
		});
	}
});