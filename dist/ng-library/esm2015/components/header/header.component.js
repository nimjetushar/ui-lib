import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function HeaderComponent_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onLogoClick(); });
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r14.logoSrc, i0.ɵɵsanitizeUrl);
} }
export class HeaderComponent {
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
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["t-header"]], inputs: { title: "title", logoSrc: "logoSrc", routeLink: "routeLink" }, outputs: { sideBarToggled: "sideBarToggled", logoClickEmitter: "logoClickEmitter" }, decls: 9, vars: 3, consts: [[1, "main-container-header"], [1, "content"], ["id", "menu-icon-container", 1, "sidebar-toggle", 3, "click"], [1, "fa", "fa-bars"], ["id", "logo-container", 1, "logo-container"], ["class", "logo", 3, "click", 4, "ngIf"], [1, "title-container"], [1, "title", 3, "routerLink"], [1, "logo", 3, "click"], [3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.handleSidebarToggle(); });
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, HeaderComponent_div_5_Template, 2, 1, "div", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.logoSrc);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", ctx.routeLink);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, directives: [i1.NgIf, i2.RouterLink], styles: [".main-container-header[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:4.5rem;overflow:hidden;background-color:#000;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;z-index:10;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.main-container-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}.main-container-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;margin-right:.3125rem}.main-container-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}.main-container-header[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}.main-container-header[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   i.fa-bars[_ngcontent-%COMP%]{font-size:2.1875rem;color:#fff}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{cursor:pointer;padding-left:2rem;display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;padding-right:.3125rem;display:inline-block}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.28875rem;width:3.25rem}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:1.625rem;letter-spacing:.0625rem;text-transform:uppercase}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 't-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, { title: [{
            type: Input
        }], logoSrc: [{
            type: Input
        }], routeLink: [{
            type: Input
        }], sideBarToggled: [{
            type: Output
        }], logoClickEmitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDVWpFLDhCQUNFO0lBRGdDLG9MQUF1QjtJQUN2RCx5QkFDRjtJQUFBLGlCQUFNOzs7SUFEQyxlQUFlO0lBQWYsdURBQWU7O0FESjVCLE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBVVksbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxxQkFBZ0IsR0FBNEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVMxRTtJQVBDLG1CQUFtQjtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs4RUFkVSxlQUFlO29EQUFmLGVBQWU7UUNQNUIsOEJBRUU7UUFBQSw4QkFFRTtRQUFBLDhCQUNFO1FBRG1ELHlGQUFTLHlCQUFxQixJQUFDO1FBQ2xGLHVCQUEwQjtRQUM1QixpQkFBTTtRQUVOLDhCQUVFO1FBQUEsZ0VBQ0U7UUFHRiw4QkFDRTtRQUFBLCtCQUE2QztRQUFBLFlBQVM7UUFBQSxpQkFBTztRQUMvRCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07UUFFUixpQkFBTTs7UUFWSyxlQUFlO1FBQWYsa0NBQWU7UUFLRSxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFBQyxlQUFTO1FBQVQsK0JBQVM7O2tERFJqRCxlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdXRlTGluazogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzaWRlQmFyVG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9nb0NsaWNrRW1pdHRlcjogRXZlbnRFbWl0dGVyPHVuZGVmaW5lZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaGFuZGxlU2lkZWJhclRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGVCYXJUb2dnbGVkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkxvZ29DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ29DbGlja0VtaXR0ZXIuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXItaGVhZGVyXCI+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgIDxkaXYgaWQ9XCJtZW51LWljb24tY29udGFpbmVyXCIgY2xhc3M9XCJzaWRlYmFyLXRvZ2dsZVwiIChjbGljayk9XCJoYW5kbGVTaWRlYmFyVG9nZ2xlKClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQ9XCJsb2dvLWNvbnRhaW5lclwiIGNsYXNzPVwibG9nby1jb250YWluZXJcIj5cblxuICAgICAgPGRpdiAqbmdJZj1cImxvZ29TcmNcIiBjbGFzcz1cImxvZ29cIiAoY2xpY2spPVwib25Mb2dvQ2xpY2soKVwiPlxuICAgICAgICA8aW1nIFtzcmNdPVwibG9nb1NyY1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCIgW3JvdXRlckxpbmtdPVwicm91dGVMaW5rXCI+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==