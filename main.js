(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ui-library/src/index.ts":
/*!******************************************!*\
  !*** ./projects/ui-library/src/index.ts ***!
  \******************************************/
/*! exports provided: UiLibrary, deepCopy, isDefined, isEmptyObject, createMap, isArray, isObject, isBoolean, setDataToSession, getDataFromSession, removeItemFromSession, setDataToLocal, getDataFromLocal, removeItemFromLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ui_library_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui-library.module */ "./projects/ui-library/src/lib/ui-library.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiLibrary", function() { return _lib_ui_library_module__WEBPACK_IMPORTED_MODULE_0__["UiLibrary"]; });

/* harmony import */ var n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! n-utilities/utils */ "./node_modules/n-utilities/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["deepCopy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["isEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMap", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["createMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDataToSession", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["setDataToSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromSession", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["getDataFromSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItemFromSession", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["removeItemFromSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDataToLocal", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["setDataToLocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromLocal", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["getDataFromLocal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItemFromLocal", function() { return n_utilities_utils__WEBPACK_IMPORTED_MODULE_1__["removeItemFromLocal"]; });

/*
 * Public API Surface of ui-library
 */
//  Export lib module

// export util library



/***/ }),

/***/ "./projects/ui-library/src/lib/components/badge/badge.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/badge/badge.component.ts ***!
  \*************************************************************************/
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BadgeComponent.prototype, "badge", void 0);
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-badge',
            template: "<i class=\"fa {{badge}}\" aria-hidden=\"true\"></i>"
        })
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./projects/ui-library/src/lib/components/components.ts":
/*!**************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/components.ts ***!
  \**************************************************************/
/*! exports provided: Components, ExportedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportedComponents", function() { return ExportedComponents; });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./projects/ui-library/src/lib/components/header/header.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./projects/ui-library/src/lib/components/nav/nav.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge/badge.component */ "./projects/ui-library/src/lib/components/badge/badge.component.ts");



var Components = [
    _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"],
    _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["BadgeComponent"]
];
var ExportedComponents = [
    _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"],
    _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["BadgeComponent"]
];


/***/ }),

