(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/demo/common/common.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/common/common.module.ts ***!
  \**********************************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-wrapper/demo-wrapper.component */ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.ts");




var Common = /** @class */ (function () {
    function Common() {
    }
    Common = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DemoWrapperComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_demo_wrapper_demo_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DemoWrapperComponent"]]
        })
    ], Common);
    return Common;
}());



/***/ }),

/***/ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/common/demo-wrapper/demo-wrapper.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-wrapper row\">\n  <div class=\"col-12\">\n    <div class=\"component-header\">{{header}}</div>\n    <div class=\"component-content\">\n      <ng-content select=\"[content]\"></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/common/demo-wrapper/demo-wrapper.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-wrapper .component-header {\n  color: #ee6e73;\n  font-weight: 300;\n  font-size: 2.52rem;\n  line-height: 110%;\n  margin: 1.9466666667rem 0 1.168rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9jb21tb24vZGVtby13cmFwcGVyL0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxjb21tb25cXGRlbW8td3JhcHBlclxcZGVtby13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVtby9jb21tb24vZGVtby13cmFwcGVyL2RlbW8td3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLXdyYXBwZXIge1xyXG4gIC5jb21wb25lbnQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZWU2ZTczO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMi41MnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG4gICAgbWFyZ2luOiAxLjk0NjY2NjY2NjdyZW0gMCAxLjE2OHJlbSAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/common/demo-wrapper/demo-wrapper.component.ts ***!
  \********************************************************************/
/*! exports provided: DemoWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoWrapperComponent", function() { return DemoWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DemoWrapperComponent = /** @class */ (function () {
    function DemoWrapperComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DemoWrapperComponent.prototype, "header", void 0);
    DemoWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'demo-wrapper',
            template: __webpack_require__(/*! ./demo-wrapper.component.html */ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./demo-wrapper.component.scss */ "./src/app/demo/common/demo-wrapper/demo-wrapper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DemoWrapperComponent);
    return DemoWrapperComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map