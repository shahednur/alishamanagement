/*=========================================================================================
  File Name: modulePharmacistMutations.js
  Description: Pharmacist module Mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_PHARMACIST (state, item) {
      state.pharmacists.unshift(item)
    },
    GET_PHARMACISTS (state, pharmacists) {
      state.pharmacists = pharmacists
    },
    UPDATE_PHARMACIST (state, pharmacist) {
      const PharmacistIndex = state.pharmacists.findIndex((p) => p.id === pharmacist.id)
      Object.assign(state.pharmacists[PharmacistIndex], pharmacist)
    },
    REMOVE_PHARMACIST (state, itemId) {
      const ItemIndex = state.pharmacists.findIndex((p) => p.id === itemId)
      state.pharmacists.splice(ItemIndex, 1)
    }
  }