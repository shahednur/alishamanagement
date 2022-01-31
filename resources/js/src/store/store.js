/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth.js'
import moduleECommerce from './eCommerce/moduleECommerce.js'
import moduleProject from './project/moduleProject.js'
import moduleCategory from './category/moduleCategory.js'
import moduleExpenseCategory from './expense-category/moduleExpenseCategory.js'
import moduleMedicine from './medicine/moduleMedicine.js'
import moduleExpense from './expense/moduleExpense.js'
import moduleDepartment from './department/moduleDepartment.js'
import moduleMainDepartment from './main-department/moduleMainDepartment.js'
import moduleNurse from './nurse/moduleNurse.js'
import modulePharmacist from './pharmacist/modulePharmacist.js'
import moduleLaboratorist from './laboratorist/moduleLaboratorist.js'
import moduleAccountant from './accountant/moduleAccountant.js'
import moduleReceptionist from './receptionist/moduleReceptionist.js'
import moduleBlood from './blood/moduleBlood.js'
import moduleDoctor from './doctor/moduleDoctor.js'
import moduleDonor from './donor/moduleDonor.js'
import modulePatient from './patient/modulePatient.js'
import moduleRoom from './room/moduleRoom.js'
import moduleBed from './bed/moduleBed.js'
import moduleAppointment from './appointment/moduleAppointment.js'

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    auth: moduleAuth,
    eCommerce: moduleECommerce,
    projecting: moduleProject,
    category:moduleCategory,
    medicine:moduleMedicine,
    expenseCategory:moduleExpenseCategory,
    expense:moduleExpense,
    department:moduleDepartment,
    mdepartment:moduleMainDepartment,
    nurse:moduleNurse,
    pharmacist:modulePharmacist,
    Laboratorist:moduleLaboratorist,
    accountant:moduleAccountant,
    receptionist:moduleReceptionist,
    blood:moduleBlood,
    doctor:moduleDoctor,
    donor:moduleDonor,
    patient:modulePatient,
    room:moduleRoom,
    bed:moduleBed,
    appointment:moduleAppointment,
  },
  strict:true
  // strict: process.env.NODE_ENV !== 'production'
})
