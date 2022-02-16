<?php

namespace App\Http\Controllers;

use App\Model\Medicine;
use Illuminate\Http\Request;
use Carbon\Carbon;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medicines = Medicine::with('category')->get();
        return response()->json($medicines, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dt = Carbon::parse($request->item['expire_date'])->format('Y-m-d');

        // $expire_date =  $dt->format('M d Y'); 

        $medicine = new Medicine;
        $medicine->name = $request->item['name'];
        $medicine->description = $request->item['description'];
        $medicine->quantity = $request->item['quantity'];
        $medicine->price = $request->item['price'];
        $medicine->sales_price = $request->item['sales_price'];
        $medicine->manufacturer = $request->item['manufacturer'];
        $medicine->generic_name = $request->item['generic_name'];
        $medicine->category_id = $request->item['category_id'];
        $medicine->expire_date = $dt;
        $medicine->status = $request->item['status'];
        $medicine->save();

        return response()->json($medicine, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $medicine = Medicine::whereId($id)->first();
        return response()->json($medicine,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function edit(Medicine $medicine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medicine $medicine)
    {
        $medicine = Medicine::where('id',$request->item['id'])->first();
        
        $dt = Carbon::parse($request->item['expire_date'])->format('Y-m-d');

        // $expire_date =  $dt->toDateString($request->item['expire_date']); 

        $medicine->name = $request->item['name'];
        $medicine->description = $request->item['description'];
        $medicine->quantity = $request->item['quantity'];
        $medicine->price = $request->item['price'];
        $medicine->sales_price = $request->item['sales_price'];
        $medicine->manufacturer = $request->item['manufacturer'];
        $medicine->generic_name = $request->item['generic_name'];
        $medicine->category_id = $request->item['category_id'];
        $medicine->expire_date = $dt;
        $medicine->status = $request->item['status'];
        $medicine->update();

        return response()->json($medicine, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medicine $medicine, $id)
    {
        $medicine = Medicine::where('id',$id)->first();
        if($medicine != null){
            $medicine->delete();
            return response()->json(null, 200)->with(['message'=>'Medicine Has deleted successfully!']);
        }
    }
}
