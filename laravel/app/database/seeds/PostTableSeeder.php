<?php
/**
 * Created by IntelliJ IDEA.
 * User: sabau
 * Date: 12/10/14
 * Time: 5:48 PM
 */

class PostTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('posts')->delete();

		Post::create(array(

			'title' => 'First Post',
			'content' => 'Ignore this post..is just a test seed!'

		));

	}
}