<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Model\Department;

class Doctor extends Model
{
    const NAME = 'name';
    const EMAIL = 'email';
    const PHONE = 'phone';
    const ADDRESS = 'address';
    const DESIGNATION = 'designation';
    const STATUS = 'status';
    const USER = 'user_id';
    const DEPARTMENT = 'department_id';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::EMAIL,
        self::PHONE,
        self::ADDRESS,
        self::DESIGNATION,
        self::STATUS,
        self::USER,
        self::DEPARTMENT
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function department()
    {
        return $this->belongsTo(Department::class,'department_id');
    }
}
