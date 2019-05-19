(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-services-services-module"],{

/***/ "./src/app/demo/services/http/http.component.html":
/*!********************************************************!*\
  !*** ./src/app/demo/services/http/http.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-component\">\n  <demo-wrapper header=\"Http Service\" [options]=\"options\">\n    <div doc>\n      Inject <b>HttpService</b> into component.\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/services/http/http.component.scss":
/*!********************************************************!*\
  !*** ./src/app/demo/services/http/http.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vc2VydmljZXMvaHR0cC9odHRwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/services/http/http.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/services/http/http.component.ts ***!
  \******************************************************/
/*! exports provided: HttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpComponent", function() { return HttpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpComponent = /** @class */ (function () {
    function HttpComponent() {
        this.options = {
            name: 'HttpService',
            methods: [
                {
                    method: 'getRequest',
                    param: ['url: string', 'param: any (optional)'],
                    desc: 'GET request takes url and param'
                },
                {
                    method: 'postRequest',
                    param: ['url: string', 'param: any'],
                    desc: 'POST request takes url and param'
                }
            ]
        };
    }
    HttpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-http',
            template: __webpack_require__(/*! ./http.component.html */ "./src/app/demo/services/http/http.component.html"),
            styles: [__webpack_require__(/*! ./http.component.scss */ "./src/app/demo/services/http/http.component.scss")]
        })
    ], HttpComponent);
    return HttpComponent;
}());



/***/ }),

/***/ "./src/app/demo/services/services.module.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/services/services.module.ts ***!
  \**************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "./src/app/demo/common/common.module.ts");
/* harmony import */ var _http_http_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/http.component */ "./src/app/demo/services/http/http.component.ts");






var routes = [
    { path: 'http', component: _http_http_component__WEBPACK_IMPORTED_MODULE_5__["HttpComponent"] },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'http'
    }
];
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _http_http_component__WEBPACK_IMPORTED_MODULE_5__["HttpComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["Common"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-services-services-module.js.map