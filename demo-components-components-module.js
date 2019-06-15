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
        this.compSyntax = "<t-badge badge=\"fa-home\" ></t-badge> /n <t-badge badge=\"fa-font-awesome\" ></t-badge>";
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
        this.compSyntax = '<t-button label="Home" type="primary" badge="fa-home" ></t-button>';
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








var routes = [
    { path: 'badge', component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"] },
    { path: 'button', component: _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"] },
    { path: 'dynamicFields', component: _dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFieldsDemoComponent"] },
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
                _dynamic_fields_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFieldsDemoComponent"]
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
        this.compSyntax = 
        // tslint:disable-next-line: max-line-length
        "<t-dynamic-fields [fields]=\"field\" [options]=\"option\" (primaryHandler)=\"onSearch($event)\" (secondaryHandler)=\"onReset($event)\" ></t-dynamic-fields>";
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



/***/ })

}]);
//# sourceMappingURL=demo-components-components-module.js.map