/***/ "./projects/ui-library/src/lib/components/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container-header\">\n\n  <div class=\"content\">\n\n    <div id=\"menu-icon-container\" class=\"sidebar-toggle\" (click)=\"handleSidebarToggle()\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n\n    <div id=\"logo-container\" class=\"logo-container\">\n\n      <div *ngIf=\"logoSrc\" class=\"logo\" (click)=\"onLogoClick()\">\n        <img [src]=\"logoSrc\" />\n      </div>\n\n      <div class=\"title-container\">\n        <span class=\"title\">{{title}}</span>\n        <!-- <ng-content select=\"[header-content-left]\"></ng-content> -->\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./projects/ui-library/src/lib/components/header/header.component.scss":
/*!*****************************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/header/header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container-header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 4.5rem;\n  overflow: hidden;\n  background-color: #0069B1;\n  display: flex;\n  flex-direction: row;\n  -webkit-flex-align: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  -moz-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  z-index: 10; }\n  .main-container-header > *:not(:last-child) {\n    margin-right: 0; }\n  .main-container-header .content {\n    flex: 2 0 auto;\n    display: flex;\n    flex-direction: row;\n    -webkit-flex-align: center;\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -moz-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    justify-content: flex-start;\n    -ms-flex-pack: flex-start;\n    height: 4.5rem;\n    margin-right: 0.3125rem; }\n  .main-container-header .content > *:not(:last-child) {\n      margin-right: 0; }\n  .main-container-header .sidebar-toggle {\n    cursor: pointer;\n    position: relative;\n    height: 100%;\n    padding-top: 1.1875rem;\n    padding-left: 1.8125rem;\n    padding-right: 1.8125rem; }\n  .main-container-header .sidebar-toggle i.fa-bars {\n      font-size: 2.1875rem;\n      color: #FFFFFF; }\n  .main-container-header .logo-container {\n    cursor: pointer;\n    padding-left: 2rem;\n    display: flex;\n    flex-direction: column;\n    -webkit-flex-align: flex-start;\n    -moz-align-items: flex-start;\n    -ms-align-items: flex-start;\n    align-items: flex-start;\n    -moz-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    justify-content: flex-start;\n    -ms-flex-pack: flex-start; }\n  .main-container-header .logo-container > *:not(:last-child) {\n      margin-bottom: 0; }\n  .main-container-header .logo-container .logo {\n      position: relative;\n      padding-right: 0.3125rem;\n      display: inline-block; }\n  .main-container-header .logo-container .logo img {\n        height: 1.28875rem;\n        width: 3.25rem; }\n  .main-container-header .logo-container .title-container {\n      display: flex;\n      flex-direction: row;\n      -webkit-flex-align: center;\n      -moz-align-items: center;\n      -ms-align-items: center;\n      align-items: center;\n      -moz-justify-content: flex-start;\n      -ms-justify-content: flex-start;\n      justify-content: flex-start;\n      -ms-flex-pack: flex-start; }\n  .main-container-header .logo-container .title-container > *:not(:last-child) {\n        margin-right: 0.625rem; }\n  .main-container-header .logo-container .title-container .title {\n        color: #FFFFFF;\n        font-weight: 300;\n        font-size: 1.5rem;\n        letter-spacing: 0.0625rem;\n        text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxQcm9qZWN0c1xcdWktbGliL3Byb2plY3RzXFx1aS1saWJyYXJ5XFxzcmNcXGxpYlxcc3R5bGVzXFx2YXJpYWJsZS5zY3NzIiwicHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxQcm9qZWN0c1xcdWktbGliL3Byb2plY3RzXFx1aS1saWJyYXJ5XFxzcmNcXGxpYlxcc3R5bGVzXFxwcmVmaXhlci5zY3NzIiwicHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxQcm9qZWN0c1xcdWktbGliL3Byb2plY3RzXFx1aS1saWJyYXJ5XFxzcmNcXGxpYlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXHN0eWxlc1xcZnVuY3Rpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixjQ3lDbUM7RUR4Q25DLGdCQUFnQjtFQUNoQix5QkNUcUI7RUNpR3JCLGFBQWE7RUN2RWIsbUJBQW1CO0VEdUxuQiwwQkZ2TXFDO0VFeU1yQyx3QkZ6TXFDO0VFME1yQyx1QkYxTXFDO0VFMk1yQyxtQkYzTXFDO0VFc0hyQyxnQ0Z0SDZCO0VFdUg3QiwrQkZ2SDZCO0VFd0g3QiwyQkZ4SDZCO0VFeUg3Qix5QkZ6SDZCO0VBQzdCLFdBQVcsRUFBQTtFQVJiO0lHTUksZUhDZSxFQUFBO0VBUG5CO0lFeUdFLGNGOUZ3QjtJRW1GeEIsYUFBYTtJQ3ZFYixtQkFBbUI7SUR1TG5CLDBCRmxNdUM7SUVvTXZDLHdCRnBNdUM7SUVxTXZDLHVCRnJNdUM7SUVzTXZDLG1CRnRNdUM7SUVpSHZDLGdDRmpIK0I7SUVrSC9CLCtCRmxIK0I7SUVtSC9CLDJCRm5IK0I7SUVvSC9CLHlCRnBIK0I7SUFDN0IsY0NnQ2lDO0lEL0JqQyx1QklSK0IsRUFBQTtFSk5uQztNR01JLGVITWlCLEVBQUE7RUFackI7SUFrQkksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JJZitCO0lKZ0IvQix1QkloQitCO0lKaUIvQix3QklqQitCLEVBQUE7RUpObkM7TUEwQk0sb0JJcEI2QjtNSnFCN0IsY0NEZSxFQUFBO0VEMUJyQjtJQWdDSSxlQUFlO0lBQ2Ysa0JJM0IrQjtJRndGakMsYUFBYTtJQ2pGYixzQkFBc0I7SURpTXRCLDhCQ25NMkU7SURxTTNFLDRCQ3JNMkU7SURzTTNFLDJCQ3RNMkU7SUR1TTNFLHVCQ3ZNMkU7SURrSDNFLGdDQ2xIZ0Q7SURtSGhELCtCQ25IZ0Q7SURvSGhELDJCQ3BIZ0Q7SURxSGhELHlCQ3JIZ0QsRUFBQTtFSFhsRDtNR0RJLGdCSG1DaUIsRUFBQTtFQWxDckI7TUFvQ00sa0JBQWtCO01BQ2xCLHdCSS9CNkI7TUpnQzdCLHFCQUFxQixFQUFBO0VBdEMzQjtRQXdDUSxrQklsQzJCO1FKbUMzQixjSW5DMkIsRUFBQTtFSk5uQztNRThGRSxhQUFhO01DdkViLG1CQUFtQjtNRHVMbkIsMEJGaEsrQztNRWtLL0Msd0JGbEsrQztNRW1LL0MsdUJGbksrQztNRW9LL0MsbUJGcEsrQztNRStFL0MsZ0NGL0V1QztNRWdGdkMsK0JGaEZ1QztNRWlGdkMsMkJGakZ1QztNRWtGdkMseUJGbEZ1QyxFQUFBO0VBOUN6QztRR01JLHNCQ0ErQixFQUFBO0VKTm5DO1FBZ0RRLGNDdEJhO1FEdUJiLGdCQUFnQjtRQUNoQixpQkk1QzJCO1FKNkMzQix5Qkk3QzJCO1FKOEMzQix5QkFBeUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy91aS1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvL2Z1bmN0aW9ucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiAkbWFpbi1jb250YWluZXItaGVhZGVyLWhlaWdodDtcclxuXHJcbi5tYWluLWNvbnRhaW5lci1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBAaW5jbHVkZSBIR3JvdXAoMCwgZmxleC1zdGFydCwgY2VudGVyKTtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleCgyIDAgYXV0byk7XHJcbiAgICBAaW5jbHVkZSBIR3JvdXAoMCwgZmxleC1zdGFydCwgY2VudGVyKTtcclxuICAgIGhlaWdodDogJG1haW4tY29udGFpbmVyLWhlYWRlci1oZWlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHJlbSg1KTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogcmVtKDE5KTtcclxuICAgIHBhZGRpbmctbGVmdDogcmVtKDI5KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHJlbSgyOSk7XHJcblxyXG4gICAgaS5mYS1iYXJzIHtcclxuICAgICAgZm9udC1zaXplOiByZW0oMzUpO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogcmVtKDMyKTtcclxuICAgIEBpbmNsdWRlIFZHcm91cCgwKTtcclxuICAgIC5sb2dvIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiByZW0oNSk7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IHJlbSgyMC42Mik7XHJcbiAgICAgICAgd2lkdGg6IHJlbSg1Mik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgSEdyb3VwKHJlbSgxMCksIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDI0KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogcmVtKDEpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJAaW1wb3J0IFwiLi9mdW5jdGlvbnMuc2Nzc1wiO1xyXG5cclxuLy8gY29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjMDA2OUIxO1xyXG4kY29sb3ItcHJpbWFyeWhvdmVyOiAjMDAzRjgxO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjODJCMjBBO1xyXG4kY29sb3Itc2Vjb25kYXJ5aG92ZXI6ICM1MDgyMDA7XHJcbiRjb2xvci1pbmZvcm1hdGlvbmFsOiAjMDBBOEU0O1xyXG4kY29sb3ItaW5mb3JtYXRpb25hbGhvdmVyOiAjMDA3OUIyO1xyXG4kY29sb3ItYXR0ZW50aW9uOiAjRkZBODFFO1xyXG4kY29sb3ItYXR0ZW50aW9uaG92ZXI6ICNFRTgwMDA7XHJcbiRjb2xvci1lcnJvcjogI0QyMEY1NTtcclxuJGNvbG9yLWVycm9yaG92ZXI6ICM5QTAwMkQ7XHJcbiRjb2xvci1hY2NlbnQxOiAjMjgzNzY0O1xyXG4kY29sb3ItYWNjZW50MWhvdmVyOiAjMDAxMjM5O1xyXG4kY29sb3ItYWNjZW50MjogIzEyODA5NDtcclxuJGNvbG9yLWFjY2VudDJob3ZlcjogIzAwNTM2NjtcclxuJGNvbG9yLWRhdGF2aXN1YWwxOiAjRkZDMTAwO1xyXG4kY29sb3ItZGF0YXZpc3VhbDFob3ZlcjogI0M3OTEwMDtcclxuJGNvbG9yLWRhdGF2aXN1YWwyOiAjRUU4MDAwO1xyXG4kY29sb3ItZGF0YXZpc3VsMmhvdmVyOiAjQjU2MjAxO1xyXG4kY29sb3ItZGF0YXZpc3VhbDM6ICM2NDE5ODA7XHJcbiRjb2xvci1kYXRhdmlzdWFsM2hvdmVyOiAjM0UwMDU1O1xyXG4kY29sb3Itcm93LWhvdmVyOiAjRjJGMkYyO1xyXG4kY29sb3ItbGlnaHQ6ICNERkRGREY7XHJcbiRjb2xvci1tZWRpdW06ICNCMkIyQjI7XHJcbiRjb2xvci1kYXJrOiAjN0Q3RDdEO1xyXG4kY29sb3ItdGV4dHN0eWxlOiAjNDE0MTQxO1xyXG4kY29sb3ItdGV4dHN0eWxlLWRhcmtlcjogIzMyMzIzMjtcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiRjb2xvci1iYWNrZ3JvdW5kLW1haW46ICNGQUZCRkQ7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXdoaXRlOiAjRkZGRkZGO1xyXG4kY29sb3ItdGV4dC1tYWluLW1lbnUtaXRlbTogIzI4Mzc2NDtcclxuJGNvbG9yLWRpc2FibGVkOiAjRjJGMkYyO1xyXG4kY29sb3Itb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuJGNvbG9yLXRleHQtZGlzYWJsZWQ6ICRjb2xvci1saWdodDsgLy8gdGV4dCBkaXNhYmxlZFxyXG5cclxuJGJvcmRlci1kaXNhYmxlZDogMXB4IHNvbGlkICRjb2xvci1saWdodDtcclxuXHJcbi8vIGZvbnRcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0LXJlZ3VsYXI6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcblxyXG5cclxuLy9jb250YWluZXJzXHJcbiRtYWluLWNvbnRhaW5lci1oZWFkZXItaGVpZ2h0OiA0LjVyZW07XHJcbiRtYWluLWNvbnRhaW5lci10cmFuc2lzdGlvbi1kZWxheTogMjUwbXM7XHJcblxyXG4vLyBoZWFkZXIsIG5hdlxyXG4kbmF2LWljb24tc2l6ZTogcmVtKDM1KTtcclxuJHNpZGViYXItaGVpZ2h0OiAxMDB2aDtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci13aWR0aC1leHBhbmRlZDogcmVtKCRzaWRlYmFyLXdpZHRoKTtcclxuJHNpZGViYXItaW5pdC1wb3NpdGlvbjogcmVtKC0kc2lkZWJhci13aWR0aCk7XHJcbiIsIi8vIEFuaW1hdGlvblxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkYXJncykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYXJncztcclxuICAtbW96LWFuaW1hdGlvbjogJGFyZ3M7XHJcbiAgLW1zLWFuaW1hdGlvbjogJGFyZ3M7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYXJncztcclxuICBhbmltYXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRkZWxheSkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcclxuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1tcy1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3ggU2l6aW5nXHJcbkBtaXhpbiBib3gtc2l6aW5nKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYXJncztcclxuICAtbW96LWJveC1zaXppbmc6ICRhcmdzO1xyXG4gIGJveC1zaXppbmc6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWJveCgpIHtcclxuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xyXG59XHJcblxyXG5AbWl4aW4gY29udGVudC1ib3goKSB7XHJcbiAgQGluY2x1ZGUgYm94LXNpemluZyhjb250ZW50LWJveCk7XHJcbn1cclxuXHJcbi8vIENvbHVtbnNcclxuQG1peGluIGNvbHVtbnMoJGFyZ3MpIHtcclxuICAtd2Via2l0LWNvbHVtbnM6ICRhcmdzO1xyXG4gIC1tb3otY29sdW1uczogJGFyZ3M7XHJcbiAgY29sdW1uczogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBjb2x1bW4tY291bnQoJGNvdW50KSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb3VudDtcclxuICAtbW96LWNvbHVtbi1jb3VudDogJGNvdW50O1xyXG4gIGNvbHVtbi1jb3VudDogJGNvdW50O1xyXG59XHJcblxyXG5AbWl4aW4gY29sdW1uLWdhcCgkZ2FwKSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkZ2FwO1xyXG4gIC1tb3otY29sdW1uLWdhcDogJGdhcDtcclxuICBjb2x1bW4tZ2FwOiAkZ2FwO1xyXG59XHJcblxyXG5AbWl4aW4gY29sdW1uLXdpZHRoKCR3aWR0aCkge1xyXG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiAkd2lkdGg7XHJcbiAgLW1vei1jb2x1bW4td2lkdGg6ICR3aWR0aDtcclxuICBjb2x1bW4td2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGNvbHVtbi1ydWxlKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tcnVsZTogJGFyZ3M7XHJcbiAgLW1vei1jb2x1bW4tcnVsZTogJGFyZ3M7XHJcbiAgY29sdW1uLXJ1bGU6ICRhcmdzO1xyXG59XHJcblxyXG4vLyBGaWx0ZXJcclxuQG1peGluIGZpbHRlcigkYXJncykge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkYXJncztcclxuICAtbW96LWZpbHRlcjogJGFyZ3M7XHJcbiAgLW8tZmlsdGVyOiAkYXJncztcclxuICAtbXMtZmlsdGVyOiAkYXJncztcclxufVxyXG5cclxuLy8gRmxleGJveFxyXG5AbWl4aW4gZmxleGJveCgpIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLy8gVGhlICdmbGV4JyBzaG9ydGhhbmRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW1zXHJcbi8vIDxwb3NpdGl2ZS1udW1iZXI+LCBpbml0aWFsLCBhdXRvLCBvciBub25lXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZXMpIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tb3otYm94LWZsZXg6ICR2YWx1ZXM7XHJcbiAgLXdlYmtpdC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tcy1mbGV4OiAkdmFsdWVzO1xyXG4gIGZsZXg6ICR2YWx1ZXM7XHJcbn1cclxuXHJcblxyXG4vLyBEaXNwbGF5IE9yZGVyXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyA8aW50ZWdlcj5cclxuQG1peGluIG9yZGVyKCR2YWwpIHtcclxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAkdmFsO1xyXG4gIC1tb3otYm94LW9yZGluYWwtZ3JvdXA6ICR2YWw7XHJcbiAgLW1zLWZsZXgtb3JkZXI6ICR2YWw7XHJcbiAgLXdlYmtpdC1vcmRlcjogJHZhbDtcclxuICBvcmRlcjogJHZhbDtcclxufVxyXG5cclxuLy8gQXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZFxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCRqdXN0aWZ5KSB7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBGbGV4IEZsb3cgRGlyZWN0aW9uXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIHJvdyB8IHJvdy1yZXZlcnNlIHwgY29sdW1uIHwgY29sdW1uLXJldmVyc2VcclxuQG1peGluIGZsZXgtZGlyZWN0aW9uKCRkaXJlY3Rpb246cm93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBMaW5lIFdyYXBwaW5nXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIG5vd3JhcCB8IHdyYXAgfCB3cmFwLXJldmVyc2VcclxuQG1peGluIGZsZXgtd3JhcCgkd3JhcCkge1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiAkd3JhcDtcclxuICAtbW96LWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgZmxleC13cmFwOiAkd3JhcDtcclxufVxyXG5cclxuLy8gRmxleCBEaXJlY3Rpb24gYW5kIFdyYXBcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gPGZsZXgtZGlyZWN0aW9uPiB8fCA8ZmxleC13cmFwPlxyXG5AbWl4aW4gZmxleC1mbG93KCRmbG93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWZsb3c6ICRmbG93O1xyXG4gIC1tb3otZmxleC1mbG93OiAkZmxvdztcclxuICAtbXMtZmxleC1mbG93OiAkZmxvdztcclxuICBmbGV4LWZsb3c6ICRmbG93O1xyXG59XHJcblxyXG4vLyBGbGV4IGdyb3cgZmFjdG9yXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyA8bnVtYmVyPlxyXG5AbWl4aW4gZmxleC1ncm93KCRncm93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6ICRncm93O1xyXG4gIC1tb3otZmxleC1ncm93OiAkZ3JvdztcclxuICAtbXMtZmxleC1ncm93OiAkZ3JvdztcclxuICBmbGV4LWdyb3c6ICRncm93O1xyXG59XHJcblxyXG4vLyBGbGV4IHNocmlua1xyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbSBzaHJpbmsgZmFjdG9yXHJcbi8vIDxudW1iZXI+XHJcbkBtaXhpbiBmbGV4LXNocmluaygkc2hyaW5rKSB7XHJcbiAgLXdlYmtpdC1mbGV4LXNocmluazogJHNocmluaztcclxuICAtbW96LWZsZXgtc2hyaW5rOiAkc2hyaW5rO1xyXG4gIC1tcy1mbGV4LXNocmluazogJHNocmluaztcclxuICBmbGV4LXNocmluazogJHNocmluaztcclxufVxyXG5cclxuLy8gRmxleCBiYXNpc1xyXG4vLyAtIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiB0aGUgZmxleCBpdGVtXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc25pdGlhbCBtYWluIHNpemUgb2YgdGhlIGZsZXggaXRlbVxyXG4vLyA8d2lkdGg+XHJcbkBtaXhpbiBmbGV4LWJhc2lzKCR3aWR0aCkge1xyXG4gIC13ZWJraXQtZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIC1tb3otZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIC1tcy1mbGV4LWJhc2lzOiAkd2lkdGg7XHJcbiAgZmxleC1iYXNpczogJHdpZHRoO1xyXG59XHJcblxyXG4vLyBQYWNraW5nIEZsZXggTGluZXNcclxuLy8gLSBhcHBsaWVzIHRvOiBtdWx0aS1saW5lIGZsZXggY29udGFpbmVyc1xyXG4vLyBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBzcGFjZS1iZXR3ZWVuIHwgc3BhY2UtYXJvdW5kIHwgc3RyZXRjaFxyXG5AbWl4aW4gYWxpZ24tY29udGVudCgkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbW96LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbXMtYWxpZ24tY29udGVudDogJGFsaWduO1xyXG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxufVxyXG5cclxuLy8gQ3Jvc3MtYXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24pIHtcclxuICAtd2Via2l0LWZsZXgtYWxpZ246ICRhbGlnbjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbn1cclxuXHJcbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1zZWxmKCRhbGlnbikge1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tb3otYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1zZWxmOiAkYWxpZ247XHJcbiAgYWxpZ24tc2VsZjogJGFsaWduO1xyXG59XHJcblxyXG4vLyBHcmFkaWVudHNcclxuXHJcbkBtaXhpbiBncmFkaWVudCgkZGVmYXVsdDogI0Y1RjVGNSwgJHN0YXJ0OiAjRUVFLCAkc3RvcDogI0ZGRikge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudC10b3AoJGRlZmF1bHQsICRzdGFydCwgMCUsICRzdG9wLCAxMDAlKTtcclxufVxyXG5cclxuQG1peGluIGxpbmVhci1ncmFkaWVudC10b3AoJGRlZmF1bHQsICRjb2xvcjEsICRzdG9wMSwgJGNvbG9yMiwgJHN0b3AyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgkc3RvcDEsICRjb2xvcjEpLCBjb2xvci1zdG9wKCRzdG9wMiAkY29sb3IyKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkY29sb3IxICRzdG9wMSwgJGNvbG9yMiAkc3RvcDIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJGNvbG9yMSAkc3RvcDEsICRjb2xvcjIgJHN0b3AyKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJGNvbG9yMSAkc3RvcDEsICRjb2xvcjIgJHN0b3AyKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkY29sb3IxICRzdG9wMSwgJGNvbG9yMiAkc3RvcDIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICRjb2xvcjEgJHN0b3AxLCAkY29sb3IyICRzdG9wMik7XHJcbn1cclxuXHJcbi8vIFRleHQgU2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkYXJncykge1xyXG4gIHRleHQtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuLy8gVHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJGRlZzo0NWRlZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoJGRlZykpO1xyXG59XHJcblxyXG5AbWl4aW4gc2NhbGUoJGZhY3RvcjouNSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgkZmFjdG9yKSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2xhdGUoJHgsICR5KSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgkeCwgJHkpKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopIHtcclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoJHgsICR5LCAkeikpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNsYXRlSGFyZHdhcmUoJHgsICR5KSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNsYXRlKCR4LCAkeSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksIDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksIDApO1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uc1xyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRkZWxheTowKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xyXG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ByZWZpeGVyLnNjc3NcIjtcclxuXHJcbi8vIEFkZHMgVmVydGljYWwgZ2FwIGluIFZlcnRpY2FsIExheW91dFxyXG5AbWl4aW4gdmVydGljYWxHYXAoJGdhcCkge1xyXG4gID4qOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZHMgSG9yaXpvbnRhbCBnYXAgaW4gSG9yaXpvbnRhbCBMYXlvdXRcclxuQG1peGluIGhvcml6b250YWxHYXAoJGdhcCkge1xyXG4gID4qOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUHV0cyBjaGlsZCBlbGVtZW50cyBpbiB2ZXJ0aWNhbCBsYXlvdXRcclxuQG1peGluIFZHcm91cCgkZ2FwOjAsICRob3Jpem9udGFsQWxpZ246IGZsZXgtc3RhcnQsICR2ZXJ0aWNhbEFsaWduOmZsZXgtc3RhcnQpIHtcclxuICBAaW5jbHVkZSBmbGV4Ym94KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAaW5jbHVkZSBhbGlnbi1pdGVtcygkdmVydGljYWxBbGlnbik7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRob3Jpem9udGFsQWxpZ24pO1xyXG4gIEBpbmNsdWRlIHZlcnRpY2FsR2FwKCRnYXApXHJcbn1cclxuXHJcbi8vIFB1dHMgY2hpbGQgZWxlbWVudHMgaW4gaG9yaXpvbnRhbCBsYXlvdXRcclxuQG1peGluIEhHcm91cCgkZ2FwOjAsICRob3Jpem9udGFsQWxpZ246IGZsZXgtc3RhcnQsICR2ZXJ0aWNhbEFsaWduOmZsZXgtc3RhcnQpIHtcclxuICBAaW5jbHVkZSBmbGV4Ym94KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBAaW5jbHVkZSBhbGlnbi1pdGVtcygkdmVydGljYWxBbGlnbik7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRob3Jpem9udGFsQWxpZ24pO1xyXG4gIEBpbmNsdWRlIGhvcml6b250YWxHYXAoJGdhcCk7XHJcbn1cclxuIiwiJGJyb3dzZXItY29udGV4dDogMTY7XHJcbiRmdWxsV2lkdGg6IDEwMCU7XHJcblxyXG5AZnVuY3Rpb24gcmVtKCRwaXhlbHMsICRjb250ZXh0OiAkYnJvd3Nlci1jb250ZXh0KSB7XHJcbiAgQGlmICh1bml0bGVzcygkcGl4ZWxzKSkge1xyXG4gICAgJHBpeGVsczogJHBpeGVscyAqIDFweDtcclxuICB9XHJcblxyXG4gIEBpZiAodW5pdGxlc3MoJGNvbnRleHQpKSB7XHJcbiAgICAkY29udGV4dDogJGNvbnRleHQgKiAxcHg7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRwaXhlbHMgLyAkY29udGV4dCAqIDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./projects/ui-library/src/lib/components/header/header.component.ts":
/*!***************************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.sideBarToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.logoClickEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.handleSidebarToggle = function () {
        this.sideBarToggled.emit(true);
    };
    HeaderComponent.prototype.onLogoClick = function () {
        this.logoClickEmitter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "logoSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "sideBarToggled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "logoClickEmitter", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-header',
            template: __webpack_require__(/*! ./header.component.html */ "./projects/ui-library/src/lib/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./projects/ui-library/src/lib/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./projects/ui-library/src/lib/components/nav/nav.component.html":
