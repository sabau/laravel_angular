/**
 * Created by sabau on 12/10/14.
 */

var post = angular.module('PostCtrl',["ng","mgcrea.ngStrap","mgcrea.ngStrap.modal","mgcrea.ngStrap.alert"]);

post.controller('PostController',function($scope,$routeParams,CRUD, $alert){
    $scope.title="Post";
    $scope.postId = $routeParams.id;
    if ($scope.postId != undefined){
        var getPost = CRUD.get($routeParams.id);
        getPost.success(function(response){
            $scope.post = response;
        });
    }else {
        var getPosts = CRUD.all();
        getPosts.success(function (response) {
            $scope.posts = response;
            $scope.posts.remove_key = function(key){
                var i = 0,
                    keyval = null;
                for( ; i < this.length; i++){
                    if(this[i].id == key){
                        keyval = this[i].title;
                        this.splice(i, 1);
                        break;
                    }
                }
                return keyval;
            }
        });
    }

	$scope.createPost = function(){
		var request = CRUD.create($scope.new);
		request.success(function(response){
            $alert({
                title: $scope.title + " message service",
                content: response.status,
                container: 'body',
                placement: 'top',
                keyboard:"true",
                type: 'info',
                duration: 200,
                show: true});
		});
	};
    $scope.updatePost = function(){
        var request = CRUD.update($scope.postId,$scope.post);
        request.success(function(response){
            $alert({
                title: $scope.title + " message service",
                content: response.status,
                placement: 'top',
                container: 'body',
                keyboard:"true",
                type: 'info',
                duration: 2,
                show: true});
        });
    };

    $scope.deletePost = function(postId){
        if ($scope.postId == undefined) $scope.postId = postId;
        var request = CRUD.delete($scope.postId,$scope.post);
        request.success(function(response){
            if(response.success == 1){
                //remove the deleted post from the list
                response.status += " Element:" + $scope.posts.remove_key(postId);
            }
            $alert({
                title: $scope.title + " message service",
                content: response.status,
                placement: 'top-center',
                container: 'body',
                type: 'warn',
                duration: 2,
                show: true});
        });
    };
});
