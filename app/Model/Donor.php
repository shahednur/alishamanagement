<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Blood;

class Donor extends Model
{
    const NAME = 'name';
    const EMAIL = 'email';
    const PHONE = 'phone';
    const SEX = 'sex';
    const AGE = 'age';
    const DATE = 'date';
    const BLOOD = 'blood_id';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::EMAIL,
        self::PHONE,
        self::SEX,
        self::AGE,
        self::DATE,
        self::BLOOD,
        self::STATUS
    ];

    public function blood(){
        return $this->belongsTo(Blood::class,'blood_id');
    }
}