/*!***********************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/nav/nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container-sidebar\" id=\"main-container-sidebar\" [ngClass]=\"{'sidebar-expanded': expanded}\">\n  <div class=\"header\">\n    <div class=\"sidebar-toggle\" (click)=\"toggleMenu()\">\n      <i class=\"fa {{expanded ? 'fa-times' : 'fa-bars'}}\"></i>\n    </div>\n  </div>\n  <div id=\"sidebar-content\" class=\"sidebar-content\">\n    <ul role=\"menu\" id=\"main-nav\" class=\"main-nav\">\n      <li role=\"menuitem\" class=\"list-item\" *ngFor=\"let menuItem of menuItems;let idx = index\"\n        [class.selected]=\"selectedMenu?.idx === idx\">\n        <div class=\"menu-item\" (click)=\"onMenuClick(menuItem, idx)\">\n          <lib-badge class=\"badge\" [badge]=\"menuItem?.badge\"></lib-badge>\n          <span class=\"label\">{{menuItem.label}}</span>\n        </div>\n\n        <ul role=\"menu\" class=\"sub-nav\" [class.expanded]=\"expandedMenu === idx\">\n          <li role=\"menuitem\" *ngFor=\"let subMenuItem of menuItem.children; let childIdx = index\"\n            (click)=\"onSubMenuClick(menuItem, subMenuItem, idx, childIdx)\" class=\"list-item\"\n            [class.active]=\"selectedMenu?.subMenuIdx === childIdx\" tabindex=\"-1\">\n            <div class=\"menu-item\">\n              <span class=\"label\">\n                {{subMenuItem.label}}\n              </span>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"main-container-sidbar overlay\" *ngIf=\"expanded\" (click)=\"toggleMenu()\"></div>\n"

/***/ }),

