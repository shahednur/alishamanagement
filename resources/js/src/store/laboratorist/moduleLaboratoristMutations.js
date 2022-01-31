/*=========================================================================================
  File Name: moduleLaboratoristMutations.js
  Description: Laboratorist module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_LABORATORIST (state, item) {
      state.laboratorists.unshift(item)
    },
    GET_LABORATORISTS (state, laboratorists) {
      state.laboratorists = laboratorists
    },
    UPDATE_LABORATORIST (state, laboratorist) {
      const LaboratoristIndex = state.laboratorists.findIndex((p) => p.id === laboratorist.id)
      Object.assign(state.laboratorists[LaboratoristIndex], laboratorist)
    },
    REMOVE_LABORATORIST (state, itemId) {
      const ItemIndex = state.laboratorists.findIndex((p) => p.id === itemId)
      state.laboratorists.splice(ItemIndex, 1)
    }
  }