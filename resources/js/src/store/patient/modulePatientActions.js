/*=========================================================================================
  File Name: modulePatientActions.js
  Description: Patient module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addPatient({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/patient/new', {item})
        .then((response) => {
          commit('ADD_PATIENT', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/patient');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchPatient({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/patients')
        .then((response) => {
          commit('GET_PATIENT', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updatePatient({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/patient/update`,{item})
        .then((response) => {
          commit('UPDATE_PATIENT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removePatient({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/patient/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_PATIENT',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
