(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-components-components-module"],{

/***/ "./src/app/demo/components/badge/badge.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/badge/badge.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-component\">\n  <demo-wrapper header=\"Badge\" [code]=\"compSyntax\" [options]=\"options\">\n    <div output>\n      <div>\n        <t-badge badge=\"fa-home\"></t-badge>\n      </div>\n      <div>\n        <t-badge badge=\"fa-font-awesome\"></t-badge>\n      </div>\n    </div>\n    <div doc>\n      Badge passed to the component is class name from font-awesome library. Please refer\n      the <a href=\"https://fontawesome.com/v4.7.0/icons/\" target=\"_blank\">link</a> to get\n      icons.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/components/badge/badge.component.scss":
/*!************************************************************!*\
  !*** ./src/app/demo/components/badge/badge.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/components/badge/badge.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/badge/badge.component.ts ***!
  \**********************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
        this.compSyntax = "<t-badge badge=\"fa-home\"></t-badge> \n\n     <t-badge badge=\"fa-font-awesome\"></t-badge>";
        this.options = {
            name: 't-badge',
            options: [
                {
                    parameter: 'badge',
                    type: 'string',
                    desc: 'Icon class to render badge'
                }
            ]
        };
    };
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__(/*! ./badge.component.html */ "./src/app/demo/components/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/demo/components/badge/badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/button/button.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/button/button.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-component\">\n  <demo-wrapper header=\"Buttons\" [code]=\"compSyntax\" [options]=\"options\">\n    <div output>\n      <div class=\"row\">\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4\">\n          <h6 class=\"header\">Primary Button</h6>\n          <t-button label=\"Primary\" type=\"primary\"></t-button>\n        </div>\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4\">\n          <h6 class=\"header\">Secondary Button</h6>\n          <t-button label=\"Secondary\" type=\"secondary\"></t-button>\n        </div>\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4\">\n          <h6 class=\"header\">Tertiary Button</h6>\n          <t-button label=\"Tertiary\" type=\"tertiary\"> </t-button>\n        </div>\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4\">\n          <h6 class=\"header\">Large Button</h6>\n          <t-button label=\"Home\" type=\"primary\" isLarge=\"true\"></t-button>\n        </div>\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4 badge-btn\">\n          <h6 class=\"header\">Button with badge</h6>\n          <t-button label=\"Home\" type=\"primary\" badge=\"fa-home\" badgePosition=\"right\">\n          </t-button>\n          <t-button label=\"Home\" type=\"primary\" badge=\"fa-home\" badgePosition=\"left\">\n          </t-button>\n        </div>\n        <div class=\"seperator col-sm-12 col-md-6 col-lg-4\">\n          <h6 class=\"header\">Disabled</h6>\n          <t-button label=\"Home\" type=\"primary\" disabled=\"true\"></t-button>\n        </div>\n      </div>\n    </div>\n    <div doc>\n      Note: For performance the component inputs are optimised so don't provide parameter\n      which are not required for proper functioning.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/components/button/button.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/button/button.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-btn t-button {\n  margin: 0 10px; }\n  .badge-btn t-button button {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9jb21wb25lbnRzL2J1dHRvbi9FOlxcUHJvamVjdHNcXHVpLWxpYi9zcmNcXGFwcFxcZGVtb1xcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxjQUFjLEVBQUE7RUFGdEI7SUFJWSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlLWJ0biB7XHJcbiAgICB0LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo/components/button/button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/components/button/button.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.compSyntax = '<t-button label="Home" type="primary" badge="fa-home"></t-button>';
        this.options = {
            name: 't-button',
            options: [
                {
                    parameter: 'label',
                    type: 'string',
                    desc: 'Button label'
                },
                {
                    parameter: 'type',
                    type: 'string',
                    desc: 'Type of button to be rendered'
                },
                {
                    parameter: 'badge',
                    type: 'string',
                    desc: 'Icon class to render badge'
                },
                {
                    parameter: 'badgePosition',
                    type: 'string',
                    default: 'left',
                    desc: 'Shows badge based on specified position'
                },
                {
                    parameter: 'isLarge',
                    type: 'boolean',
                    default: false,
                    desc: 'Increases button size when true'
                },
                {
                    parameter: 'disabled',
                    default: 'false',
                    type: 'boolean',
                    desc: 'Disable button'
                }
            ]
        };
    }
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/demo/components/button/button.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/demo/components/button/button.component.scss")]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/checkbox/checkbox.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/checkbox/checkbox.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-component\">\n  <demo-wrapper header=\"Checkbox\" [code]=\"compSyntax\" [options]=\"options\">\n    <div output>\n      <t-checkbox label=\"Checkbox\" name=\"checkbox\" [(model)]=\"modelValue\"\n        (handleChange)=\"handleChange($event)\"></t-checkbox>\n      <div *ngIf=\"checkboxVal !== undefined\" class=\"output\">\n        <span>Output: </span>\n        <div>\n          <span>Event Emitter: </span>\n          <span>{{checkboxVal}}</span>\n        </div>\n        <div>\n          <span>Model: </span>\n          <span>{{modelValue}}</span>\n        </div>\n      </div>\n      <div></div>\n      <t-checkbox label=\"disabled checkbox\" name=\"checkbox\" disabled=\"true\"></t-checkbox>\n    </div>\n    <div doc>\n      Note: For performance the component inputs are optimised so don't provide parameter\n      which are not required for proper functioning.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/components/checkbox/checkbox.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/checkbox/checkbox.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-component .output {\n  padding: 0.6rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9jb21wb25lbnRzL2NoZWNrYm94L0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxjb21wb25lbnRzXFxjaGVja2JveFxcY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC1jb21wb25lbnQge1xyXG4gICAgLm91dHB1dCB7XHJcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo/components/checkbox/checkbox.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/checkbox/checkbox.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.compSyntax = "<t-checkbox name=\"checkbox\" label=\"Checkbox\" [(value)]=\"modelValue\"\n  (handleChange)=\"handleChange($event)\"></t-checkbox> \n\n  <t-checkbox label=\"Checkbox\" disabled=\"true\"></t-checkbox>";
        this.options = {
            name: 't-checkbox',
            options: [
                {
                    parameter: 'label',
                    type: 'string',
                    desc: 'checkbox label'
                },
                {
                    parameter: 'model',
                    type: 'boolean',
                    desc: 'model value which changes on basis of checkbox selection'
                },
                {
                    parameter: 'name',
                    type: 'string',
                    desc: 'checkbox name'
                },
                {
                    parameter: 'disabled',
                    default: 'false',
                    type: 'boolean',
                    desc: 'Disable component'
                }
            ],
            methods: [
                {
                    method: 'handleChange',
                    param: ['event: boolean'],
                    desc: 'triggers event on checkbox value change'
                }
            ]
        };
        this.modelValue = true;
    }
    CheckboxComponent.prototype.handleChange = function (event) {
        console.log(event);
        this.checkboxVal = event;
    };
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/demo/components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/demo/components/checkbox/checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/components/components.module.ts ***!
  \******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "./src/app/demo/common/common.module.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/demo/components/badge/badge.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "./src/app/demo/components/button/button.component.ts");
