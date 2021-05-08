<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tag;
use App\Models\Post;
use App\Models\Category;

class DashboardController extends Controller
{
    public function index(){
        $postCount = Post::all()->count();
        $categoryCount = Category::all()->count();
        $tagCount = Tag::all()->count();
        $userCount = User::all()->count();

        return response([
            'posts' => $postCount,
            'categories'=>$categoryCount,
            'tags' => $tagCount,
            'users'=>$userCount
        ]);
    }
}
