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
            componentType: 'Service',
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
                },
                {
                    method: 'putRequest',
                    param: ['url: string', 'param: any'],
                    desc: 'PUT request takes url and param'
                },
                {
                    method: 'deleteRequest',
                    param: ['url: string', 'param: any (optional)'],
                    desc: 'DELETE request takes url and param'
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
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/demo/services/toast/toast.component.ts");







var routes = [
    { path: 'http', component: _http_http_component__WEBPACK_IMPORTED_MODULE_5__["HttpComponent"] },
    { path: 'toast', component: _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"] },
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
                _http_http_component__WEBPACK_IMPORTED_MODULE_5__["HttpComponent"],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_6__["ToastComponent"]
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



/***/ }),

/***/ "./src/app/demo/services/toast/toast.component.html":
/*!**********************************************************!*\
  !*** ./src/app/demo/services/toast/toast.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toast-component\">\n  <demo-wrapper header=\"Toast Service\" [options]=\"options\">\n    <div output>\n      <t-button type='primary' label='show success' (click)='showToast(\"success\")'>\n      </t-button>\n      <t-button type='primary' label='show error' (click)='showToast(\"error\")'></t-button>\n      <t-button type='primary' label='show info' (click)='showToast(\"info\")'></t-button>\n      <t-button type='primary' label='show warning' (click)='showToast(\"warning\")'>\n      </t-button>\n    </div>\n    <div doc>\n      Inject <b>ToastService</b> into component.\n      <div class='toast-types'>\n        <div>Toast types are :-</div>\n        <div>\n          <b>success</b>, <b>info</b>, <b>error</b>, <b>warning</b>\n        </div>\n      </div>\n      <div class='toast-position'>\n        <div>Toast positions are :-</div>\n        <div>\n          <b>toast-top-right</b>, <b>toast-top-left</b>,\n          <b>toast-bottom-right</b>, <b>toast-bottom-left</b>, <b>toast-top-center</b>,\n          <b>toast-bottom-center</b>, <b>toast-top-full-width</b>,\n          <b>toast-bottom-full-width</b>\n        </div>\n      </div>\n      <div class='active-toast'>\n        <div>ActiveToast provides following options :-</div>\n        <div class=\"strong\">toastId: number (Your Toast ID. Use this to close it\n          individually)</div>\n        <div class=\"strong\">message: string (message of your toast. Stored to prevent\n          duplicates)\n        </div>\n        <div class=\"strong\">portal: ComponentRef&lt;any&gt; (reference to the component)\n        </div>\n        <div class=\"strong\">toastRef: ToastRef&lt;any&gt; (a reference to your toast)\n        </div>\n        <div class=\"strong\">onShown: Observable&lt;any&gt; (triggered when toast is\n          active)</div>\n        <div class=\"strong\">onHidden: Observable&lt;any&gt; (triggered when toast is\n          destroyed)</div>\n        <div class=\"strong\">onTap: Observable&lt;any&gt; (triggered on toast click)</div>\n        <div class=\"strong\">onAction: Observable&lt;any&gt; (available for your use in\n          custom toast)\n        </div>\n\n        <div class='sample-code'>\n          <code>\n            <div>showToaster() &#123;</div>\n            <div>&nbsp; this.toastr.success('Hello world!', 'Toastr fun!')</div>\n            <div>&nbsp;&nbsp; .onTap</div>\n            <div>&nbsp;&nbsp; .pipe(take(1))</div>\n            <div>&nbsp;&nbsp; .subscribe(() => this.toasterClickedHandler());</div>\n            <div>&#125;</div>\n            <div>toasterClickedHandler() &#123;</div>\n            <div>&nbsp; console.log('Toastr clicked');</div>\n            <div>&#125;</div>\n          </code>\n        </div>\n      </div>\n    </div>\n  </demo-wrapper>\n</div>"

/***/ }),

