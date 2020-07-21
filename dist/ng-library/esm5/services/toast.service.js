import { __decorate, __metadata, __values } from "tslib";
import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
var ToastService = /** @class */ (function () {
    function ToastService(messageService) {
        this.messageService = messageService;
        this.defaultParam = {
            severity: 'success',
            life: 4000
        };
    }
    ToastService.prototype.show = function (toastParam) {
        var param = this.formatConfig(toastParam);
        this.messageService.add(param);
    };
    ToastService.prototype.showMultiple = function (toastParam) {
        var e_1, _a;
        if (!toastParam || toastParam && !toastParam.length) {
            return;
        }
        var param = [];
        try {
            for (var toastParam_1 = __values(toastParam), toastParam_1_1 = toastParam_1.next(); !toastParam_1_1.done; toastParam_1_1 = toastParam_1.next()) {
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
    ToastService.prototype.formatConfig = function (toastParam) {
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
    ToastService.ctorParameters = function () { return [
        { type: MessageService }
    ]; };
    ToastService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.MessageService)); }, token: ToastService, providedIn: "root" });
    ToastService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [MessageService])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQWV0RDtJQU9FLHNCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMMUMsaUJBQVksR0FBWTtZQUM5QixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFFb0QsQ0FBQztJQUV2RCwyQkFBSSxHQUFKLFVBQUssVUFBMkI7UUFDOUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFVBQTZCOztRQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEUsSUFBTSxLQUFLLEdBQWMsRUFBRSxDQUFDOztZQUM1QixLQUFtQixJQUFBLGVBQUEsU0FBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7Z0JBQTFCLElBQU0sSUFBSSx1QkFBQTtnQkFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyQzs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLFVBQTJCO1FBQzlDLElBQU0sS0FBSyxHQUFZLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRCxJQUFBLGtCQUFFLEVBQUUsb0JBQUcsRUFBRSx3QkFBSyxFQUFFLDRCQUFPLEVBQUUsc0JBQUksRUFBRSxvQ0FBVyxFQUFFLDRCQUFPLEVBQUUsMEJBQU0sRUFBRSxzQkFBSSxDQUFnQjtRQUV6RixJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMURtQyxjQUFjOzs7SUFQdkMsWUFBWTtRQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBUUcsY0FBYztPQVB2QyxZQUFZLENBa0V4Qjt1QkFsRkQ7Q0FrRkMsQUFsRUQsSUFrRUM7U0FsRVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIE1lc3NhZ2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UGFyYW1ldGVycyB7XHJcbiAgaWQ/OiBhbnk7XHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybicgfCAnaW5mbyc7XHJcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xyXG4gIHRpbWVPdXQ/OiBudW1iZXI7XHJcbiAgc3RpY2t5PzogYm9vbGVhbjtcclxuICBkYXRhPzogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0UGFyYW06IE1lc3NhZ2UgPSB7XHJcbiAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxyXG4gICAgbGlmZTogNDAwMFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgc2hvdyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5mb3JtYXRDb25maWcodG9hc3RQYXJhbSk7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBzaG93TXVsdGlwbGUodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzW10pOiB2b2lkIHtcclxuICAgIGlmICghdG9hc3RQYXJhbSB8fCB0b2FzdFBhcmFtICYmICF0b2FzdFBhcmFtLmxlbmd0aCkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IHBhcmFtOiBNZXNzYWdlW10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b2FzdFBhcmFtKSB7XHJcbiAgICAgIHBhcmFtLnB1c2godGhpcy5mb3JtYXRDb25maWcoaXRlbSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRBbGwocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRDb25maWcodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogTWVzc2FnZSB7XHJcbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFBhcmFtKTtcclxuXHJcbiAgICBjb25zdCB7IGlkLCBrZXksIHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBjbG9zZUJ1dHRvbiwgdGltZU91dCwgc3RpY2t5LCBkYXRhIH0gPSB0b2FzdFBhcmFtO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICBwYXJhbS5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChrZXkpIHtcclxuICAgICAgcGFyYW0ua2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aXRsZSkge1xyXG4gICAgICBwYXJhbS5zdW1tYXJ5ID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgcGFyYW0uZGV0YWlsID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICBwYXJhbS5zZXZlcml0eSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgIHBhcmFtLmNsb3NhYmxlID0gY2xvc2VCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbWVPdXQpIHtcclxuICAgICAgcGFyYW0ubGlmZSA9IHRpbWVPdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0aWNreSkge1xyXG4gICAgICBwYXJhbS5zdGlja3kgPSBzdGlja3k7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcGFyYW0uZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmFtO1xyXG4gIH1cclxufVxyXG4iXX0=