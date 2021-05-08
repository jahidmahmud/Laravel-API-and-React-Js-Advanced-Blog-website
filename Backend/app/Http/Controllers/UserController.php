<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function Register(Request $req){
        $user=new User;
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=$req->password;
        $user->save();
        return response([
            'user' => $user
        ]);
    }
    public function login(Request $req){
        $user=new User;
        $user=User::where(['email'=>$req->email,'password'=>$req->password])->get();
        if($user->count()>0){
            return response([
                'user' => $user
            ]);
        }
        else{
            return response([
                'msg' => "not found"
            ]);
        }
    }
    public function edit($id){
        $user = User::find($id);
        return response([
            'event' => $user
        ]);
    }
    public function update(Request $req,$id){
        $user = User::find($id);
        if($req->password==""){
            $user->name = $req->name;
            $user->email = $req->email;
            $user->save();
        }
        else{
            $user->name = $req->name;
            $user->email = $req->email;
            $user->password = $req->password;
            $user->save();
        }

        return response([
            'event' => $user
        ]);
    }
}
