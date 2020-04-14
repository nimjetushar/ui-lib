import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        var header = new HttpHeaders()
            .set('Content-Type', 'application/json');
        this.header = header;
    }
    HttpService.prototype.deleteRequest = function (url, params) {
        return this.http.delete(url, { headers: this.header, params: params });
    };
    HttpService.prototype.getRequest = function (url, params) {
        return this.http.get(url, { headers: this.header, params: params });
    };
    HttpService.prototype.postRequest = function (url, body) {
        return this.http.post(url, body, { headers: this.header });
    };
    HttpService.prototype.putRequest = function (url, body) {
        return this.http.put(url, body, { headers: this.header });
    };
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    HttpService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsic2VydmljZXMvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU8vRDtJQUlFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO2FBQzdCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEdBQVcsRUFBRSxNQUFZO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsR0FBVyxFQUFFLE1BQVc7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxHQUFXLEVBQUUsSUFBUztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsSUFBUztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBcEJ5QixVQUFVOzs7SUFKekIsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUswQixVQUFVO09BSnpCLFdBQVcsQ0F5QnZCO3NCQWpDRDtDQWlDQyxBQXpCRCxJQXlCQztTQXpCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuXG4gIGhlYWRlcjogSHR0cEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gIH1cblxuICBkZWxldGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciwgcGFyYW1zIH0pO1xuICB9XG5cbiAgZ2V0UmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciwgcGFyYW1zIH0pO1xuICB9XG5cbiAgcG9zdFJlcXVlc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciB9KTtcbiAgfVxuXG4gIHB1dFJlcXVlc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyIH0pO1xuICB9XG59XG4iXX0=