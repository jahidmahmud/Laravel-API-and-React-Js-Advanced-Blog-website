<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $posts = Post::all();
        return response([
            'posts' => $posts
        ]);
    }
    public function add(Request $req){
        $posts=new Post();
        $posts->title=$req->title;
        $posts->slug=$req->slug;
        $posts->excerpt=$req->excerpt;
        $posts->content=$req->content;
        $posts->category_id=$req->category_id;
        $posts->user_id=$req->user_id;
        $posts->status="Publish";
        $posts->is_approve=1;
        $posts->save();
        return response([
            'posts' => $posts
        ]);
    }
    public function edit($id){
        $posts = Post::find($id);
        return response([
            'event' => $posts
        ]);
    }
    public function get($id){
        $posts = Post::where('user_id',$id)->get();
        return response([
            'event' => $posts
        ]);
    }
    public function update(Request $req,$id){
        $posts = Post::find($id);
        $posts->title = $req->title;
        $posts->slug = $req->slug;
        $posts->excerpt = $req->excerpt;
        $posts->content = $req->content;
        $posts->category_id = $req->category_id;
        $posts->save();
        return response([
            'event' => $posts
        ]);
    }
    public function delete($id)
    {
            $posts = Post::find($id);
            $posts->delete();
            return response([
                'message' => 'Event Deleted'
            ]);
    }
    public function details($id){
        $posts = Post::find($id);
        return response([
            'event' => $posts
        ]);
    }
    public function pending(){
        $posts = Post::where('is_approve',0)->get();
        return response([
            'event' => $posts
        ]);
    }
    public function approve($id,Request $req){
        $posts = Post::find($id);
        $posts->is_approve=1;
        $posts->save();
        return response([
            'event' => $posts
        ]);
    }
    public function deny($id,Request $req){
        $posts = Post::find($id);
        $posts->is_approve=2;
        $posts->save();
        return response([
            'event' => $posts
        ]);
    }
}
