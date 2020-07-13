import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
let ToastService = class ToastService {
    constructor(messageService) {
        this.messageService = messageService;
        this.defaultParam = {
            severity: 'success',
            life: 4000
        };
    }
    show(toastParam) {
        const param = this.formatConfig(toastParam);
        this.messageService.add(param);
    }
    showMultiple(toastParam) {
        if (!toastParam || toastParam && !toastParam.length) {
            return;
        }
        const param = [];
        for (const item of toastParam) {
            param.push(this.formatConfig(item));
        }
        this.messageService.addAll(param);
    }
    formatConfig(toastParam) {
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
};
ToastService.ctorParameters = () => [
    { type: MessageService }
];
ToastService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.MessageService)); }, token: ToastService, providedIn: "root" });
ToastService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [MessageService])
], ToastService);
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBZ0I3QyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBT3ZCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxpQkFBWSxHQUFZO1lBQzlCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUVvRCxDQUFDO0lBRXZELElBQUksQ0FBQyxVQUEyQjtRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsVUFBNkI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hFLE1BQU0sS0FBSyxHQUFjLEVBQUUsQ0FBQztRQUM1QixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxZQUFZLENBQUMsVUFBMkI7UUFDOUMsTUFBTSxLQUFLLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTVELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUV6RixJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7O1lBM0RxQyxjQUFjOzs7QUFQdkMsWUFBWTtJQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7cUNBUUcsY0FBYztHQVB2QyxZQUFZLENBa0V4QjtTQWxFWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RQYXJhbWV0ZXJzIHtcclxuICBpZD86IGFueTtcclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcclxuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgdGltZU91dD86IG51bWJlcjtcclxuICBzdGlja3k/OiBib29sZWFuO1xyXG4gIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRQYXJhbTogTWVzc2FnZSA9IHtcclxuICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXHJcbiAgICBsaWZlOiA0MDAwXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxyXG5cclxuICBzaG93KHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmZvcm1hdENvbmZpZyh0b2FzdFBhcmFtKTtcclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHBhcmFtKTtcclxuICB9XHJcblxyXG4gIHNob3dNdWx0aXBsZSh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnNbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0b2FzdFBhcmFtIHx8IHRvYXN0UGFyYW0gJiYgIXRvYXN0UGFyYW0ubGVuZ3RoKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2VbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRvYXN0UGFyYW0pIHtcclxuICAgICAgcGFyYW0ucHVzaCh0aGlzLmZvcm1hdENvbmZpZyhpdGVtKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZEFsbChwYXJhbSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdENvbmZpZyh0b2FzdFBhcmFtOiBUb2FzdFBhcmFtZXRlcnMpOiBNZXNzYWdlIHtcclxuICAgIGNvbnN0IHBhcmFtOiBNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UGFyYW0pO1xyXG5cclxuICAgIGNvbnN0IHsgaWQsIGtleSwgdGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGNsb3NlQnV0dG9uLCB0aW1lT3V0LCBzdGlja3ksIGRhdGEgfSA9IHRvYXN0UGFyYW07XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHBhcmFtLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleSkge1xyXG4gICAgICBwYXJhbS5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgIHBhcmFtLnN1bW1hcnkgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBwYXJhbS5kZXRhaWwgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIHBhcmFtLnNldmVyaXR5ID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgcGFyYW0uY2xvc2FibGUgPSBjbG9zZUJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGltZU91dCkge1xyXG4gICAgICBwYXJhbS5saWZlID0gdGltZU91dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RpY2t5KSB7XHJcbiAgICAgIHBhcmFtLnN0aWNreSA9IHN0aWNreTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBwYXJhbS5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyYW07XHJcbiAgfVxyXG59XHJcbiJdfQ==