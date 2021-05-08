<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
    public function index(){
        $tags = Tag::all();
        return response([
            'tag' => $tags
        ]);
    }
    public function add(Request $req){
        $tags=new Tag();
        $tags->name=$req->name;
        $tags->slug=$req->slug;
        $tags->save();
        return response([
            'tags' => $tags
        ]);
    }
    public function edit($id){
        $tags = Tag::find($id);
        return response([
            'event' => $tags
        ]);
    }
    public function update(Request $req,$id){
        $tags = Tag::find($id);
        $tags->name = $req->name;
        $tags->slug = $req->slug;
        $tags->save();
        return response([
            'event' => $tags
        ]);
    }
    public function delete($id)
    {
            $tags = Tag::find($id);
            $tags->delete();
            return response([
                'message' => 'Event Deleted'
            ]);
    }
    public function details($id){
        $tags = Tag::find($id);
        return response([
            'event' => $tags
        ]);
    }
}
