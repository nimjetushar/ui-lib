/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import * as i0 from "@angular/core";
import * as i1 from "primeng/components/common/messageservice";
/**
 * @record
 */
export function ToastParameters() { }
if (false) {
    /** @type {?|undefined} */
    ToastParameters.prototype.id;
    /** @type {?|undefined} */
    ToastParameters.prototype.key;
    /** @type {?|undefined} */
    ToastParameters.prototype.title;
    /** @type {?|undefined} */
    ToastParameters.prototype.message;
    /** @type {?|undefined} */
    ToastParameters.prototype.type;
    /** @type {?|undefined} */
    ToastParameters.prototype.closeButton;
    /** @type {?|undefined} */
    ToastParameters.prototype.timeOut;
    /** @type {?|undefined} */
    ToastParameters.prototype.sticky;
    /** @type {?|undefined} */
    ToastParameters.prototype.data;
}
var ToastService = /** @class */ (function () {
    function ToastService(messageService) {
        this.messageService = messageService;
        this.defaultParam = {
            severity: 'success',
            life: 5000,
            closable: false
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
        var param = this.formatConfig(toastParam);
        this.messageService.add(param);
    };
    /**
     * @param {?} toastParam
     * @return {?}
     */
    ToastService.prototype.showMultiple = /**
     * @param {?} toastParam
     * @return {?}
     */
    function (toastParam) {
        var e_1, _a;
        if (!toastParam || toastParam && !toastParam.length) {
            return;
        }
        /** @type {?} */
        var param = [];
        try {
            for (var toastParam_1 = tslib_1.__values(toastParam), toastParam_1_1 = toastParam_1.next(); !toastParam_1_1.done; toastParam_1_1 = toastParam_1.next()) {
                var item = toastParam_1_1.value;
                param.push(this.formatConfig(item));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (toastParam_1_1 && !toastParam_1_1.done && (_a = toastParam_1.return)) _a.call(toastParam_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.messageService.addAll(param);
    };
    /**
     * @private
     * @param {?} toastParam
     * @return {?}
     */
    ToastService.prototype.formatConfig = /**
     * @private
     * @param {?} toastParam
     * @return {?}
     */
    function (toastParam) {
        /** @type {?} */
        var param = Object.assign({}, this.defaultParam);
        var id = toastParam.id, key = toastParam.key, title = toastParam.title, message = toastParam.message, type = toastParam.type, closeButton = toastParam.closeButton, timeOut = toastParam.timeOut, sticky = toastParam.sticky, data = toastParam.data;
        if (id) {
            param.id = id;
        }
        if (key) {
            param.key = key;
        }
        if (title) {
            param.summary = title;
        }
        if (message) {
            param.detail = message;
        }
        if (type) {
            param.severity = type;
        }
        if (closeButton) {
            param.closable = closeButton;
        }
        if (timeOut) {
            param.life = timeOut;
        }
        if (sticky) {
            param.sticky = sticky;
        }
        if (data) {
            param.data = data;
        }
        return param;
    };
    ToastService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: MessageService }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.MessageService)); }, token: ToastService, providedIn: "root" });
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
    ToastService.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7QUFHMUUscUNBVUM7OztJQVRDLDZCQUFTOztJQUNULDhCQUFhOztJQUNiLGdDQUFlOztJQUNmLGtDQUFpQjs7SUFDakIsK0JBQTZDOztJQUM3QyxzQ0FBc0I7O0lBQ3RCLGtDQUFpQjs7SUFDakIsaUNBQWlCOztJQUNqQiwrQkFBVzs7QUFHYjtJQVNFLHNCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOMUMsaUJBQVksR0FBWTtZQUM5QixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFFb0QsQ0FBQzs7Ozs7SUFFdkQsMkJBQUk7Ozs7SUFBSixVQUFLLFVBQTJCOztZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBWTs7OztJQUFaLFVBQWEsVUFBNkI7O1FBQ3hDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTs7WUFDMUQsS0FBSyxHQUFjLEVBQUU7O1lBQzNCLEtBQW1CLElBQUEsZUFBQSxpQkFBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7Z0JBQTFCLElBQU0sSUFBSSx1QkFBQTtnQkFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyQzs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sbUNBQVk7Ozs7O0lBQXBCLFVBQXFCLFVBQTJCOztZQUN4QyxLQUFLLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVuRCxJQUFBLGtCQUFFLEVBQUUsb0JBQUcsRUFBRSx3QkFBSyxFQUFFLDRCQUFPLEVBQUUsc0JBQUksRUFBRSxvQ0FBVyxFQUFFLDRCQUFPLEVBQUUsMEJBQU0sRUFBRSxzQkFBSTtRQUV6RSxJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBbkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBZnpCLGNBQWM7Ozt1QkFEdkI7Q0FvRkMsQUFwRUQsSUFvRUM7U0FuRVksWUFBWTs7Ozs7O0lBRXZCLG9DQUlFOzs7OztJQUVVLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFBhcmFtZXRlcnMge1xuICBpZD86IGFueTtcbiAga2V5Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybicgfCAnaW5mbyc7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgdGltZU91dD86IG51bWJlcjtcbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgZGF0YT86IGFueTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGVmYXVsdFBhcmFtOiBNZXNzYWdlID0ge1xuICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgbGlmZTogNTAwMCxcbiAgICBjbG9zYWJsZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgc2hvdyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuZm9ybWF0Q29uZmlnKHRvYXN0UGFyYW0pO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHBhcmFtKTtcbiAgfVxuXG4gIHNob3dNdWx0aXBsZSh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnNbXSk6IHZvaWQge1xuICAgIGlmICghdG9hc3RQYXJhbSB8fCB0b2FzdFBhcmFtICYmICF0b2FzdFBhcmFtLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZVtdID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRvYXN0UGFyYW0pIHtcbiAgICAgIHBhcmFtLnB1c2godGhpcy5mb3JtYXRDb25maWcoaXRlbSkpO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZEFsbChwYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdENvbmZpZyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiBNZXNzYWdlIHtcbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFBhcmFtKTtcblxuICAgIGNvbnN0IHsgaWQsIGtleSwgdGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGNsb3NlQnV0dG9uLCB0aW1lT3V0LCBzdGlja3ksIGRhdGEgfSA9IHRvYXN0UGFyYW07XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIHBhcmFtLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyYW0ua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgcGFyYW0uc3VtbWFyeSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBwYXJhbS5kZXRhaWwgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGlmICh0eXBlKSB7XG4gICAgICBwYXJhbS5zZXZlcml0eSA9IHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQnV0dG9uKSB7XG4gICAgICBwYXJhbS5jbG9zYWJsZSA9IGNsb3NlQnV0dG9uO1xuICAgIH1cblxuICAgIGlmICh0aW1lT3V0KSB7XG4gICAgICBwYXJhbS5saWZlID0gdGltZU91dDtcbiAgICB9XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBwYXJhbS5zdGlja3kgPSBzdGlja3k7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHBhcmFtLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbTtcbiAgfVxufVxuIl19