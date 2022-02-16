<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    const NAME = 'name';
    const DESCRIPTION = 'description';
    const LIMIT = 'limit';
    const CHARGE = 'charge';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::DESCRIPTION,
        self::LIMIT,
        self::CHARGE,
        self::STATUS
    ];
}
