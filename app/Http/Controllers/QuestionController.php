<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Question;
use Auth;
class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

  
    public function index()
    {
       
        $question=User::join('questions','users.id','=','questions.user_id')
        ->
       get();
      
        return response()->json([$question,Auth::user()]);
     
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
        $this->validate($request, [
        'question' => 'required',
    ]);

        $question= new Question;
        $question->user_id=$request->user()->id;
		$question->question=$request->input('question');
		$question->save();
    
        $questions = Question::with('answer','user')->get();
     
        
      
        return response()->json($questions);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
  

    $question=Question::with('answer','user')
  
    ->get();
  
    return response()->json($question);
 
	
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        Question::where('user_id',Auth::user()->id) ->orWhere('role_id', Auth::user()->isAdmin)->findOrFail($id)->delete();
        //
    }

    public function destroy2($id)
    {
       
        Question::where('user_id',Auth::user()->id)->findOrFail($id)->delete();
        return back();
    }

    public function try()
    {
       
      

        $questions = Question::with('answer','user')->get();
    return response()->json([$questions,Auth::user()]);
      
     
    }
}
