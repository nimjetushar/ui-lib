import { __extends, __spread, __values } from 'tslib';
import { ɵɵdefineComponent, ɵɵelement, ɵɵclassMapInterpolate1, ɵsetClassMetadata, Component, Input, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵclassProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵproperty, ɵɵtextInterpolate, EventEmitter, ɵɵdirectiveInject, ɵɵpureFunction1, Output, ɵɵsanitizeUrl, ɵɵclassMap, ɵɵpureFunction3, ɵɵProvidersFeature, forwardRef, ɵɵInheritDefinitionFeature, ɵɵgetInheritedFactory, ViewEncapsulation, ɵɵstyleProp, ɵɵresolveWindow, HostListener, ɵɵsanitizeHtml, ElementRef, ChangeDetectorRef, ɵɵprojectionDef, ɵɵprojection, ViewContainerRef, ComponentFactoryResolver, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵinject, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { CheckboxControlValueAccessor, NgControlStatus, NgModel, RadioControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR, NumberValueAccessor, FormsModule } from '@angular/forms';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { Toast, ToastModule } from 'primeng/toast';
import { filter } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
    BadgeComponent.ɵcmp = ɵɵdefineComponent({ type: BadgeComponent, selectors: [["t-badge"]], inputs: { badge: "badge" }, decls: 1, vars: 3, consts: [["aria-hidden", "true"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "i", 0);
        } if (rf & 2) {
            ɵɵclassMapInterpolate1("fa ", ctx.badge, "");
        } }, encapsulation: 2 });
    return BadgeComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BadgeComponent, [{
        type: Component,
        args: [{
                selector: 't-badge',
                template: "<i class=\"fa {{badge}}\" aria-hidden=\"true\"></i>"
            }]
    }], null, { badge: [{
            type: Input
        }] }); })();