/***/ "./projects/ui-library/src/lib/components/nav/nav.component.scss":
/*!***********************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/nav/nav.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container-sidebar {\n  position: absolute;\n  left: -18.75rem;\n  top: 0;\n  bottom: 0;\n  width: 18.75rem;\n  height: 100vh;\n  background: #F2F2F2;\n  transition: left 250ms ease-in-out;\n  z-index: 20; }\n  #main-container-sidebar .header {\n    flex: 2 0 auto;\n    display: flex;\n    flex-direction: row;\n    -webkit-flex-align: center;\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -moz-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    justify-content: flex-start;\n    -ms-flex-pack: flex-start;\n    height: 4.5rem;\n    background-color: #0069B1; }\n  #main-container-sidebar .header > *:not(:last-child) {\n      margin-right: 0; }\n  #main-container-sidebar .sidebar-toggle {\n    cursor: pointer;\n    position: relative;\n    height: 100%;\n    padding-top: 1.1875rem;\n    padding-left: 1.8125rem;\n    padding-right: 1.8125rem; }\n  #main-container-sidebar .sidebar-toggle i.fa {\n      font-size: 2.1875rem;\n      color: #FFFFFF; }\n  #main-container-sidebar .list-item {\n    display: flex;\n    flex-direction: column;\n    -webkit-flex-align: flex-start;\n    -moz-align-items: flex-start;\n    -ms-align-items: flex-start;\n    align-items: flex-start;\n    -moz-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    justify-content: flex-start;\n    -ms-flex-pack: flex-start;\n    width: 100%; }\n  #main-container-sidebar .list-item > *:not(:last-child) {\n      margin-bottom: 0; }\n  #main-container-sidebar .menu-item {\n    width: 100%;\n    cursor: pointer;\n    height: 2.8125rem;\n    padding-left: 1.8125rem;\n    padding-right: 1.125rem;\n    color: #283764;\n    display: flex;\n    flex-direction: row;\n    -webkit-flex-align: center;\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -moz-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    justify-content: flex-start;\n    -ms-flex-pack: flex-start;\n    flex: 2 0 auto; }\n  #main-container-sidebar .menu-item > *:not(:last-child) {\n      margin-right: 0.625rem; }\n  #main-container-sidebar .badge {\n    font-size: 1.25rem;\n    cursor: pointer;\n    font-weight: bold;\n    width: 1.875rem;\n    margin-left: -3px; }\n  #main-container-sidebar .label {\n    letter-spacing: 0.0625rem;\n    color: inherit;\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    cursor: pointer;\n    width: 100%; }\n  #main-container-sidebar .main-nav .label {\n    font-weight: bold; }\n  #main-container-sidebar .sub-nav {\n    list-style: none;\n    padding: 0;\n    width: 100%;\n    opacity: 0;\n    position: absolute;\n    left: -62.4375rem; }\n  #main-container-sidebar .sub-nav .list-item {\n      padding-right: 1.125rem;\n      padding-left: 3.75rem; }\n  #main-container-sidebar .sub-nav .label {\n      font-weight: normal; }\n  #main-container-sidebar .sub-nav .menu-item {\n      height: 2.1875rem;\n      padding: 0; }\n  #main-container-sidebar .sub-nav.expanded {\n    opacity: 1;\n    position: relative;\n    left: 0;\n    transition: opacity 250ms ease-in-out; }\n  #main-container-sidebar .selected > .menu-item {\n    border-left: 4px solid #0069B1; }\n  #main-container-sidebar .selected .label,\n  #main-container-sidebar .selected .badge {\n    color: #0069B1; }\n  #main-container-sidebar .selected .active {\n    background-color: #E5EAEE; }\n  .main-container-sidbar.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  cursor: pointer; }\n  #main-container-sidebar.sidebar-expanded {\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvdWktbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvbmF2L0U6XFxQcm9qZWN0c1xcdWktbGliL3Byb2plY3RzXFx1aS1saWJyYXJ5XFxzcmNcXGxpYlxcc3R5bGVzXFxmdW5jdGlvbnMuc2NzcyIsInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXHN0eWxlc1xcdmFyaWFibGUuc2NzcyIsInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXHN0eWxlc1xccHJlZml4ZXIuc2NzcyIsInByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9FOlxcUHJvamVjdHNcXHVpLWxpYi9wcm9qZWN0c1xcdWktbGlicmFyeVxcc3JjXFxsaWJcXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVDeEJpQztFRHlCakMsTUFBTTtFQUNOLFNBQVM7RUFDVCxlQzNCaUM7RUQ0QmpDLGFFZ0JvQjtFRmZwQixtQkVad0I7RUNxUXhCLGtDSHhQc0U7RUFDdEUsV0FBVyxFQUFBO0VBVGI7SUc2RUUsY0hqRXdCO0lHc0R4QixhQUFhO0lDdkViLG1CQUFtQjtJRHVMbkIsMEJIckt1QztJR3VLdkMsd0JIdkt1QztJR3dLdkMsdUJIeEt1QztJR3lLdkMsbUJIekt1QztJR29GdkMsZ0NIcEYrQjtJR3FGL0IsK0JIckYrQjtJR3NGL0IsMkJIdEYrQjtJR3VGL0IseUJIdkYrQjtJQUM3QixjRUdpQztJRkZqQyx5QkU5Q21CLEVBQUE7RUYrQnZCO01JdEJJLGVKbUNpQixFQUFBO0VBYnJCO0lBbUJJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQzVDK0I7SUQ2Qy9CLHVCQzdDK0I7SUQ4Qy9CLHdCQzlDK0IsRUFBQTtFRHNCbkM7TUEyQk0sb0JDakQ2QjtNRGtEN0IsY0U5QmUsRUFBQTtFRkVyQjtJR2tFRSxhQUFhO0lDakZiLHNCQUFzQjtJRGlNdEIsOEJDbk0yRTtJRHFNM0UsNEJDck0yRTtJRHNNM0UsMkJDdE0yRTtJRHVNM0UsdUJDdk0yRTtJRGtIM0UsZ0NDbEhnRDtJRG1IaEQsK0JDbkhnRDtJRG9IaEQsMkJDcEhnRDtJRHFIaEQseUJDckhnRDtJSm1EOUMsV0FBVyxFQUFBO0VBbENmO01JN0JJLGdCSjhEaUIsRUFBQTtFQWpDckI7SUEzQkUsV0FBVztJQUNYLGVBQWU7SUFDZixpQkNHaUM7SURGakMsdUJDRWlDO0lERGpDLHVCQ0NpQztJREFqQyxjRXFCaUM7SUNtRWpDLGFBQWE7SUN2RWIsbUJBQW1CO0lEdUxuQiwwQkh2TTJDO0lHeU0zQyx3Qkh6TTJDO0lHME0zQyx1QkgxTTJDO0lHMk0zQyxtQkgzTTJDO0lHc0gzQyxnQ0h0SG1DO0lHdUhuQywrQkh2SG1DO0lHd0huQywyQkh4SG1DO0lHeUhuQyx5Qkh6SG1DO0lHa0duQyxjSGpHc0IsRUFBQTtFQW9CeEI7TUl0Qkksc0JIQStCLEVBQUE7RURzQm5DO0lBaEJFLGtCQ05pQztJRE9qQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVDVGlDO0lEVWpDLGlCQUFpQixFQUFBO0VBWW5CO0lBUkUseUJDZGlDO0lEZWpDLGNBQWM7SUFDZCxtQkNoQmlDO0lEaUJqQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVcsRUFBQTtFQUdiO0lBbURNLGlCQUFpQixFQUFBO0VBbkR2QjtJQXdESSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQ25GK0IsRUFBQTtFRHNCbkM7TUFnRU0sdUJDdEY2QjtNRHVGN0IscUJDdkY2QixFQUFBO0VEc0JuQztNQXFFTSxtQkFBbUIsRUFBQTtFQXJFekI7TUF5RU0saUJDL0Y2QjtNRGdHN0IsVUFBVSxFQUFBO0VBMUVoQjtJQStFSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUcrS1QscUNIOUsyRSxFQUFBO0VBbEY3RTtJQXVGTSw4QkV0SGlCLEVBQUE7RUYrQnZCOztJQTJGTSxjRTFIaUIsRUFBQTtFRitCdkI7SUErRk0seUJBN0hzQixFQUFBO0VBa0k1QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJFNUdnQztFRjZHaEMsZUFBZSxFQUFBO0VBR2pCO0VBQ0UsT0FBTyxFQUFBIiwiZmlsZSI6InByb2plY3RzL3VpLWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9mdW5jdGlvbnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCI7XHJcblxyXG4kY29sb3ItbWFpbi1uYXYtaXRlbTojRTVFQUVFO1xyXG5cclxuQG1peGluIG1lbnUtaXRlbSgpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiByZW0oNDUpO1xyXG4gIHBhZGRpbmctbGVmdDogcmVtKDI5KTtcclxuICBwYWRkaW5nLXJpZ2h0OiByZW0oMTgpO1xyXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1tYWluLW1lbnUtaXRlbTtcclxuICBAaW5jbHVkZSBIR3JvdXAocmVtKDEwKSwgZmxleC1zdGFydCwgY2VudGVyKTtcclxuICBAaW5jbHVkZSBmbGV4KDIgMCBhdXRvKTtcclxufVxyXG5cclxuQG1peGluIGJhZGdlIHtcclxuICBmb250LXNpemU6IHJlbSgyMCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiByZW0oMzApO1xyXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG59XHJcblxyXG5AbWl4aW4gbGFiZWwge1xyXG4gIGxldHRlci1zcGFjaW5nOiByZW0oMSk7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiByZW0oMTQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbWFpbi1jb250YWluZXItc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6ICRzaWRlYmFyLWluaXQtcG9zaXRpb247XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogJHNpZGViYXItd2lkdGgtZXhwYW5kZWQ7XHJcbiAgaGVpZ2h0OiAkc2lkZWJhci1oZWlnaHQ7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihsZWZ0ICRtYWluLWNvbnRhaW5lci10cmFuc2lzdGlvbi1kZWxheSBlYXNlLWluLW91dCk7XHJcbiAgei1pbmRleDogMjA7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgQGluY2x1ZGUgZmxleCgyIDAgYXV0byk7XHJcbiAgICBAaW5jbHVkZSBIR3JvdXAoMCwgZmxleC1zdGFydCwgY2VudGVyKTtcclxuICAgIGhlaWdodDogJG1haW4tY29udGFpbmVyLWhlYWRlci1oZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogcmVtKDE5KTtcclxuICAgIHBhZGRpbmctbGVmdDogcmVtKDI5KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHJlbSgyOSk7XHJcblxyXG4gICAgaS5mYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJG5hdi1pY29uLXNpemU7XHJcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlzdC1pdGVtIHtcclxuICAgIEBpbmNsdWRlIFZHcm91cCgwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaXRlbSB7XHJcbiAgICBAaW5jbHVkZSBtZW51LWl0ZW0oKTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBAaW5jbHVkZSBiYWRnZSgpO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsIHtcclxuICAgIEBpbmNsdWRlIGxhYmVsKCk7XHJcbiAgfVxyXG5cclxuICAubWFpbi1uYXYge1xyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3ViLW5hdiB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IHJlbSgtOTk5KTtcclxuXHJcbiAgICAubGlzdC1pdGVtIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogcmVtKDE4KTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oNjApO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogcmVtKDM1KTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWItbmF2LmV4cGFuZGVkIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihvcGFjaXR5ICRtYWluLWNvbnRhaW5lci10cmFuc2lzdGlvbi1kZWxheSBlYXNlLWluLW91dCk7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgJj4ubWVudS1pdGVtIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICAgIH1cclxuICAgIC5sYWJlbCxcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1haW4tbmF2LWl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXItc2lkYmFyLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1vdmVybGF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI21haW4tY29udGFpbmVyLXNpZGViYXIuc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iLCIkYnJvd3Nlci1jb250ZXh0OiAxNjtcclxuJGZ1bGxXaWR0aDogMTAwJTtcclxuXHJcbkBmdW5jdGlvbiByZW0oJHBpeGVscywgJGNvbnRleHQ6ICRicm93c2VyLWNvbnRleHQpIHtcclxuICBAaWYgKHVuaXRsZXNzKCRwaXhlbHMpKSB7XHJcbiAgICAkcGl4ZWxzOiAkcGl4ZWxzICogMXB4O1xyXG4gIH1cclxuXHJcbiAgQGlmICh1bml0bGVzcygkY29udGV4dCkpIHtcclxuICAgICRjb250ZXh0OiAkY29udGV4dCAqIDFweDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHBpeGVscyAvICRjb250ZXh0ICogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi9mdW5jdGlvbnMuc2Nzc1wiO1xyXG5cclxuLy8gY29sb3JzXHJcbiRjb2xvci1wcmltYXJ5OiAjMDA2OUIxO1xyXG4kY29sb3ItcHJpbWFyeWhvdmVyOiAjMDAzRjgxO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjODJCMjBBO1xyXG4kY29sb3Itc2Vjb25kYXJ5aG92ZXI6ICM1MDgyMDA7XHJcbiRjb2xvci1pbmZvcm1hdGlvbmFsOiAjMDBBOEU0O1xyXG4kY29sb3ItaW5mb3JtYXRpb25hbGhvdmVyOiAjMDA3OUIyO1xyXG4kY29sb3ItYXR0ZW50aW9uOiAjRkZBODFFO1xyXG4kY29sb3ItYXR0ZW50aW9uaG92ZXI6ICNFRTgwMDA7XHJcbiRjb2xvci1lcnJvcjogI0QyMEY1NTtcclxuJGNvbG9yLWVycm9yaG92ZXI6ICM5QTAwMkQ7XHJcbiRjb2xvci1hY2NlbnQxOiAjMjgzNzY0O1xyXG4kY29sb3ItYWNjZW50MWhvdmVyOiAjMDAxMjM5O1xyXG4kY29sb3ItYWNjZW50MjogIzEyODA5NDtcclxuJGNvbG9yLWFjY2VudDJob3ZlcjogIzAwNTM2NjtcclxuJGNvbG9yLWRhdGF2aXN1YWwxOiAjRkZDMTAwO1xyXG4kY29sb3ItZGF0YXZpc3VhbDFob3ZlcjogI0M3OTEwMDtcclxuJGNvbG9yLWRhdGF2aXN1YWwyOiAjRUU4MDAwO1xyXG4kY29sb3ItZGF0YXZpc3VsMmhvdmVyOiAjQjU2MjAxO1xyXG4kY29sb3ItZGF0YXZpc3VhbDM6ICM2NDE5ODA7XHJcbiRjb2xvci1kYXRhdmlzdWFsM2hvdmVyOiAjM0UwMDU1O1xyXG4kY29sb3Itcm93LWhvdmVyOiAjRjJGMkYyO1xyXG4kY29sb3ItbGlnaHQ6ICNERkRGREY7XHJcbiRjb2xvci1tZWRpdW06ICNCMkIyQjI7XHJcbiRjb2xvci1kYXJrOiAjN0Q3RDdEO1xyXG4kY29sb3ItdGV4dHN0eWxlOiAjNDE0MTQxO1xyXG4kY29sb3ItdGV4dHN0eWxlLWRhcmtlcjogIzMyMzIzMjtcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiRjb2xvci1iYWNrZ3JvdW5kLW1haW46ICNGQUZCRkQ7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXdoaXRlOiAjRkZGRkZGO1xyXG4kY29sb3ItdGV4dC1tYWluLW1lbnUtaXRlbTogIzI4Mzc2NDtcclxuJGNvbG9yLWRpc2FibGVkOiAjRjJGMkYyO1xyXG4kY29sb3Itb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuJGNvbG9yLXRleHQtZGlzYWJsZWQ6ICRjb2xvci1saWdodDsgLy8gdGV4dCBkaXNhYmxlZFxyXG5cclxuJGJvcmRlci1kaXNhYmxlZDogMXB4IHNvbGlkICRjb2xvci1saWdodDtcclxuXHJcbi8vIGZvbnRcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0LXJlZ3VsYXI6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcblxyXG5cclxuLy9jb250YWluZXJzXHJcbiRtYWluLWNvbnRhaW5lci1oZWFkZXItaGVpZ2h0OiA0LjVyZW07XHJcbiRtYWluLWNvbnRhaW5lci10cmFuc2lzdGlvbi1kZWxheTogMjUwbXM7XHJcblxyXG4vLyBoZWFkZXIsIG5hdlxyXG4kbmF2LWljb24tc2l6ZTogcmVtKDM1KTtcclxuJHNpZGViYXItaGVpZ2h0OiAxMDB2aDtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci13aWR0aC1leHBhbmRlZDogcmVtKCRzaWRlYmFyLXdpZHRoKTtcclxuJHNpZGViYXItaW5pdC1wb3NpdGlvbjogcmVtKC0kc2lkZWJhci13aWR0aCk7XHJcbiIsIi8vIEFuaW1hdGlvblxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkYXJncykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYXJncztcclxuICAtbW96LWFuaW1hdGlvbjogJGFyZ3M7XHJcbiAgLW1zLWFuaW1hdGlvbjogJGFyZ3M7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYXJncztcclxuICBhbmltYXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRkZWxheSkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcclxuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1tcy1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1vLWFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEtleWZyYW1lc1xyXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3ggU2l6aW5nXHJcbkBtaXhpbiBib3gtc2l6aW5nKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYXJncztcclxuICAtbW96LWJveC1zaXppbmc6ICRhcmdzO1xyXG4gIGJveC1zaXppbmc6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWJveCgpIHtcclxuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xyXG59XHJcblxyXG5AbWl4aW4gY29udGVudC1ib3goKSB7XHJcbiAgQGluY2x1ZGUgYm94LXNpemluZyhjb250ZW50LWJveCk7XHJcbn1cclxuXHJcbi8vIENvbHVtbnNcclxuQG1peGluIGNvbHVtbnMoJGFyZ3MpIHtcclxuICAtd2Via2l0LWNvbHVtbnM6ICRhcmdzO1xyXG4gIC1tb3otY29sdW1uczogJGFyZ3M7XHJcbiAgY29sdW1uczogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBjb2x1bW4tY291bnQoJGNvdW50KSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb3VudDtcclxuICAtbW96LWNvbHVtbi1jb3VudDogJGNvdW50O1xyXG4gIGNvbHVtbi1jb3VudDogJGNvdW50O1xyXG59XHJcblxyXG5AbWl4aW4gY29sdW1uLWdhcCgkZ2FwKSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkZ2FwO1xyXG4gIC1tb3otY29sdW1uLWdhcDogJGdhcDtcclxuICBjb2x1bW4tZ2FwOiAkZ2FwO1xyXG59XHJcblxyXG5AbWl4aW4gY29sdW1uLXdpZHRoKCR3aWR0aCkge1xyXG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiAkd2lkdGg7XHJcbiAgLW1vei1jb2x1bW4td2lkdGg6ICR3aWR0aDtcclxuICBjb2x1bW4td2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGNvbHVtbi1ydWxlKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1jb2x1bW4tcnVsZTogJGFyZ3M7XHJcbiAgLW1vei1jb2x1bW4tcnVsZTogJGFyZ3M7XHJcbiAgY29sdW1uLXJ1bGU6ICRhcmdzO1xyXG59XHJcblxyXG4vLyBGaWx0ZXJcclxuQG1peGluIGZpbHRlcigkYXJncykge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkYXJncztcclxuICAtbW96LWZpbHRlcjogJGFyZ3M7XHJcbiAgLW8tZmlsdGVyOiAkYXJncztcclxuICAtbXMtZmlsdGVyOiAkYXJncztcclxufVxyXG5cclxuLy8gRmxleGJveFxyXG5AbWl4aW4gZmxleGJveCgpIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLy8gVGhlICdmbGV4JyBzaG9ydGhhbmRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW1zXHJcbi8vIDxwb3NpdGl2ZS1udW1iZXI+LCBpbml0aWFsLCBhdXRvLCBvciBub25lXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZXMpIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tb3otYm94LWZsZXg6ICR2YWx1ZXM7XHJcbiAgLXdlYmtpdC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tcy1mbGV4OiAkdmFsdWVzO1xyXG4gIGZsZXg6ICR2YWx1ZXM7XHJcbn1cclxuXHJcblxyXG4vLyBEaXNwbGF5IE9yZGVyXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyA8aW50ZWdlcj5cclxuQG1peGluIG9yZGVyKCR2YWwpIHtcclxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAkdmFsO1xyXG4gIC1tb3otYm94LW9yZGluYWwtZ3JvdXA6ICR2YWw7XHJcbiAgLW1zLWZsZXgtb3JkZXI6ICR2YWw7XHJcbiAgLXdlYmtpdC1vcmRlcjogJHZhbDtcclxuICBvcmRlcjogJHZhbDtcclxufVxyXG5cclxuLy8gQXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZFxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCRqdXN0aWZ5KSB7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBGbGV4IEZsb3cgRGlyZWN0aW9uXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIHJvdyB8IHJvdy1yZXZlcnNlIHwgY29sdW1uIHwgY29sdW1uLXJldmVyc2VcclxuQG1peGluIGZsZXgtZGlyZWN0aW9uKCRkaXJlY3Rpb246cm93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBMaW5lIFdyYXBwaW5nXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIG5vd3JhcCB8IHdyYXAgfCB3cmFwLXJldmVyc2VcclxuQG1peGluIGZsZXgtd3JhcCgkd3JhcCkge1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiAkd3JhcDtcclxuICAtbW96LWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgZmxleC13cmFwOiAkd3JhcDtcclxufVxyXG5cclxuLy8gRmxleCBEaXJlY3Rpb24gYW5kIFdyYXBcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gPGZsZXgtZGlyZWN0aW9uPiB8fCA8ZmxleC13cmFwPlxyXG5AbWl4aW4gZmxleC1mbG93KCRmbG93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWZsb3c6ICRmbG93O1xyXG4gIC1tb3otZmxleC1mbG93OiAkZmxvdztcclxuICAtbXMtZmxleC1mbG93OiAkZmxvdztcclxuICBmbGV4LWZsb3c6ICRmbG93O1xyXG59XHJcblxyXG4vLyBGbGV4IGdyb3cgZmFjdG9yXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyA8bnVtYmVyPlxyXG5AbWl4aW4gZmxleC1ncm93KCRncm93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6ICRncm93O1xyXG4gIC1tb3otZmxleC1ncm93OiAkZ3JvdztcclxuICAtbXMtZmxleC1ncm93OiAkZ3JvdztcclxuICBmbGV4LWdyb3c6ICRncm93O1xyXG59XHJcblxyXG4vLyBGbGV4IHNocmlua1xyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbSBzaHJpbmsgZmFjdG9yXHJcbi8vIDxudW1iZXI+XHJcbkBtaXhpbiBmbGV4LXNocmluaygkc2hyaW5rKSB7XHJcbiAgLXdlYmtpdC1mbGV4LXNocmluazogJHNocmluaztcclxuICAtbW96LWZsZXgtc2hyaW5rOiAkc2hyaW5rO1xyXG4gIC1tcy1mbGV4LXNocmluazogJHNocmluaztcclxuICBmbGV4LXNocmluazogJHNocmluaztcclxufVxyXG5cclxuLy8gRmxleCBiYXNpc1xyXG4vLyAtIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiB0aGUgZmxleCBpdGVtXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc25pdGlhbCBtYWluIHNpemUgb2YgdGhlIGZsZXggaXRlbVxyXG4vLyA8d2lkdGg+XHJcbkBtaXhpbiBmbGV4LWJhc2lzKCR3aWR0aCkge1xyXG4gIC13ZWJraXQtZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIC1tb3otZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIC1tcy1mbGV4LWJhc2lzOiAkd2lkdGg7XHJcbiAgZmxleC1iYXNpczogJHdpZHRoO1xyXG59XHJcblxyXG4vLyBQYWNraW5nIEZsZXggTGluZXNcclxuLy8gLSBhcHBsaWVzIHRvOiBtdWx0aS1saW5lIGZsZXggY29udGFpbmVyc1xyXG4vLyBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBzcGFjZS1iZXR3ZWVuIHwgc3BhY2UtYXJvdW5kIHwgc3RyZXRjaFxyXG5AbWl4aW4gYWxpZ24tY29udGVudCgkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbW96LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbXMtYWxpZ24tY29udGVudDogJGFsaWduO1xyXG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxufVxyXG5cclxuLy8gQ3Jvc3MtYXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24pIHtcclxuICAtd2Via2l0LWZsZXgtYWxpZ246ICRhbGlnbjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbn1cclxuXHJcbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1zZWxmKCRhbGlnbikge1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tb3otYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1zZWxmOiAkYWxpZ247XHJcbiAgYWxpZ24tc2VsZjogJGFsaWduO1xyXG59XHJcblxyXG4vLyBHcmFkaWVudHNcclxuXHJcbkBtaXhpbiBncmFkaWVudCgkZGVmYXVsdDogI0Y1RjVGNSwgJHN0YXJ0OiAjRUVFLCAkc3RvcDogI0ZGRikge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudC10b3AoJGRlZmF1bHQsICRzdGFydCwgMCUsICRzdG9wLCAxMDAlKTtcclxufVxyXG5cclxuQG1peGluIGxpbmVhci1ncmFkaWVudC10b3AoJGRlZmF1bHQsICRjb2xvcjEsICRzdG9wMSwgJGNvbG9yMiwgJHN0b3AyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgkc3RvcDEsICRjb2xvcjEpLCBjb2xvci1zdG9wKCRzdG9wMiAkY29sb3IyKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkY29sb3IxICRzdG9wMSwgJGNvbG9yMiAkc3RvcDIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJGNvbG9yMSAkc3RvcDEsICRjb2xvcjIgJHN0b3AyKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJGNvbG9yMSAkc3RvcDEsICRjb2xvcjIgJHN0b3AyKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAkY29sb3IxICRzdG9wMSwgJGNvbG9yMiAkc3RvcDIpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICRjb2xvcjEgJHN0b3AxLCAkY29sb3IyICRzdG9wMik7XHJcbn1cclxuXHJcbi8vIFRleHQgU2hhZG93XHJcbkBtaXhpbiB0ZXh0LXNoYWRvdygkYXJncykge1xyXG4gIHRleHQtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuLy8gVHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkYXJncztcclxuICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gIHRyYW5zZm9ybTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJGRlZzo0NWRlZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoJGRlZykpO1xyXG59XHJcblxyXG5AbWl4aW4gc2NhbGUoJGZhY3RvcjouNSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgkZmFjdG9yKSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2xhdGUoJHgsICR5KSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgkeCwgJHkpKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopIHtcclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoJHgsICR5LCAkeikpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNsYXRlSGFyZHdhcmUoJHgsICR5KSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNsYXRlKCR4LCAkeSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksIDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksIDApO1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uc1xyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRkZWxheTowKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xyXG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3ByZWZpeGVyLnNjc3NcIjtcclxuXHJcbi8vIEFkZHMgVmVydGljYWwgZ2FwIGluIFZlcnRpY2FsIExheW91dFxyXG5AbWl4aW4gdmVydGljYWxHYXAoJGdhcCkge1xyXG4gID4qOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZHMgSG9yaXpvbnRhbCBnYXAgaW4gSG9yaXpvbnRhbCBMYXlvdXRcclxuQG1peGluIGhvcml6b250YWxHYXAoJGdhcCkge1xyXG4gID4qOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUHV0cyBjaGlsZCBlbGVtZW50cyBpbiB2ZXJ0aWNhbCBsYXlvdXRcclxuQG1peGluIFZHcm91cCgkZ2FwOjAsICRob3Jpem9udGFsQWxpZ246IGZsZXgtc3RhcnQsICR2ZXJ0aWNhbEFsaWduOmZsZXgtc3RhcnQpIHtcclxuICBAaW5jbHVkZSBmbGV4Ym94KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAaW5jbHVkZSBhbGlnbi1pdGVtcygkdmVydGljYWxBbGlnbik7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRob3Jpem9udGFsQWxpZ24pO1xyXG4gIEBpbmNsdWRlIHZlcnRpY2FsR2FwKCRnYXApXHJcbn1cclxuXHJcbi8vIFB1dHMgY2hpbGQgZWxlbWVudHMgaW4gaG9yaXpvbnRhbCBsYXlvdXRcclxuQG1peGluIEhHcm91cCgkZ2FwOjAsICRob3Jpem9udGFsQWxpZ246IGZsZXgtc3RhcnQsICR2ZXJ0aWNhbEFsaWduOmZsZXgtc3RhcnQpIHtcclxuICBAaW5jbHVkZSBmbGV4Ym94KCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBAaW5jbHVkZSBhbGlnbi1pdGVtcygkdmVydGljYWxBbGlnbik7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRob3Jpem9udGFsQWxpZ24pO1xyXG4gIEBpbmNsdWRlIGhvcml6b250YWxHYXAoJGdhcCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./projects/ui-library/src/lib/components/nav/nav.component.ts":
/*!*********************************************************************!*\
  !*** ./projects/ui-library/src/lib/components/nav/nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
        this.menuItems = [];
        this.sliderStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuClickTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedMenu = {};
    }
    Object.defineProperty(NavComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (status) {
            this._expanded = status;
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (route) {
            var curRoute = route.url;
            for (var i = 0; i < _this.menuItems.length; i++) {
                var menuItem = _this.menuItems[i];
                if (menuItem.children) {
                    for (var k = 0; k < menuItem.children.length; k++) {
                        var subMenu = menuItem.children[k];
                        if (curRoute.includes(subMenu.route)) {
                            _this.selectedMenu = { idx: i, subMenuIdx: k };
                            _this.expandedMenu = i;
                            return;
                        }
                    }
                }
            }
        });
    };
    NavComponent.prototype.toggleMenu = function () {
        this.expanded = !this.expanded;
        this.sliderStatus.emit(this.expanded);
    };
    NavComponent.prototype.onMenuClick = function (menu, index) {
        if (this.expandedMenu === undefined || this.expandedMenu !== index) {
            this.expandedMenu = index;
            this.menuClickTrigger.emit({ isParent: true, menu: menu });
        }
        else {
            this.expandedMenu = undefined;
        }
    };
    NavComponent.prototype.onSubMenuClick = function (menu, subMenu, index, subIdx) {
        this.selectedMenu = { idx: index, subMenuIdx: subIdx };
        if (!this.diableDefaultClick) {
            this._router.navigate([subMenu.route]);
            this.toggleMenu();
        }
        this.menuClickTrigger.emit({ isParent: false, menu: menu, subMenu: subMenu });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavComponent.prototype, "menuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], NavComponent.prototype, "expanded", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavComponent.prototype, "diableDefaultClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavComponent.prototype, "sliderStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavComponent.prototype, "menuClickTrigger", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./projects/ui-library/src/lib/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./projects/ui-library/src/lib/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./projects/ui-library/src/lib/services/http.service.ts":
/*!**************************************************************!*\
  !*** ./projects/ui-library/src/lib/services/http.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./projects/ui-library/src/lib/services/services.ts":
/*!**********************************************************!*\
  !*** ./projects/ui-library/src/lib/services/services.ts ***!
  \**********************************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./projects/ui-library/src/lib/services/http.service.ts");

var Services = [
    _http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]
];


/***/ }),

