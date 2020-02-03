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
var ToastService = /** @class */ (function () {
    function ToastService(toastr) {
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
    ToastService.prototype.show = /**
     * @param {?} toastParam
     * @return {?}
     */
    function (toastParam) {
        /** @type {?} */
        var param = Object.assign({}, this.defaultParam, toastParam);
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
    };
    ToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: ToastrService }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.ToastrService)); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());
export { ToastService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFnRCxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBR3pGLHFDQUlDOzs7SUFIQyxrQ0FBaUI7O0lBQ2pCLGdDQUFlOztJQUNmLCtCQUFnRDs7QUFHbEQ7SUFZRSxzQkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVBqQyxpQkFBWSxHQUE2QjtZQUMvQyxJQUFJLEVBQUUsU0FBUztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztJQUUyQyxDQUFDOzs7OztJQUU5QywyQkFBSTs7OztJQUFKLFVBQUssVUFBb0M7O1lBQ2pDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztRQUU5RCxRQUFRLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssU0FBUztnQkFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEUsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFFO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7O2dCQTdCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVhRLGFBQWE7Ozt1QkFEdEI7Q0F3Q0MsQUE5QkQsSUE4QkM7U0EzQlksWUFBWTs7Ozs7O0lBRXZCLG9DQUtFOzs7OztJQUVVLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UsIEFjdGl2ZVRvYXN0LCBDb21wb25lbnRUeXBlLCBJbmRpdmlkdWFsQ29uZmlnIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5leHBvcnQgeyBBY3RpdmVUb2FzdCB9IGZyb20gJ25neC10b2FzdHInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UGFyYW1ldGVycyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbyc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UGFyYW06IFBhcnRpYWw8VG9hc3RQYXJhbWV0ZXJzPiA9IHtcbiAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgZW5hYmxlSHRtbDogdHJ1ZSxcbiAgICB0aW1lT3V0OiAxMDAwMCxcbiAgICBjbG9zZUJ1dHRvbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0cjogVG9hc3RyU2VydmljZSkgeyB9XG5cbiAgc2hvdyh0b2FzdFBhcmFtOiBQYXJ0aWFsPFRvYXN0UGFyYW1ldGVycz4pOiBBY3RpdmVUb2FzdDxhbnk+IHtcbiAgICBjb25zdCBwYXJhbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFBhcmFtLCB0b2FzdFBhcmFtKTtcblxuICAgIHN3aXRjaCAodG9hc3RQYXJhbS50eXBlKSB7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMudG9hc3RyLmluZm8odG9hc3RQYXJhbS5tZXNzYWdlLCB0b2FzdFBhcmFtLnRpdGxlLCBwYXJhbSk7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMudG9hc3RyLnN1Y2Nlc3ModG9hc3RQYXJhbS5tZXNzYWdlLCB0b2FzdFBhcmFtLnRpdGxlLCBwYXJhbSk7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB0aGlzLnRvYXN0ci5lcnJvcih0b2FzdFBhcmFtLm1lc3NhZ2UsIHRvYXN0UGFyYW0udGl0bGUsIHBhcmFtKTtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy50b2FzdHIud2FybmluZyh0b2FzdFBhcmFtLm1lc3NhZ2UsIHRvYXN0UGFyYW0udGl0bGUsIHBhcmFtKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBwYXJhbWV0ZXInKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==