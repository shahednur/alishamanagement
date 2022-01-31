/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth/authService'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          redirect: '/dashboard/analytics'
        },
        {
          path: '/dashboard/analytics',
          name: 'dashboard-analytics',
          component: () => import('./views/DashboardAnalytics.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/dashboard/ecommerce',
          name: 'dashboard-ecommerce',
          component: () => import('./views/DashboardECommerce.vue'),
          meta: {
            rule: 'admin'
          }
        },       
        // =============================================================================
        // Pages Routes
        // =============================================================================
        {
          path: '/pages/project',
          name: 'page-project',
          component: () => import('@/views/apps/project/Project.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'Project', active: true }
            ],
            pageTitle: 'Project',
            rule: 'editor'
          }
        },
        {
          path: '/pages/category',
          name: 'page-pharmacy',
          component: () => import('@/views/apps/category/Category.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Medicine' },
              { title: 'Category', active: true }
            ],
            pageTitle: 'Category',
            rule: 'editor'
          }
        },
        {
          path: '/pages/medicine',
          name: 'page-medicine',
          component: () => import('@/views/apps/medicine/Medicine.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Medicine' },
              { title: 'Medicine', active: true }
            ],
            pageTitle: 'Medicine',
            rule: 'editor'
          }
        },
        {
          path: '/pages/sales',
          name: 'page-sales',
          component: () => import('@/views/apps/sales/Sales.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pharmacy' },
              { title: 'Sales', active: true }
            ],
            pageTitle: 'Sales',
            rule: 'editor'
          }
        },
        {
          path: '/pages/expense',
          name: 'page-expense',
          component: () => import('@/views/apps/expense/Expense.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pharmacy' },
              { title: 'Expense', active: true }
            ],
            pageTitle: 'Expense',
            rule: 'editor'
          }
        },
        {
          path: '/pages/expense/category',
          name: 'page-expense-category',
          component: () => import('@/views/apps/expense-category/ExpenseCategory.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pharmacy' },
              { title: 'Category', active: true }
            ],
            pageTitle: 'Category',
            rule: 'editor'
          }
        },
        {
          path: '/pages/main/department',
          name: 'page-main-department',
          component: () => import('@/views/apps/main-department/Mdepartment.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Department' },
              { title: 'Main Department', active: true }
            ],
            pageTitle: 'Department',
            rule: 'editor'
          }
        },
        {
          path: '/pages/department',
          name: 'page-department',
          component: () => import('@/views/apps/department/Department.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Department' },
              { title: 'Department', active: true }
            ],
            pageTitle: 'Department',
            rule: 'editor'
          }
        },
        {
          path: '/pages/nurse',
          name: 'page-nurse',
          component: () => import('@/views/apps/nurse/Nurse.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'HR' },
              { title: 'Nurse', active: true }
            ],
            pageTitle: 'Nurse',
            rule: 'editor'
          }
        },
        {
          path: '/pages/pharmacist',
          name: 'page-pharmacist',
          component: () => import('@/views/apps/pharmacist/Pharmacist.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'HR' },
              { title: 'Pharmacist', active: true }
            ],
            pageTitle: 'Pharmacist',
            rule: 'editor'
          }
        },
        {
          path: '/pages/laboratorist',
          name: 'page-laboratorist',
          component: () => import('@/views/apps/laboratorist/Laboratorist.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'HR' },
              { title: 'Laboratorist', active: true }
            ],
            pageTitle: 'Laboratorist',
            rule: 'editor'
          }
        },
        {
          path: '/pages/accountant',
          name: 'page-accountant',
          component: () => import('@/views/apps/accountant/Accountant.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'HR' },
              { title: 'Accountant', active: true }
            ],
            pageTitle: 'Accountant',
            rule: 'editor'
          }
        },
        {
          path: '/pages/receptionist',
          name: 'page-receptionist',
          component: () => import('@/views/apps/receptionist/Receptionist.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'HR' },
              { title: 'Receptionist', active: true }
            ],
            pageTitle: 'Receptionist',
            rule: 'editor'
          }
        },
        {
          path: '/pages/doctor',
          name: 'page-doctor',
          component: () => import('@/views/apps/doctor/Doctor.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Doctor' },
              { title: 'Doctor', active: true }
            ],
            pageTitle: 'Doctor',
            rule: 'editor'
          }
        },
        {
          path: '/pages/history',
          name: 'page-history',
          component: () => import('@/views/apps/history/Medicine.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'History' },
              { title: 'History', active: true }
            ],
            pageTitle: 'History',
            rule: 'editor'
          }
        },
        {
          path: '/pages/blood',
          name: 'page-blood',
          component: () => import('@/views/apps/blood/Blood.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Blood' },
              { title: 'Blood', active: true }
            ],
            pageTitle: 'Blood',
            rule: 'editor'
          }
        },
        {
          path: '/pages/donor',
          name: 'page-donor',
          component: () => import('@/views/apps/donor/Donor.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Donor' },
              { title: 'Donor', active: true }
            ],
            pageTitle: 'Donor',
            rule: 'editor'
          }
        },
        {
          path: '/pages/patient',
          name: 'page-donor',
          component: () => import('@/views/apps/patient/Patient.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Patient' },
              { title: 'Patient', active: true }
            ],
            pageTitle: 'Patient',
            rule: 'editor'
          }
        },
        {
          path: '/pages/room',
          name: 'page-room',
          component: () => import('@/views/apps/room/Room.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Room' },
              { title: 'Room', active: true }
            ],
            pageTitle: 'Room',
            rule: 'editor'
          }
        },
        {
          path: '/pages/bed',
          name: 'page-bed',
          component: () => import('@/views/apps/bed/Bed.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Bed' },
              { title: 'Bed', active: true }
            ],
            pageTitle: 'Bed',
            rule: 'editor'
          }
        },
        {
          path: '/pages/appointment',
          name: 'page-appointment',
          component: () => import('@/views/apps/appointment/Appointment.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Appointment' },
              { title: 'Appointment', active: true }
            ],
            pageTitle: 'Appointment',
            rule: 'editor'
          }
        },
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/callback',
          name: 'auth-callback',
          component: () => import('@/views/Callback.vue'),
          meta: {
            rule: 'editor'
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {

    // get firebase current user
    const firebaseCurrentUser = firebase.auth().currentUser

    // if (
    //     to.path === "/pages/login" ||
    //     to.path === "/pages/forgot-password" ||
    //     to.path === "/pages/error-404" ||
    //     to.path === "/pages/error-500" ||
    //     to.path === "/pages/register" ||
    //     to.path === "/callback" ||
    //     to.path === "/pages/comingsoon" ||
    //     (auth.isAuthenticated() || firebaseCurrentUser)
    // ) {
    //     return next();
    // }

    // If auth required, check login. If login fails redirect to login page
    if (to.meta.authRequired) {
      if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
        router.push({ path: '/pages/login', query: { to: to.path } })
      }
    }

    return next()
    // Specify the current path as the customState parameter, meaning it
    // will be returned to the application after auth
    // auth.login({ target: to.path });

  })

})

export default router
