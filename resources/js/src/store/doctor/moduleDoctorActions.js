/*=========================================================================================
  File Name: moduleDoctorActions.js
  Description: Doctor module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addDoctor({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/doctor/new', {item})
        .then((response) => {
          commit('ADD_DOCTOR', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/doctor');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchDoctor({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/doctors')
        .then((response) => {
          commit('GET_DOCTOR', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateDoctor({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/doctor/update`,{item})
        .then((response) => {
          commit('UPDATE_DOCTOR', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeDoctor({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/doctor/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_DOCTOR',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
