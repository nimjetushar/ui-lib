(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-styles-styles-module"],{

/***/ "./src/app/demo/styles/color-pallet/color-pallet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/styles/color-pallet/color-pallet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<demo-wrapper header=\"Color Pallet\">\n  <div output class=\"color-pallet\">\n    <div class=\"color-code primary\">\n      <p> PRIMARY </p>\n      <div class=\"palet\"></div>\n      <p> BLUE <br>#0069B1</p>\n    </div>\n    <div class=\"color-code primaryhover\">\n      <p> PRIMARY HOVER </p>\n      <div class=\"palet\"></div>\n      <p> bluehover <br>#003F81</p>\n    </div>\n    <div class=\"color-code secondary \">\n      <p> SECONDARY </p>\n      <div class=\"palet\"></div>\n      <p> GREEN <br>#82B20A</p>\n    </div>\n    <div class=\"color-code secondaryhover\">\n      <p> SECONDARY HOVER</p>\n      <div class=\"palet\"></div>\n      <p> greenhover<br>#508200</p>\n    </div>\n    <div class=\"color-code informational\">\n      <p> INFORMATIONAL </p>\n      <div class=\"palet\"></div>\n      <p> LIGHT <br>#00A8E4</p>\n    </div>\n    <div class=\"color-code informationalhover\">\n      <p> INFORMATIONAL HOVER</p>\n      <div class=\"palet\"></div>\n      <p> lighthover <br>#0079B2</p>\n    </div>\n    <div class=\"color-code attention\">\n      <p> ATTENTION </p>\n      <div class=\"palet\"></div>\n      <p> ORANGE <br>#FFA81E</p>\n    </div>\n    <div class=\"color-code attentionhover\">\n      <p> ATTENTION HOVER</p>\n      <div class=\"palet\"></div>\n      <p> orangehover <br>#EE8000</p>\n    </div>\n    <div class=\"color-code error \">\n      <p> ERROR</p>\n      <div class=\"palet\"></div>\n      <p> PINK <br>#D20F55</p>\n    </div>\n    <div class=\"color-code errorhover \">\n      <p> ERROR HOVER</p>\n      <div class=\"palet\"></div>\n      <p> pinkhover <br>#9A002D</p>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <div class=\"color-code disabled \">\n      <p> DISABLED</p>\n      <div class=\"palet\"></div>\n      <p> Disabled <br>#F2F2F2</p>\n    </div>\n    <div class=\"color-code light \">\n      <p> LIGHT</p>\n      <div class=\"palet\"></div>\n      <p> Light <br>#DFDFDF</p>\n    </div>\n    <div class=\"color-code medium \">\n      <P> MEDIUM</P>\n      <div class=\"palet\"></div>\n      <p> medium <br>#B2B2B2</p>\n    </div>\n    <div class=\"color-code dark \">\n      <p> DARK</p>\n      <div class=\"palet\"></div>\n      <p> dark <br>#7D7D7D</p>\n    </div>\n    <div class=\"color-code textstyle \">\n      <p> TEXTSTYLE</p>\n      <div class=\"palet\"></div>\n      <p> darker <br>#414141</p>\n    </div>\n    <div class=\"color-code background \">\n      <p> Background</p>\n      <div class=\"palet\"></div>\n      <p> background <br>#F2F2F2</p>\n    </div>\n    <div class=\"color-code white \">\n      <p> WHITE</p>\n      <div class=\"palet\"></div>\n      <p> white<br>#FFFFFF</p>\n    </div>\n    <div class=\"color-code black \">\n      <p> BLACK</p>\n      <div class=\"palet\"></div>\n      <p> Black<br>#000000</p>\n    </div>\n  </div>\n</demo-wrapper>\n"

/***/ }),

