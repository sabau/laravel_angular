/**
 * Created by sabau on 12/10/14.
 */


var crud = angular.module('CRUDSrvc',[]);

crud.factory("CRUD",function($http){

	return{
		all: function(){
			//get all posts
			var request = $http({method:'GET', url:'api/posts'});
			return request;
		},
		create: function(data){
			//create a new post
			var request = $http({method:'GET', url:'api/posts/create',params:data});
			return request;
		},
		get: function(id){
			//get a specific post
			var request = $http.get('api/posts/'+id);
			return request;
		},
		update: function(id,data){
			//update a specific post
			var request = $http.put('api/posts/'+id,data);
			return request;
		},
		delete: function(id){
			//delete a specific post
		}
	}

});