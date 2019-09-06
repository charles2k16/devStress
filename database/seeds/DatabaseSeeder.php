<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Category;
use App\Post;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    DB::statement('SET FOREIGN_KEY_CHECKS = 0');

    User::truncate();
    Category::truncate();
    Post::truncate();
    DB::table('category_post')->truncate();

    $usersQuantity = 3;
    $categoriesQuantity = 8;
    $postsQuantity = 50;

    factory(User::class, $usersQuantity)->create();
    factory(Category::class, $categoriesQuantity)->create();
    factory(Post::class, $postsQuantity)->create()->each(
      function ($post) {
        $categories = Category::all()->random(mt_rand(1, 5))->pluck('id');
        $post->categories()->attach($categories);
      }
    );
  }
}
