/*=========================================================================================
  File Name: moduleMainDepartmentMutations.js
  Description: MainDepartment module Mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_MDEPARTMENT (state, item) {
      state.mdepartments.unshift(item)
    },
    SET_MDEPARTMENTS (state, mdepartments) {
      state.mdepartments = mdepartments
    },
    UPDATE_MDEPARTMENT (state, mdepartment) {
      const DepartmentIndex = state.mdepartments.findIndex((p) => p.id === mdepartment.id)
      Object.assign(state.mdepartments[DepartmentIndex], mdepartment)
    },
    REMOVE_MDEPARTMENT (state, itemId) {
      const ItemIndex = state.mdepartments.findIndex((p) => p.id === itemId)
      state.mdepartments.splice(ItemIndex, 1)
    }
  }