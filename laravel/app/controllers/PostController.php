<?php

class PostController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = Post::all();
		return $posts;
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$new = new Post;
		$new->title = Input::get('title');
		$new->content = Input::get('content');

		if($new->save()){
			return array('status'=>'Saved!', 'success'=>1);
		}

		return array('status'=>'Not Saved!', 'success'=>0);
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        $new = new Post;
        $new->title = Input::get('title');
        $new->content = Input::get('content');

        if($new->save()){
            return array('status'=>'Saved!', 'success'=>1);
        }

        return array('status'=>'Not Saved!', 'success'=>0);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Post::find($id);
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$post = Post::find($id);

		if($post){
			$post->title    = Input::get('title');
			$post->content  = Input::get('content');

			if($post->save()){
				return array('status'=>'Updated!', 'success'=>1);
			}else{
				return array('status'=>'Could not update!', 'success'=>0);
			}
		}
		return array('status'=>'Could not find post!', 'success'=>0);
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        $post= Post::find($id);
        if ($post) {
            if ($post->delete()) {
                return array('status' => 'Deleted!', 'success' => 1);
            } else {
                return array('status' => 'Can not delete!', 'success' => 0);
            }
        }
        return array('status'=>'Could not find post!', 'success'=>0);
	}
}
