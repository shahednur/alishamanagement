<?php

namespace App\Http\Controllers;

use App\Model\Expense;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $expenses = Expense::with('category')->get();
        return response()->json($expenses, 200);
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
        $dt = Carbon::parse($request->item['create_date'])->format('Y-m-d');

        $expense = new Expense;
        $expense->amount = $request->item['amount'];
        $expense->category_id = $request->item['category_id'];
        $expense->create_date = $dt;
        $expense->save();

        return response()->json($expense, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $expense = Expense::whereId($id)->first();
        return response()->json($expense, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Expense $expense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expense $expense)
    {
        $expense = Expense::where('id',$request->item['id'])->first();
        $dt = Carbon::parse($request->item['create_date'])->format('Y-m-d');

        $expense->amount = $request->item['amount'];
        $expense->category_id = $request->item['category_id'];
        $expense->create_date = $dt;
        $expense->update();

        return response()->json($expense, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense, $id)
    {
        $expense = Expense::where('id', $id)->first();
        if($expense != null){
            $expense->delete();
            return response()->json(null, 200)->with(['message'=>'Expense has deleted successfully!']);
        }
    }
}
