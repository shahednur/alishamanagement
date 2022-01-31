/*=========================================================================================
  File Name: moduelProjectMutations.js
  Description: Project moduel mutations
  ----------------------------------------------------------------------------------------
  Item Name: Accounting & Inventory
  Author: TheWorld
  Author URL: http://www.theworld.com
==========================================================================================*/

export default {
    ADD_ITEM (state, item) {
      state.projects.unshift(item)
    },
    SET_PROJECTS (state, projects) {
      state.projects = projects
    },
    // // SET_LABELS(state, labels) {
    // //   state.eventLabels = labels
    // // },
    UPDATE_PROJECT (state, project) {
      const projectIndex = state.projects.findIndex((p) => p.id === project.id)
      Object.assign(state.projects[projectIndex], project)
    },
    REMOVE_PROJECT (state, itemId) {
      const ItemIndex = state.projects.findIndex((p) => p.id === itemId)
      state.projects.splice(ItemIndex, 1)
    }

    // updateProjects(state,projects){
    //     state.projects = projects;
    // }
  }