<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


    /*===================================Project========================================= */
	// Route::get('products','ProductController@index')->name('browsProduct');
	// Route::get('product/{id}','ProductController@show')->name('displayProduct');
	// Route::post('product/new','ProductController@store')->name('createProduct');
	// Route::post('product/{id}','ProductController@update')->name('updateProduct');
	// Route::delete('products/{id}','ProductController@destroy')->name('deleteProduct');

	/*===================================Project========================================= */
	Route::get('projects','ProjectController@index')->name('browsProject');
	Route::get('project/{id}','ProjectController@show')->name('displayProject');
	Route::post('project/new','ProjectController@store')->name('createProject');
	Route::post('update','ProjectController@update')->name('updateProject');
	Route::delete('delete/{id}','ProjectController@destroy')->name('deleteProject');


	/*===================================Category========================================= */
	Route::get('categories','CategoryController@index')->name('browsCategory');
	Route::get('category/{id}','CategoryController@show')->name('displayCategory');
	Route::post('category/new','CategoryController@store')->name('createCategory');
	Route::post('category/update','CategoryController@update')->name('updateCategory');
	Route::delete('category/delete/{id}','CategoryController@destroy')->name('deleteCategory');

	/*===================================Medicine========================================= */
	Route::get('medicines','MedicineController@index')->name('browsMedicine');
	Route::get('medicine/{id}','MedicineController@show')->name('displayMedicine');
	Route::post('medicine/new','MedicineController@store')->name('createMedicine');
	Route::post('medicine/update','MedicineController@update')->name('updateMedicine');
	Route::delete('medicine/delete/{id}','MedicineController@destroy')->name('deleteMedicine');

	/*===================================Expense Category========================================= */
	Route::get('expense/categories','ExpenseCategoryController@index')->name('brows.expense.category');
	Route::get('expense/categories/{id}','ExpenseCategoryController@show')->name('display.expense.category');
	Route::post('expense/category/new','ExpenseCategoryController@store')->name('create.expense.category');
	Route::post('expense/category/update','ExpenseCategoryController@update')->name('update.expense.category');
	Route::delete('expense/category/delete/{id}','ExpenseCategoryController@destroy')->name('delete.expense.category');

	/*===================================Expense========================================= */
	Route::get('expenses','ExpenseController@index')->name('brows.expense');
	Route::get('expense/{id}','ExpenseController@show')->name('display.expense');
	Route::post('expense/new','ExpenseController@store')->name('create.expense');
	Route::post('expense/update','ExpenseController@update')->name('update.expense');
	Route::delete('expense/delete/{id}','ExpenseController@destroy')->name('delete.expense');

	/*===================================Main Department========================================= */
	Route::get('main/departments','MainDepartmentController@index')->name('brows.main.department');
	Route::get('main/department/{id}','MainDepartmentController@show')->name('display.main.department');
	Route::post('main/department/new','MainDepartmentController@store')->name('create.main.department');
	Route::post('main/department/update','MainDepartmentController@update')->name('update.main.department');
	Route::delete('main/department/delete/{id}','MainDepartmentController@destroy')->name('delete.main.department');

	/*===================================Department========================================= */
	Route::get('departments','DepartmentController@index')->name('brows.department');
	Route::get('department/{id}','DepartmentController@show')->name('display.department');
	Route::post('department/new','DepartmentController@store')->name('create.department');
	Route::post('department/update','DepartmentController@update')->name('update.department');
	Route::delete('department/delete/{id}','DepartmentController@destroy')->name('delete.department');

	/*===================================User========================================= */
	Route::get('users','UserController@index')->name('browse.users');
	Route::get('user/{id}','UserController@show')->name('display.users');
	Route::post('user/new','UserController@store')->name('create.users');
	Route::post('user/update','UserController@update')->name('update.users');
	Route::delete('user/delete/{id}','UserController@destroy')->name('delete.users');
    

	/*===================================Nurse========================================= */
	Route::get('nurses','NurseController@index')->name('browse.nurse');
	Route::get('nurse/{id}','NurseController@show')->name('display.nurse');
	Route::post('nurse/new','NurseController@store')->name('create.nurse');
	Route::post('nurse/update','NurseController@update')->name('update.nurse');
	Route::delete('nurse/delete/{id}','NurseController@destroy')->name('delete.nurse');

	/*===================================Pharmacist========================================= */
	Route::get('pharmacists','PharmacistController@index')->name('browse.pharmacist');
	Route::get('pharmacist/{id}','PharmacistController@show')->name('display.pharmacist');
	Route::post('pharmacist/new','PharmacistController@store')->name('create.pharmacist');
	Route::post('pharmacist/update','PharmacistController@update')->name('update.pharmacist');
	Route::delete('pharmacist/delete/{id}','PharmacistController@destroy')->name('delete.pharmacist');

	/*===================================Laboratorist========================================= */
	Route::get('laboratorists','LaboratoristController@index')->name('browse.laboratorist');
	Route::get('laboratorist/{id}','LaboratoristController@show')->name('display.laboratorist');
	Route::post('laboratorist/new','LaboratoristController@store')->name('create.laboratorist');
	Route::post('laboratorist/update','LaboratoristController@update')->name('update.laboratorist');
	Route::delete('laboratorist/delete/{id}','LaboratoristController@destroy')->name('delete.laboratorist');


	/*===================================Accountant========================================= */
	Route::get('accountants','AccountantController@index')->name('browse.accountant');
	Route::get('accountant/{id}','AccountantController@show')->name('display.accountant');
	Route::post('accountant/new','AccountantController@store')->name('create.accountant');
	Route::post('accountant/update','AccountantController@update')->name('update.accountant');
	Route::delete('accountant/delete/{id}','AccountantController@destroy')->name('delete.accountant');


	/*===================================Receptionist========================================= */
	Route::get('receptionists','ReceptionistController@index')->name('browse.receptionist');
	Route::get('receptionist/{id}','ReceptionistController@show')->name('display.receptionist');
	Route::post('receptionist/new','ReceptionistController@store')->name('create.receptionist');
	Route::post('receptionist/update','ReceptionistController@update')->name('update.receptionist');
	Route::delete('receptionist/delete/{id}','ReceptionistController@destroy')->name('delete.receptionist');


	/*===================================Blood========================================= */
	Route::get('bloods','BloodController@index')->name('browse.receptionist');
	Route::post('blood/new','BloodController@store')->name('create.receptionist');
	Route::post('blood/update','BloodController@update')->name('update.receptionist');


	/*===================================Doctor========================================= */
	Route::get('doctors','DoctorController@index')->name('browse.doctor');
	Route::get('doctor/{id}','DoctorController@show')->name('display.doctor');
	Route::post('doctor/new','DoctorController@store')->name('create.doctor');
	Route::post('doctor/update','DoctorController@update')->name('update.doctor');
	Route::delete('doctor/delete/{id}','DoctorController@destroy')->name('delete.doctor');


	/*===================================Donor========================================= */
	Route::get('donors','DonorController@index')->name('browse.donor');
	Route::get('donor/{id}','DonorController@show')->name('display.donor');
	Route::post('donor/new','DonorController@store')->name('create.donor');
	Route::post('donor/update','DonorController@update')->name('update.donor');
	Route::delete('donor/delete/{id}','DonorController@destroy')->name('delete.donor');


	/*===================================Patient========================================= */
	Route::get('patients','PatientController@index')->name('browse.patient');
	Route::get('patient/{id}','PatientController@show')->name('display.patient');
	Route::post('patient/new','PatientController@store')->name('create.patient');
	Route::post('patient/update','PatientController@update')->name('update.patient');
	Route::delete('patient/delete/{id}','PatientController@destroy')->name('delete.patient');

	/*===================================Room========================================= */
	Route::get('rooms','RoomController@index')->name('browse.room');
	Route::get('room/{id}','RoomController@show')->name('display.room');
	Route::post('room/new','RoomController@store')->name('create.room');
	Route::post('room/update','RoomController@update')->name('update.room');
	Route::delete('room/delete/{id}','RoomController@destroy')->name('delete.room');

	/*===================================Bed========================================= */
	Route::get('beds','BedController@index')->name('browse.bed');
	Route::get('bed/{id}','BedController@show')->name('display.bed');
	Route::post('bed/new','BedController@store')->name('create.bed');
	Route::post('bed/update','BedController@update')->name('update.bed');
	Route::delete('bed/delete/{id}','BedController@destroy')->name('delete.bed');

	/*===================================Appointment========================================= */
	Route::get('appointments','AppointmentController@index')->name('browse.appointment');
	Route::get('appointment/{id}','AppointmentController@show')->name('display.appointment');
	Route::post('appointment/new','AppointmentController@store')->name('create.appointment');
	Route::post('appointment/update','AppointmentController@update')->name('update.appointment');
	Route::delete('appointment/delete/{id}','AppointmentController@destroy')->name('delete.appointment');