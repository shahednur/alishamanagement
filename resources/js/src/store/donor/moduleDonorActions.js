/*=========================================================================================
  File Name: moduleDonorActions.js
  Description: Donor module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addDonor({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/donor/new', {item})
        .then((response) => {
          commit('ADD_DONOR', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/donor');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchDonor({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/donors')
        .then((response) => {
          commit('GET_DONOR', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateDonor({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/donor/update`,{item})
        .then((response) => {
          commit('UPDATE_DONOR', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeDonor({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/donor/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_DONOR',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