/***/ "./projects/ui-library/src/lib/ui-library.module.ts":
/*!**********************************************************!*\
  !*** ./projects/ui-library/src/lib/ui-library.module.ts ***!
  \**********************************************************/
/*! exports provided: UiLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiLibrary", function() { return UiLibrary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components */ "./projects/ui-library/src/lib/components/components.ts");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services */ "./projects/ui-library/src/lib/services/services.ts");






var UiLibrary = /** @class */ (function () {
    function UiLibrary() {
    }
    UiLibrary = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: _components_components__WEBPACK_IMPORTED_MODULE_4__["Components"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: _services_services__WEBPACK_IMPORTED_MODULE_5__["Services"].slice(),
            exports: _components_components__WEBPACK_IMPORTED_MODULE_4__["ExportedComponents"].slice()
        })
    ], UiLibrary);
    return UiLibrary;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_developer_developer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/developer/developer.component */ "./src/app/demo/developer/developer.component.ts");
/* harmony import */ var _demo_color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/color-pallet/color-pallet.component */ "./src/app/demo/color-pallet/color-pallet.component.ts");
/* harmony import */ var _demo_setup_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/setup/setup.component */ "./src/app/demo/setup/setup.component.ts");






var routes = [
    {
        path: 'developer',
        component: _demo_developer_developer_component__WEBPACK_IMPORTED_MODULE_3__["DeveloperComponent"]
    },
    {
        path: 'setup',
        component: _demo_setup_setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"]
    },
    {
        path: 'colorPallet',
        component: _demo_color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_4__["ColorPalletComponent"]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'developer'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"application-wrapper\">\n  <lib-header [title]=\"appTitle\" (sideBarToggled)=\"sideBarToggled($event)\"></lib-header>\n  <lib-nav [menuItems]=\"menuItems\" [expanded]=\"expanded\" (sliderStatus)=\"sideBarToggled($event)\"></lib-nav>\n\n  <div class=\"main-container container-fluid\" id=\"main-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-model */ "./src/app/nav-model.ts");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/config */ "./src/app/constants/config.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = _constants_config__WEBPACK_IMPORTED_MODULE_3__["AppName"];
        var navModel = new _nav_model__WEBPACK_IMPORTED_MODULE_2__["NavModel"]();
        this.menuItems = navModel.nav;
    }
    AppComponent.prototype.sideBarToggled = function (navStatus) {
        this.expanded = navStatus;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ui_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-library */ "./projects/ui-library/src/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_developer_developer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/developer/developer.component */ "./src/app/demo/developer/developer.component.ts");
/* harmony import */ var _demo_color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/color-pallet/color-pallet.component */ "./src/app/demo/color-pallet/color-pallet.component.ts");
/* harmony import */ var _demo_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/setup/setup.component */ "./src/app/demo/setup/setup.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _demo_developer_developer_component__WEBPACK_IMPORTED_MODULE_6__["DeveloperComponent"],
                _demo_color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_7__["ColorPalletComponent"],
                _demo_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__["SetupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ui_library__WEBPACK_IMPORTED_MODULE_3__["UiLibrary"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/config.ts":
/*!*************************************!*\
  !*** ./src/app/constants/config.ts ***!
  \*************************************/
/*! exports provided: AppName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppName", function() { return AppName; });
var AppName = 'UI Library';


/***/ }),

