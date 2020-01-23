<?php

namespace App\Http\Controllers;
use App\Question;
use Auth;
use App\User;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
   public function index(Request $request,$id){
       $user=User::with('questions.answer')->find($id);
       return view('user')->with('user',$user);

   }

   public function all(Request $request,$id){
    $qq=Question::where('user_id',$id)->get();
    return view('user')->with('qq',$qq ) ;

}
public function photoUpdate(Request $request){

    if($request->hasFile('image_profile')){
        $imageupload=request()->file('image_profile');
        $imagename=time().'.'. $imageupload->getClientOriginalExtension();
        $imagepath=public_path('/images/');
        $imageupload->move($imagepath,$imagename);
        $user=Auth::user();
        $user->image_profile='/images/'.$imagename;
        $user->save();
        // return User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'password' => Hash::make($data['password']),
        //     'image_profile'=>'/images/'.$imagename
        //     ]);
    }
//  $user= User::create([
//         'name' => $data['name'],
//         'email' => $data['email'],
//         'password' => Hash::make($data['password']),
//     ]);
//     $user->roles()->attach(Role::where('name','user')->first());
    return view('user',array('user'=>Auth::user())) ;

}



}
