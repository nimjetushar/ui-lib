/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class HeaderComponent {
    constructor() {
        this.sideBarToggled = new EventEmitter();
        this.logoClickEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleSidebarToggle() {
        this.sideBarToggled.emit(true);
    }
    /**
     * @return {?}
     */
    onLogoClick() {
        this.logoClickEmitter.emit();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQVVZLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QscUJBQWdCLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0UsQ0FBQzs7OztJQVBDLG1CQUFtQjtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw0akJBQXNDOzthQUV2Qzs7O29CQUVFLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUVMLE1BQU07K0JBQ04sTUFBTTs7OztJQUxQLGdDQUF1Qjs7SUFDdkIsa0NBQXlCOztJQUN6QixvQ0FBMkI7O0lBRTNCLHlDQUFxRTs7SUFDckUsMkNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbG9nb1NyYzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZUxpbms6IHN0cmluZztcblxuICBAT3V0cHV0KCkgc2lkZUJhclRvZ2dsZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvZ29DbGlja0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjx1bmRlZmluZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgaGFuZGxlU2lkZWJhclRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGVCYXJUb2dnbGVkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkxvZ29DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ29DbGlja0VtaXR0ZXIuZW1pdCgpO1xuICB9XG59XG4iXX0=