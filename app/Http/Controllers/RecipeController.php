<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Http\Request;
use App\RecipeComment;
use App\User;
use Auth;

class RecipeController extends Controller
{

 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes=Recipe::orderByRaw('id DESC')->paginate(3);
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


            $recipe=new Recipe();
            if($request->get('image'))
            {
               $image = $request->get('image');
               $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
               \Image::make($request->get('image'))->save(public_path('storage/').$name);
             }

           
            $recipe->title=$request->input('title');
            $recipe->prefer=$request->input('prefer');
            $recipe->author=$request->input('author');
            $recipe->image=$name ;
         
            $recipe->body=$request->input('body');
         
     
         $recipe->save();
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
          
            $recipe->image=$name ;
          
            
            }

                $recipe->title=$request->input('title');
                $recipe->prefer=$request->input('prefer');
                $recipe->author=$request->input('author');
                $recipe->body=$request->input('body');
                $recipe->save();

         
     
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
		
		
    }
    
    public function showing($recipe_id) {
       
		$recipecomments=User::
		join('recipe_comments','users.id','=','recipe_comments.user_id')
		->join('recipes','recipe_comments.recipe_id','=','recipes.id')
		->select('users.name','recipe_comments.*')
		->where(['recipes.id'=>$recipe_id])
		->get();
		
		return response()->json([$recipecomments,Auth::user()->roles]);
		
	}

	public function commentsdestroy( $id) {
		
		RecipeComment::  where('id' , '=' , $id)
        ->where(function ($query) {
            $query->where('user_id','=',Auth::user()->id);
               
        })
        ->delete();
		
	}

	public function commentsedit($id) {
	
	}

	public function commentsupdate(Request $request, $id) {
		
		
        $recipecomment = RecipeComment::findOrFail($id);
        $recipecomment->comment=$request->input('recipecomment');
		$recipecomment->save();
		
		return($recipecomment);

		



	}





}
