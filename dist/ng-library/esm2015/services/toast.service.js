/**
 * @fileoverview added by tsickle
 * Generated from: services/toast.service.ts
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
            life: 4000
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7O0FBRzFFLHFDQVVDOzs7SUFUQyw2QkFBUzs7SUFDVCw4QkFBYTs7SUFDYixnQ0FBZTs7SUFDZixrQ0FBaUI7O0lBQ2pCLCtCQUE2Qzs7SUFDN0Msc0NBQXNCOztJQUN0QixrQ0FBaUI7O0lBQ2pCLGlDQUFpQjs7SUFDakIsK0JBQVc7O0FBSWIsTUFBTSxPQUFPLFlBQVk7Ozs7SUFPdkIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTDFDLGlCQUFZLEdBQVk7WUFDOUIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBRW9ELENBQUM7Ozs7O0lBRXZELElBQUksQ0FBQyxVQUEyQjs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFVBQTZCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTs7Y0FDMUQsS0FBSyxHQUFjLEVBQUU7UUFDM0IsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsVUFBMkI7O2NBQ3hDLEtBQUssR0FBWSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO2NBRXJELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxVQUFVO1FBRXhGLElBQUksRUFBRSxFQUFFO1lBQ04sS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1AsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFsRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQWZ6QixjQUFjOzs7Ozs7OztJQWtCckIsb0NBR0U7Ozs7O0lBRVUsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UGFyYW1ldGVycyB7XG4gIGlkPzogYW55O1xuICBrZXk/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICB0aW1lT3V0PzogbnVtYmVyO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBkYXRhPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UGFyYW06IE1lc3NhZ2UgPSB7XG4gICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICBsaWZlOiA0MDAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIHNob3codG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmZvcm1hdENvbmZpZyh0b2FzdFBhcmFtKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChwYXJhbSk7XG4gIH1cblxuICBzaG93TXVsdGlwbGUodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzW10pOiB2b2lkIHtcbiAgICBpZiAoIXRvYXN0UGFyYW0gfHwgdG9hc3RQYXJhbSAmJiAhdG9hc3RQYXJhbS5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2VbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b2FzdFBhcmFtKSB7XG4gICAgICBwYXJhbS5wdXNoKHRoaXMuZm9ybWF0Q29uZmlnKGl0ZW0pKTtcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRBbGwocGFyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDb25maWcodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogTWVzc2FnZSB7XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQYXJhbSk7XG5cbiAgICBjb25zdCB7IGlkLCBrZXksIHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBjbG9zZUJ1dHRvbiwgdGltZU91dCwgc3RpY2t5LCBkYXRhIH0gPSB0b2FzdFBhcmFtO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBwYXJhbS5pZCA9IGlkO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHBhcmFtLnN1bW1hcnkgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcGFyYW0uZGV0YWlsID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgcGFyYW0uc2V2ZXJpdHkgPSB0eXBlO1xuICAgIH1cblxuICAgIGlmIChjbG9zZUJ1dHRvbikge1xuICAgICAgcGFyYW0uY2xvc2FibGUgPSBjbG9zZUJ1dHRvbjtcbiAgICB9XG5cbiAgICBpZiAodGltZU91dCkge1xuICAgICAgcGFyYW0ubGlmZSA9IHRpbWVPdXQ7XG4gICAgfVxuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgcGFyYW0uc3RpY2t5ID0gc3RpY2t5O1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBwYXJhbS5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cbn1cbiJdfQ==