/***/ "./src/app/demo/color-pallet/color-pallet.component.html":
/*!***************************************************************!*\
  !*** ./src/app/demo/color-pallet/color-pallet.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-pallet\">\n  <div>\n    <div class=\"color-code primary\">\n      <p> PRIMARY </p>\n      <div class=\"palet\"></div>\n      <p> BLUE <br>#0069B1</p>\n    </div>\n    <div class=\"color-code primaryhover\">\n      <p> PRIMARY HOVER </p>\n      <div class=\"palet\"></div>\n      <p> bluehover <br>#003F81</p>\n    </div>\n    <div class=\"color-code secondary \">\n      <p> SECONDARY </p>\n      <div class=\"palet\"></div>\n      <p> GREEN <br>#82B20A</p>\n    </div>\n    <div class=\"color-code secondaryhover\">\n      <p> SECONDARY HOVER</p>\n      <div class=\"palet\"></div>\n      <p> greenhover<br>#508200</p>\n    </div>\n    <div class=\"color-code informational\">\n      <p> INFORMATIONAL </p>\n      <div class=\"palet\"></div>\n      <p> LIGHT <br>#00A8E4</p>\n    </div>\n    <div class=\"color-code informationalhover\">\n      <p> INFORMATIONAL HOVER</p>\n      <div class=\"palet\"></div>\n      <p> lighthover <br>#0079B2</p>\n    </div>\n    <div class=\"color-code attention\">\n      <p> ATTENTION </p>\n      <div class=\"palet\"></div>\n      <p> ORANGE <br>#FFA81E</p>\n    </div>\n    <div class=\"color-code attentionhover\">\n      <p> ATTENTION HOVER</p>\n      <div class=\"palet\"></div>\n      <p> orangehover <br>#EE8000</p>\n    </div>\n    <div class=\"color-code error \">\n      <p> ERROR</p>\n      <div class=\"palet\"></div>\n      <p> PINK <br>#D20F55</p>\n    </div>\n    <div class=\"color-code errorhover \">\n      <p> ERROR HOVER</p>\n      <div class=\"palet\"></div>\n      <p> pinkhover <br>#9A002D</p>\n    </div>\n    <div class=\"color-code accent1 \">\n      <p> ACCENT1 </p>\n      <div class=\"palet\"></div>\n      <p> DARK <br>#283764</p>\n    </div>\n    <div class=\"color-code accent1hover \">\n      <p> ACCENT1 HOVER </p>\n      <div class=\"palet\"></div>\n      <p> darkhover<br>#001239</p>\n    </div>\n    <div class=\"color-code accent2 \">\n      <p> ACCENT2 </p>\n      <div class=\"palet\"></div>\n      <p> TEAL <br>#128094</p>\n    </div>\n    <div class=\"color-code accent2hover \">\n      <p> ACCENT2 HOVER </p>\n      <div class=\"palet\"></div>\n      <p> tealhover<br>#005366</p>\n    </div>\n    <div class=\"color-code datavisual1 \">\n      <p> DATA VISUAL1 </p>\n      <div class=\"palet\"></div>\n      <p> GOLD <br>#FFC100</p>\n    </div>\n    <div class=\"color-code datavisual1hover \">\n      <p> DATA VISUAL1 HOVER </p>\n      <div class=\"palet\"></div>\n      <p> goldhover<br>#C79100</p>\n    </div>\n    <div class=\"color-code datavisual2 \">\n      <p> DATA VISUAL2 </p>\n      <div class=\"palet\"></div>\n      <p> DARK <br>#EE8000</p>\n    </div>\n    <div class=\"color-code datavisual2hover \">\n      <p> DATA VISUAL2 HOVER </p>\n      <div class=\"palet\"></div>\n      <p> darkhover<br>#B56201</p>\n    </div>\n    <div class=\"color-code datavisual3 \">\n      <p> DATA VISUAL3 </p>\n      <div class=\"palet\"></div>\n      <p> PURPLE <br>#641980</p>\n    </div>\n    <div class=\"color-code datavisual3hover \">\n      <p> DATA VISUAL3 HOVER </p>\n      <div class=\"palet\"></div>\n      <p> purplehover<br>#3E0055</p>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <div class=\"color-code disabled \">\n      <p> DISABLED</p>\n      <div class=\"palet\"></div>\n      <p> Disabled <br>#F2F2F2</p>\n    </div>\n    <div class=\"color-code light \">\n      <p> LIGHT</p>\n      <div class=\"palet\"></div>\n      <p> Light <br>#DFDFDF</p>\n    </div>\n    <div class=\"color-code medium \">\n      <P> MEDIUM</P>\n      <div class=\"palet\"></div>\n      <p> medium <br>#B2B2B2</p>\n    </div>\n    <div class=\"color-code dark \">\n      <p> DARK</p>\n      <div class=\"palet\"></div>\n      <p> dark <br>#7D7D7D</p>\n    </div>\n    <div class=\"color-code textstyle \">\n      <p> TEXTSTYLE</p>\n      <div class=\"palet\"></div>\n      <p> darker <br>#414141</p>\n    </div>\n    <div class=\"color-code background \">\n      <p> Background</p>\n      <div class=\"palet\"></div>\n      <p> background <br>#F2F2F2</p>\n    </div>\n    <div class=\"color-code white \">\n      <p> WHITE</p>\n      <div class=\"palet\"></div>\n      <p> white<br>#FFFFFF</p>\n    </div>\n    <div class=\"color-code black \">\n      <p> BLACK</p>\n      <div class=\"palet\"></div>\n      <p> Black<br>#000000</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/color-pallet/color-pallet.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/demo/color-pallet/color-pallet.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-pallet .color-code {\n  width: 140px !important;\n  display: inline-block;\n  vertical-align: top; }\n  .color-pallet .color-code .palet {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin: 0 auto; }\n  .color-pallet .color-code p {\n    text-align: center;\n    color: #000;\n    font-size: 10px; }\n  .color-pallet .primary .palet {\n  background: #0069B1; }\n  .color-pallet .primaryhover .palet {\n  background: #003F81; }\n  .color-pallet .secondary .palet {\n  background: #82B20A; }\n  .color-pallet .secondaryhover .palet {\n  background: #508200; }\n  .color-pallet .informational .palet {\n  background: #00A8E4; }\n  .color-pallet .informationalhover .palet {\n  background: #0079B2; }\n  .color-pallet .attention .palet {\n  background: #FFA81E; }\n  .color-pallet .attentionhover .palet {\n  background: #EE8000; }\n  .color-pallet .error .palet {\n  background: #D20F55; }\n  .color-pallet .errorhover .palet {\n  background: #9A002D; }\n  .color-pallet .accent1 .palet {\n  background: #283764; }\n  .color-pallet .accent1hover .palet {\n  background: #001239; }\n  .color-pallet .accent2 .palet {\n  background: #128094; }\n  .color-pallet .accent2hover .palet {\n  background: #005366; }\n  .color-pallet .datavisual1 .palet {\n  background: #FFC100; }\n  .color-pallet .datavisual1hover .palet {\n  background: #C79100; }\n  .color-pallet .datavisual2 .palet {\n  background: #EE8000; }\n  .color-pallet .datavisual2hover .palet {\n  background: #B56201; }\n  .color-pallet .datavisual3 .palet {\n  background: #641980; }\n  .color-pallet .datavisual3hover .palet {\n  background: #3E0055; }\n  .color-pallet .disabled .palet {\n  background: #F2F2F2; }\n  .color-pallet .light .palet {\n  background: #DFDFDF; }\n  .color-pallet .medium .palet {\n  background: #B2B2B2; }\n  .color-pallet .dark .palet {\n  background: #7D7D7D; }\n  .color-pallet .textstyle .palet {\n  background: #414141; }\n  .color-pallet .background .palet {\n  background: #F2F2F2; }\n  .color-pallet .white .palet {\n  background: #FFFFFF; }\n  .color-pallet .black {\n  background-color: #fff !important; }\n  .color-pallet .black .palet {\n    background: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9jb2xvci1wYWxsZXQvRTpcXFByb2plY3RzXFx1aS1saWIvc3JjXFxhcHBcXGRlbW9cXGNvbG9yLXBhbGxldFxcY29sb3ItcGFsbGV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2NvbG9yLXBhbGxldC9FOlxcUHJvamVjdHNcXHVpLWxpYi9kaXN0XFx1aS1saWJyYXJ5XFxzdHlsZXNcXHZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBSnZCO0lBT00sV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBVnBCO0lBY00sa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFoQnJCO0VBcUJJLG1CQ3BCbUIsRUFBQTtFRER2QjtFQXlCSSxtQkN2QndCLEVBQUE7RURGNUI7RUE2QkksbUJDMUJxQixFQUFBO0VESHpCO0VBaUNJLG1CQzdCMEIsRUFBQTtFREo5QjtFQXFDSSxtQkNoQ3lCLEVBQUE7RURMN0I7RUF5Q0ksbUJDbkM4QixFQUFBO0VETmxDO0VBNkNJLG1CQ3RDcUIsRUFBQTtFRFB6QjtFQWlESSxtQkN6QzBCLEVBQUE7RURSOUI7RUFxREksbUJDNUNpQixFQUFBO0VEVHJCO0VBeURJLG1CQy9Dc0IsRUFBQTtFRFYxQjtFQTZESSxtQkNsRG1CLEVBQUE7RURYdkI7RUFpRUksbUJDckR3QixFQUFBO0VEWjVCO0VBcUVJLG1CQ3hEbUIsRUFBQTtFRGJ2QjtFQXlFSSxtQkMzRHdCLEVBQUE7RURkNUI7RUE2RUksbUJDOUR1QixFQUFBO0VEZjNCO0VBaUZJLG1CQ2pFNEIsRUFBQTtFRGhCaEM7RUFxRkksbUJDcEV1QixFQUFBO0VEakIzQjtFQXlGSSxtQkN2RTJCLEVBQUE7RURsQi9CO0VBNkZJLG1CQzFFdUIsRUFBQTtFRG5CM0I7RUFpR0ksbUJDN0U0QixFQUFBO0VEcEJoQztFQXFHSSxtQkNyRW9CLEVBQUE7RURoQ3hCO0VBeUdJLG1CQ25GaUIsRUFBQTtFRHRCckI7RUE2R0ksbUJDdEZrQixFQUFBO0VEdkJ0QjtFQWlISSxtQkN6RmdCLEVBQUE7RUR4QnBCO0VBcUhJLG1CQzVGcUIsRUFBQTtFRHpCekI7RUF5SEksbUJDOUZzQixFQUFBO0VEM0IxQjtFQTZISSxtQkMvRmlCLEVBQUE7RUQ5QnJCO0VBaUlJLGlDQUFpQyxFQUFBO0VBaklyQztJQW9JTSxtQkN2R2UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29sb3ItcGFsbGV0L2NvbG9yLXBhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9kaXN0L3VpLWxpYnJhcnkvc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjtcclxuXHJcbi5jb2xvci1wYWxsZXQge1xyXG4gIC5jb2xvci1jb2RlIHtcclxuICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgICAucGFsZXQge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeWhvdmVyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnlob3ZlciAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmluZm9ybWF0aW9uYWwgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1pbmZvcm1hdGlvbmFsO1xyXG4gIH1cclxuXHJcbiAgLmluZm9ybWF0aW9uYWxob3ZlciAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWluZm9ybWF0aW9uYWxob3ZlcjtcclxuICB9XHJcblxyXG4gIC5hdHRlbnRpb24gLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hdHRlbnRpb247XHJcbiAgfVxyXG5cclxuICAuYXR0ZW50aW9uaG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hdHRlbnRpb25ob3ZlcjtcclxuICB9XHJcblxyXG4gIC5lcnJvciAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWVycm9yO1xyXG4gIH1cclxuXHJcbiAgLmVycm9yaG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1lcnJvcmhvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmFjY2VudDEgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hY2NlbnQxO1xyXG4gIH1cclxuXHJcbiAgLmFjY2VudDFob3ZlciAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWFjY2VudDFob3ZlcjtcclxuICB9XHJcblxyXG4gIC5hY2NlbnQyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYWNjZW50MjtcclxuICB9XHJcblxyXG4gIC5hY2NlbnQyaG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hY2NlbnQyaG92ZXI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXZpc3VhbDEgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kYXRhdmlzdWFsMTtcclxuICB9XHJcblxyXG4gIC5kYXRhdmlzdWFsMWhvdmVyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGF0YXZpc3VhbDFob3ZlcjtcclxuICB9XHJcblxyXG4gIC5kYXRhdmlzdWFsMiAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRhdGF2aXN1YWwyO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF2aXN1YWwyaG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kYXRhdmlzdWwyaG92ZXI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXZpc3VhbDMgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kYXRhdmlzdWFsMztcclxuICB9XHJcblxyXG4gIC5kYXRhdmlzdWFsM2hvdmVyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGF0YXZpc3VhbDNob3ZlcjtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLmxpZ2h0IC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQ7XHJcbiAgfVxyXG5cclxuICAubWVkaXVtIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmRhcmsgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kYXJrO1xyXG4gIH1cclxuXHJcbiAgLnRleHRzdHlsZSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXRleHRzdHlsZTtcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5kIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC53aGl0ZSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuXHJcbiAgICAucGFsZXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2Z1bmN0aW9ucy5zY3NzXCI7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLXByaW1hcnk6ICMwMDY5QjE7XHJcbiRjb2xvci1wcmltYXJ5aG92ZXI6ICMwMDNGODE7XHJcbiRjb2xvci1zZWNvbmRhcnk6ICM4MkIyMEE7XHJcbiRjb2xvci1zZWNvbmRhcnlob3ZlcjogIzUwODIwMDtcclxuJGNvbG9yLWluZm9ybWF0aW9uYWw6ICMwMEE4RTQ7XHJcbiRjb2xvci1pbmZvcm1hdGlvbmFsaG92ZXI6ICMwMDc5QjI7XHJcbiRjb2xvci1hdHRlbnRpb246ICNGRkE4MUU7XHJcbiRjb2xvci1hdHRlbnRpb25ob3ZlcjogI0VFODAwMDtcclxuJGNvbG9yLWVycm9yOiAjRDIwRjU1O1xyXG4kY29sb3ItZXJyb3Job3ZlcjogIzlBMDAyRDtcclxuJGNvbG9yLWFjY2VudDE6ICMyODM3NjQ7XHJcbiRjb2xvci1hY2NlbnQxaG92ZXI6ICMwMDEyMzk7XHJcbiRjb2xvci1hY2NlbnQyOiAjMTI4MDk0O1xyXG4kY29sb3ItYWNjZW50MmhvdmVyOiAjMDA1MzY2O1xyXG4kY29sb3ItZGF0YXZpc3VhbDE6ICNGRkMxMDA7XHJcbiRjb2xvci1kYXRhdmlzdWFsMWhvdmVyOiAjQzc5MTAwO1xyXG4kY29sb3ItZGF0YXZpc3VhbDI6ICNFRTgwMDA7XHJcbiRjb2xvci1kYXRhdmlzdWwyaG92ZXI6ICNCNTYyMDE7XHJcbiRjb2xvci1kYXRhdmlzdWFsMzogIzY0MTk4MDtcclxuJGNvbG9yLWRhdGF2aXN1YWwzaG92ZXI6ICMzRTAwNTU7XHJcbiRjb2xvci1yb3ctaG92ZXI6ICNGMkYyRjI7XHJcbiRjb2xvci1saWdodDogI0RGREZERjtcclxuJGNvbG9yLW1lZGl1bTogI0IyQjJCMjtcclxuJGNvbG9yLWRhcms6ICM3RDdEN0Q7XHJcbiRjb2xvci10ZXh0c3R5bGU6ICM0MTQxNDE7XHJcbiRjb2xvci10ZXh0c3R5bGUtZGFya2VyOiAjMzIzMjMyO1xyXG4kY29sb3ItYmFja2dyb3VuZDogI0YyRjJGMjtcclxuJGNvbG9yLWJhY2tncm91bmQtbWFpbjogI0ZBRkJGRDtcclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3Itd2hpdGU6ICNGRkZGRkY7XHJcbiRjb2xvci10ZXh0LW1haW4tbWVudS1pdGVtOiAjMjgzNzY0O1xyXG4kY29sb3ItZGlzYWJsZWQ6ICNGMkYyRjI7XHJcbiRjb2xvci1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4kY29sb3ItdGV4dC1kaXNhYmxlZDogJGNvbG9yLWxpZ2h0OyAvLyB0ZXh0IGRpc2FibGVkXHJcblxyXG4kYm9yZGVyLWRpc2FibGVkOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0O1xyXG5cclxuLy8gZm9udFxyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQtcmVndWxhcjogMzAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcclxuXHJcblxyXG4vL2NvbnRhaW5lcnNcclxuJG1haW4tY29udGFpbmVyLWhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcclxuJG1haW4tY29udGFpbmVyLXRyYW5zaXN0aW9uLWRlbGF5OiAyNTBtcztcclxuXHJcbi8vIGhlYWRlciwgbmF2XHJcbiRuYXYtaWNvbi1zaXplOiByZW0oMzUpO1xyXG4kc2lkZWJhci1oZWlnaHQ6IDEwMHZoO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWV4cGFuZGVkOiByZW0oJHNpZGViYXItd2lkdGgpO1xyXG4kc2lkZWJhci1pbml0LXBvc2l0aW9uOiByZW0oLSRzaWRlYmFyLXdpZHRoKTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/demo/color-pallet/color-pallet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/color-pallet/color-pallet.component.ts ***!
  \*************************************************************/
