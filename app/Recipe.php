<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{

    Protected $table='recipes';
    protected $fillable=['title','prefer','author','image','body'];


    public function recipeComments() {
        return $this->hasMany(RecipeComment::class);
    }
    //
}
