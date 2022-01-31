/*=========================================================================================
  File Name: moduleReceptionistMutations.js
  Description: Receptionist module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_RECEPTIONIST (state, item) {
      state.receptionists.unshift(item)
    },
    GET_RECEPTIONISTS (state, receptionists) {
      state.receptionists = receptionists
    },
    UPDATE_RECEPTIONIST (state, receptionist) {
      const ReceptionistIndex = state.receptionists.findIndex((p) => p.id === receptionist.id)
      Object.assign(state.receptionists[ReceptionistIndex], receptionist)
    },
    REMOVE_RECEPTIONIST (state, itemId) {
      const ItemIndex = state.receptionists.findIndex((p) => p.id === itemId)
      state.receptionists.splice(ItemIndex, 1)
    }
  }