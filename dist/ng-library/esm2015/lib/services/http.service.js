/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /** @type {?} */
        const header = new HttpHeaders()
            .set('Content-Type', 'application/json');
        this.header = header;
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    deleteRequest(url, params) {
        return this.http.delete(url, { headers: this.header, params });
    }
    /**
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    getRequest(url, params) {
        return this.http.get(url, { headers: this.header, params });
    }
    /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    postRequest(url, body) {
        return this.http.post(url, body, { headers: this.header });
    }
    /**
     * @param {?} url
     * @param {?} body
     * @return {?}
     */
    putRequest(url, body) {
        return this.http.put(url, body, { headers: this.header });
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HttpService.prototype.header;
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTy9ELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXRCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7O2NBQzVCLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM3QixHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxHQUFXLEVBQUUsTUFBWTtRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVcsRUFBRSxNQUFXO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFVBQVU7Ozs7O0lBU2pCLDZCQUFvQjs7Ozs7SUFFUiwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XG5cbiAgaGVhZGVyOiBIdHRwSGVhZGVycztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGRlbGV0ZVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyLCBwYXJhbXMgfSk7XG4gIH1cblxuICBnZXRSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyLCBwYXJhbXMgfSk7XG4gIH1cblxuICBwb3N0UmVxdWVzdCh1cmw6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyIH0pO1xuICB9XG5cbiAgcHV0UmVxdWVzdCh1cmw6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXIgfSk7XG4gIH1cbn1cbiJdfQ==