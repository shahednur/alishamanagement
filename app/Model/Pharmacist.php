<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Pharmacist extends Model
{
    const NAME = 'name';
    const EMAIL = 'email';
    const PHONE = 'phone';
    const ADDRESS = 'address';
    const STATUS = 'status';
    const USER = 'user_id';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::EMAIL,
        self::PHONE,
        self::ADDRESS,
        self::STATUS,
        self::USER
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
