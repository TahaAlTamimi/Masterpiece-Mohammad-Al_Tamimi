<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Http\Request;
use App\RecipeComment;
use App\User;
use Auth;

class RecipeController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth')->except(['index','show',' showing']);
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes=Recipe::paginate(3);
		return response()->json($recipes);
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // return 'doneeeee';
        $this->validate($request, [
            'title' => 'required',
            'prefer' => 'required',
            'author' => 'required',
            // 'image'=>'image|mimes:jpeg,jpg,gif,png',
            'body' => 'required',]);
            if($request->get('image'))
            {
               $image = $request->get('image');
               $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
               \Image::make($request->get('image'))->save(public_path('storage/').$name);
             }

            $recipe=new Recipe();
            $recipe->title=$request->input('title');
            $recipe->prefer=$request->input('prefer');
            $recipe->author=$request->input('author');
            $recipe->image=$name ;
         //    $recipe->image=$img_name;
            $recipe->body=$request->input('body');
         
     
         $recipe->save();
         // $request->image->move(public_path('uploads'),$img_name);
     
            return $recipe;




    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recipes=Recipe::findOrfail($id);
        return response()->json($recipes);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        
        $this->validate($request, [
            'title' => 'required',
            'prefer' => 'required',
            'author' => 'required',
            // 'image'=>'image|mimes:jpeg,jpg,gif,png',
            'body' => 'required',]);
            $recipe=Recipe::findOrFail($id);

            if($request->get('image'))
            {
                $image = $request->get('image');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                \Image::make($request->get('image'))->save(public_path('storage/').$name);
            $recipe->title=$request->input('title');
            $recipe->prefer=$request->input('prefer');
            $recipe->author=$request->input('author');
            $recipe->image=$name ;
            $recipe->body=$request->input('body');
            $recipe->save();
            
            }else{

                $recipe->title=$request->input('title');
                $recipe->prefer=$request->input('prefer');
                $recipe->author=$request->input('author');
                $recipe->body=$request->input('body');
                $recipe->save();

            }
     
            return ($recipe);
		
		
	
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        Recipe::
        where('id' , '=' , $id)  ->delete();
    }
    public function comment(Request $request,$recipe_id) {
		$this->validate($request, [
			'recipecomment' => 'required',
		]);
		$recipecomment=new RecipeComment;
		$recipecomment->user_id=$request->user()->id;
		$recipecomment->recipe_id=$recipe_id;
		$recipecomment->comment=$request->input('recipecomment');
		$recipecomment->save();
		return $recipecomment;
		// return $post_id;
		
    }
    
    public function showing($recipe_id) {
        // return 'doneeeeeeeeeeeee';
		$recipecomments=User::
		join('recipe_comments','users.id','=','recipe_comments.user_id')
		->join('recipes','recipe_comments.recipe_id','=','recipes.id')
		->select('users.name','recipe_comments.*')
		->where(['recipes.id'=>$recipe_id])
		->get();
		// return 'doneeeeeez';
		return response()->json([$recipecomments,Auth::user()->roles]);
		
	}

	public function commentsdestroy( $id) {
		
		RecipeComment::  where('id' , '=' , $id)
        ->where(function ($query) {
            $query->where('user_id','=',Auth::user()->id);
                //   ->orWhere('title', '=', 'Admin');
        })
        ->delete();
		// return('doneeeeeeeeeee');
		//
	}

	public function commentsedit($id) {
		// $recipecomment = RecipeComment::findOrFail($id);
		// return response()->json([
		// 	'recipecomment' => $recipecomment,
		// ]);
		//
	}

	public function commentsupdate(Request $request, $id) {
		
		// $input = $request->all();
        $recipecomment = RecipeComment::findOrFail($id);
        $recipecomment->comment=$request->input('recipecomment');
		$recipecomment->save();
		// return response()->json($comment->find($comment->id));
		return($recipecomment);

		
		// return('doneeeeeeeeeeee');



	}





}
