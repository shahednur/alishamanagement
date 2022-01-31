/*=========================================================================================
  File Name: moduleNurseMutations.js
  Description: Nurse module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_NURSE (state, item) {
      state.nurses.unshift(item)
    },
    GET_NURSES (state, nurses) {
      state.nurses = nurses
    },
    GET_USERS (state, users) {
      state.users = users
    },
    UPDATE_NURSE (state, nurse) {
      const NurseIndex = state.nurses.findIndex((p) => p.id === nurse.id)
      Object.assign(state.nurses[NurseIndex], nurse)
    },
    REMOVE_NURSE (state, itemId) {
      const ItemIndex = state.nurses.findIndex((p) => p.id === itemId)
      state.nurses.splice(ItemIndex, 1)
    }
  }