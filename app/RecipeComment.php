<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecipeComment extends Model
{
    protected $fillable = ['comment'];
    

    public function user() {
        return $this->belongsTo(User::class);
    }


    public function Recipe() {
        return $this->belongsTo(Recipe::class);
    } //
}
