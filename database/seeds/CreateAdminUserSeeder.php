<?php

use Illuminate\Database\Seeder;
use App\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['id' => 1, 'name' => 'admin', 'email' => 'admin@gmail.com', 'password' => bcrypt('admin123')],
            ['id' => 2, 'name' => 'nurse', 'email' => 'nurse@gmail.com', 'password' => bcrypt('nurse123')],
            ['id' => 3, 'name' => 'pharmacist', 'email' => 'pharmacist@gmail.com', 'password' => bcrypt('pharmacist123')],
            ['id' => 4, 'name' => 'laboratorist', 'email' => 'laboratorist@gmail.com', 'password' => bcrypt('laboratorist123')],
            ['id' => 5, 'name' => 'accountant', 'email' => 'accountant@gmail.com', 'password' => bcrypt('accountant123')],
            ['id' => 6, 'name' => 'receptionist', 'email' => 'receptionist@gmail.com', 'password' => bcrypt('receptionist123')],
        ];

        foreach($users as $use){
            User::create($use);
        }
        
        $roles = [
            'admin',
            'nurse',
            'pharmacist',
            'laboratorist',
            'receptionist',
            'accountant',
         ];

        // $permissions = Permission::pluck('id','id')->all();
  
        foreach ($roles as $rol) {
            
           $role = new Role;
           $role->name = $rol;
           $role->save();
      }

    }
}
