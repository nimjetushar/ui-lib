/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ToastService {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
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
    show(toastParam) {
        /** @type {?} */
        const param = this.formatConfig(toastParam);
        this.messageService.add(param);
    }
    /**
     * @param {?} toastParam
     * @return {?}
     */
    showMultiple(toastParam) {
        if (!toastParam || toastParam && !toastParam.length) {
            return;
        }
        /** @type {?} */
        const param = [];
        for (const item of toastParam) {
            param.push(this.formatConfig(item));
        }
        this.messageService.addAll(param);
    }
    /**
     * @private
     * @param {?} toastParam
     * @return {?}
     */
    formatConfig(toastParam) {
        /** @type {?} */
        const param = Object.assign({}, this.defaultParam);
        const { id, key, title, message, type, closeButton, timeOut, sticky, data } = toastParam;
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
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: MessageService }
];
/** @nocollapse */ ToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.MessageService)); }, token: ToastService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7OztBQUcxRSxxQ0FVQzs7O0lBVEMsNkJBQVM7O0lBQ1QsOEJBQWE7O0lBQ2IsZ0NBQWU7O0lBQ2Ysa0NBQWlCOztJQUNqQiwrQkFBNkM7O0lBQzdDLHNDQUFzQjs7SUFDdEIsa0NBQWlCOztJQUNqQixpQ0FBaUI7O0lBQ2pCLCtCQUFXOztBQUliLE1BQU0sT0FBTyxZQUFZOzs7O0lBUXZCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU4xQyxpQkFBWSxHQUFZO1lBQzlCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUVvRCxDQUFDOzs7OztJQUV2RCxJQUFJLENBQUMsVUFBMkI7O2NBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxVQUE2QjtRQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7O2NBQzFELEtBQUssR0FBYyxFQUFFO1FBQzNCLEtBQUssTUFBTSxJQUFJLElBQUksVUFBVSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLFVBQTJCOztjQUN4QyxLQUFLLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztjQUVyRCxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsVUFBVTtRQUV4RixJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFmekIsY0FBYzs7Ozs7Ozs7SUFrQnJCLG9DQUlFOzs7OztJQUVVLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9tZXNzYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFBhcmFtZXRlcnMge1xuICBpZD86IGFueTtcbiAga2V5Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybicgfCAnaW5mbyc7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgdGltZU91dD86IG51bWJlcjtcbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgZGF0YT86IGFueTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGVmYXVsdFBhcmFtOiBNZXNzYWdlID0ge1xuICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgbGlmZTogNTAwMCxcbiAgICBjbG9zYWJsZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgc2hvdyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuZm9ybWF0Q29uZmlnKHRvYXN0UGFyYW0pO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHBhcmFtKTtcbiAgfVxuXG4gIHNob3dNdWx0aXBsZSh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnNbXSk6IHZvaWQge1xuICAgIGlmICghdG9hc3RQYXJhbSB8fCB0b2FzdFBhcmFtICYmICF0b2FzdFBhcmFtLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZVtdID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRvYXN0UGFyYW0pIHtcbiAgICAgIHBhcmFtLnB1c2godGhpcy5mb3JtYXRDb25maWcoaXRlbSkpO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZEFsbChwYXJhbSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdENvbmZpZyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiBNZXNzYWdlIHtcbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFBhcmFtKTtcblxuICAgIGNvbnN0IHsgaWQsIGtleSwgdGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGNsb3NlQnV0dG9uLCB0aW1lT3V0LCBzdGlja3ksIGRhdGEgfSA9IHRvYXN0UGFyYW07XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIHBhcmFtLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyYW0ua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgcGFyYW0uc3VtbWFyeSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBwYXJhbS5kZXRhaWwgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGlmICh0eXBlKSB7XG4gICAgICBwYXJhbS5zZXZlcml0eSA9IHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQnV0dG9uKSB7XG4gICAgICBwYXJhbS5jbG9zYWJsZSA9IGNsb3NlQnV0dG9uO1xuICAgIH1cblxuICAgIGlmICh0aW1lT3V0KSB7XG4gICAgICBwYXJhbS5saWZlID0gdGltZU91dDtcbiAgICB9XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBwYXJhbS5zdGlja3kgPSBzdGlja3k7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHBhcmFtLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbTtcbiAgfVxufVxuIl19