<?php

namespace App\Http\Controllers\Category;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Category $category)
    {
      $posts = $category->posts()->with('category')->get();
      return ['posts' => $posts];
    }
}