function NavComponent_li_6_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r69 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 13);
    ɵɵlistener("click", function NavComponent_li_6_li_6_Template_li_click_0_listener() { ɵɵrestoreView(_r69); var subMenuItem_r65 = ctx.$implicit; var childIdx_r66 = ctx.index; var ctx_r68 = ɵɵnextContext(); var menuItem_r62 = ctx_r68.$implicit; var idx_r63 = ctx_r68.index; var ctx_r67 = ɵɵnextContext(); return ctx_r67.onSubMenuClick(menuItem_r62, subMenuItem_r65, idx_r63, childIdx_r66); });
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "span", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var subMenuItem_r65 = ctx.$implicit;
    var childIdx_r66 = ctx.index;
    var ctx_r64 = ɵɵnextContext(2);
    ɵɵclassProp("active", (ctx_r64.selectedMenu == null ? null : ctx_r64.selectedMenu.subMenuIdx) === childIdx_r66);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", subMenuItem_r65.label, " ");
} }
function NavComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r71 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵlistener("click", function NavComponent_li_6_Template_div_click_1_listener() { ɵɵrestoreView(_r71); var menuItem_r62 = ctx.$implicit; var idx_r63 = ctx.index; var ctx_r70 = ɵɵnextContext(); return ctx_r70.onMenuClick(menuItem_r62, idx_r63); });
    ɵɵelement(2, "t-badge", 9);
    ɵɵelementStart(3, "span", 10);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "ul", 11);
    ɵɵtemplate(6, NavComponent_li_6_li_6_Template, 4, 3, "li", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var menuItem_r62 = ctx.$implicit;
    var idx_r63 = ctx.index;
    var ctx_r60 = ɵɵnextContext();
    ɵɵclassProp("selected", (ctx_r60.selectedMenu == null ? null : ctx_r60.selectedMenu.idx) === idx_r63);
    ɵɵadvance(2);
    ɵɵproperty("badge", menuItem_r62 == null ? null : menuItem_r62.badge);
    ɵɵadvance(2);
    ɵɵtextInterpolate(menuItem_r62.label);
    ɵɵadvance(1);
    ɵɵclassProp("expanded", ctx_r60.expandedMenu === idx_r63);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", menuItem_r62.children);
} }
function NavComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r73 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function NavComponent_div_7_Template_div_click_0_listener() { ɵɵrestoreView(_r73); var ctx_r72 = ɵɵnextContext(); return ctx_r72.toggleMenu(); });
    ɵɵelementEnd();
} }
var _c0 = function (a0) { return { "sidebar-expanded": a0 }; };
var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
        this.menuItems = [];
        this.sliderStatus = new EventEmitter();
        this.menuClickTrigger = new EventEmitter();
        this.selectedMenu = {};
    }
    Object.defineProperty(NavComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (status) {
            document.getElementsByTagName('body')[0].style.overflow = status ? 'hidden' : 'auto';
            this._expanded = status;
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (route) {
            var i = 0, k = -1;
            var curRoute = route.url, menuItemLen = _this.menuItems.length, menuHighlight = function (menu) {
                if (curRoute.includes(menu.route)) {
                    _this.selectedMenu = { idx: i, subMenuIdx: k };
                    _this.expandedMenu = i;
                    return true;
                }
            };
            for (i = 0; i < menuItemLen; i++) {
                var menuItem = _this.menuItems[i];
                if (menuItem.route && !menuItem.children) {
                    var dobreak = menuHighlight(menuItem);
                    if (dobreak) {
                        return;
                    }
                }
                if (menuItem.children) {
                    var subMenuLen = menuItem.children.length;
                    for (k = 0; k < subMenuLen; k++) {
                        var subMenu = menuItem.children[k];
                        var dobreak = menuHighlight(subMenu);
                        if (dobreak) {
                            return;
                        }
                    }
                }
            }
            _this.selectedMenu = {};
            _this.expandedMenu = undefined;
        });
    };
    NavComponent.prototype.toggleMenu = function () {
        this.expanded = !this.expanded;
        this.sliderStatus.emit(this.expanded);
    };
    NavComponent.prototype.onMenuClick = function (menu, index) {
        if (menu.route) {
            this.selectedMenu = { idx: index, subMenuIdx: -1 };
            this._router.navigate([menu.route]);
            this.toggleMenu();
            return;
        }
        if (this.expandedMenu === undefined || this.expandedMenu !== index) {
            this.expandedMenu = index;
            this.menuClickTrigger.emit({ isParent: true, menu: menu });
        }
        else {
            this.expandedMenu = undefined;
        }
    };
    NavComponent.prototype.onSubMenuClick = function (menu, subMenu, index, subIdx) {
        this.selectedMenu = { idx: index, subMenuIdx: subIdx };
        if (!this.diableDefaultClick) {
            this._router.navigate([subMenu.route]);
            this.toggleMenu();
        }
        this.menuClickTrigger.emit({ isParent: false, menu: menu, subMenu: subMenu });
    };
    NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(ɵɵdirectiveInject(Router)); };
    NavComponent.ɵcmp = ɵɵdefineComponent({ type: NavComponent, selectors: [["t-nav"]], inputs: { menuItems: "menuItems", expanded: "expanded", diableDefaultClick: "diableDefaultClick" }, outputs: { sliderStatus: "sliderStatus", menuClickTrigger: "menuClickTrigger" }, decls: 8, vars: 8, consts: [["id", "main-container-sidebar", 1, "main-container-sidebar", 3, "ngClass"], [1, "header"], [1, "sidebar-toggle", 3, "click"], ["id", "sidebar-content", 1, "sidebar-content"], ["role", "menu", "id", "main-nav", 1, "main-nav"], ["role", "menuitem", "class", "list-item", 3, "selected", 4, "ngFor", "ngForOf"], ["class", "main-container-sidbar overlay", 3, "click", 4, "ngIf"], ["role", "menuitem", 1, "list-item"], [1, "menu-item", 3, "click"], [1, "badge", 3, "badge"], [1, "label"], ["role", "menu", 1, "sub-nav"], ["role", "menuitem", "class", "list-item", "tabindex", "-1", 3, "active", "click", 4, "ngFor", "ngForOf"], ["role", "menuitem", "tabindex", "-1", 1, "list-item", 3, "click"], [1, "menu-item"], [1, "main-container-sidbar", "overlay", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵlistener("click", function NavComponent_Template_div_click_2_listener() { return ctx.toggleMenu(); });
            ɵɵelement(3, "i");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelementStart(5, "ul", 4);
            ɵɵtemplate(6, NavComponent_li_6_Template, 7, 7, "li", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(7, NavComponent_div_7_Template, 1, 0, "div", 6);
        } if (rf & 2) {
            ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c0, ctx.expanded));
            ɵɵadvance(3);
            ɵɵclassMapInterpolate1("fa ", ctx.expanded ? "fa-times" : "fa-bars", "");
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ctx.menuItems);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.expanded);
        } }, directives: [NgClass, NgForOf, NgIf, BadgeComponent], styles: ["#main-container-sidebar[_ngcontent-%COMP%]{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}#main-container-sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{font-size:2.1875rem;color:#fff}#main-container-sidebar[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}#main-container-sidebar[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}#main-container-sidebar[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:400}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{height:2.1875rem;padding:0}#main-container-sidebar[_ngcontent-%COMP%]   .sub-nav.expanded[_ngcontent-%COMP%]{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] > .menu-item[_ngcontent-%COMP%]{border-left:4px solid #0069b1}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#0069b1}#main-container-sidebar[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#e5eaee}.main-container-sidbar.overlay[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded[_ngcontent-%COMP%]{left:0}"] });
    return NavComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavComponent, [{
        type: Component,
        args: [{
                selector: 't-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: Router }]; }, { menuItems: [{
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

function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r76 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function HeaderComponent_div_5_Template_div_click_0_listener() { ɵɵrestoreView(_r76); var ctx_r75 = ɵɵnextContext(); return ctx_r75.onLogoClick(); });
    ɵɵelement(1, "img", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r74 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r74.logoSrc, ɵɵsanitizeUrl);
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
    HeaderComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderComponent, selectors: [["t-header"]], inputs: { title: "title", logoSrc: "logoSrc", routeLink: "routeLink" }, outputs: { sideBarToggled: "sideBarToggled", logoClickEmitter: "logoClickEmitter" }, decls: 9, vars: 3, consts: [[1, "main-container-header"], [1, "content"], ["id", "menu-icon-container", 1, "sidebar-toggle", 3, "click"], [1, "fa", "fa-bars"], ["id", "logo-container", 1, "logo-container"], ["class", "logo", 3, "click", 4, "ngIf"], [1, "title-container"], [1, "title", 3, "routerLink"], [1, "logo", 3, "click"], [3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵlistener("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.handleSidebarToggle(); });
            ɵɵelement(3, "i", 3);
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 4);
            ɵɵtemplate(5, HeaderComponent_div_5_Template, 2, 1, "div", 5);
            ɵɵelementStart(6, "div", 6);
            ɵɵelementStart(7, "span", 7);
            ɵɵtext(8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.logoSrc);
            ɵɵadvance(2);
            ɵɵproperty("routerLink", ctx.routeLink);
            ɵɵadvance(1);
            ɵɵtextInterpolate(ctx.title);
        } }, directives: [NgIf, RouterLink], styles: [".main-container-header[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:4.5rem;overflow:hidden;background-color:#000;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;z-index:10;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.main-container-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}.main-container-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;margin-right:.3125rem}.main-container-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:0}.main-container-header[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}.main-container-header[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   i.fa-bars[_ngcontent-%COMP%]{font-size:2.1875rem;color:#fff}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{cursor:pointer;padding-left:2rem;display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;padding-right:.3125rem;display:inline-block}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.28875rem;width:3.25rem}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}.main-container-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:1.625rem;letter-spacing:.0625rem;text-transform:uppercase}"] });
    return HeaderComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderComponent, [{
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

function ButtonComponent_t_badge_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "t-badge", 2);
} if (rf & 2) {
    var ctx_r77 = ɵɵnextContext();
    ɵɵclassMap(ctx_r77.bPos);
    ɵɵproperty("badge", ctx_r77.badge);
} }
var _c0$1 = function (a0, a1, a2) { return { "disabled": a0, "btn-large": a1, "btn-small": a2 }; };
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.buttonType = 'primary';
        this.bPos = 'left';
    }
    Object.defineProperty(ButtonComponent.prototype, "badgePosition", {
        set: function (val) {
            this.bPos = ['right', 'left'].includes(val) ? val : 'left';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "type", {
        set: function (val) {
            this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val) ? val : 'primary';
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["t-button"]], inputs: { label: "label", badge: "badge", disabled: "disabled", isLarge: "isLarge", badgePosition: "badgePosition", type: "type" }, decls: 3, vars: 11, consts: [[3, "ngClass", "disabled"], [3, "class", "badge", 4, "ngIf"], [3, "badge"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtemplate(1, ButtonComponent_t_badge_1_Template, 1, 3, "t-badge", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMapInterpolate1("btn waves-effect waves-light ", ctx.buttonType, "");
            ɵɵproperty("ngClass", ɵɵpureFunction3(7, _c0$1, ctx.disabled, ctx.isLarge, !ctx.isLarge))("disabled", ctx.disabled);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.badge);
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" ", ctx.label, " ");
        } }, directives: [NgClass, NgIf, BadgeComponent], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.btn[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%], .z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.btn-floating[_ngcontent-%COMP%]:hover, .btn-large[_ngcontent-%COMP%]:hover, .btn-small[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover, .z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.btn[_ngcontent-%COMP%], .btn-flat[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%]{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-flat.disabled[_ngcontent-%COMP%], .btn-flat[_ngcontent-%COMP%]:disabled, .btn-flat[disabled][_ngcontent-%COMP%], .btn-floating.disabled[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%]:disabled, .btn-floating[disabled][_ngcontent-%COMP%], .btn-large.disabled[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%]:disabled, .btn-large[disabled][_ngcontent-%COMP%], .btn-small.disabled[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%]:disabled, .btn-small[disabled][_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, .btn[disabled][_ngcontent-%COMP%], .disabled.btn-large[_ngcontent-%COMP%], .disabled.btn-small[_ngcontent-%COMP%]{pointer-events:none;background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-flat.disabled[_ngcontent-%COMP%]:hover, .btn-flat[_ngcontent-%COMP%]:disabled:hover, .btn-flat[disabled][_ngcontent-%COMP%]:hover, .btn-floating.disabled[_ngcontent-%COMP%]:hover, .btn-floating[_ngcontent-%COMP%]:disabled:hover, .btn-floating[disabled][_ngcontent-%COMP%]:hover, .btn-large.disabled[_ngcontent-%COMP%]:hover, .btn-large[_ngcontent-%COMP%]:disabled:hover, .btn-large[disabled][_ngcontent-%COMP%]:hover, .btn-small.disabled[_ngcontent-%COMP%]:hover, .btn-small[_ngcontent-%COMP%]:disabled:hover, .btn-small[disabled][_ngcontent-%COMP%]:hover, .btn.disabled[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:disabled:hover, .btn[disabled][_ngcontent-%COMP%]:hover, .disabled.btn-large[_ngcontent-%COMP%]:hover, .disabled.btn-small[_ngcontent-%COMP%]:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn[_ngcontent-%COMP%], .btn-flat[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%]{font-size:14px;outline:0}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-flat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.3rem;line-height:inherit}.btn[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%]{text-decoration:none;color:#fff;background-color:#757575;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn-large[_ngcontent-%COMP%]:hover, .btn-small[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover{background-color:#828282}.btn-floating[_ngcontent-%COMP%]{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#757575;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating[_ngcontent-%COMP%]:hover{background-color:#757575}.btn-floating[_ngcontent-%COMP%]:before{border-radius:0}.btn-floating.btn-large[_ngcontent-%COMP%]{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab[_ngcontent-%COMP%]{bottom:-28px}.btn-floating.btn-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:56px}.btn-floating.btn-small[_ngcontent-%COMP%]{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab[_ngcontent-%COMP%]{bottom:-16.2px}.btn-floating.btn-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:32.4px}.btn-floating.halfway-fab[_ngcontent-%COMP%]{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left[_ngcontent-%COMP%]{right:auto;left:24px}.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating[_ngcontent-%COMP%]{border:none}.fixed-action-btn[_ngcontent-%COMP%]{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{visibility:visible}.fixed-action-btn.direction-left[_ngcontent-%COMP%], .fixed-action-btn.direction-right[_ngcontent-%COMP%]{padding:0 0 0 15px}.fixed-action-btn.direction-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .fixed-action-btn.direction-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:right;right:64px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .fixed-action-btn.direction-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right[_ngcontent-%COMP%]{padding:0 15px 0 0}.fixed-action-btn.direction-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom[_ngcontent-%COMP%]{padding:0 0 15px}.fixed-action-btn.direction-bottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{top:64px;bottom:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:15px 0 0}.fixed-action-btn.toolbar[_ngcontent-%COMP%]{padding:0;height:56px}.fixed-action-btn.toolbar.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{opacity:0}.fixed-action-btn.toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:inherit}.fixed-action-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}.fixed-action-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-floating[_ngcontent-%COMP%]{opacity:0}.fixed-action-btn[_ngcontent-%COMP%]   .fab-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#757575;border-radius:50%;-ms-transform:scale(0);transform:scale(0)}.btn-flat[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat[_ngcontent-%COMP%]:focus, .btn-flat[_ngcontent-%COMP%]:hover{box-shadow:none}.btn-flat[_ngcontent-%COMP%]:focus{background-color:rgba(0,0,0,.1)}.btn-flat.btn-flat[disabled][_ngcontent-%COMP%], .btn-flat.disabled[_ngcontent-%COMP%]{background-color:transparent!important;color:#b3b3b3!important;cursor:default}.btn-large[_ngcontent-%COMP%]{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.6rem}.btn-small[_ngcontent-%COMP%]{height:32.4px;line-height:32.4px;font-size:13px}.btn-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}.btn-block[_ngcontent-%COMP%]{display:block}t-badge.left[_ngcontent-%COMP%]{margin-right:.5rem}t-badge.right[_ngcontent-%COMP%]{margin-left:.5rem}.primary[_ngcontent-%COMP%]{background:#0069b1}.primary[_ngcontent-%COMP%]:hover{background:#003f81}.secondary[_ngcontent-%COMP%]{background:#757575}.secondary[_ngcontent-%COMP%]:hover{background:#616161}.tertiary[_ngcontent-%COMP%]{background:#757575}.tertiary[_ngcontent-%COMP%]:hover{background:#616161}"] });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 't-button',
                template: "\n    <button class=\"btn waves-effect waves-light {{buttonType}}\"\n      [ngClass]=\"{'disabled': disabled, 'btn-large': isLarge, 'btn-small': !isLarge}\" [disabled]=\"disabled\">\n      <t-badge *ngIf=\"badge\" [class]=\"bPos\" [badge]=\"badge\"></t-badge>\n      {{label}}\n    </button>\n  ",
                styleUrls: ['./button.component.scss']
            }]
    }], null, { label: [{
            type: Input
        }], badge: [{
            type: Input
        }], disabled: [{
            type: Input
        }], isLarge: [{
            type: Input
        }], badgePosition: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.modelChange = new EventEmitter();
    }
    CheckboxComponent.prototype.handleOnChange = function (event) {
        this.checked = event.target.checked;
        this.modelChange.emit(this.checked);
    };
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
    CheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["t-checkbox"]], inputs: { label: "label", name: "name", disabled: "disabled", model: "model", readonly: "readonly" }, outputs: { modelChange: "modelChange" }, decls: 4, vars: 8, consts: [[1, "checkbox"], ["type", "checkbox", 3, "name", "ngModel", "checked", "disabled", "readonly", "ngModelChange", "change"], [1, "fa", "checkmark", "checkmark-primary", "active"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "label", 0);
            ɵɵtext(1);
            ɵɵelementStart(2, "input", 1);
            ɵɵlistener("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; })("change", function CheckboxComponent_Template_input_change_2_listener($event) { return ctx.handleOnChange($event); });
            ɵɵelementEnd();
            ɵɵelement(3, "span", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("disabled", ctx.disabled);
            ɵɵadvance(1);
            ɵɵtextInterpolate1("", ctx.label, " ");
            ɵɵadvance(1);
            ɵɵproperty("name", ctx.name)("ngModel", ctx.model)("checked", ctx.checked)("disabled", ctx.disabled)("readonly", ctx.readonly);
        } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.checkbox[_ngcontent-%COMP%]{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;opacity:0}.checkbox.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;pointer-events:none}.checkbox[_ngcontent-%COMP%]   .checkmark-primary[_ngcontent-%COMP%]{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox[_ngcontent-%COMP%]   .checkmark-primary.active[_ngcontent-%COMP%]{background-color:#fff;border:.0625rem solid #0069b1}.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:none;bottom:0;left:1px;top:-1px;right:0}.checkbox[_ngcontent-%COMP%]   .checkmark.active[_ngcontent-%COMP%]:after{content:\"\\f00c\";color:#fff}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#0069b1}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block;font-size:.75rem;height:1rem;line-height:15px}.checkbox[_ngcontent-%COMP%]   .checkmark.disabled[_ngcontent-%COMP%]:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"] });
    return CheckboxComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 't-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss']
            }]
    }], null, { label: [{
            type: Input
        }], name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], model: [{
            type: Input
        }], readonly: [{
            type: Input
        }], modelChange: [{
            type: Output
        }] }); })();

