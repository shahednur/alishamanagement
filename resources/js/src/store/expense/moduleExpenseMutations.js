/*=========================================================================================
  File Name: moduleExpenseMutations.js
  Description: Expense module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_EXPENSE (state, item) {
      state.expenses.unshift(item)
    },
    SET_EXPENSES (state, expenses) {
      state.expenses = expenses
    },
    // // SET_LABELS(state, labels) {
    // //   state.eventLabels = labels
    // // },
    UPDATE_EXPENSE (state, expense) {
      const ExpenseIndex = state.expenses.findIndex((p) => p.id === expense.id)
      Object.assign(state.expenses[ExpenseIndex], expense)
    },
    REMOVE_EXPENSE (state, itemId) {
      const ItemIndex = state.expenses.findIndex((p) => p.id === itemId)
      state.expenses.splice(ItemIndex, 1)
    }

    // updateProjects(state,projects){
    //     state.projects = projects;
    // }
  }