<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\MainDepartment;

class Department extends Model
{
    const NAME = 'name';
    const DESCRIPTION = 'description';
    const STATUS = 'status';
    const DEPARTMENT = 'department_id';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::DESCRIPTION,
        self::STATUS,
        self::DEPARTMENT
    ];

    public function department(){
        return $this->belongsTo(MainDepartment::class,'department_id');
    }
}
