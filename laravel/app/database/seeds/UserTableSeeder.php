<?php
/**
 * Created by IntelliJ IDEA.
 * User: sabau
 * Date: 12/10/14
 * Time: 4:01 PM
 */

class UserTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users')->delete();

		User::create(array(

			'first_name'    => 'Karoly',
			'last_name'     => 'Szabo',
			'email'         => 'szabo.karoly.a@gmail.com',
			'username'      => 'admin',
			'password'      => Hash::make('test1234') //hashes our password nicely for us
		));

	}

}