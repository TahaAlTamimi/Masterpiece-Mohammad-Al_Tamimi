<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/user/{id}', 'ProfileController@index');

Auth::routes();

//Blog
// react route
// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/post', [
    'uses'=>'HomeController@index',
    'as'=>'home',
    'middleware'=>'roles',
    'roles'=>['Admin'],
    
    ]);
 Route::get('/blog', 'HomeController@index')->name('home');

Route::get('/post/{id}', 'HomeController@index')->name('home');
Route::get('/getcomments/{id}', 'HomeController@index')->name('home');
Route::get('/calculate', 'HomeController@index')->name('home');
Route::get('/deletecomments/{id}', 'HomeController@index')->name('home');
Route::get('comments/{id}/edit', 'HomeController@index')->name('home');
Route::get('/blogAdmin', 'HomeController@index')->middleware('admin')->name('home');
Route::get('/EditAdmin/{id}', 'HomeController@index')->middleware('admin')->name('home');
Route::get('/getposts/{id}', 'HomeController@index')->name('home');
Route::get('/{id}/edit', 'HomeController@index')->name('home');





Route::get('/recipeAdmin', 'HomeController@index')->middleware('admin')->name('home');
Route::get('/EditRecipe/{id}', 'HomeController@index')->middleware('admin')->name('home');
// laravel route
Route::post('/postadmin', 'PostController@store');
Route::get('/getposts', 'PostController@index');
Route::get('/getposts/{id}', 'PostController@show');
Route::post('/comment/{id}', 'PostController@comment');
Route::get('/getcomments/{id}', 'PostController@showing');
Route::delete('/deletecomments/{id}', 'PostController@commentsdestroy');
Route::delete('/deleteposts/{id}', 'PostController@destroy');
Route::put('/editcomments/{id}', 'PostController@commentsupdate');
Route::get('/comments/{id}/edit', 'PostController@showing');
Route::put('/editpost/{id}', 'PostController@update');

// /comments/${this.props.match.params.id}/edit
// 


// recipe react
Route::get('/Adminrecipe', 'HomeController@index')->middleware('admin')->name('home');
Route::get('/recipe', 'HomeController@index')->name('home');
Route::get('/recipe/{id}', 'HomeController@index')->name('home');
Route::get('/getrecipecomments/{id}', 'HomeController@index')->name('home');
Route::get('/deleterecipecomments/{id}', 'HomeController@index')->name('home');


// recipe laravel

Route::post('/recipeadmin', 'RecipeController@store');
Route::get('/getrecipes', 'RecipeController@index');
Route::get('/getrecipes/{id}', 'RecipeController@show');
Route::post('/recipecomment/{id}', 'RecipeController@comment');
Route::get('/getrecipecomments/{id}', 'RecipeController@showing');
Route::delete('/deleterecipecomments/{id}', 'RecipeController@commentsdestroy');
Route::put('/editcommentsrecipe/{id}', 'RecipeController@commentsupdate');
Route::get('/commentsrecipe/{id}/edit', 'RecipeController@showing');
Route::delete('/deleterecipes/{id}', 'RecipeController@destroy');
Route::put('/editrecipe/{id}', 'RecipeController@update');
// question react
Route::get('/question', 'HomeController@index')->name('home');
Route::get('/getquestion', 'HomeController@index')->name('home');



// question laravel
Route::post('/userquestion', 'QuestionController@store');
Route::get('/getquestion', 'QuestionController@index');
Route::delete('/deletequestions/{id}', 'QuestionController@destroy');
Route::delete('/deleteuser/{id}', 'QuestionController@destroy2');


// answer react
Route::get('/AllQuestionExpert', 'HomeController@index')->middleware('admin')->name('home');
Route::get('/question/{id}', 'HomeController@index')->name('home');
Route::get('/answer/{id}', 'HomeController@index')->name('home');
// answer laravel 
Route::get('/getquestion/{id}', 'QuestionController@show');
Route::post('/answer/{id}', 'AnswerController@store');
Route::get('/getanswers/{id}', 'AnswerController@show');
Route::delete('/deleteanswers/{id}', 'AnswerController@destroy');
// youtube
Route::get('/youtube', 'HomeController@index')->name('home');

// Route::get('/obese', 'HomeController@index')->name('home');
Route::get('/try', 'QuestionController@try');


Route::get('/xx/{id}', 'PostController@edited');

Route::get('/wtry/{id}', 'PostController@wtry');

Route::post('/profile', 'ProfileController@photoUpdate');

Route::get('/a', 'ProfileController@all');