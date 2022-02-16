/*=========================================================================================
  File Name: moduleBloodActions.js
  Description: Blood module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addBlood({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/blood/new', {item})
        .then((response) => {
          commit('ADD_BLOOD', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/blood');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchBlood({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/bloods')
        .then((response) => {
          commit('GET_BLOODS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateBlood({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/blood/update`,{item})
        .then((response) => {
          commit('UPDATE_BLOOD', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
}
