/*=========================================================================================
  File Name: modulePharmacistAction.js
  Description: Pharmacist module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addPharmacist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/pharmacist/new', {item})
        .then((response) => {
          commit('ADD_PHARMACIST', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/pharmacist');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchPharmacist ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/pharmacists')
        .then((response) => {
          commit('GET_PHARMACISTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updatePharmacist ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/pharmacist/update`,{item})
        .then((response) => {
          commit('UPDATE_PHARMACIST', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removePharmacist ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/pharmacist/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_PHARMACIST',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
