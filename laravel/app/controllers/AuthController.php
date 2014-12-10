<?php
/**
 * Created by IntelliJ IDEA.
 * User: sabau
 * Date: 12/10/14
 * Time: 5:34 PM
 */

class AuthController extends BaseController{

	public function Login(){
		if(Auth::attempt(Input::only('username','password'))){
			return Auth::user();
		}else{
			return 'invalid username/pass combo';
		}
	}

	public Function Logout(){
		Auth::logout();
		return 'logged out';
	}

}