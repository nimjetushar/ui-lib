import { __values } from "tslib";
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
    ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(i0.ɵɵinject(i1.MessageService)); };
    ToastService.ɵprov = i0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
    return ToastService;
}());
export { ToastService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBVyxNQUFNLGFBQWEsQ0FBQzs7O0FBY3REO0lBUUUsc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxpQkFBWSxHQUFZO1lBQzlCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUVvRCxDQUFDO0lBRXZELDJCQUFJLEdBQUosVUFBSyxVQUEyQjtRQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsVUFBNkI7O1FBQ3hDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNoRSxJQUFNLEtBQUssR0FBYyxFQUFFLENBQUM7O1lBQzVCLEtBQW1CLElBQUEsZUFBQSxTQUFBLFVBQVUsQ0FBQSxzQ0FBQSw4REFBRTtnQkFBMUIsSUFBTSxJQUFJLHVCQUFBO2dCQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsVUFBMkI7UUFDOUMsSUFBTSxLQUFLLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXBELElBQUEsa0JBQUUsRUFBRSxvQkFBRyxFQUFFLHdCQUFLLEVBQUUsNEJBQU8sRUFBRSxzQkFBSSxFQUFFLG9DQUFXLEVBQUUsNEJBQU8sRUFBRSwwQkFBTSxFQUFFLHNCQUFJLENBQWdCO1FBRXpGLElBQUksRUFBRSxFQUFFO1lBQ04sS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1AsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzRFQWpFVSxZQUFZO3dEQUFaLFlBQVksV0FBWixZQUFZLG1CQURDLE1BQU07dUJBZmhDO0NBa0ZDLEFBbkVELElBbUVDO1NBbEVZLFlBQVk7a0RBQVosWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSwgTWVzc2FnZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RQYXJhbWV0ZXJzIHtcclxuICBpZD86IGFueTtcclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcclxuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgdGltZU91dD86IG51bWJlcjtcclxuICBzdGlja3k/OiBib29sZWFuO1xyXG4gIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRQYXJhbTogTWVzc2FnZSA9IHtcclxuICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXHJcbiAgICBsaWZlOiA0MDAwXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBzaG93KHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmZvcm1hdENvbmZpZyh0b2FzdFBhcmFtKTtcclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHBhcmFtKTtcclxuICB9XHJcblxyXG4gIHNob3dNdWx0aXBsZSh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnNbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0b2FzdFBhcmFtIHx8IHRvYXN0UGFyYW0gJiYgIXRvYXN0UGFyYW0ubGVuZ3RoKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2VbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRvYXN0UGFyYW0pIHtcclxuICAgICAgcGFyYW0ucHVzaCh0aGlzLmZvcm1hdENvbmZpZyhpdGVtKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZEFsbChwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdENvbmZpZyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiBNZXNzYWdlIHtcclxuICAgIGNvbnN0IHBhcmFtOiBNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UGFyYW0pO1xyXG5cclxuICAgIGNvbnN0IHsgaWQsIGtleSwgdGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGNsb3NlQnV0dG9uLCB0aW1lT3V0LCBzdGlja3ksIGRhdGEgfSA9IHRvYXN0UGFyYW07XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHBhcmFtLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleSkge1xyXG4gICAgICBwYXJhbS5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgIHBhcmFtLnN1bW1hcnkgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBwYXJhbS5kZXRhaWwgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIHBhcmFtLnNldmVyaXR5ID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgcGFyYW0uY2xvc2FibGUgPSBjbG9zZUJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGltZU91dCkge1xyXG4gICAgICBwYXJhbS5saWZlID0gdGltZU91dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RpY2t5KSB7XHJcbiAgICAgIHBhcmFtLnN0aWNreSA9IHN0aWNreTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBwYXJhbS5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyYW07XHJcbiAgfVxyXG59XHJcbiJdfQ==