/*=========================================================================================
  File Name: moduleReceptionistGetters.js
  Description: Receptionist module getters
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    // getItem: state => (productId) => state.products.find((product) => product.id == productId),

    receptionists(state){
        return state.receptionists;
     }
  }