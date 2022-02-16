/*=========================================================================================
  File Name: moduleRoomMutations.js
  Description: Room module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_ROOM (state, item) {
      state.rooms.unshift(item)
    },
    GET_ROOM (state, rooms) {
      state.rooms = rooms
    },
    UPDATE_ROOM (state, room) {
      const RoomIndex = state.rooms.findIndex((p) => p.id === room.id)
      Object.assign(state.rooms[RoomIndex], room)
    },
    REMOVE_ROOM (state, itemId) {
      const ItemIndex = state.rooms.findIndex((p) => p.id === itemId)
      state.rooms.splice(ItemIndex, 1)
    }
  }