/* harmony import */ var _dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-fields/dynamic-fields.component */ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/demo/components/checkbox/checkbox.component.ts");
/* harmony import */ var _radio_demo_radio_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio-demo/radio-demo.component */ "./src/app/demo/components/radio-demo/radio-demo.component.ts");
/* harmony import */ var _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip-demo/tooltip-demo.component */ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.ts");











var routes = [
    { path: 'badge', component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"] },
    { path: 'button', component: _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"] },
    { path: 'dynamicFields', component: _dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFieldsDemoComponent"] },
    { path: 'checkbox', component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"] },
    { path: 'radio', component: _radio_demo_radio_demo_component__WEBPACK_IMPORTED_MODULE_9__["RadioDemoComponent"] },
    { path: 'tooltip', component: _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_10__["TooltipDemoComponent"] },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'badge'
    }
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                _dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFieldsDemoComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                _radio_demo_radio_demo_component__WEBPACK_IMPORTED_MODULE_9__["RadioDemoComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_10__["TooltipDemoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["Common"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/dynamic-fields/dynamic-fields.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-component\">\n  <demo-wrapper header=\"Dynamic Fields\" [code]=\"compSyntax\" [options]=\"options\">\n    <div output>\n      <t-dynamic-fields [fields]='field' [options]='option'\n        (primaryHandler)=\"onSearch($event)\" (secondaryHandler)=\"onReset($event)\">\n      </t-dynamic-fields>\n\n      <div class=\"comp-output\" *ngIf=\"output\">\n        {{output | json}}\n      </div>\n    </div>\n    <div doc>\n      Note: For performance the component inputs are optimised so don't provide parameter\n      which are not required for proper functioning.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/dynamic-fields/dynamic-fields.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/components/dynamic-fields/dynamic-fields.component.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicFieldsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldsDemoComponent", function() { return DynamicFieldsDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ui_library_src_lib_components_dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../projects/ui-library/src/lib/components/dynamic-fields/dynamic-fields.component */ "./projects/ui-library/src/lib/components/dynamic-fields/dynamic-fields.component.ts");



var DynamicFieldsDemoComponent = /** @class */ (function () {
    function DynamicFieldsDemoComponent() {
        this.compSyntax = "<t-dynamic-fields [fields]=\"field\"\n    [options]=\"option\"\n    (primaryHandler)=\"onSearch($event)\"\n    (secondaryHandler)=\"onReset($event)\"></t-dynamic-fields>";
        this.options = {
            name: 't-dynamic-fields',
            options: []
        };
        this.field = [
            {
                label: 'Name',
                type: 'text',
                model: 'name'
            },
            {
                label: 'New model',
                type: 'checkbox',
                model: 'isNew'
            },
            {
                label: 'Brand',
                type: 'select',
                model: 'brand',
                options: 'brand'
            }
        ];
        this.option = {
            dropdown: {
                brand: [
                    {
                        label: 'Maruti',
                        value: 'maruti'
                    },
                    {
                        label: 'Hyundai',
                        value: 'hyundai'
                    },
                    {
                        label: 'Ford',
                        value: 'ford'
                    }
                ]
            }
        };
    }
    DynamicFieldsDemoComponent.prototype.onSearch = function (param) {
        console.log(param);
        this.output = Object.assign({}, param);
    };
    DynamicFieldsDemoComponent.prototype.onReset = function (param) {
        console.log(param);
        this.output = undefined;
        this.dyFieldComp.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_projects_ui_library_src_lib_components_dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFieldsComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _projects_ui_library_src_lib_components_dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFieldsComponent"])
    ], DynamicFieldsDemoComponent.prototype, "dyFieldComp", void 0);
    DynamicFieldsDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-fields',
            template: __webpack_require__(/*! ./dynamic-fields.component.html */ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-fields.component.scss */ "./src/app/demo/components/dynamic-fields/dynamic-fields.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicFieldsDemoComponent);
    return DynamicFieldsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/radio-demo/radio-demo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/radio-demo/radio-demo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"radio-component\">\r\n    <demo-wrapper header=\"Radio button\" [code]=\"compSyntax\" [options]=\"options\">\r\n        <div output>\r\n            <t-radio label=\"Radio\" name=\"radio\" [(model)]=\"individualVal\"\r\n                (handleChange)=\"onGroupChange($event)\"></t-radio>\r\n            <div class=\"group-radio\">\r\n                <div>Group Radio button</div>\r\n                <t-radio label=\"Group A\" name=\"group\" [(model)]=\"groupVal\" value=\"groupA\"\r\n                    (handleChange)=\"onGroupChange($event)\">\r\n                </t-radio>\r\n                <t-radio label=\"Group B\" name=\"group\" [(model)]=\"groupVal\" value=\"groupB\"\r\n                    (handleChange)=\"onGroupChange($event)\">\r\n                </t-radio>\r\n                <t-radio label=\"Group C\" name=\"group\" [(model)]=\"groupVal\" value=\"groupC\"\r\n                    (handleChange)=\"onGroupChange($event)\">\r\n                </t-radio>\r\n                <div class=\"grp-output\" *ngIf=\"groupVal\">\r\n                    <span>Selected Group: </span>\r\n                    <span>{{groupVal}}</span>\r\n                </div>\r\n            </div>\r\n            <t-radio label=\"disabled radio button\" name=\"radio\" disabled=\"true\">\r\n            </t-radio>\r\n        </div>\r\n        <div doc>\r\n            Note: For performance the component inputs are optimised so don't provide\r\n            parameter\r\n            which are not required for proper functioning.\r\n        </div>\r\n    </demo-wrapper>\r\n</div>"

/***/ }),

/***/ "./src/app/demo/components/radio-demo/radio-demo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/radio-demo/radio-demo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-component .group-radio {\n  padding: 14px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9jb21wb25lbnRzL3JhZGlvLWRlbW8vRTpcXFByb2plY3RzXFx1aS1saWIvc3JjXFxhcHBcXGRlbW9cXGNvbXBvbmVudHNcXHJhZGlvLWRlbW9cXHJhZGlvLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2NvbXBvbmVudHMvcmFkaW8tZGVtby9yYWRpby1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvLWNvbXBvbmVudCB7XHJcbiAgICAuZ3JvdXAtcmFkaW8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgICAgICAuZ3JwLW91dHB1dCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/demo/components/radio-demo/radio-demo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/components/radio-demo/radio-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: RadioDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioDemoComponent", function() { return RadioDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioDemoComponent = /** @class */ (function () {
    function RadioDemoComponent() {
        this.groupVal = 'groupA';
        this.compSyntax = "<t-radio label=\"Radio\" name=\"radio\" [(model)]=\"model\" (handleChange)=\"onChange($event)\"></t-radio>";
        this.options = {
            name: 't-radio',
            options: [
                {
                    parameter: 'label',
                    type: 'string',
                    desc: 'radio button label'
                },
                {
                    parameter: 'model',
                    type: 'boolean | string',
                    desc: 'model value which changes on basis of radio button selection'
                },
                {
                    parameter: 'name',
                    type: 'string',
                    desc: 'radio button name'
                },
                {
                    parameter: 'disabled',
                    default: 'false',
                    type: 'boolean',
                    desc: 'Disable component'
                }
            ],
            methods: [
                {
                    method: 'handleChange',
                    param: ['event: boolean | string'],
                    desc: 'triggers event on radio value change'
                }
            ]
        };
    }
    RadioDemoComponent.prototype.onGroupChange = function (event) {
        console.log(event);
    };
    RadioDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-demo',
            template: __webpack_require__(/*! ./radio-demo.component.html */ "./src/app/demo/components/radio-demo/radio-demo.component.html"),
            styles: [__webpack_require__(/*! ./radio-demo.component.scss */ "./src/app/demo/components/radio-demo/radio-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioDemoComponent);
    return RadioDemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/tooltip-demo/tooltip-demo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip-component\">\n  <demo-wrapper header=\"Tooltip\" [code]=\"compSyntax\" [options]=\"options\">\n    <div output>\n      <span tooltip=\"content to be shown in the tooltip\" [tooltipDisabled]=\"false\"\n        [tooltipAnimation]=\"true\" tooltipPlacement=\"bottom\">Element on which tooltip is added\n    </span>\n    </div>\n    <div doc>\n      Note: For performance the component inputs are optimised so don't provide\n      parameter\n      which are not required for proper functioning.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/tooltip-demo/tooltip-demo.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy90b29sdGlwLWRlbW8vdG9vbHRpcC1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/components/tooltip-demo/tooltip-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: TooltipDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoComponent", function() { return TooltipDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipDemoComponent = /** @class */ (function () {
    function TooltipDemoComponent() {
        this.compSyntax = " <span tooltip=\"content to be shown in the tooltip\"\n  [tooltipDisabled]=\"false\"\n  [tooltipAnimation]=\"true\"\n  tooltipPlacement=\"bottom\"\n  >Element on which tooltip is added  </span>";
        this.options = {
            name: 'tooltip',
            componentType: 'Directive',
            options: [
                {
                    parameter: 'tooltip',
                    type: 'string | TooltipContent',
                    desc: 'content to be displayed inside tooltip'
                },
            ]
        };
    }
    TooltipDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo',
            template: __webpack_require__(/*! ./tooltip-demo.component.html */ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-demo.component.scss */ "./src/app/demo/components/tooltip-demo/tooltip-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipDemoComponent);
    return TooltipDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=demo-components-components-module.js.map