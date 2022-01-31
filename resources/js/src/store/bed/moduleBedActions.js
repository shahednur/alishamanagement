/*=========================================================================================
  File Name: moduleBedActions.js
  Description: Bed module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addBed({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/bed/new', {item})
        .then((response) => {
          commit('ADD_BED', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/bed');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchBed ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/beds')
        .then((response) => {
          commit('GET_BED', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateBed ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/bed/update`,{item})
        .then((response) => {
          commit('UPDATE_BED', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeBed ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/bed/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_BED',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
