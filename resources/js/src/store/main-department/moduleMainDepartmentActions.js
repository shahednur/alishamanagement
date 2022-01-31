/*=========================================================================================
  File Name: moduleMainDepartmentAction.js
  Description: Main Department module action
  ----------------------------------------------------------------------------------------
  Software Name: Hospital Management System
  Author: Shahednur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addMdepartment ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/main/department/new', {item})
        .then((response) => {
          commit('ADD_MDEPARTMENT', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/main/department');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchMdepartment ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/main/departments')
        .then((response) => {
          commit('SET_MDEPARTMENTS', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateMdepartment ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/main/department/update`,{item})
        .then((response) => {
          commit('UPDATE_MDEPARTMENT', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeMdepartment ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/main/department/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_MDEPARTMENT',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
