<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Category;

class Post extends Model
{
  protected $casts = [
    "share" => "boolean",
  ];

  protected $fillable = [
    'title', 'sub_content', 'content', 'user_id', 'views', 'share', 'image'
  ];

  public function user () {
    return $this->belongsTo(User::class);
  }

  public function categories () {
    return $this->belongsToMany(Category::class);
  }
}