var _c0$2 = function (a0) { return { "active": a0 }; };
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    Object.defineProperty(RadioComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.checked = value === this.value ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.handleOnChange = function (event) {
        var checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        var value = checked ? this.value : false;
        this.modelChange.emit(value);
    };
    RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
    RadioComponent.ɵcmp = ɵɵdefineComponent({ type: RadioComponent, selectors: [["t-radio"]], inputs: { label: "label", disabled: "disabled", name: "name", value: "value", model: "model" }, outputs: { modelChange: "modelChange" }, decls: 3, vars: 11, consts: [[1, "radio", 3, "ngClass"], ["type", "radio", 3, "name", "checked", "disabled", "ngModel", "value", "change", "ngModelChange"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "label", 0);
            ɵɵtext(1);
            ɵɵelementStart(2, "input", 1);
            ɵɵlistener("change", function RadioComponent_Template_input_change_2_listener($event) { return ctx.handleOnChange($event); })("ngModelChange", function RadioComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("disabled", ctx.disabled);
            ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0$2, ctx.checked));
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" \u00A0", ctx.label, " ");
            ɵɵadvance(1);
            ɵɵproperty("name", ctx.name)("checked", ctx.checked)("disabled", ctx.disabled)("ngModel", ctx.model)("value", ctx.value);
        } }, directives: [NgClass, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.radio[_ngcontent-%COMP%]{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;opacity:0}.radio[_ngcontent-%COMP%]:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;pointer-events:none}.radio.active[_ngcontent-%COMP%]:before{content:'';border:5px solid #0069b1}"] });
    return RadioComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 't-radio',
                templateUrl: './radio.component.html',
                styleUrls: ['./radio.component.scss']
            }]
    }], null, { label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], model: [{
            type: Input
        }], modelChange: [{
            type: Output
        }] }); })();