/*! exports provided: ColorPalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPalletComponent", function() { return ColorPalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorPalletComponent = /** @class */ (function () {
    function ColorPalletComponent() {
    }
    ColorPalletComponent.prototype.ngOnInit = function () {
    };
    ColorPalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-pallet',
            template: __webpack_require__(/*! ./color-pallet.component.html */ "./src/app/demo/color-pallet/color-pallet.component.html"),
            styles: [__webpack_require__(/*! ./color-pallet.component.scss */ "./src/app/demo/color-pallet/color-pallet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPalletComponent);
    return ColorPalletComponent;
}());



/***/ }),

/***/ "./src/app/demo/developer/developer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/demo/developer/developer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"developer row\">\n  <div class=\"col-8\">\n    <div class=\"card cyan darken-3\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Tushar Nimje</span>\n        <p>\"Software engineer with hands on experience in JavaScript and worked on\n          various JavaScript technologies such as Angular, React and Nodejs. Experience\n          of working in an Agile and Fast-paced product development enviroment. Excellent\n          written and verbal communication skills. Conscientious,\n          results-driven and analytical software engineer with years of professional\n          exposure in software development. Strong in architectural research, software\n          design and agile team.</p>\n      </div>\n      <div class=\"card-action\">\n        <a href=\"https://nimjetushar.github.io/\">Profile</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/developer/developer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/demo/developer/developer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGV2ZWxvcGVyL2RldmVsb3Blci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/developer/developer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo/developer/developer.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./developer.component.html */ "./src/app/demo/developer/developer.component.html"),
            styles: [__webpack_require__(/*! ./developer.component.scss */ "./src/app/demo/developer/developer.component.scss")]
        })
    ], DeveloperComponent);
    return DeveloperComponent;
}());



