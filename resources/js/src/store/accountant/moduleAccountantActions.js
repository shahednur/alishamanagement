/*=========================================================================================
  File Name: moduleAccountantActions.js
  Description: Accountant module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addAccountant ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/accountant/new', {item})
        .then((response) => {
          commit('ADD_ACCOUNTANT', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/accountant');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchAccountant ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/accountants')
        .then((response) => {
          commit('GET_ACCOUNTANTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateAccountant ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/accountant/update`,{item})
        .then((response) => {
          commit('UPDATE_ACCOUNTANT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeAccountant ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/accountant/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_ACCOUNTANT',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
