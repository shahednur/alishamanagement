/*=========================================================================================
  File Name: moduleCategoryActions.js
  Description: Category module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addCategory ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/category/new', {item})
        .then((response) => {
          commit('ADD_CATEGORY', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/category');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchCategory ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/categories')
        .then((response) => {
          commit('GET_CATEGORIES', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateCategory ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/category/update`,{item})
        .then((response) => {
          commit('UPDATE_CATEGORY', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeCategory ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/category/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_CATEGORY',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