var noop = function () { };
var UiInput = /** @class */ (function () {
    function UiInput() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    UiInput.prototype.writeValue = function (_obj) { };
    UiInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiInput.prototype.setDisabledState = function (_isDisabled) { };
    return UiInput;
}());

var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable: no-output-on-prefix
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this._tooltipPosition = 'top';
        return _this;
    }
    Object.defineProperty(DropdownComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "tooltipPosition", {
        get: function () {
            return this._tooltipPosition;
        },
        set: function (value) {
            this._tooltipPosition = value || 'top';
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    DropdownComponent.prototype.onChangeHandler = function (event) {
        this.writeValue(event.value);
    };
    DropdownComponent.prototype.focusHandler = function (event) {
        this.onFocus.emit(event);
    };
    DropdownComponent.prototype.blurHandler = function (event) {
        this.onBlur.emit(event);
    };
    DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return ɵDropdownComponent_BaseFactory(t || DropdownComponent); };
    DropdownComponent.ɵcmp = ɵɵdefineComponent({ type: DropdownComponent, selectors: [["t-dropdown"]], inputs: { options: "options", readonly: "readonly", disabled: "disabled", filter: "filter", placeholder: "placeholder", staticLabel: "staticLabel", name: "name", tooltip: "tooltip", tooltipPosition: "tooltipPosition", autoDisplayFirst: "autoDisplayFirst", scrollHeight: "scrollHeight", autofocus: "autofocus" }, outputs: { onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return DropdownComponent; }),
                    multi: true
                }]), ɵɵInheritDefinitionFeature], decls: 1, vars: 12, consts: [[3, "options", "ngModel", "placeholder", "filter", "readonly", "disabled", "name", "tooltip", "tooltipPosition", "autoDisplayFirst", "scrollHeight", "autofocus", "onChange", "onFocus", "onBlur"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p-dropdown", 0);
            ɵɵlistener("onChange", function DropdownComponent_Template_p_dropdown_onChange_0_listener($event) { return ctx.onChangeHandler($event); })("onFocus", function DropdownComponent_Template_p_dropdown_onFocus_0_listener($event) { return ctx.focusHandler($event); })("onBlur", function DropdownComponent_Template_p_dropdown_onBlur_0_listener($event) { return ctx.blurHandler($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("options", ctx.options)("ngModel", ctx.value)("placeholder", ctx.placeholder)("filter", ctx.filter)("readonly", ctx.readonly)("disabled", ctx.disabled)("name", ctx.name)("tooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("autoDisplayFirst", ctx.autoDisplayFirst)("scrollHeight", ctx.scrollHeight)("autofocus", ctx.autofocus);
        } }, directives: [Dropdown, NgControlStatus, NgModel], styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"], encapsulation: 2 });
    return DropdownComponent;
}(UiInput));
var ɵDropdownComponent_BaseFactory = ɵɵgetInheritedFactory(DropdownComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{
                selector: 't-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: ['./dropdown.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DropdownComponent; }),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { options: [{
            type: Input
        }], readonly: [{
            type: Input
        }], disabled: [{
            type: Input
        }], filter: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], staticLabel: [{
            type: Input
        }], name: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], autoDisplayFirst: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }] }); })();

function DynamicFieldsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r87 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "label", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 12);
    ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_1_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r87); var field_r80 = ɵɵnextContext().$implicit; var ctx_r86 = ɵɵnextContext(); return (ctx_r86.data[field_r80.model] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ɵɵnextContext().$implicit;
    var ctx_r81 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("for", field_r80.model);
    ɵɵadvance(1);
    ɵɵtextInterpolate(field_r80.label);
    ɵɵadvance(1);
    ɵɵproperty("id", field_r80.model)("name", field_r80.name)("ngModel", ctx_r81.data[field_r80.model])("disabled", ctx_r81.disabledFields[field_r80.model]);
} }
function DynamicFieldsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r91 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "label", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 14);
    ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_2_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r91); var field_r80 = ɵɵnextContext().$implicit; var ctx_r90 = ɵɵnextContext(); return (ctx_r90.data[field_r80.model] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ɵɵnextContext().$implicit;
    var ctx_r82 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("for", field_r80.model);
    ɵɵadvance(1);
    ɵɵtextInterpolate(field_r80.label);
    ɵɵadvance(1);
    ɵɵproperty("id", field_r80.model)("name", field_r80.name)("ngModel", ctx_r82.data[field_r80.model])("disabled", ctx_r82.disabledFields[field_r80.model]);
} }
function DynamicFieldsComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r95 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵelementStart(1, "t-checkbox", 16);
    ɵɵlistener("modelChange", function DynamicFieldsComponent_div_1_div_3_Template_t_checkbox_modelChange_1_listener($event) { ɵɵrestoreView(_r95); var field_r80 = ɵɵnextContext().$implicit; var ctx_r94 = ɵɵnextContext(); return (ctx_r94.data[field_r80.model] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ɵɵnextContext().$implicit;
    var ctx_r83 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", field_r80.label)("model", ctx_r83.data[field_r80.model])("name", field_r80.name)("disabled", ctx_r83.disabledFields[field_r80.model]);
} }
function DynamicFieldsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r99 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵelementStart(1, "t-radio", 18);
    ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_4_Template_t_radio_ngModelChange_1_listener($event) { ɵɵrestoreView(_r99); var field_r80 = ɵɵnextContext().$implicit; var ctx_r98 = ɵɵnextContext(); return (ctx_r98.data[field_r80.model] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ɵɵnextContext().$implicit;
    var ctx_r84 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", field_r80.label)("ngModel", ctx_r84.data[field_r80.model])("name", field_r80.name)("disabled", ctx_r84.disabledFields[field_r80.model]);
} }
function DynamicFieldsComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r103 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵelementStart(1, "t-dropdown", 20);
    ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_5_Template_t_dropdown_ngModelChange_1_listener($event) { ɵɵrestoreView(_r103); var field_r80 = ɵɵnextContext().$implicit; var ctx_r102 = ɵɵnextContext(); return (ctx_r102.data[field_r80.model] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ɵɵnextContext().$implicit;
    var ctx_r85 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("placeholder", field_r80.label)("ngModel", ctx_r85.data[field_r80.model])("options", ctx_r85.dropdownOptions[field_r80.model])("name", field_r80.name)("disabled", ctx_r85.disabledFields[field_r80.model]);
} }
function DynamicFieldsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, DynamicFieldsComponent_div_1_div_1_Template, 4, 6, "div", 5);
    ɵɵtemplate(2, DynamicFieldsComponent_div_1_div_2_Template, 4, 6, "div", 6);
    ɵɵtemplate(3, DynamicFieldsComponent_div_1_div_3_Template, 2, 4, "div", 7);
    ɵɵtemplate(4, DynamicFieldsComponent_div_1_div_4_Template, 2, 4, "div", 8);
    ɵɵtemplate(5, DynamicFieldsComponent_div_1_div_5_Template, 2, 5, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r80 = ctx.$implicit;
    ɵɵproperty("ngSwitch", field_r80.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "text");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "number");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
} }
function DynamicFieldsComponent_div_3_t_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r108 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "t-button", 24);
    ɵɵlistener("click", function DynamicFieldsComponent_div_3_t_button_2_Template_t_button_click_0_listener() { ɵɵrestoreView(_r108); var ctx_r107 = ɵɵnextContext(2); return ctx_r107.secondaryClick(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r106 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r106.secondaryLabel);
} }
function DynamicFieldsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r110 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "t-button", 22);
    ɵɵlistener("click", function DynamicFieldsComponent_div_3_Template_t_button_click_1_listener() { ɵɵrestoreView(_r110); var ctx_r109 = ɵɵnextContext(); return ctx_r109.primaryClick(); });
    ɵɵelementEnd();
    ɵɵtemplate(2, DynamicFieldsComponent_div_3_t_button_2_Template, 1, 1, "t-button", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r79 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r79.primaryLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r79.removeSecondaryButton);
} }
var DynamicFieldsComponent = /** @class */ (function () {
    function DynamicFieldsComponent() {
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
        this._data = {};
    }
    Object.defineProperty(DynamicFieldsComponent.prototype, "fields", {
        // fields to be rendered
        set: function (val) {
            if (val && val.length) {
                this.renderFields = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "buttonOptions", {
        // option parameter required by component to render
        set: function (val) {
            if (val) {
                var primaryLabel = val.primaryLabel, secondaryLabel = val.secondaryLabel, removeSecondaryButton = val.removeSecondaryButton;
                this.primaryLabel = primaryLabel;
                this.secondaryLabel = secondaryLabel;
                this.removeSecondaryButton = removeSecondaryButton;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "data", {
        get: function () {
            return this._data || {};
        },
        set: function (data) {
            if (data) {
                this._data = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "dropdownOptions", {
        get: function () {
            return this._dropdownOptions || {};
        },
        set: function (data) {
            if (data) {
                this._dropdownOptions = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "disabledFields", {
        get: function () {
            return this._disabled || {};
        },
        set: function (data) {
            if (data) {
                this._disabled = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "primaryLabel", {
        get: function () {
            return this._primaryLabel || 'Search';
        },
        set: function (label) {
            this._primaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "secondaryLabel", {
        get: function () {
            return this._secondaryLabel || 'Reset';
        },
        set: function (label) {
            this._secondaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFieldsComponent.prototype.primaryClick = function () {
        this.primaryHandler.emit(this.data);
    };
    DynamicFieldsComponent.prototype.secondaryClick = function () {
        this.secondaryHandler.emit(this.data);
    };
    DynamicFieldsComponent.prototype.reset = function () {
        this.data = {};
    };
    DynamicFieldsComponent.ɵfac = function DynamicFieldsComponent_Factory(t) { return new (t || DynamicFieldsComponent)(); };
    DynamicFieldsComponent.ɵcmp = ɵɵdefineComponent({ type: DynamicFieldsComponent, selectors: [["t-dynamic-fields"]], inputs: { fields: "fields", buttonOptions: "buttonOptions", data: "data", dropdownOptions: "dropdownOptions", disabledFields: "disabledFields", hideDefaultAction: "hideDefaultAction" }, outputs: { primaryHandler: "primaryHandler", secondaryHandler: "secondaryHandler" }, decls: 4, vars: 2, consts: [[1, "dynamic-fields"], ["class", "input-element", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "button-container"], ["class", "default-button", 4, "ngIf"], [1, "input-element", 3, "ngSwitch"], ["class", "input-text", 4, "ngSwitchCase"], ["class", "input-number", 4, "ngSwitchCase"], ["class", "input-checkbox", 4, "ngSwitchCase"], ["class", "input-radio", 4, "ngSwitchCase"], ["class", "input-select", 4, "ngSwitchCase"], [1, "input-text"], [3, "for"], ["type", "text", 3, "id", "name", "ngModel", "disabled", "ngModelChange"], [1, "input-number"], ["type", "number", 3, "id", "name", "ngModel", "disabled", "ngModelChange"], [1, "input-checkbox"], [3, "label", "model", "name", "disabled", "modelChange"], [1, "input-radio"], [3, "label", "ngModel", "name", "disabled", "ngModelChange"], [1, "input-select"], [3, "placeholder", "ngModel", "options", "name", "disabled", "ngModelChange"], [1, "default-button"], ["type", "primary", 3, "label", "click"], ["type", "secondary", 3, "label", "click", 4, "ngIf"], ["type", "secondary", 3, "label", "click"]], template: function DynamicFieldsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, DynamicFieldsComponent_div_1_Template, 6, 6, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, DynamicFieldsComponent_div_3_Template, 3, 2, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.renderFields);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.hideDefaultAction);
        } }, directives: [NgForOf, NgIf, NgSwitch, NgSwitchCase, DefaultValueAccessor, NgControlStatus, NgModel, NumberValueAccessor, CheckboxComponent, RadioComponent, DropdownComponent, ButtonComponent], styles: [".dynamic-fields[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   t-button[_ngcontent-%COMP%]{margin:0 .3125rem}.dynamic-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin:0 .625rem;outline:0}.dynamic-fields[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-number[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-radio[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-select[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{margin:.625rem .3125rem}"] });
    return DynamicFieldsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DynamicFieldsComponent, [{
        type: Component,
        args: [{
                selector: 't-dynamic-fields',
                templateUrl: './dynamic-fields.component.html',
                styleUrls: ['./dynamic-fields.component.scss']
            }]
    }], null, { fields: [{
            type: Input
        }], buttonOptions: [{
            type: Input
        }], data: [{
            type: Input
        }], dropdownOptions: [{
            type: Input
        }], disabledFields: [{
            type: Input
        }], hideDefaultAction: [{
            type: Input
        }], primaryHandler: [{
            type: Output
        }], secondaryHandler: [{
            type: Output
        }] }); })();

var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.position = 'top-right';
    }
    ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(); };
    ToastComponent.ɵcmp = ɵɵdefineComponent({ type: ToastComponent, selectors: [["t-toast"]], inputs: { position: "position", baseZIndex: "baseZIndex", key: "key" }, decls: 1, vars: 4, consts: [[3, "position", "key"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "p-toast", 0);
        } if (rf & 2) {
            ɵɵstyleProp("z-index", ctx.baseZIndex);
            ɵɵproperty("position", ctx.position)("key", ctx.key);
        } }, directives: [Toast], styles: ["p-toast .ui-toast .ui-toast-message.ui-toast-message-success{background-color:#82b20a}p-toast .ui-toast .ui-toast-message.ui-toast-message-error{background-color:#b00020}p-toast .ui-toast .ui-toast-message.ui-toast-message-info{background-color:#00a8e4}p-toast .ui-toast .ui-toast-message.ui-toast-message-warn{background-color:#ffa81e}"], encapsulation: 2 });
    return ToastComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 't-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { position: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], key: [{
            type: Input
        }] }); })();

function NavigateTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r113 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function NavigateTopComponent_div_0_Template_div_click_0_listener() { ɵɵrestoreView(_r113); var ctx_r112 = ɵɵnextContext(); return ctx_r112.navigateToTop(); });
    ɵɵelement(1, "i", 2);
    ɵɵelementEnd();
} }
var NavigateTopComponent = /** @class */ (function () {
    function NavigateTopComponent() {
        this.height = 500;
    }
    NavigateTopComponent.prototype.scrollEvent = function () {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        this.enableNavigator = (top > this.height);
    };
    NavigateTopComponent.prototype.navigateToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    NavigateTopComponent.ɵfac = function NavigateTopComponent_Factory(t) { return new (t || NavigateTopComponent)(); };
    NavigateTopComponent.ɵcmp = ɵɵdefineComponent({ type: NavigateTopComponent, selectors: [["t-navigate-top"]], hostBindings: function NavigateTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("scroll", function NavigateTopComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, ɵɵresolveWindow);
        } }, inputs: { height: "height" }, decls: 1, vars: 1, consts: [["class", "navigate-top", 3, "click", 4, "ngIf"], [1, "navigate-top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"]], template: function NavigateTopComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NavigateTopComponent_div_0_Template, 2, 0, "div", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.enableNavigator);
        } }, directives: [NgIf], styles: [".navigate-top[_ngcontent-%COMP%]{position:fixed;right:2em;bottom:10em;padding:.7em 1em;border-radius:50px;font-size:1em;background:rgba(0,0,0,.7);color:#fff;cursor:pointer}.navigate-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;top:0;transition:.3s}.navigate-top[_ngcontent-%COMP%]:hover{background:#000}.navigate-top[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{top:-7px}"] });
    return NavigateTopComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavigateTopComponent, [{
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

function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "i", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r114 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("fa ", ctx_r114.iconClass, "");
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r115 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r115.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} if (rf & 2) {
    var ctx_r116 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r116.message, ɵɵsanitizeHtml);
} }
function AlertComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r119 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "i", 11);
    ɵɵlistener("click", function AlertComponent_div_5_Template_i_click_1_listener() { ɵɵrestoreView(_r119); var ctx_r118 = ɵɵnextContext(); return ctx_r118.closeHandler(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.onCloseClick = new EventEmitter();
    }
    Object.defineProperty(AlertComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.setProperties(val);
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.setProperties = function (type) {
        if (type) {
            switch (type) {
                case 'success':
                    this.iconClass = 'fa-check';
                    break;
                case 'error':
                    this.iconClass = 'fa-times';
                    break;
                case 'warn':
                    this.iconClass = 'fa-exclamation-triangle';
                    break;
                case 'info':
                    this.iconClass = 'fa-info';
                    break;
                default:
                    throw new Error('invalid Alert type');
            }
        }
    };
    AlertComponent.prototype.closeHandler = function () {
        this.onCloseClick.emit(true);
    };
    AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
    AlertComponent.ɵcmp = ɵɵdefineComponent({ type: AlertComponent, selectors: [["t-alert"]], inputs: { type: "type", title: "title", message: "message", hideIcon: "hideIcon", enableClose: "enableClose" }, outputs: { onCloseClick: "onCloseClick" }, decls: 6, vars: 5, consts: [[1, "t-alert", 3, "ngClass"], ["class", "t-alert-icon", 4, "ngIf"], [1, "t-alert-content"], ["class", "t-alert-content-title", 4, "ngIf"], ["class", "t-alert-content-message", 3, "innerHtml", 4, "ngIf"], ["class", "t-alert-close", 4, "ngIf"], [1, "t-alert-icon"], ["aria-hidden", "true"], [1, "t-alert-content-title"], [1, "t-alert-content-message", 3, "innerHtml"], [1, "t-alert-close"], ["aria-hidden", "true", 1, "fa", "fa-times", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, AlertComponent_div_1_Template, 2, 3, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, AlertComponent_div_3_Template, 2, 1, "div", 3);
            ɵɵtemplate(4, AlertComponent_div_4_Template, 1, 1, "div", 4);
            ɵɵelementEnd();
            ɵɵtemplate(5, AlertComponent_div_5_Template, 2, 0, "div", 5);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.type);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideIcon);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.title);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.message);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.enableClose);
        } }, directives: [NgClass, NgIf], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.t-alert[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;padding:4px;border-radius:4px}.t-alert.success[_ngcontent-%COMP%]{background-color:#82b20a}.t-alert.error[_ngcontent-%COMP%]{background-color:#b00020}.t-alert.warn[_ngcontent-%COMP%]{background-color:#ffa81e}.t-alert.info[_ngcontent-%COMP%]{background-color:#00a8e4}.t-alert-icon[_ngcontent-%COMP%]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;padding:0 0 0 14px;font-size:1.125rem;font-weight:lighter;color:#fff}.t-alert-content[_ngcontent-%COMP%]{padding-left:24px;color:#fff}.t-alert-content-title[_ngcontent-%COMP%]{font-size:.9375rem;font-weight:700;word-break:break-word}.t-alert-content-message[_ngcontent-%COMP%]{font-size:.8125rem;word-break:break-word}.t-alert-close[_ngcontent-%COMP%]{margin-left:auto;padding:0 10px;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;cursor:pointer}"] });
    return AlertComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 't-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], message: [{
            type: Input
        }], hideIcon: [{
            type: Input
        }], enableClose: [{
            type: Input
        }], onCloseClick: [{
            type: Output
        }] }); })();

