<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

// Users
Route::resource('users', 'User\UserController', ['except' => ['create', 'edit']]);
Route::resource('users.posts', 'User\UserPostController', ['except' => ['create', 'edit', 'show']]);

// Posts
Route::resource('posts', 'Post\PostController', ['except' => ['create', 'edit']]);
Route::resource('posts.category', 'Post\PostCategoryController', ['only' => ['index', 'update', 'destroy']]);


// Categories
Route::resource('categories', 'Category\CategoryController', ['except' => ['create', 'edit']]);
Route::resource('categories.posts', 'Category\CategoryPostController', ['only' => ['index']]);

// Comments
Route::resource('comments', 'Comments\CommentsController', ['except' => ['create', 'edit']]);
