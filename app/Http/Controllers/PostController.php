<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// use App\Http\Controllers\Auth;

// use App\Auth;
use Auth;
use App\Post;
use App\Comment;
use App\User;


class PostController extends Controller
{
	// public function __construct()
    // {
    //     $this->middleware('auth')->except(['index','show','showing','comment']);
    // }
    public function index() {
		$posts=Post::paginate(3);
		return response()->json($posts);
	// return view('blog');
	}

	public function create() {
		//
	}

	public function store(Request $request) {
	//    return('doneeeeeeeee');
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
	// if($request->hasFile('image')){
	// 	return 'yesss';
	// }else{
	// 	return 'nooooooo';
	// }
	
// $img_name=time(). '.' . $request->image->getClientOriginalExtension();
		


       $post=new Post();
       $post->title=$request->input('title');
       $post->prefer=$request->input('prefer');
	   $post->author=$request->input('author');
	   $post->image=$name;
	//    $post->image=$img_name;
	   $post->body=$request->input('body');
	

	$post->save();
	// $request->image->move(public_path('uploads'),$img_name);

	   return $post;
       
	}

	public function show($id) {
		$posts=Post::findOrfail($id);
		// $comments=User::
		// join('comments','users.id','=','comments.user_id')
		// ->join('posts','comments.post_id','=','posts.id')
		// ->select('users.name','comments.*')
		// ->where(['posts.id'=>$id])
		// ->get();
		
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
			// 'image'=>'image|mimes:jpeg,jpg,gif,png',
			'body' => 'required',
			
			
		]);

		$post = Post::findOrFail($id);
		if($request->get('image'))
		{
		   $image = $request->get('image');
		   $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
		   \Image::make($request->get('image'))->save(public_path('storage/').$name);
		   $post->title=$request->input('title');
		 $post->image=$name;
		$post->prefer=$request->input('prefer');
		$post->author=$request->input('author');
		$post->body=$request->input('body');
		
		$post->save();
		 }else{
			$post->title=$request->input('title');
			// $post->image=$name;
		   $post->prefer=$request->input('prefer');
		   $post->author=$request->input('author');
		   $post->body=$request->input('body');
		   $post->save();
		 }
		
		
		
		
		// return response()->json($comment->find($comment->id));
		return($post);


		// return 'done';
		//
	}

	public function destroy($id) {

		Post::
            where('id' , '=' , $id)  ->delete();
            // ->where(function ($query) {
            //     $query->where('user_id','=',Auth::user()->id);
            //         //   ->orWhere('title', '=', 'Admin');
            // })
          
		//
	}
	public function comment(Request $request,$post_id) {
		$this->validate($request, [
			'comment' => 'required',
		]);
		$comment=new Comment;
		$comment->user_id=$request->user()->id;
		$comment->post_id=$post_id;
		$comment->comment=$request->input('comment');
		// $comment->with('auth');
		$comment->save();
		return $comment;
		// return $post_id;
		
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
		
		// Comment::findOrFail($id)->where('user_id','=',Auth::user()->id) ->orWhere(Auth::user()->roles[0]->name,'=','Admin') ->delete();
		
		// Comment::
		// ->where('id' , '=' , $id)
		// ->where(function ($query) {
		// 	$query->where('user_id','=',Auth::user()->id);
				
		// })
		// ->delet();

		// findOrFail($id)
		// ->where('user_id','=',Auth::user()->id);
		// // ->orWhere(1,'=',Auth::user()->isAdmin)
		// ->delete();
		
		// return($id.Auth::user()->id);

		Comment::
            where('id' , '=' , $id)
            // ->where(function ($query) {
            //     $query->where('user_id','=',Auth::user()->id);
            //         //   ->orWhere('isAdmin', '=',  Auth::user()->isAdmin);
            // })
            ->delete();
	
	}

	public function commentsedit($id) {
		// $comment = Comment::findOrFail($id)->where('user_id',Auth::user()->id);
		// return response()->json([
		// 	'comment' => $comment,
		// ]);
		
		// return('doneeeeeeeeeeee');
	}

	public function commentsupdate(Request $request, $id) {
		// $this->validate($request, [
		// 	'comment' => 'required',
		// ]);
		// $input = $request->all();
		// $comment = Comment::findOrFail($id);
		// $comment->user_id=$request->user()->id;
		// $comment->post_id=$post_id;
		// // $comment->update($input);
		// $comment->save();

		// return response()->json($comment->with('user')->find($comment->id));
		// // return('$comment');

		$comment = Comment::findOrFail($id);
		// $comment->user_id=$request->user()->id;
		// $comment->post_id=$post_id;
		$comment->comment=$request->input('comment');
		$comment->save();
		// return response()->json($comment->find($comment->id));
		return($comment);










	}

	public function wtry($post_id) {
		

		$comments=User::
		join('comments','users.id','=','comments.user_id')
		->join('posts','comments.post_id','=','posts.id')
		->select('users.name','comments.*')
		->where(['posts.id'=>$post_id])
		
		->get();
		
		// return response()->json($comments);
		return response()->json([$comments,Auth::user()->roles[0]]);
	

	
}




	public function edited($post_id) {

		$comments=User::
			join('comments','users.id','=','comments.user_id')
			->join('posts','comments.post_id','=','posts.id')
			->select('users.name','comments.*')
			->where(['posts.id'=>$post_id])
			// ->with('auth')
			->get()->where('user_id',Auth::user()->id);
			
			return response()->json($comments);
		//
	}


}