/***/ "./src/app/demo/styles/color-pallet/color-pallet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/styles/color-pallet/color-pallet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-pallet .color-code {\n  width: 155px;\n  display: inline-block;\n  vertical-align: top; }\n  .color-pallet .color-code .palet {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin: 0 auto; }\n  .color-pallet .color-code p {\n    text-align: center;\n    color: #000;\n    font-size: 10px; }\n  .color-pallet .primary .palet {\n  background: #0069B1; }\n  .color-pallet .primaryhover .palet {\n  background: #003F81; }\n  .color-pallet .secondary .palet {\n  background: #82B20A; }\n  .color-pallet .secondaryhover .palet {\n  background: #508200; }\n  .color-pallet .informational .palet {\n  background: #00A8E4; }\n  .color-pallet .informationalhover .palet {\n  background: #0079B2; }\n  .color-pallet .attention .palet {\n  background: #FFA81E; }\n  .color-pallet .attentionhover .palet {\n  background: #EE8000; }\n  .color-pallet .error .palet {\n  background: #D20F55; }\n  .color-pallet .errorhover .palet {\n  background: #9A002D; }\n  .color-pallet .disabled .palet {\n  background: #F2F2F2; }\n  .color-pallet .light .palet {\n  background: #DFDFDF; }\n  .color-pallet .medium .palet {\n  background: #B2B2B2; }\n  .color-pallet .dark .palet {\n  background: #7D7D7D; }\n  .color-pallet .textstyle .palet {\n  background: #414141; }\n  .color-pallet .background .palet {\n  background: #F2F2F2; }\n  .color-pallet .white .palet {\n  background: #FFFFFF; }\n  .color-pallet .black {\n  background-color: #fff !important; }\n  .color-pallet .black .palet {\n    background: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9zdHlsZXMvY29sb3ItcGFsbGV0L0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxzdHlsZXNcXGNvbG9yLXBhbGxldFxcY29sb3ItcGFsbGV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL3N0eWxlcy9jb2xvci1wYWxsZXQvRTpcXFByb2plY3RzXFx1aS1saWIvZGlzdFxcdWktbGlicmFyeVxcc3R5bGVzXFx2YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtFQUp2QjtJQU9NLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQVZwQjtJQWNNLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBaEJyQjtFQXFCSSxtQkNwQm1CLEVBQUE7RUREdkI7RUF5QkksbUJDdkJ3QixFQUFBO0VERjVCO0VBNkJJLG1CQzFCcUIsRUFBQTtFREh6QjtFQWlDSSxtQkM3QjBCLEVBQUE7RURKOUI7RUFxQ0ksbUJDaEN5QixFQUFBO0VETDdCO0VBeUNJLG1CQ25DOEIsRUFBQTtFRE5sQztFQTZDSSxtQkN0Q3FCLEVBQUE7RURQekI7RUFpREksbUJDekMwQixFQUFBO0VEUjlCO0VBcURJLG1CQzVDaUIsRUFBQTtFRFRyQjtFQXlESSxtQkMvQ3NCLEVBQUE7RURWMUI7RUE2REksbUJDeENvQixFQUFBO0VEckJ4QjtFQWlFSSxtQkN0RGlCLEVBQUE7RURYckI7RUFxRUksbUJDekRrQixFQUFBO0VEWnRCO0VBeUVJLG1CQzVEZ0IsRUFBQTtFRGJwQjtFQTZFSSxtQkMvRHFCLEVBQUE7RURkekI7RUFpRkksbUJDakVzQixFQUFBO0VEaEIxQjtFQXFGSSxtQkNsRWlCLEVBQUE7RURuQnJCO0VBeUZJLGlDQUFpQyxFQUFBO0VBekZyQztJQTRGTSxtQkMxRWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vc3R5bGVzL2NvbG9yLXBhbGxldC9jb2xvci1wYWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjtcclxuXHJcbi5jb2xvci1wYWxsZXQge1xyXG4gIC5jb2xvci1jb2RlIHtcclxuICAgIHdpZHRoOiAxNTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgLnBhbGV0IHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByaW1hcnkgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnlob3ZlciAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnlob3ZlcjtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnkgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnk7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5aG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnlob3ZlcjtcclxuICB9XHJcblxyXG4gIC5pbmZvcm1hdGlvbmFsIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5mb3JtYXRpb25hbDtcclxuICB9XHJcblxyXG4gIC5pbmZvcm1hdGlvbmFsaG92ZXIgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1pbmZvcm1hdGlvbmFsaG92ZXI7XHJcbiAgfVxyXG5cclxuICAuYXR0ZW50aW9uIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYXR0ZW50aW9uO1xyXG4gIH1cclxuXHJcbiAgLmF0dGVudGlvbmhvdmVyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYXR0ZW50aW9uaG92ZXI7XHJcbiAgfVxyXG5cclxuICAuZXJyb3IgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1lcnJvcjtcclxuICB9XHJcblxyXG4gIC5lcnJvcmhvdmVyIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZXJyb3Job3ZlcjtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLmxpZ2h0IC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQ7XHJcbiAgfVxyXG5cclxuICAubWVkaXVtIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLmRhcmsgLnBhbGV0IHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kYXJrO1xyXG4gIH1cclxuXHJcbiAgLnRleHRzdHlsZSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXRleHRzdHlsZTtcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5kIC5wYWxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC53aGl0ZSAucGFsZXQge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuXHJcbiAgICAucGFsZXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL2Z1bmN0aW9ucy5zY3NzXCI7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLXByaW1hcnk6ICMwMDY5QjE7XHJcbiRjb2xvci1wcmltYXJ5aG92ZXI6ICMwMDNGODE7XHJcbiRjb2xvci1zZWNvbmRhcnk6ICM4MkIyMEE7XHJcbiRjb2xvci1zZWNvbmRhcnlob3ZlcjogIzUwODIwMDtcclxuJGNvbG9yLWluZm9ybWF0aW9uYWw6ICMwMEE4RTQ7XHJcbiRjb2xvci1pbmZvcm1hdGlvbmFsaG92ZXI6ICMwMDc5QjI7XHJcbiRjb2xvci1hdHRlbnRpb246ICNGRkE4MUU7XHJcbiRjb2xvci1hdHRlbnRpb25ob3ZlcjogI0VFODAwMDtcclxuJGNvbG9yLWVycm9yOiAjRDIwRjU1O1xyXG4kY29sb3ItZXJyb3Job3ZlcjogIzlBMDAyRDtcclxuJGNvbG9yLWxpZ2h0OiAjREZERkRGO1xyXG4kY29sb3ItbWVkaXVtOiAjQjJCMkIyO1xyXG4kY29sb3ItZGFyazogIzdEN0Q3RDtcclxuJGNvbG9yLXRleHRzdHlsZTogIzQxNDE0MTtcclxuJGNvbG9yLXRleHRzdHlsZS1kYXJrZXI6ICMzMjMyMzI7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4kY29sb3ItYmFja2dyb3VuZC1tYWluOiAjRkFGQkZEO1xyXG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRjb2xvci13aGl0ZTogI0ZGRkZGRjtcclxuJGNvbG9yLXRleHQtbWFpbi1tZW51LWl0ZW06ICMyODM3NjQ7XHJcbiRjb2xvci1kaXNhYmxlZDogI0YyRjJGMjtcclxuJGNvbG9yLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiRjb2xvci10ZXh0LWRpc2FibGVkOiAkY29sb3ItbGlnaHQ7IC8vIHRleHQgZGlzYWJsZWRcclxuXHJcbiRib3JkZXItZGlzYWJsZWQ6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQ7XHJcblxyXG4vLyBmb250XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW0tYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XHJcbiRmb250LXdlaWdodC1saWdodC1yZWd1bGFyOiAzMDA7XHJcbiRmb250LXdlaWdodC1saWdodDogMjAwO1xyXG5cclxuLy9jb250YWluZXJzXHJcbiRtYWluLWNvbnRhaW5lci1oZWFkZXItaGVpZ2h0OiA0LjVyZW07XHJcbiRtYWluLWNvbnRhaW5lci10cmFuc2lzdGlvbi1kZWxheTogMjUwbXM7XHJcblxyXG4vLyBoZWFkZXIsIG5hdlxyXG4kbmF2LWljb24tc2l6ZTogcmVtKDM1KTtcclxuJHNpZGViYXItaGVpZ2h0OiAxMDB2aDtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci13aWR0aC1leHBhbmRlZDogcmVtKCRzaWRlYmFyLXdpZHRoKTtcclxuJHNpZGViYXItaW5pdC1wb3NpdGlvbjogcmVtKC0kc2lkZWJhci13aWR0aCk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/styles/color-pallet/color-pallet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/styles/color-pallet/color-pallet.component.ts ***!
  \********************************************************************/
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
    ColorPalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-pallet',
            template: __webpack_require__(/*! ./color-pallet.component.html */ "./src/app/demo/styles/color-pallet/color-pallet.component.html"),
            styles: [__webpack_require__(/*! ./color-pallet.component.scss */ "./src/app/demo/styles/color-pallet/color-pallet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPalletComponent);
    return ColorPalletComponent;
}());



