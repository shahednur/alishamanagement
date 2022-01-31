<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\ExpenseCategory;
use App\User;

class Expense extends Model
{
    const CATEGORY = 'category_id';
    const AMOUNT = 'amount';
    const DATE = 'create_date';

    public $timestamps = true;

    protected $fillable = [
        self::CATEGORY,
        self::AMOUNT,
        self::DATE
    ];

    public function category(){
        return $this->belongsTo(ExpenseCategory::class,'category_id');
    }

    // public function user(){
    //     return $this->belongsTo(User::class,'user_id');
    // }
}
