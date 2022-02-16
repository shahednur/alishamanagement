<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ExpenseCategory extends Model
{
    const CATEGORY = 'category';
    const DESCRIPTION = 'description';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::CATEGORY,
        self::DESCRIPTION,
        self::STATUS
    ];
}
