<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    const NAME = 'name';
    const DESCRIPTION = 'description';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::DESCRIPTION,
        self::STATUS
    ];
}
