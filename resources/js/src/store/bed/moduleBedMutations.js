/*=========================================================================================
  File Name: moduleBedMutations.js
  Description: Bed module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_BED(state, item) {
      state.beds.unshift(item)
    },
    GET_BED(state, beds) {
      state.beds = beds
    },
    UPDATE_BED(state, bed) {
      const BedIndex = state.beds.findIndex((p) => p.id === bed.id)
      Object.assign(state.beds[BedIndex], bed)
    },
    REMOVE_BED(state, itemId) {
      const ItemIndex = state.beds.findIndex((p) => p.id === itemId)
      state.beds.splice(ItemIndex, 1)
    }
  }