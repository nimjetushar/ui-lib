/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.sideBarToggled = new EventEmitter();
        this.logoClickEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.handleSidebarToggle = /**
     * @return {?}
     */
    function () {
        this.sideBarToggled.emit(true);
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.onLogoClick = /**
     * @return {?}
     */
    function () {
        this.logoClickEmitter.emit();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 't-header',
                    template: "<div class=\"main-container-header\">\n\n  <div class=\"content\">\n\n    <div id=\"menu-icon-container\" class=\"sidebar-toggle\" (click)=\"handleSidebarToggle()\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n\n    <div id=\"logo-container\" class=\"logo-container\">\n\n      <div *ngIf=\"logoSrc\" class=\"logo\" (click)=\"onLogoClick()\">\n        <img [src]=\"logoSrc\" />\n      </div>\n\n      <div class=\"title-container\">\n        <span class=\"title\" [routerLink]=\"routeLink\">{{title}}</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                    styles: [".main-container-header{position:absolute;left:0;right:0;height:4.5rem;overflow:hidden;background-color:#000;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;z-index:10;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.main-container-header>:not(:last-child){margin-right:0}.main-container-header .content{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;margin-right:.3125rem}.main-container-header .content>:not(:last-child){margin-right:0}.main-container-header .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}.main-container-header .sidebar-toggle i.fa-bars{font-size:2.1875rem;color:#fff}.main-container-header .logo-container{cursor:pointer;padding-left:2rem;display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container>:not(:last-child){margin-bottom:0}.main-container-header .logo-container .logo{position:relative;padding-right:.3125rem;display:inline-block}.main-container-header .logo-container .logo img{height:1.28875rem;width:3.25rem}.main-container-header .logo-container .title-container{display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container .title-container>:not(:last-child){margin-right:.625rem}.main-container-header .logo-container .title-container .title{color:#fff;font-weight:500;font-size:1.625rem;letter-spacing:.0625rem;text-transform:uppercase}"]
                }] }
    ];
    HeaderComponent.propDecorators = {
        title: [{ type: Input }],
        logoSrc: [{ type: Input }],
        routeLink: [{ type: Input }],
        sideBarToggled: [{ type: Output }],
        logoClickEmitter: [{ type: Output }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.title;
    /** @type {?} */
    HeaderComponent.prototype.logoSrc;
    /** @type {?} */
    HeaderComponent.prototype.routeLink;
    /** @type {?} */
    HeaderComponent.prototype.sideBarToggled;
    /** @type {?} */
    HeaderComponent.prototype.logoClickEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUFBO1FBVVksbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxxQkFBZ0IsR0FBNEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVUzRSxDQUFDOzs7O0lBUEMsNkNBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDRqQkFBc0M7O2lCQUV2Qzs7O3dCQUVFLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUVMLE1BQU07bUNBQ04sTUFBTTs7SUFVVCxzQkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLGVBQWU7OztJQUMxQixnQ0FBdUI7O0lBQ3ZCLGtDQUF5Qjs7SUFDekIsb0NBQTJCOztJQUUzQix5Q0FBcUU7O0lBQ3JFLDJDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29TcmM6IHN0cmluZztcbiAgQElucHV0KCkgcm91dGVMaW5rOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHNpZGVCYXJUb2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2dvQ2xpY2tFbWl0dGVyOiBFdmVudEVtaXR0ZXI8dW5kZWZpbmVkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGhhbmRsZVNpZGViYXJUb2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaWRlQmFyVG9nZ2xlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgb25Mb2dvQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2dvQ2xpY2tFbWl0dGVyLmVtaXQoKTtcbiAgfVxufVxuIl19