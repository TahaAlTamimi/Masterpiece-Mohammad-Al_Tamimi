<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    Protected $table='posts';
    protected $fillable=['title','prefer','author','image','body'];

    public function comments() {
        return $this->hasMany(Comment::class);
    }
}
