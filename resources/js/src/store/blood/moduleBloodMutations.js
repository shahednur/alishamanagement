/*=========================================================================================
  File Name: moduleBloodMutations.js
  Description: Blood module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_BLOOD(state, item) {
      state.bloods.unshift(item)
    },
    GET_BLOODS(state, bloods) {
      state.bloods = bloods
    },
    UPDATE_BLOOD(state, blood) {
      const BloodIndex = state.bloods.findIndex((p) => p.id === blood.id)
      Object.assign(state.bloods[BloodIndex], blood)
    },
    REMOVE_BLOOD(state, itemId) {
      const ItemIndex = state.bloods.findIndex((p) => p.id === itemId)
      state.bloods.splice(ItemIndex, 1)
    }
  }