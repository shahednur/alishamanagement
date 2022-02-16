/*=========================================================================================
  File Name: moduleDoctorMutations.js
  Description: Doctor module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_DOCTOR(state, item) {
      state.doctors.unshift(item)
    },
    GET_DOCTOR(state, doctors) {
      state.doctors = doctors
    },
    UPDATE_DOCTOR(state, doctor) {
      const DoctorIndex = state.doctors.findIndex((p) => p.id === doctor.id)
      Object.assign(state.doctors[DoctorIndex], doctor)
    },
    REMOVE_DOCTOR(state, itemId) {
      const ItemIndex = state.doctors.findIndex((p) => p.id === itemId)
      state.doctors.splice(ItemIndex, 1)
    }
  }