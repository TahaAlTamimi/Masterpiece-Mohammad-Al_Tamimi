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
       
        $question=User::
        join('questions','users.id','=','questions.user_id')
        ->get();
      
        return response()->json([$question,Auth::user()]);
        // $comments=User::
		// join('comments','users.id','=','comments.user_id')
		// ->join('posts','comments.post_id','=','posts.id')
		// ->select('users.name','comments.*')
		// ->where(['posts.id'=>$post_id])
		// ->get();
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
        // return $question;
        
        // $question=Question::
        // join('users')
        // ->join('answers');
        $questions = Question::with('answer','user')->get();
        // ->select('name','question','answer','question_id')
        
      
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
    //  $question=Question::
    //  join('')
     
    //  findOrfail($id);
    //  return response()->json($question);

    $question=Question::with('answer','user')
    // // join('questions','users.id','=','questions.user_id')
    // join('users','users.id','=','questions.user_id')
    // ->select('users.name','questions.*')
    // ->where(['questions.id'=>$id])
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
        // return 'done'.$id;
        Question::findOrFail($id)->delete();
        //
    }

    public function destroy2($id)
    {
        // return 'done'.$id;
        Question::findOrFail($id)->delete();
        return back();
    }

    public function try()
    {
       
        // $question=Question::
        // join('users','users.id','=','questions.user_id')
        // ->join('answers','answers.question_id','=','questions.id')
        // ->select('name','question','answer','question_id')
        // ->get();

        $questions = Question::with('answer','user')->get();
    return response()->json([$questions,Auth::user()]);
      
        // return response()->json($question);
        // $comments=User::
		// join('comments','users.id','=','comments.user_id')
		// ->join('posts','comments.post_id','=','posts.id')
		// ->select('users.name','comments.*')
		// ->where(['posts.id'=>$post_id])
		// ->get();
    }
}
