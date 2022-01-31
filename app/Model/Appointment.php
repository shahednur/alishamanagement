<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Patient;
use App\Model\Doctor;
use App\Model\Room;

class Appointment extends Model
{
    const PATIENT = 'patient_id';
    const DOCTOR = 'doctor_id';
    const ROOM = 'room_id';
    const STIME = 's_time';
    const ETIME = 'e_time';
    const REMARKS = 'remarks';
    const DATE = 'date';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::PATIENT,
        self::DOCTOR,
        self::ROOM,
        self::STIME,
        self::ETIME,
        self::REMARKS,
        self::DATE,
        self::STATUS
    ];

    public function patient(){
        return $this->belongsTo(Patient::class,'patient_id');
    }
    public function doctor(){
        return $this->belongsTo(Doctor::class,'doctor_id');
    }
    public function room(){
        return $this->belongsTo(Room::class,'room_id');
    }
}
