/*=========================================================================================
  File Name: moduleLaboratoristActions.js
  Description: Laboratorist module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addLaboratorist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/laboratorist/new', {item})
        .then((response) => {
          commit('ADD_LABORATORIST', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/laboratorist');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchLaboratorist ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/laboratorists')
        .then((response) => {
          commit('GET_LABORATORISTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateLaboratorist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/laboratorist/update`,{item})
        .then((response) => {
          commit('UPDATE_LABORATORIST', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeLaboratorist ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/laboratorist/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_LABORATORIST',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
