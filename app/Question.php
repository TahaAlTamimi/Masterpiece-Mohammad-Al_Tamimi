<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['question'];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function answer()
    {
        return $this->hasOne('App\Answer');
    }
    //
}
