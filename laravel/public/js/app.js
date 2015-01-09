/**
 * Created by sabau on 12/10/14.
 */

var app = angular.module('karolyApp',[
    'ng',
    'ngSanitize',
    'ngAnimate',
	'ngRoute',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.modal',
    "mgcrea.ngStrap.alert",
    "satellizer",
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
    })
.config(function($authProvider) {

        $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
        $authProvider.loginOnSignup = true;
        $authProvider.loginRedirect = '/';
        $authProvider.logoutRedirect = '/';
        $authProvider.signupRedirect = '/login';
        $authProvider.loginUrl = '/auth/login';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.loginRoute = '/login';
        $authProvider.signupRoute = '/signup';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'test_app'; // Local Storage name prefix
        $authProvider.unlinkUrl = '/auth/unlink/';
        $authProvider.authHeader = 'Authorization';



        $authProvider.facebook({
            clientId: '986006501413572',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host + '/',
            scope: 'email',
            scopeDelimiter: ',',
            requiredUrlParams: ['display', 'scope'],
            display: 'popup',
            type: '2.2',
            popupOptions: { width: 481, height: 269 }
        });
        /*
        $authProvider.google({
            clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
        });

        $authProvider.yahoo({
            clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
        });

        $authProvider.live({
            clientId: '000000004C12E68D'
        });

        $authProvider.twitter({
            url: '/auth/twitter'
        });

        $authProvider.github({
            clientId: '0ba2600b1dbdb756688b'
        });

        $authProvider.linkedin({
            clientId: '77cw786yignpzj'
        });


        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            redirectUri: window.location.origin,
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        })
        */
    })
.config(function($alertProvider) {
        angular.extend($alertProvider.defaults, {
            animation: 'am-fade-and-slide-top',
            placement: 'top'
        });
});