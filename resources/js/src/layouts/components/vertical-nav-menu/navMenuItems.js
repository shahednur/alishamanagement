/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: null,
    name: 'Dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
  },
  {
    url:null,
    name:'Doctor',
    icon: 'UserIcon',
    i18n: 'Doctor',
    submenu: [
      {
        url: '/pages/doctor',
        name: "Doctor",
        slug: "doctor",
        i18n: "Doctor",
      },
      {
        url: '/pages/history',
        name: "Treatmeant History",
        slug: "treatment-history",
        i18n: "TreatmentHistory",
      },
    ]
  },
  {
    url:null,
    name:'Patient',
    icon: 'UserIcon',
    i18n: 'Patient',
    submenu: [
      {
        url: '/pages/patient',
        name: "Patient",
        slug: "patient",
        i18n: "patient",
      },
    ]
  },
  {
    url:null,
    name:'Appointment',
    icon: 'ClipboardIcon',
    i18n: 'Appointment',
    submenu: [
      {
        url: '/pages/appointment',
        name: "Appointment",
        slug: "appointment",
        i18n: "Appointment",
      },
    ]
  },
  {
    url:null,
    name:'Department',
    icon: 'FileIcon',
    i18n: 'Department',
    submenu: [
      {
        url: '/pages/main/department',
        name: "Main Department",
        slug: "main-department",
        i18n: "MainDepartment",
      },
      {
        url: '/pages/department',
        name: "Department",
        slug: "department",
        i18n: "Department",
      },
    ]
  },
  {
    url: null,
    name: "Pharmacy",
    icon: "ShoppingBagIcon",
    i18n: "Pharmacy",
    submenu: [
      {
        url: '/pages/sales',
        name: "Sales",
        slug: "sales",
        i18n: "Sales",
      },
      {
        url: '/pages/expense',
        name: "Expense",
        slug: "expense",
        i18n: "Expense",
      },
      {
        url: '/pages/expense/category',
        name: "Expense Category",
        slug: "expense-category",
        i18n: "ExpenseCategory",
      },
    ]
  },
  {
    url: null,
    name: "Medicine",
    icon: "ClipboardIcon",
    i18n: "Medicine",
    submenu: [
      {
        url: '/pages/category',
        name: "Medicine Category",
        slug: "medicine-category",
        i18n: "MedicineCategory",
      },
      {
        url: '/pages/medicine',
        name: "Medicine",
        slug: "medicine",
        i18n: "Medicine",
      },
    ]
  },
  {
    url: null,
    name: "Human Resource",
    icon: "GridIcon",
    i18n: "HumanResource",
    submenu: [
      {
        url: '/pages/nurse',
        name: "Nurse",
        slug: "nurse",
        i18n: "Nurse",
      },
      {
        url: '/pages/pharmacist',
        name: "Pharmacist",
        slug: "pharmacist",
        i18n: "Pharmacist",
      },
      {
        url: '/pages/laboratorist',
        name: "Laboratorist",
        slug: "laboratorist",
        i18n: "Laboratorist",
      },
      {
        url: '/pages/accountant',
        name: "Accountant",
        slug: "accountant",
        i18n: "Accountant",
      },
      {
        url: '/pages/receptionist',
        name: "Receptionist",
        slug: "receptionist",
        i18n: "Receptionist",
      },
    ]
  },
  {
    url:null,
    name:'Blood',
    icon: 'FilmIcon',
    i18n: 'Blood',
    submenu: [
      {
        url: '/pages/blood',
        name: "Blood",
        slug: "blood",
        i18n: "Blood",
      },
    ]
  },
  {
    url:null,
    name:'Donor',
    icon: 'UserIcon',
    i18n: 'Donor',
    submenu: [
      {
        url: '/pages/donor',
        name: "Donor",
        slug: "donor",
        i18n: "Donor",
      },
    ]
  },
  {
    url:null,
    name:'Room',
    icon: 'HomeIcon',
    i18n: 'Room',
    submenu: [
      {
        url: '/pages/room',
        name: "Room",
        slug: "room",
        i18n: "Room",
      },
    ]
  },
  {
    url:null,
    name:'Bed',
    icon: 'ClipboardIcon',
    i18n: 'Bed',
    submenu: [
      {
        url: '/pages/bed',
        name: "Bed",
        slug: "bed",
        i18n: "Bed",
      },
    ]
  },
]

