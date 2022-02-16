(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _MedicineAddNew_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicineAddNew.vue */ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue");
/* harmony import */ var _MedicineList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MedicineList.vue */ "./resources/js/src/views/apps/medicine/MedicineList.vue");
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
        description: '',
        quantity: '',
        price: '',
        sales_price: '',
        manufacturer: '',
        generic_name: '',
        expire_date: '',
        category_id: '',
        status: true
      })
    };
  },
  watch: {},
  computed: {
    medicines: function medicines() {
      return this.$store.getters['medicines'];
    },
    categories: function categories() {
      return this.$store.getters['categories'];
    }
  },
  methods: {
    editModal: function editModal(medicine) {
      this.editMode = true;
      this.form.fill(medicine);
    }
  },
  components: {
    MedicineAddNew: _MedicineAddNew_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MedicineList: _MedicineList_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch('fetchMedicine');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    categories: {
      type: Array,
      required: true
    },
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
        description: '',
        quantity: '',
        price: '',
        sales_price: '',
        manufacturer: '',
        generic_name: '',
        expire_date: '',
        category_id: '',
        status: true
      });
    },
    showCreateSuccess: function showCreateSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Medicine has Created',
        text: 'Medicine has created successfully!',
        globalPosition: 'top right'
      });
    },
    showUpdatedSuccess: function showUpdatedSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Medicine has Updated',
        text: 'Medicine has Updated successfully!',
        globalPosition: 'top right'
      });
    },
    createMedicine: function createMedicine() {
      this.$store.dispatch('addMedicine', Object.assign({}, this.form)).then(function (response) {
        console.log('success', response);
      }).catch(function (err) {
        console.error(err);
      });
      this.clearFields();
      this.showCreateSuccess();
    },
    updateMedicine: function updateMedicine() {
      this.$store.dispatch('updateMedicine', Object.assign({}, this.form));
      this.showUpdatedSuccess();
      this.clearFields();
      this.editMode = false;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('fetchCategory');
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    medicines: {
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
      this.$store.dispatch("removeMedicine", id).then(function (response) {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #todo-app .todo-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n[dir] #todo-app .todo-content-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo_todo-item {\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  transition: background-color 0.2s, transform 0.2s;\n}\n[dir] #todo-app .list-item-component {\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  transition: all 0.2s;\n}\n[dir] #todo-app .list-item-component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n[dir=ltr] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-right: 2px !important;\n}\n[dir=rtl] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-left: 2px !important;\n}\n.not-data-table, .vs-table--not-data {\n  display: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #todo-app .todo-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n[dir] #todo-app .todo-content-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo_todo-item {\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  transition: background-color 0.2s, transform 0.2s;\n}\n[dir] #todo-app .list-item-component {\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  transition: all 0.2s;\n}\n[dir] #todo-app .list-item-component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n[dir=ltr] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-right: 2px !important;\n}\n[dir=rtl] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-left: 2px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicine.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Medicine Information Form:" } },
        [
          _c("MedicineAddNew", {
            attrs: {
              categories: _vm.categories,
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
        { attrs: { title: "Medicine Information Display:" } },
        [
          _c("MedicineList", {
            attrs: { medicines: _vm.medicines, editModal: _vm.editModal }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            _vm.editModal ? _vm.updateMedicine() : _vm.createMedicine()
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
                      label: "Medicine Name",
                      placeholder: "Medicine Name"
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
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      name: "sales_price",
                      label: "Sales Price",
                      placeholder: "Sales Price"
                    },
                    model: {
                      value: _vm.form.sales_price,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "sales_price", $$v)
                      },
                      expression: "form.sales_price"
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
                      name: "manufacturer",
                      label: "Company",
                      placeholder: "Company"
                    },
                    model: {
                      value: _vm.form.manufacturer,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "manufacturer", $$v)
                      },
                      expression: "form.manufacturer"
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
              _c("div", { staticClass: "vx-col w-full" }, [
                _c("label", [_vm._v("Medicine Category")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.category_id,
                        expression: "form.category_id"
                      }
                    ],
                    staticClass: "custom-select w-full custom-select-lg",
                    attrs: { id: "categories", name: "category_id" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.categories, function(item, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: item.id } },
                      [_vm._v(_vm._s(item.name))]
                    )
                  }),
                  0
                )
              ])
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
                      name: "quantity",
                      label: "Quantity",
                      placeholder: "Quantity"
                    },
                    model: {
                      value: _vm.form.quantity,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "quantity", $$v)
                      },
                      expression: "form.quantity"
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
                  _c("label", [_vm._v("Expire Date")]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: { name: "expire_date", placeholder: "Expire Date" },
                    model: {
                      value: _vm.form.expire_date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "expire_date", $$v)
                      },
                      expression: "form.expire_date"
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
                          return _vm.createMedicine()
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
                          return _vm.updateMedicine()
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
                      name: "price",
                      label: "Purchase Price",
                      placeholder: "Purchase Price"
                    },
                    model: {
                      value: _vm.form.price,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "price", $$v)
                      },
                      expression: "form.price"
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
                      name: "generic_name",
                      label: "Generic Name",
                      placeholder: "Generic Name"
                    },
                    model: {
                      value: _vm.form.generic_name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "generic_name", $$v)
                      },
                      expression: "form.generic_name"
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
                      name: "description",
                      label: "Notes",
                      height: "100px"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c& ***!
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
  return _c(
    "div",
    { staticClass: "vx-col md:w-1/1  w-full mb-base" },
    [
      _vm.medicines && _vm.medicines.length
        ? _c(
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
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "category_id", nowrap: "" } },
                    [_vm._v("Category")]
                  ),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "price", nowrap: "" } }, [
                    _vm._v("Purchase Price")
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "sales_price", nowrap: "" } },
                    [_vm._v("Sales Price")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "quantity", nowrap: "" } },
                    [_vm._v("Quantity")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "generic_name", nowrap: "" } },
                    [_vm._v("Generic Name")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "manufacturer", nowrap: "" } },
                    [_vm._v("Company")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "expire_date", nowrap: "" } },
                    [_vm._v("Expire Date")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    { attrs: { "sort-key": "description", nowrap: "" } },
                    [_vm._v("Notes")]
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
              !_vm.medicines.length
                ? [
                    _c(
                      "vs-tr",
                      [
                        _c(
                          "vs-td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "4" }
                          },
                          [_vm._v("No Medicine Available")]
                        )
                      ],
                      1
                    )
                  ]
                : _vm._l(_vm.medicines, function(medicine, index) {
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
                              _vm._s(medicine.name) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.category.name) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.price) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.sales_price) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.quantity) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.generic_name) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.manufacturer) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(_vm._f("myDate")(medicine.expire_date)) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(medicine.description) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _vm._v(
                            "\r\n                                " +
                              _vm._s(
                                medicine.status == 1 ? "Active" : "In Active"
                              ) +
                              "\r\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-td", { attrs: { nowrap: "" } }, [
                          _c("div", { staticClass: "flex" }, [
                            _c(
                              "div",
                              { staticClass: "flex items-center" },
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
                                      return _vm.editModal(medicine)
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex items-center" },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    color: "danger",
                                    type: "flat",
                                    "icon-pack": "feather",
                                    icon: "icon-delete"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.deleteRecord(medicine.id)
                                      _vm.confirmDeleteRecord(medicine.name)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  })
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/medicine/Medicine.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/Medicine.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Medicine.vue?vue&type=template&id=3493f2bc& */ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc&");
/* harmony import */ var _Medicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Medicine.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Medicine.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Medicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/medicine/Medicine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicine.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicine.vue?vue&type=template&id=3493f2bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/Medicine.vue?vue&type=template&id=3493f2bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicine_vue_vue_type_template_id_3493f2bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineAddNew.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MedicineAddNew.vue?vue&type=template&id=7867559b& */ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b&");
/* harmony import */ var _MedicineAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicineAddNew.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MedicineAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/medicine/MedicineAddNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineAddNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineAddNew.vue?vue&type=template&id=7867559b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineAddNew.vue?vue&type=template&id=7867559b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineAddNew_vue_vue_type_template_id_7867559b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MedicineList.vue?vue&type=template&id=ec52530c& */ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c&");
/* harmony import */ var _MedicineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicineList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MedicineList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MedicineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/medicine/MedicineList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MedicineList.vue?vue&type=template&id=ec52530c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/medicine/MedicineList.vue?vue&type=template&id=ec52530c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineList_vue_vue_type_template_id_ec52530c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);