/***/ }),

/***/ "./src/app/demo/setup/setup.component.html":
/*!*************************************************!*\
  !*** ./src/app/demo/setup/setup.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  setup works!\n</p>\n"

/***/ }),

/***/ "./src/app/demo/setup/setup.component.scss":
/*!*************************************************!*\
  !*** ./src/app/demo/setup/setup.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/setup/setup.component.ts":
/*!***********************************************!*\
  !*** ./src/app/demo/setup/setup.component.ts ***!
  \***********************************************/
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
    SetupComponent.prototype.ngOnInit = function () {
    };
    SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/demo/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/demo/setup/setup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/nav-model.ts":
/*!******************************!*\
  !*** ./src/app/nav-model.ts ***!
  \******************************/
/*! exports provided: NavModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModel", function() { return NavModel; });
var NavModel = /** @class */ (function () {
    function NavModel() {
        this._navItems = [
            {
                label: 'Getting Started',
                badge: 'fa-home',
                children: [
                    {
                        label: 'Developers',
                        route: 'developer'
                    }
                ]
            },
            {
                label: 'Styles',
                badge: 'fa-home',
                children: [
                    {
                        label: 'Color Pallet',
                        route: 'colorPallet'
                    }
                ]
            }
        ];
    }
    Object.defineProperty(NavModel.prototype, "nav", {
        get: function () {
            return this._navItems;
        },
        enumerable: true,
        configurable: true
    });
    return NavModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\ui-lib\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map