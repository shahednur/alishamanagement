/*=========================================================================================
  File Name: modulePatientMutations.js
  Description: Patient module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_PATIENT (state, item) {
      state.patients.unshift(item)
    },
    GET_PATIENT (state, patients) {
      state.patients = patients
    },
    UPDATE_PATIENT (state, patient) {
      const PatientIndex = state.patients.findIndex((p) => p.id === patient.id)
      Object.assign(state.patients[PatientIndex], patient)
    },
    REMOVE_PATIENT (state, itemId) {
      const ItemIndex = state.patients.findIndex((p) => p.id === itemId)
      state.patients.splice(ItemIndex, 1)
    }
  }