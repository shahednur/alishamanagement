/*=========================================================================================
  File Name: moduleCategoryMutations.js
  Description: Category module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_CATEGORY (state, item) {
      state.categories.unshift(item)
    },
    GET_CATEGORIES (state, categories) {
      state.categories = categories
    },
    UPDATE_CATEGORY (state, category) {
      const CategoryIndex = state.categories.findIndex((p) => p.id === category.id)
      Object.assign(state.categories[CategoryIndex], category)
    },
    REMOVE_CATEGORY (state, itemId) {
      const ItemIndex = state.categories.findIndex((p) => p.id === itemId)
      state.categories.splice(ItemIndex, 1)
    }
  }