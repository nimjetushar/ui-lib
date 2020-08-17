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
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(i0.ɵɵinject(i1.HttpClient)); };
    HttpService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
    return HttpService;
}());
export { HttpService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsic2VydmljZXMvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSS9EO0lBT0UscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDN0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsR0FBVyxFQUFFLE1BQVk7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsTUFBVztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRSxJQUFTO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLEdBQVcsRUFBRSxJQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzBFQXhCVSxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07c0JBTnBCO0NBaUNDLEFBNUJELElBNEJDO1NBekJZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XG5cbiAgaGVhZGVyOiBIdHRwSGVhZGVycztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGRlbGV0ZVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyLCBwYXJhbXMgfSk7XG4gIH1cblxuICBnZXRSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyLCBwYXJhbXMgfSk7XG4gIH1cblxuICBwb3N0UmVxdWVzdCh1cmw6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyIH0pO1xuICB9XG5cbiAgcHV0UmVxdWVzdCh1cmw6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXIgfSk7XG4gIH1cbn1cbiJdfQ==