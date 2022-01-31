/*=========================================================================================
  File Name: moduleNurseActions.js
  Description: Nurse module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addNurse ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/nurse/new', {item})
        .then((response) => {
          commit('ADD_NURSE', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/nurse');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchNurse ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/nurses')
        .then((response) => {
          commit('GET_NURSES', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchUser ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/users')
        .then((response) => {
          commit('GET_USERS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateNurse ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/nurse/update`,{item})
        .then((response) => {
          commit('UPDATE_NURSE', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeNurse ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/nurse/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_NURSE',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
