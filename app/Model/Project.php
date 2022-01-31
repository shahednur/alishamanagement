<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    const NAME = 'name';
    const PROJECT_CODE = 'project_code';
    const INITIAL_VALUE = 'initial_value';
    const REVISED_VALUE = 'revised_value';
    const START_DATE = 'start_date';
    const LOCATION = 'location';
    const NOA = 'noa';
    const NARRATION = 'narration';
    const COMPANY_ID = 'company_id';
    const COMPANY_GROUP_ID = 'company_group_id';
    const CREATED_BY = 'created_by';
    const CREATED_DATE = 'created_date';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::PROJECT_CODE,
        self::INITIAL_VALUE,
        self::REVISED_VALUE,
        self::LOCATION,
        self::NOA,
        self::NARRATION,
        self::COMPANY_ID,
        self::COMPANY_GROUP_ID,
        self::CREATED_BY,
        self::CREATED_DATE,
        self::STATUS,
    ];
}
