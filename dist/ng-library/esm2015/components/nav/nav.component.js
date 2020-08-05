import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../badge/badge.component";
function NavComponent_li_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function NavComponent_li_6_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r9); const subMenuItem_r5 = ctx.$implicit; const childIdx_r6 = ctx.index; const ctx_r8 = i0.ɵɵnextContext(); const menuItem_r2 = ctx_r8.$implicit; const idx_r3 = ctx_r8.index; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onSubMenuClick(menuItem_r2, subMenuItem_r5, idx_r3, childIdx_r6); });
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subMenuItem_r5 = ctx.$implicit;
    const childIdx_r6 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", (ctx_r4.selectedMenu == null ? null : ctx_r4.selectedMenu.subMenuIdx) === childIdx_r6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", subMenuItem_r5.label, " ");
} }
function NavComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵlistener("click", function NavComponent_li_6_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11); const menuItem_r2 = ctx.$implicit; const idx_r3 = ctx.index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onMenuClick(menuItem_r2, idx_r3); });
    i0.ɵɵelement(2, "t-badge", 9);
    i0.ɵɵelementStart(3, "span", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 11);
    i0.ɵɵtemplate(6, NavComponent_li_6_li_6_Template, 4, 3, "li", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", (ctx_r0.selectedMenu == null ? null : ctx_r0.selectedMenu.idx) === idx_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("badge", menuItem_r2 == null ? null : menuItem_r2.badge);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(menuItem_r2.label);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("expanded", ctx_r0.expandedMenu === idx_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", menuItem_r2.children);
} }
function NavComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function NavComponent_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.toggleMenu(); });
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "sidebar-expanded": a0 }; };
export class NavComponent {
    constructor(_router) {
        this._router = _router;
        this.menuItems = [];
        this.sliderStatus = new EventEmitter();
        this.menuClickTrigger = new EventEmitter();
        this.selectedMenu = {};
    }
    set expanded(status) {
        document.getElementsByTagName('body')[0].style.overflow = status ? 'hidden' : 'auto';
        this._expanded = status;
    }
    get expanded() {
        return this._expanded;
    }
    ngOnInit() {
        this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route) => {
            let i = 0, k = -1;
            const curRoute = route.url, menuItemLen = this.menuItems.length, menuHighlight = (menu) => {
                if (curRoute.includes(menu.route)) {
                    this.selectedMenu = { idx: i, subMenuIdx: k };
                    this.expandedMenu = i;
                    return true;
                }
            };
            for (i = 0; i < menuItemLen; i++) {
                const menuItem = this.menuItems[i];
                if (menuItem.route && !menuItem.children) {
                    const dobreak = menuHighlight(menuItem);
                    if (dobreak) {
                        return;
                    }
                }
                if (menuItem.children) {
                    const subMenuLen = menuItem.children.length;
                    for (k = 0; k < subMenuLen; k++) {
                        const subMenu = menuItem.children[k];
                        const dobreak = menuHighlight(subMenu);
                        if (dobreak) {
                            return;
                        }
                    }
                }
            }
            this.selectedMenu = {};
            this.expandedMenu = undefined;
        });
    }
    toggleMenu() {
        this.expanded = !this.expanded;
        this.sliderStatus.emit(this.expanded);
    }
    onMenuClick(menu, index) {
        if (menu.route) {
            this.selectedMenu = { idx: index, subMenuIdx: -1 };
            this._router.navigate([menu.route]);
            this.toggleMenu();
            return;
        }
        if (this.expandedMenu === undefined || this.expandedMenu !== index) {
            this.expandedMenu = index;
            this.menuClickTrigger.emit({ isParent: true, menu });
        }
        else {
            this.expandedMenu = undefined;
        }
    }
    onSubMenuClick(menu, subMenu, index, subIdx) {
        this.selectedMenu = { idx: index, subMenuIdx: subIdx };
        if (!this.diableDefaultClick) {
            this._router.navigate([subMenu.route]);
            this.toggleMenu();
        }
        this.menuClickTrigger.emit({ isParent: false, menu, subMenu });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
NavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavComponent, selectors: [["t-nav"]], inputs: { menuItems: "menuItems", expanded: "expanded", diableDefaultClick: "diableDefaultClick" }, outputs: { sliderStatus: "sliderStatus", menuClickTrigger: "menuClickTrigger" }, decls: 8, vars: 8, consts: [["id", "main-container-sidebar", 1, "main-container-sidebar", 3, "ngClass"], [1, "header"], [1, "sidebar-toggle", 3, "click"], ["id", "sidebar-content", 1, "sidebar-content"], ["role", "menu", "id", "main-nav", 1, "main-nav"], ["role", "menuitem", "class", "list-item", 3, "selected", 4, "ngFor", "ngForOf"], ["class", "main-container-sidbar overlay", 3, "click", 4, "ngIf"], ["role", "menuitem", 1, "list-item"], [1, "menu-item", 3, "click"], [1, "badge", 3, "badge"], [1, "label"], ["role", "menu", 1, "sub-nav"], ["role", "menuitem", "class", "list-item", "tabindex", "-1", 3, "active", "click", 4, "ngFor", "ngForOf"], ["role", "menuitem", "tabindex", "-1", 1, "list-item", 3, "click"], [1, "menu-item"], [1, "main-container-sidbar", "overlay", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function NavComponent_Template_div_click_2_listener() { return ctx.toggleMenu(); });
        i0.ɵɵelement(3, "i");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "ul", 4);
        i0.ɵɵtemplate(6, NavComponent_li_6_Template, 7, 7, "li", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, NavComponent_div_7_Template, 1, 0, "div", 6);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx.expanded));
        i0.ɵɵadvance(3);
        i0.ɵɵclassMapInterpolate1("fa ", ctx.expanded ? "fa-times" : "fa-bars", "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menuItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.expanded);
    } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.BadgeComponent], styles: ["#main-container-sidebar[_ngcontent-%COMP%]{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}#main-container-sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{font-size:2.1875rem;color:#fff}#main-container-sidebar[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}#main-container-sidebar[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}#main-container-sidebar[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:400}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{height:2.1875rem;padding:0}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav.expanded[_ngcontent-%COMP%]{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] > .menu-item[_ngcontent-%COMP%]{border-left:4px solid #0069b1}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#0069b1}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#e5eaee}.main-container-sidbar.overlay[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded[_ngcontent-%COMP%]{left:0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavComponent, [{
        type: Component,
        args: [{
                selector: 't-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: i1.Router }]; }, { menuItems: [{
            type: Input
        }], expanded: [{
            type: Input
        }], diableDefaultClick: [{
            type: Input
        }], sliderStatus: [{
            type: Output
        }], menuClickTrigger: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ2M5Qiw4QkFHRTtJQUZBLCtZQUE4RDtJQUU5RCwrQkFDRTtJQUFBLGdDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU07SUFDUixpQkFBSzs7Ozs7SUFOSCwrR0FBc0Q7SUFHbEQsZUFDRjtJQURFLHFEQUNGOzs7O0lBZFIsNkJBRUU7SUFBQSw4QkFDRTtJQURxQixnUUFBb0M7SUFDekQsNkJBQTJEO0lBQzNELGdDQUFvQjtJQUFBLFlBQWtCO0lBQUEsaUJBQU87SUFDL0MsaUJBQU07SUFFTiw4QkFDRTtJQUFBLGlFQUdFO0lBTUosaUJBQUs7SUFFUCxpQkFBSzs7Ozs7SUFsQkgscUdBQTRDO0lBRW5CLGVBQXlCO0lBQXpCLHNFQUF5QjtJQUM1QixlQUFrQjtJQUFsQix1Q0FBa0I7SUFHUixlQUF1QztJQUF2QywwREFBdUM7SUFDakQsZUFBbUU7SUFBbkUsOENBQW1FOzs7O0lBZWpHLCtCQUF5RjtJQUE3QixnTEFBc0I7SUFBQyxpQkFBTTs7O0FEZnpGLE1BQU0sT0FBTyxZQUFZO0lBb0J2QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWxCMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQVUxQixpQkFBWSxHQUEwQixJQUFJLFlB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QUNOLDhCQUNFO1FBQUEsNkJBQ0U7UUFBQSwyREFFRTtRQWtCSixpQkFBSztRQUNQLGlCQUFNO1FBQ1IsaUJBQU07UUFDTiw2REFBbUY7O1FBL0JuQixrRUFBMEM7UUFHakcsZUFBZ0Q7UUFBaEQsMkVBQWdEO1FBS2IsZUFBa0Q7UUFBbEQsdUNBQWtEO1FBdUJuRCxlQUFnQjtRQUFoQixtQ0FBZ0I7O2tERGY5QyxZQUFZO2NBTHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IE1lbnVJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW107XG4gIEBJbnB1dCgpIHNldCBleHBhbmRlZChzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc3RhdHVzID8gJ2hpZGRlbicgOiAnYXV0byc7XG4gICAgdGhpcy5fZXhwYW5kZWQgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuICBASW5wdXQoKSBkaWFibGVEZWZhdWx0Q2xpY2s6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNsaWRlclN0YXR1czogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbWVudUNsaWNrVHJpZ2dlcjogRXZlbnRFbWl0dGVyPHsgaXNQYXJlbnQ6IGJvb2xlYW4sIG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51PzogTWVudUl0ZW0gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZXhwYW5kZWRNZW51OiBudW1iZXI7XG4gIHNlbGVjdGVkTWVudTogeyBpZHg6IG51bWJlciwgc3ViTWVudUlkeDogbnVtYmVyIH0gPSB7fSBhcyBhbnk7XG5cbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKS5zdWJzY3JpYmUoKHJvdXRlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG4gICAgICBsZXQgaSA9IDAsIGsgPSAtMTtcbiAgICAgIGNvbnN0IGN1clJvdXRlID0gcm91dGUudXJsLFxuICAgICAgICBtZW51SXRlbUxlbiA9IHRoaXMubWVudUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgbWVudUhpZ2hsaWdodCA9IChtZW51OiBNZW51SXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChjdXJSb3V0ZS5pbmNsdWRlcyhtZW51LnJvdXRlKSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaSwgc3ViTWVudUlkeDogayB9O1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWVudUl0ZW1MZW47IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW2ldO1xuICAgICAgICBpZiAobWVudUl0ZW0ucm91dGUgJiYgIW1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3QgZG9icmVhayA9IG1lbnVIaWdobGlnaHQobWVudUl0ZW0pO1xuICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3Qgc3ViTWVudUxlbiA9IG1lbnVJdGVtLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgc3ViTWVudUxlbjsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0uY2hpbGRyZW5ba107XG4gICAgICAgICAgICBjb25zdCBkb2JyZWFrID0gbWVudUhpZ2hsaWdodChzdWJNZW51KTtcbiAgICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7fSBhcyBhbnk7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgIHRoaXMuc2xpZGVyU3RhdHVzLmVtaXQodGhpcy5leHBhbmRlZCk7XG4gIH1cblxuICBvbk1lbnVDbGljayhtZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChtZW51LnJvdXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogLTEgfTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbbWVudS5yb3V0ZV0pO1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZGVkTWVudSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwYW5kZWRNZW51ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpbmRleDtcbiAgICAgIHRoaXMubWVudUNsaWNrVHJpZ2dlci5lbWl0KHsgaXNQYXJlbnQ6IHRydWUsIG1lbnUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uU3ViTWVudUNsaWNrKG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlciwgc3ViSWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogc3ViSWR4IH07XG5cbiAgICBpZiAoIXRoaXMuZGlhYmxlRGVmYXVsdENsaWNrKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3N1Yk1lbnUucm91dGVdKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm1lbnVDbGlja1RyaWdnZXIuZW1pdCh7IGlzUGFyZW50OiBmYWxzZSwgbWVudSwgc3ViTWVudSB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1haW4tY29udGFpbmVyLXNpZGViYXJcIiBpZD1cIm1haW4tY29udGFpbmVyLXNpZGViYXJcIiBbbmdDbGFzc109XCJ7J3NpZGViYXItZXhwYW5kZWQnOiBleHBhbmRlZH1cIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXRvZ2dsZVwiIChjbGljayk9XCJ0b2dnbGVNZW51KClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEge3tleHBhbmRlZCA/ICdmYS10aW1lcycgOiAnZmEtYmFycyd9fVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJzaWRlYmFyLWNvbnRlbnRcIiBjbGFzcz1cInNpZGViYXItY29udGVudFwiPlxuICAgIDx1bCByb2xlPVwibWVudVwiIGlkPVwibWFpbi1uYXZcIiBjbGFzcz1cIm1haW4tbmF2XCI+XG4gICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCIgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgbWVudUl0ZW0gb2YgbWVudUl0ZW1zO2xldCBpZHggPSBpbmRleFwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZE1lbnU/LmlkeCA9PT0gaWR4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiAoY2xpY2spPVwib25NZW51Q2xpY2sobWVudUl0ZW0sIGlkeClcIj5cbiAgICAgICAgICA8dC1iYWRnZSBjbGFzcz1cImJhZGdlXCIgW2JhZGdlXT1cIm1lbnVJdGVtPy5iYWRnZVwiPjwvdC1iYWRnZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3ttZW51SXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzcz1cInN1Yi1uYXZcIiBbY2xhc3MuZXhwYW5kZWRdPVwiZXhwYW5kZWRNZW51ID09PSBpZHhcIj5cbiAgICAgICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCIgKm5nRm9yPVwibGV0IHN1Yk1lbnVJdGVtIG9mIG1lbnVJdGVtLmNoaWxkcmVuOyBsZXQgY2hpbGRJZHggPSBpbmRleFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25TdWJNZW51Q2xpY2sobWVudUl0ZW0sIHN1Yk1lbnVJdGVtLCBpZHgsIGNoaWxkSWR4KVwiIGNsYXNzPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRNZW51Py5zdWJNZW51SWR4ID09PSBjaGlsZElkeFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgIHt7c3ViTWVudUl0ZW0ubGFiZWx9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXItc2lkYmFyIG92ZXJsYXlcIiAqbmdJZj1cImV4cGFuZGVkXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiPjwvZGl2PlxuIl19