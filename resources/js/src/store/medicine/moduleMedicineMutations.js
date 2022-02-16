/*=========================================================================================
  File Name: moduleMedicineMutations.js
  Description: Medicine module Mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_MEDICINE (state, item) {
      state.medicines.unshift(item)
    },
    SET_MEDICINES (state, medicines) {
      state.medicines = medicines
    },
    // // SET_LABELS(state, labels) {
    // //   state.eventLabels = labels
    // // },
    UPDATE_MEDICINE (state, medicine) {
      const MedicineIndex = state.medicines.findIndex((p) => p.id === medicine.id)
      Object.assign(state.medicines[MedicineIndex], medicine)
    },
    REMOVE_MEDICINE (state, itemId) {
      const ItemIndex = state.medicines.findIndex((p) => p.id === itemId)
      state.medicines.splice(ItemIndex, 1)
    }

    // updateProjects(state,projects){
    //     state.projects = projects;
    // }
  }