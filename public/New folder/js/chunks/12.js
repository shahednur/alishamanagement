(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _ProjectAddNew_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAddNew.vue */ "./resources/js/src/views/apps/project/ProjectAddNew.vue");
/* harmony import */ var _ProjectList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.vue */ "./resources/js/src/views/apps/project/ProjectList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editMode: false,
      form: new Form({
        id: '',
        name: '',
        project_code: '',
        initial_value: '',
        revised_value: '',
        start_date: '',
        location: '',
        noa: '',
        narration: '',
        company_id: '',
        company_group_id: '',
        created_by: '',
        created_date: '',
        status: true
      })
    };
  },
  watch: {},
  computed: {
    projects: function projects() {
      return this.$store.getters['projects'];
    }
  },
  methods: {
    editModal: function editModal(project) {
      this.editMode = true;
      this.form.fill(project);
    }
  },
  components: {
    ProjectAddNew: _ProjectAddNew_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProjectList: _ProjectList_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch('fetchProjectItems');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    editModal: Function,
    editMode: Boolean,
    form: Object
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    clearFields: function clearFields() {
      Object.assign(this.form, {
        id: '',
        name: '',
        project_code: '',
        initial_value: '',
        revised_value: '',
        start_date: '',
        location: '',
        noa: '',
        narration: '',
        company_id: '',
        company_group_id: '',
        created_by: '',
        created_date: '',
        status: true
      });
    },
    showCreateSuccess: function showCreateSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Created',
        text: 'Project has createdsuccessfully!'
      });
    },
    showUpdatedSuccess: function showUpdatedSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Updated',
        text: 'Project has Updated successfully!',
        globalPosition: 'top right'
      });
    },
    createProject: function createProject() {
      //   this.errors = null;
      //   const constraints = this.getConstraints();
      //   const errors = validate(this.$data.projects, constraints);
      //   if(errors) {
      //     this.errors = errors;
      //     return;
      //   }
      this.$store.dispatch('addItem', Object.assign({}, this.form));
      this.clearFields();
      this.showCreateSuccess();
    },
    updateProject: function updateProject() {
      this.$store.dispatch('updateItem', Object.assign({}, this.form));
      this.showUpdatedSuccess();
      this.clearFields();
      this.editMode = false;
    } // getConstraints() {
    // return {
    //     name: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 characters long'
    //         }
    //     },
    //     project_code :{
    //         presence: true,
    //         numericality: true
    //     },
    //     initial_value: {
    //         presence: true,
    //         numericality: true,
    //         length: {
    //             minimum: 2,
    //             message: 'Must be at least 2 digits long'
    //         }
    //     },
    //     location: {
    //         presence: true,
    //         length: {
    //             minimum: 5,
    //             message: 'Must be at least 5 Characters long'
    //         }
    //     },
    //     noa: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 digits long'
    //         }
    //     },
    //     revised_value: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 digits long'
    //         }
    //     },
    //     narration: {
    //         presence: true,
    //         length: {
    //             minimum: 5,
    //             message: 'Must be at least 5 Characters long'
    //         }
    //     },
    //     start_date: {
    //         presence: true,
    //     },
    //     created_date: {
    //         presence: true,
    //     },
    //     company_id: {
    //         presence: true,
    //     },
    //     company_group_id: {
    //         presence: true,
    //     },
    //     created_by: {
    //         presence: true,
    //     },
    //     status: {
    //         presence: true,
    //     }
    // };
    // },
    // customFormatter(date) {
    //   return moment(date).format('MMMM Do YYYY');
    // }

  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    projects: {
      type: Array,
      required: true
    },
    editModal: {
      type: Function
    }
  },
  data: function data() {
    return {
      project_not_found: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    confirmDeleteRecord: function confirmDeleteRecord(name) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: "You are about to delete \"".concat(name, "\""),
        accept: this.deleteRecord,
        acceptText: 'Delete'
      });
    },
    deleteRecord: function deleteRecord(id) {
      this.$store.dispatch("removeProject", id).then(function (response) {
        console.log('success', response);
      }).catch(function (err) {
        console.error(err);
      });
    }
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #todo-app .todo-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n[dir] #todo-app .todo-content-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo_todo-item {\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  transition: background-color 0.2s, transform 0.2s;\n}\n[dir] #todo-app .list-item-component {\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  transition: all 0.2s;\n}\n[dir] #todo-app .list-item-component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n[dir=ltr] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-right: 2px !important;\n}\n[dir=rtl] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-left: 2px !important;\n}\n.not-data-table, .vs-table--not-data {\n  display: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #todo-app .todo-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n[dir] #todo-app .todo-content-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo_todo-item {\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  transition: background-color 0.2s, transform 0.2s;\n}\n[dir] #todo-app .list-item-component {\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  transition: all 0.2s;\n}\n[dir] #todo-app .list-item-component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n[dir=ltr] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-right: 2px !important;\n}\n[dir=rtl] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-left: 2px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vx-row", attrs: { id: "profile-page" } },
    [
      _c(
        "vx-card",
        { attrs: { title: "Project Information Form:" } },
        [
          _c("ProjectAddNew", {
            attrs: {
              editModal: _vm.editModal,
              editMode: _vm.editMode,
              form: _vm.form
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { title: "Project Information Display:" } },
        [
          _c("ProjectList", {
            attrs: { projects: _vm.projects, editModal: _vm.editModal }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vx-col md:w-1/1 w-full mb-base" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.editModal ? _vm.updateProject() : _vm.createProject()
          }
        }
      },
      [
        _c("div", { staticClass: "vx-row" }, [
          _c("div", { staticClass: "vx-col md:w-1/3" }, [
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "name",
                      label: "Project Name",
                      placeholder: "Project Name"
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("label", [_vm._v("Start Date")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      name: "created_date",
                      placeholder: "Created Date"
                    },
                    model: {
                      value: _vm.form.start_date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "start_date", $$v)
                      },
                      expression: "form.start_date"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { name: "noa", label: "NOA", placeholder: "NOA" },
                    model: {
                      value: _vm.form.noa,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "noa", $$v)
                      },
                      expression: "form.noa"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "created_by",
                      label: "Created By",
                      placeholder: "Created By"
                    },
                    model: {
                      value: _vm.form.created_by,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "created_by", $$v)
                      },
                      expression: "form.created_by"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("label", [_vm._v("Creation Date")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      name: "created_date",
                      placeholder: "Created Date"
                    },
                    model: {
                      value: _vm.form.created_date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "created_date", $$v)
                      },
                      expression: "form.created_date"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col md:w-1/3" }, [
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "project_code",
                      label: "Project Code",
                      placeholder: "Project Code"
                    },
                    model: {
                      value: _vm.form.project_code,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "project_code", $$v)
                      },
                      expression: "form.project_code"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "revised_value",
                      label: "Revised Value",
                      placeholder: "Revised Value"
                    },
                    model: {
                      value: _vm.form.revised_value,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "revised_value", $$v)
                      },
                      expression: "form.revised_value"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { label: "Company ID", placeholder: "Company ID" },
                    model: {
                      value: _vm.form.company_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "company_id", $$v)
                      },
                      expression: "form.company_id"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "company_group_id",
                      label: "Company Group ID",
                      placeholder: "Company Group ID"
                    },
                    model: {
                      value: _vm.form.company_group_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "company_group_id", $$v)
                      },
                      expression: "form.company_group_id"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("label", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      attrs: {
                        color: "success",
                        name: "status",
                        "vs-value": "1"
                      },
                      model: {
                        value: _vm.form.status,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "status", $$v)
                        },
                        expression: "form.status"
                      }
                    },
                    [_vm._v("Active")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      attrs: {
                        color: "danger",
                        name: "status",
                        "vs-value": "0"
                      },
                      model: {
                        value: _vm.form.status,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "status", $$v)
                        },
                        expression: "form.status"
                      }
                    },
                    [_vm._v("In-Active")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                {
                  staticClass: "vx-col w-full",
                  staticStyle: { "text-align": "center" }
                },
                [
                  _c(
                    "vs-button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editMode,
                          expression: "!editMode"
                        }
                      ],
                      ref: "loadableButton",
                      staticClass: "vs-con-loading__container",
                      attrs: { id: "button-with-loading", type: "relief" },
                      on: {
                        click: function($event) {
                          return _vm.createProject()
                        }
                      }
                    },
                    [_vm._v("Create")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editMode,
                          expression: "editMode"
                        }
                      ],
                      ref: "loadableButton",
                      staticClass: "vs-con-loading__container",
                      attrs: { id: "button-with-loadings", type: "relief" },
                      on: {
                        click: function($event) {
                          return _vm.updateProject()
                        }
                      }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col md:w-1/3" }, [
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "initial_value",
                      label: "Executive Value",
                      placeholder: "Executive Value"
                    },
                    model: {
                      value: _vm.form.initial_value,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "initial_value", $$v)
                      },
                      expression: "form.initial_value"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "Location",
                      label: "Location",
                      placeholder: "Location"
                    },
                    model: {
                      value: _vm.form.location,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "location", $$v)
                      },
                      expression: "form.location"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row mb-6" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full mt-6" },
                [
                  _c("vs-textarea", {
                    staticClass: "w-full",
                    attrs: {
                      name: "narration",
                      label: "Notes",
                      height: "200px"
                    },
                    model: {
                      value: _vm.form.narration,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "narration", $$v)
                      },
                      expression: "form.narration"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vx-col md:w-1/1  w-full mb-base" },
    [
      _c(
        "vs-table",
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "id", nowrap: "" } }, [
                _vm._v("SL")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "name", nowrap: "" } }, [
                _vm._v("Project Name")
              ]),
              _vm._v(" "),
              _c(
                "vs-th",
                { attrs: { "sort-key": "project_code", nowrap: "" } },
                [_vm._v("Project Code")]
              ),
              _vm._v(" "),
              _c(
                "vs-th",
                { attrs: { "sort-key": "initial_value", nowrap: "" } },
                [_vm._v("Executive Value")]
              ),
              _vm._v(" "),
              _c(
                "vs-th",
                { attrs: { "sort-key": "revised_value", nowrap: "" } },
                [_vm._v("Revised Value")]
              ),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "start_date", nowrap: "" } }, [
                _vm._v("Started Date")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "location", nowrap: "" } }, [
                _vm._v("Location")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "noa", nowrap: "" } }, [
                _vm._v("NOA")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "narration", nowrap: "" } }, [
                _vm._v("Notes")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "company_id", nowrap: "" } }, [
                _vm._v("Company Name")
              ]),
              _vm._v(" "),
              _c(
                "vs-th",
                { attrs: { "sort-key": "company_group_id", nowrap: "" } },
                [_vm._v("Company Group Name")]
              ),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "created_by", nowrap: "" } }, [
                _vm._v("Created By")
              ]),
              _vm._v(" "),
              _c(
                "vs-th",
                { attrs: { "sort-key": "created_date", nowrap: "" } },
                [_vm._v("Creation Date")]
              ),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "status", nowrap: "" } }, [
                _vm._v("Status")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { nowrap: "" } }, [_vm._v("Actions")])
            ],
            1
          ),
          _vm._v(" "),
          !_vm.projects.length
            ? [
                _c(
                  "vs-tr",
                  [
                    _c(
                      "vs-td",
                      { staticClass: "text-center", attrs: { colspan: "4" } },
                      [_vm._v("No Projects Available")]
                    )
                  ],
                  1
                )
              ]
            : _vm._l(_vm.projects, function(project, index) {
                return _c(
                  "vs-tr",
                  { key: index },
                  [
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(index + 1) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.name) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.project_code) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.initial_value) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.revised_value) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(_vm._f("myDate")(project.start_date)) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.location) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.noa) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.narration) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.company_id) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.company_group_id) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.created_by) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(_vm._f("myDate")(project.created_date)) +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("vs-td", { attrs: { nowrap: "" } }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(project.status == 1 ? "Active" : "In Active") +
                          "\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-td",
                      { attrs: { nowrap: "" } },
                      [
                        _c("vs-button", {
                          attrs: {
                            color: "primary",
                            type: "flat",
                            "icon-pack": "feather",
                            icon: "icon-edit"
                          },
                          on: {
                            click: function($event) {
                              return _vm.editModal(project)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-button", {
                          attrs: {
                            color: "danger",
                            type: "flat",
                            "icon-pack": "feather",
                            icon: "icon-delete"
                          },
                          on: {
                            click: function($event) {
                              _vm.deleteRecord(project.id)
                              _vm.confirmDeleteRecord(project.name)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/project/Project.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/project/Project.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=72ab7570& */ "./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/project/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=72ab7570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/Project.vue?vue&type=template&id=72ab7570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_72ab7570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectAddNew.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectAddNew.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectAddNew.vue?vue&type=template&id=b591fd62& */ "./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62&");
/* harmony import */ var _ProjectAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAddNew.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/project/ProjectAddNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectAddNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectAddNew.vue?vue&type=template&id=b591fd62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectAddNew.vue?vue&type=template&id=b591fd62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAddNew_vue_vue_type_template_id_b591fd62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=1645df2e& */ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/project/ProjectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=template&id=1645df2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/project/ProjectList.vue?vue&type=template&id=1645df2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_1645df2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);