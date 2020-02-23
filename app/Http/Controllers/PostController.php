<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Auth;
use App\Post;
use App\Comment;
use App\User;


class PostController extends Controller
{

    public function index() {
		$posts=Post::orderByRaw('id DESC')->paginate(3);
		return response()->json($posts);
	
	}

	public function create() {
		//
	}

	public function store(Request $request) {
	
	$this->validate($request, [
		'title' => 'required',
		'prefer' => 'required',
		'author' => 'required',
		// 'image'=>'image|mimes:jpeg,jpg,gif,png',
		'body' => 'required',
		
		
	]);

	if($request->get('image'))
	{
	   $image = $request->get('image');
	   $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
	   \Image::make($request->get('image'))->save(public_path('storage/').$name);
	 }
       $post=new Post();
       $post->title=$request->input('title');
       $post->prefer=$request->input('prefer');
	   $post->author=$request->input('author');
	//    $post->image=$name;
	
	   $post->body=$request->input('body');
	

		$post->save();
	   return $post;
       
	}

	public function show($id) {
		$posts=Post::findOrfail($id);
		return response()->json($posts);
	
	}

	public function edit($id) {
		//
	}

	public function update(Request $request, $id) {
		$this->validate($request, [
			'title' => 'required',
			'prefer' => 'required',
			'author' => 'required',
			// 'image'=>'mimes:jpeg,bmp,png',
			'body' => 'required',
			
			
		]);

		$post = Post::findOrFail($id);
		if(!($request->hasFile('image')))
		{
		   $image = $request->get('image');
		   $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
		   \Image::make($request->get('image'))->save(public_path('storage/').$name);
		 
		   $post->image=$name;
	
		 }
			$post->title=$request->input('title');
			$post->prefer=$request->input('prefer');
			$post->author=$request->input('author');
			$post->body=$request->input('body');
			$post->save();
		 
		 
		
		return($post);


	}

	public function destroy($id) {

		Post::where('id' , '=' , $id)  ->delete();
            
	}

	public function comment(Request $request,$post_id) {
		$this->validate($request, [
			'comment' => 'required',
		]);
		$comment=new Comment;
		$comment->user_id=$request->user()->id;
		$comment->post_id=$post_id;
		$comment->comment=$request->input('comment');
	
		$comment->save();
		return $comment;
		
		
	}


	public function showing($post_id) {
		

			$comments=User::
			join('comments','users.id','=','comments.user_id')
			->join('posts','comments.post_id','=','posts.id')
			->select('users.name','comments.*')
			->where(['posts.id'=>$post_id])
			
			->get();
			
			return response()->json([$comments,Auth::user()->roles]);
		
	
		
	}

	public function commentsdestroy( $id) {
		
		Comment::  where('id' , '=' , $id) ->
		where(function ($query) {
			$query->where('user_id','=',Auth::user()->id)
			->orWhere('role_id','=',Auth::user()->isAdmin); 
		}) ->delete();
		
		
		
		
	
	}

	public function commentsedit($id) {
	
	}

	public function commentsupdate(Request $request, $id) {
		

		$comment = Comment::findOrFail($id);
		
		$comment->comment=$request->input('comment');
		$comment->save();
		
		return($comment);










	}

	public function wtry($post_id) {
		

		$comments=User::
		join('comments','users.id','=','comments.user_id')
		->join('posts','comments.post_id','=','posts.id')
		->select('users.name','comments.*')
		->where(['posts.id'=>$post_id])
		
		->get();
		
		
		return response()->json([$comments,Auth::user()->roles[0]]);
	

	
}




	public function edited($post_id) {

		$comments=User::
			join('comments','users.id','=','comments.user_id')
			->join('posts','comments.post_id','=','posts.id')
			->select('users.name','comments.*')
			->where(['posts.id'=>$post_id])
			
			->get()->where('user_id',Auth::user()->id);
			
			return response()->json($comments);
	
	}

	public function all() {

		$role =User::get();
		$users = Comment::
		when($role, function ($query, $role) {
			return $query->where('role_id', $role);
		});
	return $role;
	}

}
