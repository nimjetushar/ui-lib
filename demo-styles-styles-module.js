(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-styles-styles-module"],{

/***/ "./src/app/demo/styles/color-pallet/color-pallet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo/styles/color-pallet/color-pallet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<demo-wrapper header=\"Color Pallet\">\n  <div output class=\"color-pallet\">\n    <div class=\"row\">\n      <div class=\"color-code primary col-xs-6 col-md-2 col-lg-1\">\n        <p> PRIMARY </p>\n        <div class=\"palet\"></div>\n        <p> BLUE <br>#0069B1</p>\n      </div>\n      <div class=\"color-code primaryhover col-xs-6 col-md-2 col-lg-1\">\n        <p> PRIMARY HOVER </p>\n        <div class=\"palet\"></div>\n        <p> bluehover <br>#003F81</p>\n      </div>\n      <div class=\"color-code secondary col-xs-6 col-md-2 col-lg-1\">\n        <p> SECONDARY </p>\n        <div class=\"palet\"></div>\n        <p> GREEN <br>#82B20A</p>\n      </div>\n      <div class=\"color-code secondaryhover col-xs-6 col-md-2 col-lg-1\">\n        <p> SECONDARY HOVER</p>\n        <div class=\"palet\"></div>\n        <p> greenhover<br>#508200</p>\n      </div>\n      <div class=\"color-code informational col-xs-6 col-md-2 col-lg-1\">\n        <p> INFORMATIONAL </p>\n        <div class=\"palet\"></div>\n        <p> LIGHT <br>#00A8E4</p>\n      </div>\n      <div class=\"color-code informationalhover col-xs-6 col-md-2 col-lg-1\">\n        <p> INFORMATIONAL HOVER</p>\n        <div class=\"palet\"></div>\n        <p> lighthover <br>#0079B2</p>\n      </div>\n      <div class=\"color-code attention col-xs-6 col-md-2 col-lg-1\">\n        <p> ATTENTION </p>\n        <div class=\"palet\"></div>\n        <p> ORANGE <br>#FFA81E</p>\n      </div>\n      <div class=\"color-code attentionhover col-xs-6 col-md-2 col-lg-1\">\n        <p> ATTENTION HOVER</p>\n        <div class=\"palet\"></div>\n        <p> orangehover <br>#EE8000</p>\n      </div>\n      <div class=\"color-code error col-xs-6 col-md-2 col-lg-1\">\n        <p> ERROR</p>\n        <div class=\"palet\"></div>\n        <p> PINK <br>#D20F55</p>\n      </div>\n      <div class=\"color-code errorhover col-xs-6 col-md-2 col-lg-1\">\n        <p> ERROR HOVER</p>\n        <div class=\"palet\"></div>\n        <p> pinkhover <br>#9A002D</p>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"color-code disabled col-xs-6 col-md-2 col-lg-1\">\n        <p> DISABLED</p>\n        <div class=\"palet\"></div>\n        <p> Disabled <br>#F2F2F2</p>\n      </div>\n      <div class=\"color-code light col-xs-6 col-md-2 col-lg-1\">\n        <p> LIGHT</p>\n        <div class=\"palet\"></div>\n        <p> Light <br>#DFDFDF</p>\n      </div>\n      <div class=\"color-code medium col-xs-6 col-md-2 col-lg-1\">\n        <P> MEDIUM</P>\n        <div class=\"palet\"></div>\n        <p> medium <br>#B2B2B2</p>\n      </div>\n      <div class=\"color-code dark col-xs-6 col-md-2 col-lg-1\">\n        <p> DARK</p>\n        <div class=\"palet\"></div>\n        <p> dark <br>#7D7D7D</p>\n      </div>\n      <div class=\"color-code textstyle col-xs-6 col-md-2 col-lg-1\">\n        <p> TEXTSTYLE</p>\n        <div class=\"palet\"></div>\n        <p> darker <br>#414141</p>\n      </div>\n      <div class=\"color-code background col-xs-6 col-md-2 col-lg-1\">\n        <p> Background</p>\n        <div class=\"palet\"></div>\n        <p> background <br>#F2F2F2</p>\n      </div>\n      <div class=\"color-code white col-xs-6 col-md-2 col-lg-1\">\n        <p> WHITE</p>\n        <div class=\"palet\"></div>\n        <p> white<br>#FFFFFF</p>\n      </div>\n      <div class=\"color-code black col-xs-6 col-md-2 col-lg-1\">\n        <p> BLACK</p>\n        <div class=\"palet\"></div>\n        <p> Black<br>#000000</p>\n      </div>\n    </div>\n  </div>\n</demo-wrapper>"

/***/ }),

