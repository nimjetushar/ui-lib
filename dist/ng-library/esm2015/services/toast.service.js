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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBZ0I3QyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBT3ZCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxpQkFBWSxHQUFZO1lBQzlCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUVvRCxDQUFDO0lBRXZELElBQUksQ0FBQyxVQUEyQjtRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsVUFBNkI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hFLE1BQU0sS0FBSyxHQUFjLEVBQUUsQ0FBQztRQUM1QixLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxZQUFZLENBQUMsVUFBMkI7UUFDOUMsTUFBTSxLQUFLLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTVELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUV6RixJQUFJLEVBQUUsRUFBRTtZQUNOLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7O1lBM0RxQyxjQUFjOzs7QUFQdkMsWUFBWTtJQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7cUNBUUcsY0FBYztHQVB2QyxZQUFZLENBa0V4QjtTQWxFWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UGFyYW1ldGVycyB7XG4gIGlkPzogYW55O1xuICBrZXk/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICB0aW1lT3V0PzogbnVtYmVyO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBkYXRhPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UGFyYW06IE1lc3NhZ2UgPSB7XG4gICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICBsaWZlOiA0MDAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIHNob3codG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmZvcm1hdENvbmZpZyh0b2FzdFBhcmFtKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChwYXJhbSk7XG4gIH1cblxuICBzaG93TXVsdGlwbGUodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzW10pOiB2b2lkIHtcbiAgICBpZiAoIXRvYXN0UGFyYW0gfHwgdG9hc3RQYXJhbSAmJiAhdG9hc3RQYXJhbS5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2VbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b2FzdFBhcmFtKSB7XG4gICAgICBwYXJhbS5wdXNoKHRoaXMuZm9ybWF0Q29uZmlnKGl0ZW0pKTtcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRBbGwocGFyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDb25maWcodG9hc3RQYXJhbTogVG9hc3RQYXJhbWV0ZXJzKTogTWVzc2FnZSB7XG4gICAgY29uc3QgcGFyYW06IE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRQYXJhbSk7XG5cbiAgICBjb25zdCB7IGlkLCBrZXksIHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBjbG9zZUJ1dHRvbiwgdGltZU91dCwgc3RpY2t5LCBkYXRhIH0gPSB0b2FzdFBhcmFtO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBwYXJhbS5pZCA9IGlkO1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHBhcmFtLnN1bW1hcnkgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcGFyYW0uZGV0YWlsID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgcGFyYW0uc2V2ZXJpdHkgPSB0eXBlO1xuICAgIH1cblxuICAgIGlmIChjbG9zZUJ1dHRvbikge1xuICAgICAgcGFyYW0uY2xvc2FibGUgPSBjbG9zZUJ1dHRvbjtcbiAgICB9XG5cbiAgICBpZiAodGltZU91dCkge1xuICAgICAgcGFyYW0ubGlmZSA9IHRpbWVPdXQ7XG4gICAgfVxuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgcGFyYW0uc3RpY2t5ID0gc3RpY2t5O1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBwYXJhbS5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cbn1cbiJdfQ==