<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Blood extends Model
{
    const GROUP = 'group';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::GROUP,
        self::STATUS
    ];
}
