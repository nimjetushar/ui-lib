/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        /** @type {?} */
        var header = new HttpHeaders()
            .set('Content-Type', 'application/json');
        this.header = header;
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    HttpService.prototype.deleteRequest = /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    function (url, params) {
        return this.http.delete(url, { headers: this.header, params: params });
    };
    /**
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    HttpService.prototype.getRequest = /**
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    function (url, params) {
        return this.http.get(url, { headers: this.header, params: params });
    };
    /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    HttpService.prototype.postRequest = /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    function (url, body) {
        return this.http.post(url, body, { headers: this.header });
    };
    /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    HttpService.prototype.putRequest = /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    function (url, body) {
        return this.http.put(url, body, { headers: this.header });
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());
export { HttpService };
if (false) {
    /** @type {?} */
    HttpService.prototype.header;
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSS9EO0lBT0UscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7O1lBQzVCLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM3QixHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELG1DQUFhOzs7OztJQUFiLFVBQWMsR0FBVyxFQUFFLE1BQVk7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsZ0NBQVU7Ozs7O0lBQVYsVUFBVyxHQUFXLEVBQUUsTUFBVztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxpQ0FBVzs7Ozs7SUFBWCxVQUFZLEdBQVcsRUFBRSxJQUFTO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxnQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxJQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkEzQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxVQUFVOzs7c0JBRG5CO0NBaUNDLEFBNUJELElBNEJDO1NBekJZLFdBQVc7OztJQUV0Qiw2QkFBb0I7Ozs7O0lBRVIsMkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuXG4gIGhlYWRlcjogSHR0cEhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gIH1cblxuICBkZWxldGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciwgcGFyYW1zIH0pO1xuICB9XG5cbiAgZ2V0UmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciwgcGFyYW1zIH0pO1xuICB9XG5cbiAgcG9zdFJlcXVlc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlciB9KTtcbiAgfVxuXG4gIHB1dFJlcXVlc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyIH0pO1xuICB9XG59XG4iXX0=