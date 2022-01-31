/*=========================================================================================
  File Name: moduleDepartmentActions.js
  Description: Department module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addDepartment ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/department/new', {item})
        .then((response) => {
          commit('ADD_DEPARTMENT', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/department');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchDepartment ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/departments')
        .then((response) => {
          commit('SET_DEPARTMENTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateDepartment ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/department/update`,{item})
        .then((response) => {
          commit('UPDATE_DEPARTMENT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeDepartment ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/department/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_DEPARTMENT',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
