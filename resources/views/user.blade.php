

@extends('layouts.app')
@section('user')
<div class="container">
    
    
    <div class="row ">
        
        
        
        <div class="col-md-10 col-md-offset-1">
       <img src="{{($user->image_profile)}}"  style="width:150px; height:150px; float:left; border-radius:50%; margin-right:25px ">
         <h2> {{$user->name}}  </h2>
         <h2> {{$user->isAdmin}}  </h2>
         <h2> {{$user->roles}}  </h2>
         <form enctype='multipart/form-data' action='/profile'method='post'>
         
         <label> update photo</label>
         <input type='file' name='image_profile' style="float:left;">
         {{csrf_field()}}
         <input type='submit' class='pull-right btn-sm btn-primary' style="float:left;">
         
         </form>
        
         
       
              
    
       
     
         
              
       
        </div>
    </div>

    <hr><hr>
   
</div>
@if(count($user->questions)===0)
<div class="container">
<div class="card mb-3">
<div class="card-body">
<h5 class="card-title">There is no question. can you add question <a href='/question'><h2>click here</h2></a></h5>
</div>
</div>
</div>
@endif

@foreach($user->questions as $detail)
<div class="container">
<div class="card mb-3">
  
  <div class="card-body">
    <h5 class="card-title">{{$detail->question}} ?</h5>
    @if($detail->answer)
    <p class="card-text">{{$detail->answer->answer}}</p>
    @else
    <p class="card-text"> no answer</p>
  
    @endif
    <p class="card-text"><small class="text-muted">{{$detail->created_at}}</small></p>
    <form method="POST" action="/deleteuser/{{$detail->id}}">
    {{ csrf_field() }}
   {{ method_field('DELETE') }}
    <button class="btn btn-danger">Delete</button>
</form>
  </div>
</div>

</div>
@endforeach
@endsection

<!-- @foreach($user->questions as $detail)
{{$detail}}

@if($detail->answer)
{{$detail->answer->answer}}
@else no answer
@endif
<br>
@endforeach -->





