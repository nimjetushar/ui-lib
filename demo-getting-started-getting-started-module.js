(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-getting-started-getting-started-module"],{

/***/ "./src/app/demo/getting-started/developer/developer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/demo/getting-started/developer/developer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"developer row\">\n  <div class=\"col-sm-12 col-md-8 content-center\">\n    <div class=\"card cyan darken-3 hoverable\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Tushar Nimje</span>\n        <p>Software engineer with hands on experience in JavaScript and worked on\n          various JavaScript technologies such as Angular, React and Nodejs. Experience\n          of working in an Agile and Fast-paced product development enviroment. Excellent\n          written and verbal communication skills. Conscientious,\n          results-driven and analytical software engineer with years of professional\n          exposure in software development. Strong in architectural research, software\n          design and agile team.</p>\n      </div>\n      <div class=\"card-action\">\n        <a href=\"https://nimjetushar.github.io/\">Profile</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/getting-started/developer/developer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/getting-started/developer/developer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".developer .content-center {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9nZXR0aW5nLXN0YXJ0ZWQvZGV2ZWxvcGVyL0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxnZXR0aW5nLXN0YXJ0ZWRcXGRldmVsb3BlclxcZGV2ZWxvcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9nZXR0aW5nLXN0YXJ0ZWQvZGV2ZWxvcGVyL2RldmVsb3Blci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZlbG9wZXIge1xyXG4gIC5jb250ZW50LWNlbnRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/demo/getting-started/developer/developer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/getting-started/developer/developer.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeveloperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperComponent", function() { return DeveloperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeveloperComponent = /** @class */ (function () {
    function DeveloperComponent() {
    }
    DeveloperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-developer',
            template: __webpack_require__(/*! ./developer.component.html */ "./src/app/demo/getting-started/developer/developer.component.html"),
            styles: [__webpack_require__(/*! ./developer.component.scss */ "./src/app/demo/getting-started/developer/developer.component.scss")]
        })
    ], DeveloperComponent);
    return DeveloperComponent;
}());



/***/ }),

/***/ "./src/app/demo/getting-started/getting-started.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/getting-started/getting-started.module.ts ***!
  \****************************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "./src/app/demo/common/common.module.ts");
/* harmony import */ var _developer_developer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./developer/developer.component */ "./src/app/demo/getting-started/developer/developer.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/demo/getting-started/setup/setup.component.ts");







var routes = [
    { path: 'developer', component: _developer_developer_component__WEBPACK_IMPORTED_MODULE_5__["DeveloperComponent"] },
    { path: 'setup', component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__["SetupComponent"] },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'setup'
    }
];
var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _developer_developer_component__WEBPACK_IMPORTED_MODULE_5__["DeveloperComponent"],
                _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__["SetupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["Common"]
            ]
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ }),

/***/ "./src/app/demo/getting-started/setup/setup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/demo/getting-started/setup/setup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"setup-page\">\n  <div class=\"setup\">\n    <demo-wrapper header=\"Setup\">\n      <div doc>\n        <ul class=\"caption browser-default\">\n          <li>Download or clone the repo from\n            <a\n              href=\"https://github.com/nimjetushar/ui-lib.git\">https://github.com/nimjetushar/ui-lib.git</a>\n          </li>\n          <li>Follow the process mentioned in README.md</li>\n          <li>Create the build for the UI library and import the package into required\n            project</li>\n        </ul>\n      </div>\n    </demo-wrapper>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/getting-started/setup/setup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/getting-started/setup/setup.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
    }
    SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/demo/getting-started/setup/setup.component.html"),
            styles: ["\n      .setup-page ul {\n        padding-left: 10px;\n      }\n    "]
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=demo-getting-started-getting-started-module.js.map