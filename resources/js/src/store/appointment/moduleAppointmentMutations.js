/*=========================================================================================
  File Name: moduleAppointmentMutations.js
  Description: Appointment module mutations
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
==========================================================================================*/

export default {
    ADD_APPOINTMENT (state, item) {
      state.appointments.unshift(item)
    },
    GET_APPOINTMENT (state, appointments) {
      state.appointments = appointments
    },
    UPDATE_APPOINTMENT (state, appointment) {
      const AppointmentIndex = state.appointments.findIndex((p) => p.id === appointment.id)
      Object.assign(state.appointments[AppointmentIndex], appointment)
    },
    REMOVE_APPOINTMENT (state, itemId) {
      const ItemIndex = state.appointments.findIndex((p) => p.id === itemId)
      state.appointments.splice(ItemIndex, 1)
    }
  }