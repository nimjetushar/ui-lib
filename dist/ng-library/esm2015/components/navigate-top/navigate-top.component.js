import { Component, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NavigateTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NavigateTopComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.navigateToTop(); });
    i0.ɵɵelement(1, "i", 2);
    i0.ɵɵelementEnd();
} }
export class NavigateTopComponent {
    constructor() {
        this.height = 500;
    }
    scrollEvent() {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        this.enableNavigator = (top > this.height);
    }
    navigateToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
NavigateTopComponent.ɵfac = function NavigateTopComponent_Factory(t) { return new (t || NavigateTopComponent)(); };
NavigateTopComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavigateTopComponent, selectors: [["t-navigate-top"]], hostBindings: function NavigateTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function NavigateTopComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { height: "height" }, decls: 1, vars: 1, consts: [["class", "navigate-top", 3, "click", 4, "ngIf"], [1, "navigate-top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"]], template: function NavigateTopComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NavigateTopComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.enableNavigator);
    } }, directives: [i1.NgIf], styles: [".navigate-top[_ngcontent-%COMP%]{position:fixed;right:2em;bottom:10em;padding:.7em 1em;border-radius:50px;font-size:1em;background:rgba(0,0,0,.7);color:#fff;cursor:pointer}.navigate-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;top:0;transition:.3s}.navigate-top[_ngcontent-%COMP%]:hover{background:#000}.navigate-top[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{top:-7px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavigateTopComponent, [{
        type: Component,
        args: [{
                selector: 't-navigate-top',
                templateUrl: './navigate-top.component.html',
                styleUrls: ['./navigate-top.component.scss']
            }]
    }], null, { height: [{
            type: Input
        }], scrollEvent: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGUtdG9wL25hdmlnYXRlLXRvcC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25hdmlnYXRlLXRvcC9uYXZpZ2F0ZS10b3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0EvRCw4QkFDSTtJQUQ4QywyTEFBeUI7SUFDdkUsdUJBQW1EO0lBQ3ZELGlCQUFNOztBREtOLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPVyxXQUFNLEdBQVcsR0FBRyxDQUFDO0tBYS9CO0lBUkMsV0FBVztRQUNULE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzt3RkFkVSxvQkFBb0I7eURBQXBCLG9CQUFvQjttR0FBcEIsaUJBQWE7O1FDUDFCLHFFQUNJOztRQURzQiwwQ0FBdUI7O2tERE9wQyxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrQkFHRSxLQUFLOztrQkFJTCxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1uYXZpZ2F0ZS10b3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGUtdG9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGUtdG9wLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVUb3BDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gNTAwO1xuXG4gIGVuYWJsZU5hdmlnYXRvcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgc2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5lbmFibGVOYXZpZ2F0b3IgPSAodG9wID4gdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgbmF2aWdhdGVUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5hdmlnYXRlLXRvcFwiICpuZ0lmPVwiZW5hYmxlTmF2aWdhdG9yXCIgKGNsaWNrKT1cIm5hdmlnYXRlVG9Ub3AoKVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbjwvZGl2PiJdfQ==