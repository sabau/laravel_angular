/**
 * Created by sabau on 12/10/14.
 */

var app = angular.module('karolyApp',[
	'ngRoute',
//Login
	'LoginCtrl',
//Posts
	'PostCtrl',
//AuthService
	'AuthSrvc',
	//CRUDService
	'CRUDSrvc'
]);

app.run(function(){

});

//This will handle all of our routing
app.config(function($routeProvider, $locationProvider){

	$routeProvider
	.when('/',{
		templateUrl:'js/templates/login.html',
		controller:'LoginController'
	})
	.when('/dashboard',{
		templateUrl:'js/templates/dashboard.html'
	});

});