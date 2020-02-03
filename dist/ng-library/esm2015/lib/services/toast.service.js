/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
/**
 * @record
 */
export function ToastParameters() { }
if (false) {
    /** @type {?|undefined} */
    ToastParameters.prototype.message;
    /** @type {?|undefined} */
    ToastParameters.prototype.title;
    /** @type {?|undefined} */
    ToastParameters.prototype.type;
}
export class ToastService {
    /**
     * @param {?} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
        this.defaultParam = {
            type: 'success',
            enableHtml: true,
            timeOut: 10000,
            closeButton: false
        };
    }
    /**
     * @param {?} toastParam
     * @return {?}
     */
    show(toastParam) {
        /** @type {?} */
        const param = Object.assign({}, this.defaultParam, toastParam);
        switch (toastParam.type) {
            case 'info':
                return this.toastr.info(toastParam.message, toastParam.title, param);
            case 'success':
                return this.toastr.success(toastParam.message, toastParam.title, param);
            case 'error':
                return this.toastr.error(toastParam.message, toastParam.title, param);
            case 'warning':
                return this.toastr.warning(toastParam.message, toastParam.title, param);
            default:
                throw new Error('invalid parameter');
        }
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: ToastrService }
];
/** @nocollapse */ ToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.ToastrService)); }, token: ToastService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.defaultParam;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFnRCxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBR3pGLHFDQUlDOzs7SUFIQyxrQ0FBaUI7O0lBQ2pCLGdDQUFlOztJQUNmLCtCQUFnRDs7QUFNbEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFTdkIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVBqQyxpQkFBWSxHQUE2QjtZQUMvQyxJQUFJLEVBQUUsU0FBUztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztJQUUyQyxDQUFDOzs7OztJQUU5QyxJQUFJLENBQUMsVUFBb0M7O2NBQ2pDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztRQUU5RCxRQUFRLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssU0FBUztnQkFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEUsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFFO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYUSxhQUFhOzs7Ozs7OztJQWNwQixvQ0FLRTs7Ozs7SUFFVSw4QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlLCBBY3RpdmVUb2FzdCwgQ29tcG9uZW50VHlwZSwgSW5kaXZpZHVhbENvbmZpZyB9IGZyb20gJ25neC10b2FzdHInO1xuZXhwb3J0IHsgQWN0aXZlVG9hc3QgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFBhcmFtZXRlcnMgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHR5cGU/OiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ2luZm8nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGVmYXVsdFBhcmFtOiBQYXJ0aWFsPFRvYXN0UGFyYW1ldGVycz4gPSB7XG4gICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIGVuYWJsZUh0bWw6IHRydWUsXG4gICAgdGltZU91dDogMTAwMDAsXG4gICAgY2xvc2VCdXR0b246IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHsgfVxuXG4gIHNob3codG9hc3RQYXJhbTogUGFydGlhbDxUb2FzdFBhcmFtZXRlcnM+KTogQWN0aXZlVG9hc3Q8YW55PiB7XG4gICAgY29uc3QgcGFyYW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQYXJhbSwgdG9hc3RQYXJhbSk7XG5cbiAgICBzd2l0Y2ggKHRvYXN0UGFyYW0udHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHJldHVybiB0aGlzLnRvYXN0ci5pbmZvKHRvYXN0UGFyYW0ubWVzc2FnZSwgdG9hc3RQYXJhbS50aXRsZSwgcGFyYW0pO1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiB0aGlzLnRvYXN0ci5zdWNjZXNzKHRvYXN0UGFyYW0ubWVzc2FnZSwgdG9hc3RQYXJhbS50aXRsZSwgcGFyYW0pO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gdGhpcy50b2FzdHIuZXJyb3IodG9hc3RQYXJhbS5tZXNzYWdlLCB0b2FzdFBhcmFtLnRpdGxlLCBwYXJhbSk7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIHRoaXMudG9hc3RyLndhcm5pbmcodG9hc3RQYXJhbS5tZXNzYWdlLCB0b2FzdFBhcmFtLnRpdGxlLCBwYXJhbSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyJyk7XG4gICAgfVxuICB9XG59XG4iXX0=