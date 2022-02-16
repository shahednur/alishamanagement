/*=========================================================================================
  File Name: moduleDepartmentMutations.js
  Description: Department module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_DEPARTMENT (state, item) {
      state.departments.unshift(item)
    },
    SET_DEPARTMENTS(state, departments) {
      state.departments = departments
    },
    // // SET_LABELS(state, labels) {
    // //   state.eventLabels = labels
    // // },
    UPDATE_DEPARTMENT (state, department) {
      const DepartmentIndex = state.departments.findIndex((p) => p.id === department.id)
      Object.assign(state.departments[DepartmentIndex], department)
    },
    REMOVE_DEPARTMENT (state, itemId) {
      const ItemIndex = state.departments.findIndex((p) => p.id === itemId)
      state.departments.splice(ItemIndex, 1)
    }

    // updateProjects(state,projects){
    //     state.projects = projects;
    // }
  }