/***/ "./src/app/demo/styles/color-pallet/color-pallet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demo/styles/color-pallet/color-pallet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 481px) and (max-width: 767px) {\n  .color-pallet .row {\n    justify-content: center; } }\n\n.color-pallet .color-code {\n  width: 8.75rem;\n  display: inline-block;\n  vertical-align: top; }\n\n.color-pallet .color-code .palet {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin: 0 auto; }\n\n.color-pallet .color-code p {\n    text-align: center;\n    color: #000;\n    font-size: 10px;\n    min-height: 2.5rem; }\n\n.color-pallet .primary .palet {\n  background: #0069B1; }\n\n.color-pallet .primaryhover .palet {\n  background: #003F81; }\n\n.color-pallet .secondary .palet {\n  background: #82B20A; }\n\n.color-pallet .secondaryhover .palet {\n  background: #508200; }\n\n.color-pallet .informational .palet {\n  background: #00A8E4; }\n\n.color-pallet .informationalhover .palet {\n  background: #0079B2; }\n\n.color-pallet .attention .palet {\n  background: #FFA81E; }\n\n.color-pallet .attentionhover .palet {\n  background: #EE8000; }\n\n.color-pallet .error .palet {\n  background: #D20F55; }\n\n.color-pallet .errorhover .palet {\n  background: #9A002D; }\n\n.color-pallet .disabled .palet {\n  background: #F2F2F2; }\n\n.color-pallet .light .palet {\n  background: #DFDFDF; }\n\n.color-pallet .medium .palet {\n  background: #B2B2B2; }\n\n.color-pallet .dark .palet {\n  background: #7D7D7D; }\n\n.color-pallet .textstyle .palet {\n  background: #414141; }\n\n.color-pallet .background .palet {\n  background: #F2F2F2; }\n\n.color-pallet .white {\n  background-color: transparent !important; }\n\n.color-pallet .white .palet {\n    background: #FFFFFF; }\n\n.color-pallet .black {\n  background-color: transparent !important; }\n\n.color-pallet .black .palet {\n    background: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9zdHlsZXMvY29sb3ItcGFsbGV0L0U6XFxQcm9qZWN0c1xcdWktbGliL3NyY1xcYXBwXFxkZW1vXFxzdHlsZXNcXGNvbG9yLXBhbGxldFxcY29sb3ItcGFsbGV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL3N0eWxlcy9jb2xvci1wYWxsZXQvRTpcXFByb2plY3RzXFx1aS1saWIvZGlzdFxcdWktbGlicmFyeVxcc3R5bGVzXFxmdW5jdGlvbnMuc2NzcyIsInNyYy9hcHAvZGVtby9zdHlsZXMvY29sb3ItcGFsbGV0L0U6XFxQcm9qZWN0c1xcdWktbGliL2Rpc3RcXHVpLWxpYnJhcnlcXHN0eWxlc1xcdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUZKO0lBSVksdUJBQXVCLEVBQUEsRUFDMUI7O0FBTFQ7RUFVUSxjQ0EyQjtFREMzQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBWjNCO0lBZVksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBOztBQWxCMUI7SUFzQlksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JDZnVCLEVBQUE7O0FEVm5DO0VBOEJRLG1CRTdCZSxFQUFBOztBRkR2QjtFQWtDUSxtQkVoQ29CLEVBQUE7O0FGRjVCO0VBc0NRLG1CRW5DaUIsRUFBQTs7QUZIekI7RUEwQ1EsbUJFdENzQixFQUFBOztBRko5QjtFQThDUSxtQkV6Q3FCLEVBQUE7O0FGTDdCO0VBa0RRLG1CRTVDMEIsRUFBQTs7QUZObEM7RUFzRFEsbUJFL0NpQixFQUFBOztBRlB6QjtFQTBEUSxtQkVsRHNCLEVBQUE7O0FGUjlCO0VBOERRLG1CRXJEYSxFQUFBOztBRlRyQjtFQWtFUSxtQkV4RGtCLEVBQUE7O0FGVjFCO0VBc0VRLG1CRWpEZ0IsRUFBQTs7QUZyQnhCO0VBMEVRLG1CRS9EYSxFQUFBOztBRlhyQjtFQThFUSxtQkVsRWMsRUFBQTs7QUZadEI7RUFrRlEsbUJFckVZLEVBQUE7O0FGYnBCO0VBc0ZRLG1CRXhFaUIsRUFBQTs7QUZkekI7RUEwRlEsbUJFMUVrQixFQUFBOztBRmhCMUI7RUE4RlEsd0NBQXdDLEVBQUE7O0FBOUZoRDtJQWlHWSxtQkU5RVMsRUFBQTs7QUZuQnJCO0VBc0dRLHdDQUF3QyxFQUFBOztBQXRHaEQ7SUF5R1ksbUJFdkZTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3N0eWxlcy9jb2xvci1wYWxsZXQvY29sb3ItcGFsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7XHJcblxyXG4uY29sb3ItcGFsbGV0IHtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb2xvci1jb2RlIHtcclxuICAgICAgICB3aWR0aDogcmVtKDE0MCk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgIC5wYWxldCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiByZW0oNDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJpbWFyeSAucGFsZXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmltYXJ5aG92ZXIgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeWhvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnkgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnlob3ZlciAucGFsZXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1zZWNvbmRhcnlob3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb3JtYXRpb25hbCAucGFsZXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1pbmZvcm1hdGlvbmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvcm1hdGlvbmFsaG92ZXIgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaW5mb3JtYXRpb25hbGhvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdHRlbnRpb24gLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYXR0ZW50aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdHRlbnRpb25ob3ZlciAucGFsZXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1hdHRlbnRpb25ob3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3IgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yaG92ZXIgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZXJyb3Job3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzYWJsZWQgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpZ2h0IC5wYWxldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWRpdW0gLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbWVkaXVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXJrIC5wYWxldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWRhcms7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRzdHlsZSAucGFsZXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci10ZXh0c3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tncm91bmQgLnBhbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAud2hpdGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5wYWxldCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJsYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAucGFsZXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJyb3dzZXItY29udGV4dDogMTY7XHJcbiRmdWxsV2lkdGg6IDEwMCU7XHJcblxyXG5AZnVuY3Rpb24gcmVtKCRwaXhlbHMsICRjb250ZXh0OiAkYnJvd3Nlci1jb250ZXh0KSB7XHJcbiAgQGlmICh1bml0bGVzcygkcGl4ZWxzKSkge1xyXG4gICAgJHBpeGVsczogJHBpeGVscyAqIDFweDtcclxuICB9XHJcblxyXG4gIEBpZiAodW5pdGxlc3MoJGNvbnRleHQpKSB7XHJcbiAgICAkY29udGV4dDogJGNvbnRleHQgKiAxcHg7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRwaXhlbHMgLyAkY29udGV4dCAqIDFyZW07XHJcbn1cclxuIiwiQGltcG9ydCBcIi4vZnVuY3Rpb25zLnNjc3NcIjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kY29sb3ItcHJpbWFyeTogIzAwNjlCMTtcclxuJGNvbG9yLXByaW1hcnlob3ZlcjogIzAwM0Y4MTtcclxuJGNvbG9yLXNlY29uZGFyeTogIzgyQjIwQTtcclxuJGNvbG9yLXNlY29uZGFyeWhvdmVyOiAjNTA4MjAwO1xyXG4kY29sb3ItaW5mb3JtYXRpb25hbDogIzAwQThFNDtcclxuJGNvbG9yLWluZm9ybWF0aW9uYWxob3ZlcjogIzAwNzlCMjtcclxuJGNvbG9yLWF0dGVudGlvbjogI0ZGQTgxRTtcclxuJGNvbG9yLWF0dGVudGlvbmhvdmVyOiAjRUU4MDAwO1xyXG4kY29sb3ItZXJyb3I6ICNEMjBGNTU7XHJcbiRjb2xvci1lcnJvcmhvdmVyOiAjOUEwMDJEO1xyXG4kY29sb3ItbGlnaHQ6ICNERkRGREY7XHJcbiRjb2xvci1tZWRpdW06ICNCMkIyQjI7XHJcbiRjb2xvci1kYXJrOiAjN0Q3RDdEO1xyXG4kY29sb3ItdGV4dHN0eWxlOiAjNDE0MTQxO1xyXG4kY29sb3ItdGV4dHN0eWxlLWRhcmtlcjogIzMyMzIzMjtcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiRjb2xvci1iYWNrZ3JvdW5kLW1haW46ICNGQUZCRkQ7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXdoaXRlOiAjRkZGRkZGO1xyXG4kY29sb3ItdGV4dC1tYWluLW1lbnUtaXRlbTogIzI4Mzc2NDtcclxuJGNvbG9yLWRpc2FibGVkOiAjRjJGMkYyO1xyXG4kY29sb3Itb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuJGNvbG9yLXRleHQtZGlzYWJsZWQ6ICRjb2xvci1saWdodDsgLy8gdGV4dCBkaXNhYmxlZFxyXG5cclxuJGJvcmRlci1kaXNhYmxlZDogMXB4IHNvbGlkICRjb2xvci1saWdodDtcclxuXHJcbi8vIGZvbnRcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0LXJlZ3VsYXI6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XHJcblxyXG4vL2NvbnRhaW5lcnNcclxuJG1haW4tY29udGFpbmVyLWhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcclxuJG1haW4tY29udGFpbmVyLXRyYW5zaXN0aW9uLWRlbGF5OiAyNTBtcztcclxuXHJcbi8vIGhlYWRlciwgbmF2XHJcbiRuYXYtaWNvbi1zaXplOiByZW0oMzUpO1xyXG4kc2lkZWJhci1oZWlnaHQ6IDEwMHZoO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWV4cGFuZGVkOiByZW0oJHNpZGViYXItd2lkdGgpO1xyXG4kc2lkZWJhci1pbml0LXBvc2l0aW9uOiByZW0oLSRzaWRlYmFyLXdpZHRoKTtcclxuXHJcbi8vIFRhYmxlXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjEyKSAhZGVmYXVsdDtcclxuJHRhYmxlLXN0cmlwZWQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC41KSAhZGVmYXVsdDtcclxuJG1lZGl1bS1zY3JlZW46IDk5MnB4ICFkZWZhdWx0O1xyXG4kbWVkaXVtLWFuZC1kb3duOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogI3skbWVkaXVtLXNjcmVlbn0pXCIgIWRlZmF1bHQ7XHJcblxyXG4vLyBidXR0b25cclxuJHNlY29uZGFyeS1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcclxuJGJ1dHRvbi1ib3JkZXI6IG5vbmUgIWRlZmF1bHQ7XHJcbiRidXR0b24tYmFja2dyb3VuZC1mb2N1czogbGlnaHRlbigkc2Vjb25kYXJ5LWNvbG9yLCA0JSkgIWRlZmF1bHQ7XHJcbiRidXR0b24tZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xyXG4kYnV0dG9uLWljb24tZm9udC1zaXplOiAxLjNyZW0gIWRlZmF1bHQ7XHJcbiRidXR0b24taGVpZ2h0OiAzNnB4ICFkZWZhdWx0O1xyXG4kYnV0dG9uLXBhZGRpbmc6IDAgMTZweCAhZGVmYXVsdDtcclxuJGJ1dHRvbi1yYWRpdXM6IDJweCAhZGVmYXVsdDtcclxuXHJcbi8vIERpc2FibGVkIHN0eWxlc1xyXG4kYnV0dG9uLWRpc2FibGVkLWJhY2tncm91bmQ6ICNERkRGREYgIWRlZmF1bHQ7XHJcbiRidXR0b24tZGlzYWJsZWQtY29sb3I6ICM5RjlGOUYgIWRlZmF1bHQ7XHJcblxyXG4vLyBSYWlzZWQgYnV0dG9uc1xyXG4kYnV0dG9uLXJhaXNlZC1iYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yICFkZWZhdWx0O1xyXG4kYnV0dG9uLXJhaXNlZC1iYWNrZ3JvdW5kLWhvdmVyOiBsaWdodGVuKCRidXR0b24tcmFpc2VkLWJhY2tncm91bmQsIDUlKSAhZGVmYXVsdDtcclxuJGJ1dHRvbi1yYWlzZWQtY29sb3I6ICNmZmYgIWRlZmF1bHQ7XHJcblxyXG4vLyBMYXJnZSBidXR0b25zXHJcbiRidXR0b24tbGFyZ2UtZm9udC1zaXplOiAxNXB4ICFkZWZhdWx0O1xyXG4kYnV0dG9uLWxhcmdlLWljb24tZm9udC1zaXplOiAxLjZyZW0gIWRlZmF1bHQ7XHJcbiRidXR0b24tbGFyZ2UtaGVpZ2h0OiAkYnV0dG9uLWhlaWdodCAqIDEuNSAhZGVmYXVsdDtcclxuJGJ1dHRvbi1mbG9hdGluZy1sYXJnZS1zaXplOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gU21hbGwgYnV0dG9uc1xyXG4kYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcclxuJGJ1dHRvbi1zbWFsbC1pY29uLWZvbnQtc2l6ZTogMS4ycmVtICFkZWZhdWx0O1xyXG4kYnV0dG9uLXNtYWxsLWhlaWdodDogJGJ1dHRvbi1oZWlnaHQgKiAuOSAhZGVmYXVsdDtcclxuJGJ1dHRvbi1mbG9hdGluZy1zbWFsbC1zaXplOiAkYnV0dG9uLWhlaWdodCAqIC45ICFkZWZhdWx0O1xyXG5cclxuLy8gRmxhdCBidXR0b25zXHJcbiRidXR0b24tZmxhdC1jb2xvcjogIzM0MzQzNCAhZGVmYXVsdDtcclxuJGJ1dHRvbi1mbGF0LWRpc2FibGVkLWNvbG9yOiBsaWdodGVuKCM5OTksIDEwJSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBGbG9hdGluZyBidXR0b25zXHJcbiRidXR0b24tZmxvYXRpbmctYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvciAhZGVmYXVsdDtcclxuJGJ1dHRvbi1mbG9hdGluZy1iYWNrZ3JvdW5kLWhvdmVyOiAkYnV0dG9uLWZsb2F0aW5nLWJhY2tncm91bmQgIWRlZmF1bHQ7XHJcbiRidXR0b24tZmxvYXRpbmctY29sb3I6ICNmZmYgIWRlZmF1bHQ7XHJcbiRidXR0b24tZmxvYXRpbmctc2l6ZTogNDBweCAhZGVmYXVsdDtcclxuJGJ1dHRvbi1mbG9hdGluZy1yYWRpdXM6IDUwJSAhZGVmYXVsdDtcclxuXHJcbiJdfQ== */"

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






var routes = [
    { path: 'colorPallet', component: _color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_5__["ColorPalletComponent"] },
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
                _color_pallet_color_pallet_component__WEBPACK_IMPORTED_MODULE_5__["ColorPalletComponent"]
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