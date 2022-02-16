/*=========================================================================================
  File Name: moduleMedicineActions.js
  Description: Medicine module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addMedicine ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/medicine/new', {item})
        .then((response) => {
          commit('ADD_MEDICINE', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/medicine');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchMedicine ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/medicines')
        .then((response) => {
          commit('SET_MEDICINES', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateMedicine ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/medicine/update`,{item})
        .then((response) => {
          commit('UPDATE_MEDICINE', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeMedicine ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/medicine/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_MEDICINE',itemId)
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
