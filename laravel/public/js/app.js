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
	'CRUDSrvc',
    //Angular Flash
    'ngFlash'
]);

app.run(function(){

});

//This will handle all of our routing
app.config(function($routeProvider, $locationProvider){

	$routeProvider
	.when('/',{
		templateUrl:'/templates/login.html',
		controller:'LoginController'
	})
	.when('/dashboard',{
		templateUrl:'/templates/dashboard.html',
        controller:'PostController'
	})
	.when('/add',{
		templateUrl:'/templates/add.html',
		controller:'PostController'
	})
	.when('/edit/:id',{
		templateUrl:'/templates/edit.html',
		controller:'PostController'
	})
    .when('/delete/:id',{
        templateUrl:'/templates/dashboard.html',
        controller:'PostController'
    });
});