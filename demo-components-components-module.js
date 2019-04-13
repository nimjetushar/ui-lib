(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-components-components-module"],{

/***/ "./src/app/demo/components/badge/badge.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/badge/badge.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-component\">\n  <demo-wrapper header=\"Badge\" [code]=\"compSyntax\">\n    <div output>\n      <div>\n        <t-badge badge=\"fa-home\"></t-badge>\n      </div>\n      <div>\n        <t-badge badge=\"fa-font-awesome\"></t-badge>\n      </div>\n    </div>\n    <div doc>\n      Component <b>t-badge</b> accepts badge as a string. Badge passed to the\n      component is class name from font-awesome library. Please refer the <a\n        href=\"https://fontawesome.com/v4.7.0/icons/\" target=\"_blank\">link</a> to get\n      icons.\n    </div>\n  </demo-wrapper>\n</div>"

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
        this.compSyntax = "<t-badge badge=\"fa-home\" ></t-badge> /n\n    <t-badge badge=\"fa-font-awesome\" ></t-badge>";
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






var routes = [
    { path: 'badge', component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"] },
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
            declarations: [_badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["Common"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-components-components-module.js.map