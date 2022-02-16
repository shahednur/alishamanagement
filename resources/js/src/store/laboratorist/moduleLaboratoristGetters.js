/*=========================================================================================
  File Name: moduleLaboratoristGetters.js
  Description: Laboratorist module getters
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    // getItem: state => (productId) => state.products.find((product) => product.id == productId),

    laboratorists(state){
        return state.laboratorists;
     }
  }