var COMPONENTS = [
    NavComponent,
    HeaderComponent,
    BadgeComponent,
    ButtonComponent,
    DynamicFieldsComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    ToastComponent,
    NavigateTopComponent,
    AlertComponent
];
var EXPORTEDCOMPONENTS = [
    NavComponent,
    HeaderComponent,
    BadgeComponent,
    ButtonComponent,
    DynamicFieldsComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    ToastComponent,
    NavigateTopComponent,
    AlertComponent
];

var SERVICES = [
    MessageService
];

var _c0$3 = ["*"];
var TooltipContentComponent = /** @class */ (function () {
    function TooltipContentComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.animation = true;
        this.placement = 'bottom';
        this.isFade = false;
        this.isIn = false;
        this.left = -100000;
        this.top = -100000;
    }
    TooltipContentComponent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    TooltipContentComponent.prototype.show = function () {
        if (!this.hostElement) {
            return;
        }
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    };
    TooltipContentComponent.prototype.hide = function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    };
    TooltipContentComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipContentComponent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipContentComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipContentComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) { // IE
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    TooltipContentComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    TooltipContentComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) { return new (t || TooltipContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
    TooltipContentComponent.ɵcmp = ɵɵdefineComponent({ type: TooltipContentComponent, selectors: [["tooltip-content"]], inputs: { animation: "animation", content: "content", hostElement: "hostElement", placement: "placement" }, ngContentSelectors: _c0$3, decls: 4, vars: 12, consts: [["role", "tooltip"], [1, "tooltip-inner"]], template: function TooltipContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵprojection(2);
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMapInterpolate1("tooltip ", ctx.placement, "");
            ɵɵstyleProp("top", ctx.top + "px")("left", ctx.left + "px");
            ɵɵclassProp("in", ctx.isIn)("fade", ctx.isFade);
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.content, " ");
        } }, styles: [".tooltip[_ngcontent-%COMP%]{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%]{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"] });
    return TooltipContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipContentComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'tooltip-content',
                template: "\n            <div class=\"tooltip {{ placement }}\"\n                [style.top]=\"top + 'px'\"\n                [style.left]=\"left + 'px'\"\n                [class.in]=\"isIn\"\n                [class.fade]=\"isFade\"\n                role=\"tooltip\">\n                <div class=\"tooltip-inner\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n            </div>",
                styleUrls: ['./tooltip.scss']
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, { animation: [{
            type: Input
        }], content: [{
            type: Input
        }], hostElement: [{
            type: Input
        }], placement: [{
            type: Input
        }] }); })();

