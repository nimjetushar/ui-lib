import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
export class ToastService {
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
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(i0.ɵɵinject(i1.MessageService)); };
ToastService.ɵprov = i0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFXLE1BQU0sYUFBYSxDQUFDOzs7QUFldEQsTUFBTSxPQUFPLFlBQVk7SUFPdkIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTDFDLGlCQUFZLEdBQVk7WUFDOUIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBRW9ELENBQUM7SUFFdkQsSUFBSSxDQUFDLFVBQTJCO1FBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksQ0FBQyxVQUE2QjtRQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDaEUsTUFBTSxLQUFLLEdBQWMsRUFBRSxDQUFDO1FBQzVCLEtBQUssTUFBTSxJQUFJLElBQUksVUFBVSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLFlBQVksQ0FBQyxVQUEyQjtRQUM5QyxNQUFNLEtBQUssR0FBWSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUQsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBRXpGLElBQUksRUFBRSxFQUFFO1lBQ04sS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1AsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt3RUFqRVUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFEQyxNQUFNO2tEQUNuQixZQUFZO2NBRHhCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFBhcmFtZXRlcnMge1xyXG4gIGlkPzogYW55O1xyXG4gIGtleT86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIHR5cGU/OiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm4nIHwgJ2luZm8nO1xyXG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcclxuICB0aW1lT3V0PzogbnVtYmVyO1xyXG4gIHN0aWNreT86IGJvb2xlYW47XHJcbiAgZGF0YT86IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFBhcmFtOiBNZXNzYWdlID0ge1xyXG4gICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIHNob3codG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuZm9ybWF0Q29uZmlnKHRvYXN0UGFyYW0pO1xyXG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQocGFyYW0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd011bHRpcGxlKHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVyc1tdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRvYXN0UGFyYW0gfHwgdG9hc3RQYXJhbSAmJiAhdG9hc3RQYXJhbS5sZW5ndGgpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBwYXJhbTogTWVzc2FnZVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9hc3RQYXJhbSkge1xyXG4gICAgICBwYXJhbS5wdXNoKHRoaXMuZm9ybWF0Q29uZmlnKGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkQWxsKHBhcmFtKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0Q29uZmlnKHRvYXN0UGFyYW06IFRvYXN0UGFyYW1ldGVycyk6IE1lc3NhZ2Uge1xyXG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQYXJhbSk7XHJcblxyXG4gICAgY29uc3QgeyBpZCwga2V5LCB0aXRsZSwgbWVzc2FnZSwgdHlwZSwgY2xvc2VCdXR0b24sIHRpbWVPdXQsIHN0aWNreSwgZGF0YSB9ID0gdG9hc3RQYXJhbTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgcGFyYW0uaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoa2V5KSB7XHJcbiAgICAgIHBhcmFtLmtleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgcGFyYW0uc3VtbWFyeSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgIHBhcmFtLmRldGFpbCA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgcGFyYW0uc2V2ZXJpdHkgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZUJ1dHRvbikge1xyXG4gICAgICBwYXJhbS5jbG9zYWJsZSA9IGNsb3NlQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aW1lT3V0KSB7XHJcbiAgICAgIHBhcmFtLmxpZmUgPSB0aW1lT3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGlja3kpIHtcclxuICAgICAgcGFyYW0uc3RpY2t5ID0gc3RpY2t5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHBhcmFtLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJhbTtcclxuICB9XHJcbn1cclxuIl19