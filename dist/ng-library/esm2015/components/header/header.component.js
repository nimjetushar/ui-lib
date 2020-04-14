import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sideBarToggled = new EventEmitter();
        this.logoClickEmitter = new EventEmitter();
    }
    handleSidebarToggle() {
        this.sideBarToggled.emit(true);
    }
    onLogoClick() {
        this.logoClickEmitter.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "logoSrc", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "routeLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HeaderComponent.prototype, "sideBarToggled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HeaderComponent.prototype, "logoClickEmitter", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 't-header',
        template: "<div class=\"main-container-header\">\n\n  <div class=\"content\">\n\n    <div id=\"menu-icon-container\" class=\"sidebar-toggle\" (click)=\"handleSidebarToggle()\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n\n    <div id=\"logo-container\" class=\"logo-container\">\n\n      <div *ngIf=\"logoSrc\" class=\"logo\" (click)=\"onLogoClick()\">\n        <img [src]=\"logoSrc\" />\n      </div>\n\n      <div class=\"title-container\">\n        <span class=\"title\" [routerLink]=\"routeLink\">{{title}}</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
        styles: [".main-container-header{position:absolute;left:0;right:0;height:4.5rem;overflow:hidden;background-color:#000;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;z-index:10;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.main-container-header>:not(:last-child){margin-right:0}.main-container-header .content{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;margin-right:.3125rem}.main-container-header .content>:not(:last-child){margin-right:0}.main-container-header .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}.main-container-header .sidebar-toggle i.fa-bars{font-size:2.1875rem;color:#fff}.main-container-header .logo-container{cursor:pointer;padding-left:2rem;display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container>:not(:last-child){margin-bottom:0}.main-container-header .logo-container .logo{position:relative;padding-right:.3125rem;display:inline-block}.main-container-header .logo-container .logo img{height:1.28875rem;width:3.25rem}.main-container-header .logo-container .title-container{display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container .title-container>:not(:last-child){margin-right:.625rem}.main-container-header .logo-container .title-container .title{color:#fff;font-weight:500;font-size:1.625rem;letter-spacing:.0625rem;text-transform:uppercase}"]
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUE1QjtRQUtZLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QscUJBQWdCLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0UsQ0FBQztJQVBDLG1CQUFtQjtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTtBQWZVO0lBQVIsS0FBSyxFQUFFOzs4Q0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOztnREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7O2tEQUFtQjtBQUVqQjtJQUFULE1BQU0sRUFBRTs4QkFBaUIsWUFBWTt1REFBK0I7QUFDM0Q7SUFBVCxNQUFNLEVBQUU7OEJBQW1CLFlBQVk7eURBQWlDO0FBTjlELGVBQWU7SUFMM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsNGpCQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGVBQWUsQ0FnQjNCO1NBaEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdXRlTGluazogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzaWRlQmFyVG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9nb0NsaWNrRW1pdHRlcjogRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBoYW5kbGVTaWRlYmFyVG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZUJhclRvZ2dsZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9uTG9nb0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMubG9nb0NsaWNrRW1pdHRlci5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==