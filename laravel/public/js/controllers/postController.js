/**
 * Created by sabau on 12/10/14.
 */

var post = angular.module('PostCtrl',[]);

post.controller('PostController',function($scope,$routeParams,CRUD){
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
                        keyval = this.splice(i, 1);
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
			$scope.flash = response.status;
		});
	};
    $scope.updatePost = function(){
        var request = CRUD.update($scope.postId,$scope.post);
        request.success(function(response){
            $scope.flash = response.status;
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
            $scope.flash = response.status;
        });
    };
});