var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'bottom';
    }
    TooltipDirective.prototype.show = function () {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            var factory = this.resolver.resolveComponentFactory(TooltipContentComponent);
            if (!this.visible) {
                return;
            }
            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = this.content;
            this.tooltip.instance.placement = this.tooltipPlacement;
            this.tooltip.instance.animation = this.tooltipAnimation;
        }
        else {
            var tooltip = this.content;
            if (!tooltip) {
                return;
            }
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    };
    TooltipDirective.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.tooltip) {
            this.tooltip.destroy();
        }
        if (this.content instanceof TooltipContentComponent) {
            (this.content).hide();
        }
    };
    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver)); };
    TooltipDirective.ɵdir = ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() { return ctx.show(); })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("focusout", function TooltipDirective_focusout_HostBindingHandler() { return ctx.hide(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.hide(); });
        } }, inputs: { content: ["tTooltip", "content"], tooltipDisabled: "tooltipDisabled", tooltipAnimation: "tooltipAnimation", tooltipPlacement: "tooltipPlacement" } });
    return TooltipDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tTooltip]'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: ComponentFactoryResolver }]; }, { content: [{
            type: Input,
            args: ['tTooltip']
        }], tooltipDisabled: [{
            type: Input
        }], tooltipAnimation: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], show: [{
            type: HostListener,
            args: ['focusin']
        }, {
            type: HostListener,
            args: ['mouseenter']
        }], hide: [{
            type: HostListener,
            args: ['focusout']
        }, {
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

var DIRECTIVES = [
    TooltipDirective,
    TooltipContentComponent
];
var EXPORTEDDIRECTIVES = [
    TooltipDirective
];
var ENTRYPOINTDIRECTIVES = [
    TooltipContentComponent
];

var NgLibrary = /** @class */ (function () {
    function NgLibrary() {
    }
    NgLibrary.ɵmod = ɵɵdefineNgModule({ type: NgLibrary });
    NgLibrary.ɵinj = ɵɵdefineInjector({ factory: function NgLibrary_Factory(t) { return new (t || NgLibrary)(); }, providers: __spread(SERVICES), imports: [[
                CommonModule,
                HttpClientModule,
                RouterModule,
                FormsModule,
                DropdownModule,
                ToastModule
            ]] });
    return NgLibrary;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgLibrary, { declarations: [NavComponent, HeaderComponent, BadgeComponent, ButtonComponent, DynamicFieldsComponent, CheckboxComponent, RadioComponent, DropdownComponent, ToastComponent, NavigateTopComponent, AlertComponent, TooltipDirective, TooltipContentComponent], imports: [CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        DropdownModule,
        ToastModule], exports: [NavComponent, HeaderComponent, BadgeComponent, ButtonComponent, DynamicFieldsComponent, CheckboxComponent, RadioComponent, DropdownComponent, ToastComponent, NavigateTopComponent, AlertComponent, TooltipDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgLibrary, [{
        type: NgModule,
        args: [{
                declarations: __spread(COMPONENTS, DIRECTIVES),
                imports: [
                    CommonModule,
                    HttpClientModule,
                    RouterModule,
                    FormsModule,
                    DropdownModule,
                    ToastModule
                ],
                providers: __spread(SERVICES),
                exports: __spread(EXPORTEDCOMPONENTS, EXPORTEDDIRECTIVES),
                entryComponents: __spread(ENTRYPOINTDIRECTIVES)
            }]
    }], null, null); })();

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
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(ɵɵinject(HttpClient)); };
    HttpService.ɵprov = ɵɵdefineInjectable({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
    return HttpService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(HttpService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

var ToastService = /** @class */ (function () {
    function ToastService(messageService) {
        this.messageService = messageService;
        this.defaultParam = {
            severity: 'success',
            life: 4000
        };
    }
    ToastService.prototype.show = function (toastParam) {
        var param = this.formatConfig(toastParam);
        this.messageService.add(param);
    };
    ToastService.prototype.showMultiple = function (toastParam) {
        var e_1, _a;
        if (!toastParam || toastParam && !toastParam.length) {
            return;
        }
        var param = [];
        try {
            for (var toastParam_1 = __values(toastParam), toastParam_1_1 = toastParam_1.next(); !toastParam_1_1.done; toastParam_1_1 = toastParam_1.next()) {
                var item = toastParam_1_1.value;
                param.push(this.formatConfig(item));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (toastParam_1_1 && !toastParam_1_1.done && (_a = toastParam_1.return)) _a.call(toastParam_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.messageService.addAll(param);
    };
    ToastService.prototype.formatConfig = function (toastParam) {
        var param = Object.assign({}, this.defaultParam);
        var id = toastParam.id, key = toastParam.key, title = toastParam.title, message = toastParam.message, type = toastParam.type, closeButton = toastParam.closeButton, timeOut = toastParam.timeOut, sticky = toastParam.sticky, data = toastParam.data;
        if (id) {
            param.id = id;
        }
        if (key) {
            param.key = key;
        }
        if (title) {
            param.summary = title;
        }
        if (message) {
            param.detail = message;
        }
        if (type) {
            param.severity = type;
        }
        if (closeButton) {
            param.closable = closeButton;
        }
        if (timeOut) {
            param.life = timeOut;
        }
        if (sticky) {
            param.sticky = sticky;
        }
        if (data) {
            param.data = data;
        }
        return param;
    };
    ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(ɵɵinject(MessageService)); };
    ToastService.ɵprov = ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
    return ToastService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MessageService }]; }, null); })();

/*
 * Public API Surface of ng-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, BadgeComponent, ButtonComponent, CheckboxComponent, DropdownComponent, DynamicFieldsComponent, HeaderComponent, HttpService, NavComponent, NavigateTopComponent, NgLibrary, RadioComponent, ToastComponent, ToastService, TooltipDirective };
//# sourceMappingURL=fourjs-ng-library.js.map
