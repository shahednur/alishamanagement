<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Doctor;
use App\Model\Blood;
use App\Model\Room;
use App\Model\Bed;

class Patient extends Model
{
    const NAME = 'name';
    const EMAIL = 'email';
    const PHONE = 'phone';
    const ADDRESS = 'address';
    const SEX = 'sex';
    const DOB = 'dob';
    const DOCTOR = 'doctor_id';
    const BLOOD = 'blood_id';
    const ROOM = 'room_id';
    const BED = 'bed_id';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::EMAIL,
        self::PHONE,
        self::ADDRESS,
        self::SEX,
        self::DOB,
        self::DOCTOR,
        self::BLOOD,
        self::ROOM,
        self::BED,
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class,'doctor_id');
    }
    public function blood()
    {
        return $this->belongsTo(Blood::class,'blood_id');
    }
    public function room()
    {
        return $this->belongsTo(Room::class,'room_id');
    }
    public function bed()
    {
        return $this->belongsTo(Bed::class,'bed_id');
    }
}
