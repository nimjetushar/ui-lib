import { __decorate, __metadata, __values } from "tslib";
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBZ0I3QztJQU9FLHNCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMMUMsaUJBQVksR0FBWTtZQUM5QixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFFb0QsQ0FBQztJQUV2RCwyQkFBSSxHQUFKLFVBQUssVUFBMkI7UUFDOUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFVBQTZCOztRQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEUsSUFBTSxLQUFLLEdBQWMsRUFBRSxDQUFDOztZQUM1QixLQUFtQixJQUFBLGVBQUEsU0FBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7Z0JBQTFCLElBQU0sSUFBSSx1QkFBQTtnQkFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyQzs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLFVBQTJCO1FBQzlDLElBQU0sS0FBSyxHQUFZLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRCxJQUFBLGtCQUFFLEVBQUUsb0JBQUcsRUFBRSx3QkFBSyxFQUFFLDRCQUFPLEVBQUUsc0JBQUksRUFBRSxvQ0FBVyxFQUFFLDRCQUFPLEVBQUUsMEJBQU0sRUFBRSxzQkFBSSxDQUFnQjtRQUV6RixJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMURtQyxjQUFjOzs7SUFQdkMsWUFBWTtRQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBUUcsY0FBYztPQVB2QyxZQUFZLENBa0V4Qjt1QkFuRkQ7Q0FtRkMsQUFsRUQsSUFrRUM7U0FsRVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFBhcmFtZXRlcnMge1xuICBpZD86IGFueTtcbiAga2V5Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybicgfCAnaW5mbyc7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgdGltZU91dD86IG51bWJlcjtcbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgZGF0YT86IGFueTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGVmYXVsdFBhcmFtOiBNZXNzYWdlID0ge1xuICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgbGlmZTogNDAwMFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cblxuICBzaG93KHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVycyk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5mb3JtYXRDb25maWcodG9hc3RQYXJhbSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQocGFyYW0pO1xuICB9XG5cbiAgc2hvd011bHRpcGxlKHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVyc1tdKTogdm9pZCB7XG4gICAgaWYgKCF0b2FzdFBhcmFtIHx8IHRvYXN0UGFyYW0gJiYgIXRvYXN0UGFyYW0ubGVuZ3RoKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IHBhcmFtOiBNZXNzYWdlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9hc3RQYXJhbSkge1xuICAgICAgcGFyYW0ucHVzaCh0aGlzLmZvcm1hdENvbmZpZyhpdGVtKSk7XG4gICAgfVxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkQWxsKHBhcmFtKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Q29uZmlnKHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVycyk6IE1lc3NhZ2Uge1xuICAgIGNvbnN0IHBhcmFtOiBNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UGFyYW0pO1xuXG4gICAgY29uc3QgeyBpZCwga2V5LCB0aXRsZSwgbWVzc2FnZSwgdHlwZSwgY2xvc2VCdXR0b24sIHRpbWVPdXQsIHN0aWNreSwgZGF0YSB9ID0gdG9hc3RQYXJhbTtcblxuICAgIGlmIChpZCkge1xuICAgICAgcGFyYW0uaWQgPSBpZDtcbiAgICB9XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBwYXJhbS5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBwYXJhbS5zdW1tYXJ5ID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHBhcmFtLmRldGFpbCA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHBhcmFtLnNldmVyaXR5ID0gdHlwZTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VCdXR0b24pIHtcbiAgICAgIHBhcmFtLmNsb3NhYmxlID0gY2xvc2VCdXR0b247XG4gICAgfVxuXG4gICAgaWYgKHRpbWVPdXQpIHtcbiAgICAgIHBhcmFtLmxpZmUgPSB0aW1lT3V0O1xuICAgIH1cblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIHBhcmFtLnN0aWNreSA9IHN0aWNreTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgcGFyYW0uZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtO1xuICB9XG59XG4iXX0=