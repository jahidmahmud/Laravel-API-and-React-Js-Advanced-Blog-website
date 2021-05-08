<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return response([
            'category' => $categories
        ]);
    }
    public function edit($id){
        $categories = Category::find($id);
        return response([
            'event' => $categories
        ]);
    }
    public function update(Request $req,$id){
        $categories = Category::find($id);
        $categories->name = $req->name;
        $categories->slug = $req->slug;
        $categories->save();
        return response([
            'event' => $categories
        ]);
    }
    public function add(Request $req){
        $categories=new Category();
        $categories->name=$req->name;
        $categories->slug=$req->slug;
        $categories->save();
        return response([
            'tags' => $categories
        ]);
    }
    public function delete($id)
    {
            $categories = Category::find($id);
            $categories->delete();
            return response([
                'message' => 'Event Deleted'
            ]);
    }
    public function details($id){
        $categories = Category::find($id);
        return response([
            'event' => $categories
        ]);
    }
}
