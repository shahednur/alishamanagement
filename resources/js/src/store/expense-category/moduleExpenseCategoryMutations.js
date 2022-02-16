/*=========================================================================================
  File Name: moduleExpenseCategoryMutations.js
  Description: ExpenseCategory module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_EXCATEGORY (state, item) {
      state.excategories.unshift(item)
    },
    SET_EXCATEGORIES (state, excategories) {
      state.excategories = excategories
    },
    // // SET_LABELS(state, labels) {
    // //   state.eventLabels = labels
    // // },
    UPDATE_EXCATEGORY (state, excategory) {
      const ExcategoryIndex = state.excategories.findIndex((p) => p.id === excategory.id)
      Object.assign(state.excategories[ExcategoryIndex], excategory)
    },
    REMOVE_EXCATEGORY (state, itemId) {
      const ItemIndex = state.excategories.findIndex((p) => p.id === itemId)
      state.excategories.splice(ItemIndex, 1)
    }

    // updateProjects(state,projects){
    //     state.projects = projects;
    // }
  }