/***/ "./src/app/demo/services/toast/toast.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/demo/services/toast/toast.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-component t-button button {\n  margin: 1rem 2rem; }\n\n.toast-component .toast-types,\n.toast-component .toast-position,\n.toast-component .active-toast {\n  border-top: 1px solid #d7d2d2;\n  margin-top: 1.25rem;\n  padding-top: 1.25rem; }\n\n.toast-component .strong {\n  font-weight: bold; }\n\n.toast-component .active-toast div.strong:nth-child(odd) {\n  background: #e5dddd; }\n\n.toast-component .active-toast div.strong {\n  padding: 0.375rem; }\n\n.toast-component .sample-code {\n  margin-top: 0.625rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9zZXJ2aWNlcy90b2FzdC9FOlxcUHJvamVjdHNcXHVpLWxpYi9zcmNcXGFwcFxcZGVtb1xcc2VydmljZXNcXHRvYXN0XFx0b2FzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVtby9zZXJ2aWNlcy90b2FzdC9FOlxcUHJvamVjdHNcXHVpLWxpYi9zcmNcXGFwcFxcc3R5bGVzXFx2YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9kZW1vL3NlcnZpY2VzL3RvYXN0L0U6XFxQcm9qZWN0c1xcdWktbGliL2Rpc3RcXHVpLWxpYnJhcnlcXHN0eWxlc1xcZnVuY3Rpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxpQkFBaUIsRUFBQTs7QUFGekI7OztFQVFRLDZCQ1B5QjtFRFF6QixtQkVDMkI7RUZBM0Isb0JFQTJCLEVBQUE7O0FGVm5DO0VBY1EsaUJBQWlCLEVBQUE7O0FBZHpCO0VBbUJZLG1CQUFtQixFQUFBOztBQW5CL0I7RUFzQlksaUJFWnVCLEVBQUE7O0FGVm5DO0VBMkJRLG9CRWpCMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vc2VydmljZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjtcclxuXHJcbi50b2FzdC1jb21wb25lbnQge1xyXG4gICAgdC1idXR0b24gYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudG9hc3QtdHlwZXMsXHJcbiAgICAudG9hc3QtcG9zaXRpb24sXHJcbiAgICAuYWN0aXZlLXRvYXN0IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvci1pbnNpZGUtZG9jO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHJlbSgyMCk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IHJlbSgyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0cm9uZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZS10b2FzdCB7XHJcbiAgICAgICAgZGl2LnN0cm9uZzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWRkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5zdHJvbmcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiByZW0oNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zYW1wbGUtY29kZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogcmVtKDEwKTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9kaXN0L3VpLWxpYnJhcnkvc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Rpc3QvdWktbGlicmFyeS9zdHlsZXMvZnVuY3Rpb25zLnNjc3NcIjtcclxuXHJcbiRib3JkZXItY29sb3ItaW5zaWRlLWRvYzogI2Q3ZDJkMjsiLCIkYnJvd3Nlci1jb250ZXh0OiAxNjtcclxuJGZ1bGxXaWR0aDogMTAwJTtcclxuXHJcbkBmdW5jdGlvbiByZW0oJHBpeGVscywgJGNvbnRleHQ6ICRicm93c2VyLWNvbnRleHQpIHtcclxuICBAaWYgKHVuaXRsZXNzKCRwaXhlbHMpKSB7XHJcbiAgICAkcGl4ZWxzOiAkcGl4ZWxzICogMXB4O1xyXG4gIH1cclxuXHJcbiAgQGlmICh1bml0bGVzcygkY29udGV4dCkpIHtcclxuICAgICRjb250ZXh0OiAkY29udGV4dCAqIDFweDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHBpeGVscyAvICRjb250ZXh0ICogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/services/toast/toast.component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo/services/toast/toast.component.ts ***!
  \********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ui_library_src_lib_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ui-library/src/lib/services/toast.service */ "./projects/ui-library/src/lib/services/toast.service.ts");



var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
        this.options = {
            name: 'ToastService',
            componentType: 'Service',
            methods: [
                {
                    method: 'show',
                    param: ['params: ToastParameters'],
                    desc: 'Accepts ToastParameters and return ActiveToast<any>'
                }
            ],
            options: [
                {
                    parameter: 'title',
                    type: 'string',
                    desc: 'Notification title'
                },
                {
                    parameter: 'message',
                    type: 'string',
                    desc: 'Notification message'
                },
                {
                    parameter: 'type',
                    type: 'string',
                    default: 'success',
                    desc: 'Specifies type of notification to show'
                },
                {
                    parameter: 'enableHtml',
                    type: 'boolean',
                    default: false,
                    desc: 'Html content within toast'
                },
                {
                    parameter: 'timeOut',
                    type: 'number',
                    default: '10000',
                    desc: 'Timeout for toast auto close'
                },
                {
                    parameter: 'extendedTimeOut',
                    type: 'boolean',
                    default: false,
                    desc: 'Disable both timeOut and extendedTimeOut'
                },
                {
                    parameter: 'disableTimeOut',
                    type: 'number',
                    default: '1000',
                    desc: 'Time to close after a user hovers over toast'
                },
                {
                    parameter: 'closeButton',
                    type: 'boolean',
                    default: false,
                    desc: 'Display close button'
                },
                {
                    parameter: 'toastComponent',
                    type: 'Component',
                    default: 'Toast',
                    desc: 'Angular component that will be used'
                },
                {
                    parameter: 'easing',
                    type: 'string',
                    default: 'ease-in',
                    desc: 'Toast component easing'
                },
                {
                    parameter: 'easeTime',
                    type: 'string | number',
                    default: '300',
                    desc: 'Time spent easing'
                },
                {
                    parameter: 'progressBar',
                    type: 'boolean',
                    default: 'false',
                    desc: 'Show progress bar'
                },
                {
                    parameter: 'progressAnimation',
                    type: 'decreasing | increasing',
                    default: 'decreasing',
                    desc: 'Changes the animation of the progress bar'
                },
                {
                    parameter: 'positionClass',
                    type: 'string',
                    default: 'toast-top-right',
                    desc: 'Class on toast container'
                },
                {
                    parameter: 'tapToDismiss',
                    type: 'boolean',
                    default: 'true',
                    desc: 'Close on click'
                },
                {
                    parameter: 'onActivateTick',
                    type: 'boolean',
                    default: 'false',
                    desc: "Fires changeDetectorRef.detectChanges() when activated.\n        Helps show toast from asynchronous events outside of Angular's change detection"
                },
                {
                    parameter: 'titleClass',
                    type: 'string',
                    default: 'toast-title',
                    desc: 'Class inside toast on title'
                },
                {
                    parameter: 'messageClass',
                    type: 'string',
                    default: 'toast-message',
                    desc: 'Class inside toast on message'
                }
            ]
        };
    }
    ToastComponent.prototype.showToast = function (type) {
        this.toastService.show({ title: 'Title', message: 'message', type: type, progressBar: true });
    };
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/demo/services/toast/toast.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./toast.component.scss */ "./src/app/demo/services/toast/toast.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ui_library_src_lib_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ })

}]);
//# sourceMappingURL=demo-services-services-module.js.map