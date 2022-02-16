<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Room;

class Bed extends Model
{
    const DESCRIPTION = 'description';
    const BED = 'bed_number';
    const ROOM = 'room_id';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::BED,
        self::DESCRIPTION,
        self::ROOM,
        self::STATUS
    ];

    public function room(){
        return $this->belongsTo(Room::class,'room_id');
    }
}
