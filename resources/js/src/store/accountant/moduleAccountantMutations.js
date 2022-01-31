/*=========================================================================================
  File Name: moduleAccountantMutations.js
  Description: Accountant module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_ACCOUNTANT (state, item) {
      state.accountants.unshift(item)
    },
    GET_ACCOUNTANTS (state, accountants) {
      state.accountants = accountants
    },
    UPDATE_ACCOUNTANT (state, accountant) {
      const accountantIndex = state.accountants.findIndex((p) => p.id === accountant.id)
      Object.assign(state.accountants[accountantIndex], accountant)
    },
    REMOVE_ACCOUNTANT(state, itemId) {
      const ItemIndex = state.accountants.findIndex((p) => p.id === itemId)
      state.accountants.splice(ItemIndex, 1)
    }
  }