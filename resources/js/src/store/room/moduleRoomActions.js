/*=========================================================================================
  File Name: moduleRoomActions.js
  Description: Room module actions
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addRoom({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/room/new', {item})
        .then((response) => {
          commit('ADD_ROOM', Object.assign(item, {id: response.data.id}))
          this.$router.push('/pages/room');
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  fetchRoom ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/rooms')
        .then((response) => {
          commit('GET_ROOM', response.data)
          resolve(response)
          console.log('success',response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  updateRoom ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/room/update`,{item})
        .then((response) => {
          commit('UPDATE_ROOM', response.data)
          console.log('success',response)
          resolve(response)
        })
        .catch(error => {
          console.log(error.response)
       })
    })
  },
  removeRoom ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/room/delete/${itemId}`)
        .then((response) => {
          commit('REMOVE_ROOM',itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
