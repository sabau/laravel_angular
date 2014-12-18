/**
 * Created by sabau on 12/10/14.
 */


var crud = angular.module('CRUDSrvc',[]);

crud.factory("CRUD",function($http){
    var request;

	return{
		all: function(){
			//get all posts
			request = $http({method:'GET', url:'/api/posts'});
			return request;
		},
		create: function(data){
			//create a new post
			request = $http({method:'GET', url:'/api/posts/create',params:data});
			return request;
		},
		get: function(id){
			//get a specific post
			request = $http.get('/api/posts/'+id);
			return request;
		},
		update: function(id,data){
			//update a specific post
			request = $http.put('/api/posts/'+id,data);
			return request;
		},
		delete: function(id){
			//delete a specific post
            request = $http({method:'DELETE', url:'/api/posts/'+id});
            return request;
		}
	}

});