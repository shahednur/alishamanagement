/*=========================================================================================
  File Name: moduleNurseGetters.js
  Description: Nurse module getters
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import { UsersIcon } from "vue-feather-icons";

export default {
   
    nurses(state){
        return state.nurses;
     },
    users(state){
        return state.users
    }
}