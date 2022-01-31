/*=========================================================================================
  File Name: moduelProjectActions.js
  Description: Project moduel actions
  ----------------------------------------------------------------------------------------
  Item Name: Accounting & Inventory
  Author: TheWorld
  Author URL: http://www.theworld.com
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/project/new', {item})
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/project');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchProjectItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/projects')
        .then((response) => {
          commit('SET_PROJECTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/update`,{item})
        .then((response) => {
          commit('UPDATE_PROJECT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeProject ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_PROJECT',itemId)
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
