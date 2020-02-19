/**
 * @fileoverview added by tsickle
 * Generated from: services/toast.service.ts
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
            life: 4000
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7OztBQUcxRSxxQ0FVQzs7O0lBVEMsNkJBQVM7O0lBQ1QsOEJBQWE7O0lBQ2IsZ0NBQWU7O0lBQ2Ysa0NBQWlCOztJQUNqQiwrQkFBNkM7O0lBQzdDLHNDQUFzQjs7SUFDdEIsa0NBQWlCOztJQUNqQixpQ0FBaUI7O0lBQ2pCLCtCQUFXOztBQUdiO0lBUUUsc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxpQkFBWSxHQUFZO1lBQzlCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUVvRCxDQUFDOzs7OztJQUV2RCwyQkFBSTs7OztJQUFKLFVBQUssVUFBMkI7O1lBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxVQUE2Qjs7UUFDeEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUMxRCxLQUFLLEdBQWMsRUFBRTs7WUFDM0IsS0FBbUIsSUFBQSxlQUFBLGlCQUFBLFVBQVUsQ0FBQSxzQ0FBQSw4REFBRTtnQkFBMUIsSUFBTSxJQUFJLHVCQUFBO2dCQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFTyxtQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsVUFBMkI7O1lBQ3hDLEtBQUssR0FBWSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRW5ELElBQUEsa0JBQUUsRUFBRSxvQkFBRyxFQUFFLHdCQUFLLEVBQUUsNEJBQU8sRUFBRSxzQkFBSSxFQUFFLG9DQUFXLEVBQUUsNEJBQU8sRUFBRSwwQkFBTSxFQUFFLHNCQUFJO1FBRXpFLElBQUksRUFBRSxFQUFFO1lBQ04sS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1AsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFsRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFmekIsY0FBYzs7O3VCQUR2QjtDQW1GQyxBQW5FRCxJQW1FQztTQWxFWSxZQUFZOzs7Ozs7SUFFdkIsb0NBR0U7Ozs7O0lBRVUsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2VzZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UGFyYW1ldGVycyB7XG4gIGlkPzogYW55O1xuICBrZXk/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICB0aW1lT3V0PzogbnVtYmVyO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBkYXRhPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UGFyYW06IE1lc3NhZ2UgPSB7XG4gICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICBsaWZlOiA0MDAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIHNob3codG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmZvcm1hdENvbmZpZyh0b2FzdFBhcmFtKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChwYXJhbSk7XG4gIH1cblxuICBzaG93TXVsdGlwbGUodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzW10pOiB2b2lkIHtcbiAgICBpZiAoIXRvYXN0UGFyYW0gfHwgdG9hc3RQYXJhbSAmJiAhdG9hc3RQYXJhbS5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2VbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b2FzdFBhcmFtKSB7XG4gICAgICBwYXJhbS5wdXNoKHRoaXMuZm9ybWF0Q29uZmlnKGl0ZW0pKTtcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRBbGwocGFyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDb25maWcodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogTWVzc2FnZSB7XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQYXJhbSk7XG5cbiAgICBjb25zdCB7IGlkLCBrZXksIHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBjbG9zZUJ1dHRvbiwgdGltZU91dCwgc3RpY2t5LCBkYXRhIH0gPSB0b2FzdFBhcmFtO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBwYXJhbS5pZCA9IGlkO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHBhcmFtLnN1bW1hcnkgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcGFyYW0uZGV0YWlsID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgcGFyYW0uc2V2ZXJpdHkgPSB0eXBlO1xuICAgIH1cblxuICAgIGlmIChjbG9zZUJ1dHRvbikge1xuICAgICAgcGFyYW0uY2xvc2FibGUgPSBjbG9zZUJ1dHRvbjtcbiAgICB9XG5cbiAgICBpZiAodGltZU91dCkge1xuICAgICAgcGFyYW0ubGlmZSA9IHRpbWVPdXQ7XG4gICAgfVxuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgcGFyYW0uc3RpY2t5ID0gc3RpY2t5O1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBwYXJhbS5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cbn1cbiJdfQ==