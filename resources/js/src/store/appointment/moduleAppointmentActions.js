/*=========================================================================================
  File Name: moduleAppointmentActions.js
  Description: Appointment module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addAppointment({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/appointment/new', {item})
        .then((response) => {
          commit('ADD_APPOINTMENT', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/appointment');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchAppointment ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/appointments')
        .then((response) => {
          commit('GET_APPOINTMENT', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateAppointment ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/appointment/update`,{item})
        .then((response) => {
          commit('UPDATE_APPOINTMENT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeAppointment ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/appointment/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_APPOINTMENT',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
