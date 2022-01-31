<?php

namespace App\Http\Controllers;

use App\Model\ExpenseCategory;
use Illuminate\Http\Request;

class ExpenseCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = ExpenseCategory::get();
        return response()->json($categories, 200);
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
        $category = new ExpenseCategory;
        $category->category = $request->item['category'];
        $category->description = $request->item['description'];
        $category->status = $request->item['status'];
        $category->save();

        return response()->json($category, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = ExpenseCategory::whereId($id)->first();
        return response()->json($category, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ExpenseCategory $expenseCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ExpenseCategory $expenseCategory)
    {
        $category = ExpenseCategory::where('id',$request->item['id'])->first();

        $category->category = $request->item['category'];
        $category->description = $request->item['description'];
        $category->status = $request->item['status'];
        $category->update();

        return response()->json($category, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ExpenseCategory $expenseCategory, $id)
    {
        $category = ExpenseCategory::where('id',$id)->first();
        if($category != null){
            $category->delete();
            return response()->json(null, 200)->with(['message'=>'Category has deleted successfully!']);
        }
    }
}
