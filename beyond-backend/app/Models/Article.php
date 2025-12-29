<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'url',
        'content',
        'is_updated',
        'references'
    ];
}
//now we allow Allowed Laravel to insert/update data in articles table