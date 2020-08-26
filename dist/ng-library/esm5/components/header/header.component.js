import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function HeaderComponent_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r73); var ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.onLogoClick(); });
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r71 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r71.logoSrc, i0.ɵɵsanitizeUrl);
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.sideBarToggled = new EventEmitter();
        this.logoClickEmitter = new EventEmitter();
    }
    HeaderComponent.prototype.handleSidebarToggle = function () {
        this.sideBarToggled.emit(true);
    };
    HeaderComponent.prototype.onLogoClick = function () {
        this.logoClickEmitter.emit();
    };
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
    return HeaderComponent;
}());
export { HeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDVWpFLDhCQUNFO0lBRGdDLGtMQUF1QjtJQUN2RCx5QkFDRjtJQUFBLGlCQUFNOzs7SUFEQyxlQUFlO0lBQWYsdURBQWU7O0FEVDVCO0lBQUE7UUFVWSxtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELHFCQUFnQixHQUE0QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBUzFFO0lBUEMsNkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztrRkFkVSxlQUFlO3dEQUFmLGVBQWU7WUNQNUIsOEJBRUU7WUFBQSw4QkFFRTtZQUFBLDhCQUNFO1lBRG1ELHlGQUFTLHlCQUFxQixJQUFDO1lBQ2xGLHVCQUEwQjtZQUM1QixpQkFBTTtZQUVOLDhCQUVFO1lBQUEsZ0VBQ0U7WUFHRiw4QkFDRTtZQUFBLCtCQUE2QztZQUFBLFlBQVM7WUFBQSxpQkFBTztZQUMvRCxpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07WUFFUixpQkFBTTs7WUFWSyxlQUFlO1lBQWYsa0NBQWU7WUFLRSxlQUF3QjtZQUF4QiwwQ0FBd0I7WUFBQyxlQUFTO1lBQVQsK0JBQVM7OzBCRGY5RDtDQXNCQyxBQXBCRCxJQW9CQztTQWZZLGVBQWU7a0RBQWYsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbG9nb1NyYzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZUxpbms6IHN0cmluZztcblxuICBAT3V0cHV0KCkgc2lkZUJhclRvZ2dsZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvZ29DbGlja0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjx1bmRlZmluZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhhbmRsZVNpZGViYXJUb2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaWRlQmFyVG9nZ2xlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgb25Mb2dvQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2dvQ2xpY2tFbWl0dGVyLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW4tY29udGFpbmVyLWhlYWRlclwiPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cbiAgICA8ZGl2IGlkPVwibWVudS1pY29uLWNvbnRhaW5lclwiIGNsYXNzPVwic2lkZWJhci10b2dnbGVcIiAoY2xpY2spPVwiaGFuZGxlU2lkZWJhclRvZ2dsZSgpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwibG9nby1jb250YWluZXJcIiBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJsb2dvU3JjXCIgY2xhc3M9XCJsb2dvXCIgKGNsaWNrKT1cIm9uTG9nb0NsaWNrKClcIj5cbiAgICAgICAgPGltZyBbc3JjXT1cImxvZ29TcmNcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiIFtyb3V0ZXJMaW5rXT1cInJvdXRlTGlua1wiPnt7dGl0bGV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=