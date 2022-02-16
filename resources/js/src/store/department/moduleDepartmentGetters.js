/*=========================================================================================
  File Name: moduleDepartmentGetters.js
  Description: Department module getters
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    // getItem: state => (productId) => state.products.find((product) => product.id == productId),

    departments(state){
        return state.departments;
     }
  }