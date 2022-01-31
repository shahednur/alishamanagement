<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Category;

class Medicine extends Model
{
    const NAME = 'name';
    const DESCRIPTION = 'description';
    const QUANTITY = 'quantity';
    const PRICE = 'price';
    const SALES = 'sales_price';
    const MANUFACTURER = 'manufacturer';
    const GENERIC = 'generic_name';
    const CATEGORY = 'category_id';
    const EXPIRE = 'expire_date';
    const STATUS = 'status';

    public $timestamps = true;

    protected $fillable = [
        self::NAME,
        self::DESCRIPTION,
        self::QUANTITY,
        self::PRICE,
        self::SALES,
        self::MANUFACTURER,
        self::GENERIC,
        self::CATEGORY,
        self::EXPIRE,
        self::STATUS
    ];

    public function category(){
        return $this->belongsTo(Category::class,'category_id');
    }

}
