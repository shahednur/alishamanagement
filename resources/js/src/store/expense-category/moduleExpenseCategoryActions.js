/*=========================================================================================
  File Name: moduleExpenseCategoryActions.js
  Description: ExpenseCategory module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addExpenseCategory ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/expense/category/new', {item})
        .then((response) => {
          commit('ADD_EXCATEGORY', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/category');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchExpenseCategory ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/expense/categories')
        .then((response) => {
          commit('SET_EXCATEGORIES', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateExpenseCategory ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/expense/category/update`,{item})
        .then((response) => {
          commit('UPDATE_CATEGORY', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeExpenseCategory ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/expense/category/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_CATEGORY',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  // removeItem ({ commit }, itemId) {
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`/api/data-list/products/${itemId}`)
  //       .then((response) => {
  //         commit('REMOVE_ITEM', itemId)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
