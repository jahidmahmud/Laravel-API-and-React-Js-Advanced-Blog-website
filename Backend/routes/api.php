<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\PostController;

Route::post('register',[UserController::class,'Register']);
Route::post('login',[UserController::class,'login']);
Route::get('user/edit/{id}',[UserController::class,'edit']);
Route::post('user/edit/{id}',[UserController::class,'update']);
Route::get('all', [DashboardController::class,'index']);


//categories
Route::get('categories', [CategoryController::class,'index']);
Route::post('categories/add', [CategoryController::class,'add']);
Route::get('categories/edit/{id}', [CategoryController::class,'edit']);
Route::post('categories/edit/{id}', [CategoryController::class,'update']);
Route::delete('categories/delete/{id}', [CategoryController::class,'delete']);
Route::get('categories/details/{id}', [CategoryController::class,'details']);
//Tag
Route::get('tags', [TagController::class,'index']);
Route::post('tags/add', [TagController::class,'add']);
Route::get('tags/edit/{id}', [TagController::class,'edit']);
Route::post('tags/edit/{id}', [TagController::class,'update']);
Route::delete('tags/delete/{id}', [TagController::class,'delete']);
Route::get('tags/details/{id}', [TagController::class,'details']);
//post
Route::get('posts', [PostController::class,'index']);
Route::post('posts/add', [PostController::class,'add']);
Route::get('posts/edit/{id}', [PostController::class,'edit']);
Route::post('posts/edit/{id}', [PostController::class,'update']);
Route::delete('posts/delete/{id}', [PostController::class,'delete']);
Route::get('posts/details/{id}', [PostController::class,'details']);
Route::get('posts/pending', [PostController::class,'pending']);
Route::post('posts/approve/{id}', [PostController::class,'approve']);
Route::post('posts/deny/{id}', [PostController::class,'deny']);
Route::get('posts/{id}', [PostController::class,'get']);






