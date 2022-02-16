/*=========================================================================================
  File Name: moduleReceptionistActions.js
  Description: Receptionist module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addReceptionist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/receptionist/new', {item})
        .then((response) => {
          commit('ADD_RECEPTIONIST', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/receptionist');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchReceptionists ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/receptionists')
        .then((response) => {
          commit('GET_RECEPTIONISTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateReceptionist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/receptionist/update`,{item})
        .then((response) => {
          commit('UPDATE_RECEPTIONIST', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeReceptionist ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/receptionist/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_RECEPTIONIST',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