/***/ }),

/***/ "./src/app/demo/styles/reference/reference.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo/styles/reference/reference.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<demo-wrapper header=\"References\">\n  <div output>\n    <div class=\"styles-reference\">\n      <div class=\"descriptions\">\n        The library component contains following css framework / libraries\n        <ul>\n          <li *ngFor=\"let item of libLists\">\n            <a [href]=\"item.url\" target=\"_blank\">\n              <i class=\"fa {{item.icon}}\"></i>\n              {{item.name}}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</demo-wrapper>\n"

/***/ }),

/***/ "./src/app/demo/styles/reference/reference.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demo/styles/reference/reference.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styles-reference .descriptions ul li {\n  margin: 0.625rem;\n  margin-left: 0; }\n  .styles-reference .descriptions ul li a {\n    color: #000; }\n  .styles-reference .descriptions ul li i {\n    margin-right: 0.625rem; }\n  .styles-reference .descriptions ul li:hover i {\n    color: #ee6e73; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9zdHlsZXMvcmVmZXJlbmNlL0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxzdHlsZXNcXHJlZmVyZW5jZVxccmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL3N0eWxlcy9yZWZlcmVuY2UvRTpcXFByb2plY3RzXFx1aS1saWIvZGlzdFxcdWktbGlicmFyeVxcc3R5bGVzXFxmdW5jdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdNLGdCQ082QjtFRE43QixjQUFjLEVBQUE7RUFKcEI7SUFPUSxXQUFXLEVBQUE7RUFQbkI7SUFXUSxzQkNEMkIsRUFBQTtFRFZuQztJQWdCVSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3N0eWxlcy9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7XHJcblxyXG4uc3R5bGVzLXJlZmVyZW5jZSB7XHJcbiAgLmRlc2NyaXB0aW9ucyB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgIG1hcmdpbjogcmVtKDEwKTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiByZW0oMTApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZWU2ZTczO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYnJvd3Nlci1jb250ZXh0OiAxNjtcclxuJGZ1bGxXaWR0aDogMTAwJTtcclxuXHJcbkBmdW5jdGlvbiByZW0oJHBpeGVscywgJGNvbnRleHQ6ICRicm93c2VyLWNvbnRleHQpIHtcclxuICBAaWYgKHVuaXRsZXNzKCRwaXhlbHMpKSB7XHJcbiAgICAkcGl4ZWxzOiAkcGl4ZWxzICogMXB4O1xyXG4gIH1cclxuXHJcbiAgQGlmICh1bml0bGVzcygkY29udGV4dCkpIHtcclxuICAgICRjb250ZXh0OiAkY29udGV4dCAqIDFweDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHBpeGVscyAvICRjb250ZXh0ICogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/styles/reference/reference.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/styles/reference/reference.component.ts ***!
  \**************************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
        this.libLists = [
            {
                name: 'Material Css',
                url: 'https://materializecss.com/',
                icon: 'fa-map'
            },
            {
                name: 'Grid system',
                url: 'https://nimjetushar.github.io/grid-css/',
                icon: 'fa-th'
            },
            {
                name: 'Font awesome',
                url: 'https://fontawesome.com/v4.7.0/icons/',
                icon: 'fa-font-awesome'
            }
        ];
    }
    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! ./reference.component.html */ "./src/app/demo/styles/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.scss */ "./src/app/demo/styles/reference/reference.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/demo/styles/styles.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demo/styles/styles.module.ts ***!
  \**********************************************/
/*! exports provided: StylesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesModule", function() { return StylesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "./src/app/demo/common/common.module.ts");
/* harmony import */ var _color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-pallet/color-pallet.component */ "./src/app/demo/styles/color-pallet/color-pallet.component.ts");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reference/reference.component */ "./src/app/demo/styles/reference/reference.component.ts");







var routes = [
    { path: 'colorPallet', component: _color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_5__["ColorPalletComponent"] },
    { path: 'reference', component: _reference_reference_component__WEBPACK_IMPORTED_MODULE_6__["ReferenceComponent"] },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colorPallet'
    }
];
var StylesModule = /** @class */ (function () {
    function StylesModule() {
    }
    StylesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_5__["ColorPalletComponent"],
                _reference_reference_component__WEBPACK_IMPORTED_MODULE_6__["ReferenceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["Common"]
            ]
        })
    ], StylesModule);
    return StylesModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-styles-styles-module.js.map