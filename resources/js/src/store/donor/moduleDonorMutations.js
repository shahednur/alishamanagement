/*=========================================================================================
  File Name: moduleDonorMutations.js
  Description: Donor module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_DONOR (state, item) {
      state.donors.unshift(item)
    },
    GET_DONOR (state, donors) {
      state.donors = donors
    },
    UPDATE_DONOR (state, donor) {
      const DonorIndex = state.donors.findIndex((p) => p.id === donor.id)
      Object.assign(state.donors[DonorIndex], donor)
    },
    REMOVE_DONOR (state, itemId) {
      const ItemIndex = state.donors.findIndex((p) => p.id === itemId)
      state.donors.splice(ItemIndex, 1)
    }
  }