(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/router'), require('@angular/forms'), require('ngx-toastr'), require('primeng/dropdown'), require('rxjs/operators'), require('tutility')) :
    typeof define === 'function' && define.amd ? define('@fourjs/ng-library', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/router', '@angular/forms', 'ngx-toastr', 'primeng/dropdown', 'rxjs/operators', 'tutility'], factory) :
    (global = global || self, factory((global.fourjs = global.fourjs || {}, global.fourjs['ng-library'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.ng.router, global.ng.forms, global.ngxToastr, global.dropdown, global.rxjs.operators, global.tutility));
}(this, function (exports, core, common, http, router, forms, ngxToastr, dropdown, operators, tutility) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/nav/nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavComponent = /** @class */ (function () {
        function NavComponent(_router) {
            this._router = _router;
            this.menuItems = [];
            this.sliderStatus = new core.EventEmitter();
            this.menuClickTrigger = new core.EventEmitter();
            this.selectedMenu = (/** @type {?} */ ({}));
        }
        Object.defineProperty(NavComponent.prototype, "expanded", {
            get: /**
             * @return {?}
             */
            function () {
                return this._expanded;
            },
            set: /**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                document.getElementsByTagName('body')[0].style.overflow = status ? 'hidden' : 'auto';
                this._expanded = status;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._router.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; }))).subscribe((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                /** @type {?} */
                var i = 0;
                /** @type {?} */
                var k = -1;
                /** @type {?} */
                var curRoute = route.url;
                /** @type {?} */
                var menuItemLen = _this.menuItems.length;
                /** @type {?} */
                var menuHighlight = (/**
                 * @param {?} menu
                 * @return {?}
                 */
                function (menu) {
                    if (curRoute.includes(menu.route)) {
                        _this.selectedMenu = { idx: i, subMenuIdx: k };
                        _this.expandedMenu = i;
                        return true;
                    }
                });
                for (i = 0; i < menuItemLen; i++) {
                    /** @type {?} */
                    var menuItem = _this.menuItems[i];
                    if (menuItem.route && !menuItem.children) {
                        /** @type {?} */
                        var dobreak = menuHighlight(menuItem);
                        if (dobreak) {
                            return;
                        }
                    }
                    if (menuItem.children) {
                        /** @type {?} */
                        var subMenuLen = menuItem.children.length;
                        for (k = 0; k < subMenuLen; k++) {
                            /** @type {?} */
                            var subMenu = menuItem.children[k];
                            /** @type {?} */
                            var dobreak = menuHighlight(subMenu);
                            if (dobreak) {
                                return;
                            }
                        }
                    }
                }
                _this.selectedMenu = (/** @type {?} */ ({}));
                _this.expandedMenu = undefined;
            }));
        };
        /**
         * @return {?}
         */
        NavComponent.prototype.toggleMenu = /**
         * @return {?}
         */
        function () {
            this.expanded = !this.expanded;
            this.sliderStatus.emit(this.expanded);
        };
        /**
         * @param {?} menu
         * @param {?} index
         * @return {?}
         */
        NavComponent.prototype.onMenuClick = /**
         * @param {?} menu
         * @param {?} index
         * @return {?}
         */
        function (menu, index) {
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
        /**
         * @param {?} menu
         * @param {?} subMenu
         * @param {?} index
         * @param {?} subIdx
         * @return {?}
         */
        NavComponent.prototype.onSubMenuClick = /**
         * @param {?} menu
         * @param {?} subMenu
         * @param {?} index
         * @param {?} subIdx
         * @return {?}
         */
        function (menu, subMenu, index, subIdx) {
            this.selectedMenu = { idx: index, subMenuIdx: subIdx };
            if (!this.diableDefaultClick) {
                this._router.navigate([subMenu.route]);
                this.toggleMenu();
            }
            this.menuClickTrigger.emit({ isParent: false, menu: menu, subMenu: subMenu });
        };
        NavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-nav',
                        template: "<div class=\"main-container-sidebar\" id=\"main-container-sidebar\" [ngClass]=\"{'sidebar-expanded': expanded}\">\n  <div class=\"header\">\n    <div class=\"sidebar-toggle\" (click)=\"toggleMenu()\">\n      <i class=\"fa {{expanded ? 'fa-times' : 'fa-bars'}}\"></i>\n    </div>\n  </div>\n  <div id=\"sidebar-content\" class=\"sidebar-content\">\n    <ul role=\"menu\" id=\"main-nav\" class=\"main-nav\">\n      <li role=\"menuitem\" class=\"list-item\" *ngFor=\"let menuItem of menuItems;let idx = index\"\n        [class.selected]=\"selectedMenu?.idx === idx\">\n        <div class=\"menu-item\" (click)=\"onMenuClick(menuItem, idx)\">\n          <t-badge class=\"badge\" [badge]=\"menuItem?.badge\"></t-badge>\n          <span class=\"label\">{{menuItem.label}}</span>\n        </div>\n\n        <ul role=\"menu\" class=\"sub-nav\" [class.expanded]=\"expandedMenu === idx\">\n          <li role=\"menuitem\" *ngFor=\"let subMenuItem of menuItem.children; let childIdx = index\"\n            (click)=\"onSubMenuClick(menuItem, subMenuItem, idx, childIdx)\" class=\"list-item\"\n            [class.active]=\"selectedMenu?.subMenuIdx === childIdx\" tabindex=\"-1\">\n            <div class=\"menu-item\">\n              <span class=\"label\">\n                {{subMenuItem.label}}\n              </span>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"main-container-sidbar overlay\" *ngIf=\"expanded\" (click)=\"toggleMenu()\"></div>\n",
                        styles: ["#main-container-sidebar{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar .header{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar .header>:not(:last-child){margin-right:0}#main-container-sidebar .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar .sidebar-toggle i.fa{font-size:2.1875rem;color:#fff}#main-container-sidebar .list-item{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar .list-item>:not(:last-child){margin-bottom:0}#main-container-sidebar .menu-item{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar .menu-item>:not(:last-child){margin-right:.625rem}#main-container-sidebar .badge{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar .label{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar .main-nav .label{font-weight:700}#main-container-sidebar .sub-nav{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar .sub-nav .list-item{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar .sub-nav .label{font-weight:400}#main-container-sidebar .sub-nav .menu-item{height:2.1875rem;padding:0}#main-container-sidebar .sub-nav.expanded{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar .selected>.menu-item{border-left:4px solid #0069b1}#main-container-sidebar .selected .badge,#main-container-sidebar .selected .label{color:#0069b1}#main-container-sidebar .selected .active{background-color:#e5eaee}.main-container-sidbar.overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded{left:0}"]
                    }] }
        ];
        /** @nocollapse */
        NavComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        NavComponent.propDecorators = {
            menuItems: [{ type: core.Input }],
            expanded: [{ type: core.Input }],
            diableDefaultClick: [{ type: core.Input }],
            sliderStatus: [{ type: core.Output }],
            menuClickTrigger: [{ type: core.Output }]
        };
        return NavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/header/header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.sideBarToggled = new core.EventEmitter();
            this.logoClickEmitter = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 't-header',
                        template: "<div class=\"main-container-header\">\n\n  <div class=\"content\">\n\n    <div id=\"menu-icon-container\" class=\"sidebar-toggle\" (click)=\"handleSidebarToggle()\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n\n    <div id=\"logo-container\" class=\"logo-container\">\n\n      <div *ngIf=\"logoSrc\" class=\"logo\" (click)=\"onLogoClick()\">\n        <img [src]=\"logoSrc\" />\n      </div>\n\n      <div class=\"title-container\">\n        <span class=\"title\" [routerLink]=\"routeLink\">{{title}}</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                        styles: [".main-container-header{position:absolute;left:0;right:0;height:4.5rem;overflow:hidden;background-color:#000;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;z-index:10;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.main-container-header>:not(:last-child){margin-right:0}.main-container-header .content{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;margin-right:.3125rem}.main-container-header .content>:not(:last-child){margin-right:0}.main-container-header .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}.main-container-header .sidebar-toggle i.fa-bars{font-size:2.1875rem;color:#fff}.main-container-header .logo-container{cursor:pointer;padding-left:2rem;display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container>:not(:last-child){margin-bottom:0}.main-container-header .logo-container .logo{position:relative;padding-right:.3125rem;display:inline-block}.main-container-header .logo-container .logo img{height:1.28875rem;width:3.25rem}.main-container-header .logo-container .title-container{display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start}.main-container-header .logo-container .title-container>:not(:last-child){margin-right:.625rem}.main-container-header .logo-container .title-container .title{color:#fff;font-weight:500;font-size:1.625rem;letter-spacing:.0625rem;text-transform:uppercase}"]
                    }] }
        ];
        HeaderComponent.propDecorators = {
            title: [{ type: core.Input }],
            logoSrc: [{ type: core.Input }],
            routeLink: [{ type: core.Input }],
            sideBarToggled: [{ type: core.Output }],
            logoClickEmitter: [{ type: core.Output }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/badge/badge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeComponent = /** @class */ (function () {
        function BadgeComponent() {
        }
        BadgeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-badge',
                        template: "<i class=\"fa {{badge}}\" aria-hidden=\"true\"></i>"
                    }] }
        ];
        BadgeComponent.propDecorators = {
            badge: [{ type: core.Input }]
        };
        return BadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.bPos = 'left';
        }
        Object.defineProperty(ButtonComponent.prototype, "badgePosition", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.bPos = ['right', 'left'].includes(val) ? val : 'left';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonComponent.prototype, "type", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val) ? val : undefined;
            },
            enumerable: true,
            configurable: true
        });
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-button',
                        template: "\n    <button class=\"btn waves-effect waves-light {{buttonType}}\"\n      [ngClass]=\"{'disabled': disabled, 'btn-large': isLarge, 'btn-small': !isLarge}\" [disabled]=\"disabled\">\n      <t-badge *ngIf=\"badge\" [class]=\"bPos\" [badge]=\"badge\"></t-badge>\n      {{label}}\n    </button>\n  ",
                        styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.btn,.btn-floating,.btn-large,.btn-small,.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.btn-floating:hover,.btn-large:hover,.btn-small:hover,.btn:hover,.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.btn,.btn-flat,.btn-large,.btn-small{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-flat.disabled,.btn-flat:disabled,.btn-flat[disabled],.btn-floating.disabled,.btn-floating:disabled,.btn-floating[disabled],.btn-large.disabled,.btn-large:disabled,.btn-large[disabled],.btn-small.disabled,.btn-small:disabled,.btn-small[disabled],.btn.disabled,.btn:disabled,.btn[disabled],.disabled.btn-large,.disabled.btn-small{pointer-events:none;background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-flat.disabled:hover,.btn-flat:disabled:hover,.btn-flat[disabled]:hover,.btn-floating.disabled:hover,.btn-floating:disabled:hover,.btn-floating[disabled]:hover,.btn-large.disabled:hover,.btn-large:disabled:hover,.btn-large[disabled]:hover,.btn-small.disabled:hover,.btn-small:disabled:hover,.btn-small[disabled]:hover,.btn.disabled:hover,.btn:disabled:hover,.btn[disabled]:hover,.disabled.btn-large:hover,.disabled.btn-small:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn,.btn-flat,.btn-floating,.btn-large,.btn-small{font-size:14px;outline:0}.btn i,.btn-flat i,.btn-floating i,.btn-large i,.btn-small i{font-size:1.3rem;line-height:inherit}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#82b20a;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn-large:hover,.btn-small:hover,.btn:hover{background-color:#94ca0b}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#82b20a;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#82b20a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#82b20a;border-radius:50%;-ms-transform:scale(0);transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,.1)}.btn-flat.btn-flat[disabled],.btn-flat.disabled{background-color:transparent!important;color:#b3b3b3!important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}t-badge.left{margin-right:.5rem}t-badge.right{margin-left:.5rem}.primary{background:#0069b1}.primary:hover{background:#003f81}.secondary{background:#82b20a}.secondary:hover{background:#508200}.tertiary{background:#757575}.tertiary:hover{background:#616161}"]
                    }] }
        ];
        ButtonComponent.propDecorators = {
            label: [{ type: core.Input }],
            badge: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            isLarge: [{ type: core.Input }],
            badgePosition: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicFieldsComponent = /** @class */ (function () {
        function DynamicFieldsComponent() {
            // custom action button
            this.customActionBtn = [];
            this.primaryHandler = new core.EventEmitter();
            this.secondaryHandler = new core.EventEmitter();
            this.renderFields = [];
            this.data = {};
            this.dropdownOptions = {};
            this.primaryBtnLabel = 'Search';
            this.secondaryBtnLabel = 'Reset';
        }
        Object.defineProperty(DynamicFieldsComponent.prototype, "fields", {
            // fields to be rendered
            set: 
            // fields to be rendered
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                if (val && val.length) {
                    this.renderFields = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicFieldsComponent.prototype, "options", {
            // option parameter required by component to render
            set: 
            // option parameter required by component to render
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                if (val) {
                    if (val.dropdown) {
                        this.dropdownOptions = val.dropdown;
                    }
                    if (val.defaultBtn) {
                        this.primaryBtnLabel = val.defaultBtn.primaryLabel;
                        this.secondaryBtnLabel = val.defaultBtn.secondaryLabel;
                        this.removeSecBtn = val.defaultBtn.removeSecBtn;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicFieldsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        DynamicFieldsComponent.prototype.primaryClick = /**
         * @return {?}
         */
        function () {
            this.primaryHandler.emit(this.data);
        };
        /**
         * @return {?}
         */
        DynamicFieldsComponent.prototype.secondaryClick = /**
         * @return {?}
         */
        function () {
            this.secondaryHandler.emit(this.data);
        };
        /**
         * @return {?}
         */
        DynamicFieldsComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
            this.data = {};
        };
        DynamicFieldsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-dynamic-fields',
                        template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'>\n      </t-checkbox>\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <label [for]=\"field.model\">\n        <span>{{field.label}}</span>\n        <input [id]='field.model' type=\"radio\" [(ngModel)]=\"data[field.model]\"\n          [name]='field.name' />\n      </label>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <select [id]='field.model' [(ngModel)]=\"data[field.model]\">\n        <option *ngFor=\"let item of dropdownOptions[field.options]\" [value]=\"item.value\">\n          {{item.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!disableDefaultAction\">\n      <t-button [label]=\"primaryBtnLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecBtn\" [label]=\"secondaryBtnLabel\" type=\"secondary\"\n        (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n    <div class=\"custom-action-button\" *ngIf=\"disableDefaultAction\">\n      <span>\n        <t-button></t-button>\n      </span>\n    </div>\n  </div>\n</div>",
                        styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
                    }] }
        ];
        /** @nocollapse */
        DynamicFieldsComponent.ctorParameters = function () { return []; };
        DynamicFieldsComponent.propDecorators = {
            fields: [{ type: core.Input }],
            options: [{ type: core.Input }],
            disableDefaultAction: [{ type: core.Input }],
            customActionBtn: [{ type: core.Input }],
            primaryHandler: [{ type: core.Output }],
            secondaryHandler: [{ type: core.Output }]
        };
        return DynamicFieldsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/checkbox/checkbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.modelChange = new core.EventEmitter();
            this.handleChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.handleOnChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.checked = event.target.checked;
            this.handleChange.emit(this.checked);
            this.modelChange.emit(this.checked);
        };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-checkbox',
                        template: "<label class=\"checkbox\" [class.disabled]=\"disabled\">{{label}}\n  <input type=\"checkbox\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\"\n    (change)=\"handleOnChange($event)\" [(ngModel)]=\"model\">\n  <span class=\"fa checkmark checkmark-primary active\"></span>\n</label>",
                        styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.checkbox{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox input{position:relative;opacity:0}.checkbox.disabled{opacity:.5;cursor:default;pointer-events:none}.checkbox .checkmark-primary{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox .checkmark-primary.active{background-color:#fff;border:.0625rem solid #0069b1}.checkbox .checkmark:after{content:\"\";position:absolute;display:none;bottom:0;left:0;top:-1px;right:0}.checkbox .checkmark.active:after{content:\"\\f00c\";color:#fff}.checkbox input:checked~.checkmark{background-color:#0069b1}.checkbox input:checked~.checkmark:after{display:block;font-size:.8125rem;height:1rem;line-height:15px}.checkbox .checkmark.disabled:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            label: [{ type: core.Input }],
            name: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            model: [{ type: core.Input }],
            modelChange: [{ type: core.Output }],
            handleChange: [{ type: core.Output }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/radio/radio.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadioComponent = /** @class */ (function () {
        function RadioComponent() {
            this.value = true;
            this.modelChange = new core.EventEmitter();
            this.handleChange = new core.EventEmitter();
        }
        Object.defineProperty(RadioComponent.prototype, "model", {
            get: /**
             * @return {?}
             */
            function () {
                return this._model;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._model = value;
                this.checked = value === this.value ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        RadioComponent.prototype.handleOnChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var checked = event.target.checked;
            this.checked = (checked && this.value === this.model) ? true : false;
            /** @type {?} */
            var value = checked ? this.value : false;
            this.handleChange.emit(value);
            this.modelChange.emit(value);
        };
        RadioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-radio',
                        template: "<label class=\"radio\" [class.disabled]=\"disabled\" [ngClass]=\"{'active': checked}\">\n  &nbsp;{{label}}\n  <input type=\"radio\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\"\n    (change)=\"handleOnChange($event)\" [(ngModel)]=\"model\" [value]=\"value\">\n</label>",
                        styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.radio{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio input{position:relative;opacity:0}.radio:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled{opacity:.5;cursor:default;pointer-events:none}.radio.active:before{content:'';border:5px solid #0069b1}"]
                    }] }
        ];
        RadioComponent.propDecorators = {
            label: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            name: [{ type: core.Input }],
            value: [{ type: core.Input }],
            model: [{ type: core.Input }],
            modelChange: [{ type: core.Output }],
            handleChange: [{ type: core.Output }]
        };
        return RadioComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/class/uiInput.class.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiInput = /** @class */ (function () {
        function UiInput() {
            this.onChange = tutility.noop;
            this.onTouched = tutility.noop;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        UiInput.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { };
        /**
         * @param {?} fn
         * @return {?}
         */
        UiInput.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        UiInput.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        UiInput.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) { };
        return UiInput;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dropdown/dropdown.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function (_super) {
        __extends(DropdownComponent, _super);
        function DropdownComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // tslint:disable: no-output-on-prefix
            _this.onFocus = new core.EventEmitter();
            _this.onBlur = new core.EventEmitter();
            _this._tooltipPosition = 'top';
            return _this;
        }
        Object.defineProperty(DropdownComponent.prototype, "options", {
            get: /**
             * @return {?}
             */
            function () {
                return this._options;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._options = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DropdownComponent.prototype, "tooltipPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._tooltipPosition;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._tooltipPosition = value || 'top';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        DropdownComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            this.onChange(value);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DropdownComponent.prototype.onChangeHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.writeValue(event.value);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DropdownComponent.prototype.focusHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onFocus.emit(event);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DropdownComponent.prototype.blurHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onBlur.emit(event);
        };
        DropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 't-dropdown',
                        template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n    [autoDisplayFirst]=\"autoDisplayFirst\"\n    [scrollHeight]=\"scrollHeight\"\n    [autofocus]=\"autofocus\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return DropdownComponent; })),
                                multi: true
                            }],
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"]
                    }] }
        ];
        DropdownComponent.propDecorators = {
            options: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            staticLabel: [{ type: core.Input }],
            name: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            tooltipPosition: [{ type: core.Input }],
            autoDisplayFirst: [{ type: core.Input }],
            scrollHeight: [{ type: core.Input }],
            autofocus: [{ type: core.Input }],
            onFocus: [{ type: core.Output }],
            onBlur: [{ type: core.Output }]
        };
        return DropdownComponent;
    }(UiInput));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/components.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        NavComponent,
        HeaderComponent,
        BadgeComponent,
        ButtonComponent,
        DynamicFieldsComponent,
        CheckboxComponent,
        RadioComponent,
        DropdownComponent
    ];
    /** @type {?} */
    var EXPORTEDCOMPONENTS = [
        NavComponent,
        HeaderComponent,
        BadgeComponent,
        ButtonComponent,
        DynamicFieldsComponent,
        CheckboxComponent,
        RadioComponent,
        DropdownComponent
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/http.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpService = /** @class */ (function () {
        function HttpService(http$1) {
            this.http = http$1;
            /** @type {?} */
            var header = new http.HttpHeaders()
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ HttpService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(core.ɵɵinject(http.HttpClient)); }, token: HttpService, providedIn: "root" });
        return HttpService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/toast.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastService = /** @class */ (function () {
        function ToastService(toastr) {
            this.toastr = toastr;
            this.defaultParam = {
                type: 'success',
                enableHtml: true,
                timeOut: 10000,
                closeButton: false
            };
        }
        /**
         * @param {?} toastParam
         * @return {?}
         */
        ToastService.prototype.show = /**
         * @param {?} toastParam
         * @return {?}
         */
        function (toastParam) {
            /** @type {?} */
            var param = Object.assign({}, this.defaultParam, toastParam);
            switch (toastParam.type) {
                case 'info':
                    return this.toastr.info(toastParam.message, toastParam.title, param);
                case 'success':
                    return this.toastr.success(toastParam.message, toastParam.title, param);
                case 'error':
                    return this.toastr.error(toastParam.message, toastParam.title, param);
                case 'warning':
                    return this.toastr.warning(toastParam.message, toastParam.title, param);
                default:
                    throw new Error('invalid parameter');
            }
        };
        ToastService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ToastService.ctorParameters = function () { return [
            { type: ngxToastr.ToastrService }
        ]; };
        /** @nocollapse */ ToastService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(core.ɵɵinject(ngxToastr.ToastrService)); }, token: ToastService, providedIn: "root" });
        return ToastService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/services.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SERVICES = [
        HttpService,
        ToastService
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/tooltip/tootlip.content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        TooltipContentComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.show();
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        TooltipContentComponent.prototype.show = /**
         * @return {?}
         */
        function () {
            if (!this.hostElement) {
                return;
            }
            /** @type {?} */
            var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
            this.top = p.top;
            this.left = p.left;
            this.isIn = true;
            if (this.animation) {
                this.isFade = true;
            }
        };
        /**
         * @return {?}
         */
        TooltipContentComponent.prototype.hide = /**
         * @return {?}
         */
        function () {
            this.top = -100000;
            this.left = -100000;
            this.isIn = true;
            if (this.animation) {
                this.isFade = false;
            }
        };
        /**
         * @private
         * @param {?} hostEl
         * @param {?} targetEl
         * @param {?} positionStr
         * @param {?=} appendToBody
         * @return {?}
         */
        TooltipContentComponent.prototype.positionElements = /**
         * @private
         * @param {?} hostEl
         * @param {?} targetEl
         * @param {?} positionStr
         * @param {?=} appendToBody
         * @return {?}
         */
        function (hostEl, targetEl, positionStr, appendToBody) {
            if (appendToBody === void 0) { appendToBody = false; }
            /** @type {?} */
            var positionStrParts = positionStr.split('-');
            /** @type {?} */
            var pos0 = positionStrParts[0];
            /** @type {?} */
            var pos1 = positionStrParts[1] || 'center';
            /** @type {?} */
            var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
            /** @type {?} */
            var targetElWidth = targetEl.offsetWidth;
            /** @type {?} */
            var targetElHeight = targetEl.offsetHeight;
            /** @type {?} */
            var shiftWidth = {
                center: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                }),
                left: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.left;
                }),
                right: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.left + hostElPos.width;
                })
            };
            /** @type {?} */
            var shiftHeight = {
                center: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                }),
                top: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.top;
                }),
                bottom: (/**
                 * @return {?}
                 */
                function () {
                    return hostElPos.top + hostElPos.height;
                })
            };
            /** @type {?} */
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
        /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        TooltipContentComponent.prototype.position = /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        function (nativeEl) {
            /** @type {?} */
            var offsetParentBCR = { top: 0, left: 0 };
            /** @type {?} */
            var elBCR = this.offset(nativeEl);
            /** @type {?} */
            var offsetParentEl = this.parentOffsetEl(nativeEl);
            if (offsetParentEl !== window.document) {
                offsetParentBCR = this.offset(offsetParentEl);
                offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
                offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
            }
            /** @type {?} */
            var boundingClientRect = nativeEl.getBoundingClientRect();
            return {
                width: boundingClientRect.width || nativeEl.offsetWidth,
                height: boundingClientRect.height || nativeEl.offsetHeight,
                top: elBCR.top - offsetParentBCR.top,
                left: elBCR.left - offsetParentBCR.left
            };
        };
        /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        TooltipContentComponent.prototype.offset = /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        function (nativeEl) {
            /** @type {?} */
            var boundingClientRect = nativeEl.getBoundingClientRect();
            return {
                width: boundingClientRect.width || nativeEl.offsetWidth,
                height: boundingClientRect.height || nativeEl.offsetHeight,
                top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
                left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
            };
        };
        /**
         * @private
         * @param {?} nativeEl
         * @param {?} cssProp
         * @return {?}
         */
        TooltipContentComponent.prototype.getStyle = /**
         * @private
         * @param {?} nativeEl
         * @param {?} cssProp
         * @return {?}
         */
        function (nativeEl, cssProp) {
            if (((/** @type {?} */ (nativeEl))).currentStyle) { // IE
                return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
            }
            if (window.getComputedStyle) {
                return ((/** @type {?} */ (window.getComputedStyle(nativeEl))))[cssProp];
            }
            // finally try and get inline style
            return ((/** @type {?} */ (nativeEl.style)))[cssProp];
        };
        /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        TooltipContentComponent.prototype.isStaticPositioned = /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        function (nativeEl) {
            return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
        };
        /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        TooltipContentComponent.prototype.parentOffsetEl = /**
         * @private
         * @param {?} nativeEl
         * @return {?}
         */
        function (nativeEl) {
            /** @type {?} */
            var offsetParent = nativeEl.offsetParent || window.document;
            while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || window.document;
        };
        TooltipContentComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'tooltip-content',
                        template: "\n            <div class=\"tooltip {{ placement }}\"\n                [style.top]=\"top + 'px'\"\n                [style.left]=\"left + 'px'\"\n                [class.in]=\"isIn\"\n                [class.fade]=\"isFade\"\n                role=\"tooltip\">\n                <div class=\"tooltip-inner\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n            </div>",
                        styles: [".tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipContentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        TooltipContentComponent.propDecorators = {
            animation: [{ type: core.Input }],
            content: [{ type: core.Input }],
            hostElement: [{ type: core.Input }],
            placement: [{ type: core.Input }]
        };
        return TooltipContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/tooltip/tooltip.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective(viewContainerRef, resolver) {
            this.viewContainerRef = viewContainerRef;
            this.resolver = resolver;
            this.tooltipAnimation = true;
            this.tooltipPlacement = 'bottom';
        }
        /**
         * @return {?}
         */
        TooltipDirective.prototype.show = /**
         * @return {?}
         */
        function () {
            if (this.tooltipDisabled || this.visible) {
                return;
            }
            this.visible = true;
            if (typeof this.content === 'string') {
                /** @type {?} */
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
                /** @type {?} */
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
        /**
         * @return {?}
         */
        TooltipDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
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
        TooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tTooltip]'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver }
        ]; };
        TooltipDirective.propDecorators = {
            content: [{ type: core.Input, args: ['tTooltip',] }],
            tooltipDisabled: [{ type: core.Input }],
            tooltipAnimation: [{ type: core.Input }],
            tooltipPlacement: [{ type: core.Input }],
            show: [{ type: core.HostListener, args: ['focusin',] }, { type: core.HostListener, args: ['mouseenter',] }],
            hide: [{ type: core.HostListener, args: ['focusout',] }, { type: core.HostListener, args: ['mouseleave',] }]
        };
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DIRECTIVES = [
        TooltipDirective,
        TooltipContentComponent
    ];
    /** @type {?} */
    var EXPORTEDDIRECTIVES = [
        TooltipDirective
    ];
    /** @type {?} */
    var ENTRYPOINTDIRECTIVES = [
        TooltipContentComponent
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-library.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgLibrary = /** @class */ (function () {
        function NgLibrary() {
        }
        NgLibrary.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(COMPONENTS, DIRECTIVES),
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            router.RouterModule,
                            forms.FormsModule,
                            ngxToastr.ToastrModule.forRoot(),
                            dropdown.DropdownModule
                        ],
                        providers: __spread(SERVICES),
                        exports: __spread([
                            // module export
                            forms.FormsModule,
                            http.HttpClientModule
                        ], EXPORTEDCOMPONENTS, EXPORTEDDIRECTIVES),
                        entryComponents: __spread(ENTRYPOINTDIRECTIVES)
                    },] }
        ];
        return NgLibrary;
    }());

    Object.defineProperty(exports, 'createMap', {
        enumerable: true,
        get: function () {
            return tutility.createMap;
        }
    });
    Object.defineProperty(exports, 'deepCopy', {
        enumerable: true,
        get: function () {
            return tutility.deepCopy;
        }
    });
    Object.defineProperty(exports, 'getDataFromLocal', {
        enumerable: true,
        get: function () {
            return tutility.getDataFromLocal;
        }
    });
    Object.defineProperty(exports, 'getDataFromSession', {
        enumerable: true,
        get: function () {
            return tutility.getDataFromSession;
        }
    });
    Object.defineProperty(exports, 'hasKey', {
        enumerable: true,
        get: function () {
            return tutility.hasKey;
        }
    });
    Object.defineProperty(exports, 'isArray', {
        enumerable: true,
        get: function () {
            return tutility.isArray;
        }
    });
    Object.defineProperty(exports, 'isBoolean', {
        enumerable: true,
        get: function () {
            return tutility.isBoolean;
        }
    });
    Object.defineProperty(exports, 'isDefined', {
        enumerable: true,
        get: function () {
            return tutility.isDefined;
        }
    });
    Object.defineProperty(exports, 'isEmptyObject', {
        enumerable: true,
        get: function () {
            return tutility.isEmptyObject;
        }
    });
    Object.defineProperty(exports, 'isEqual', {
        enumerable: true,
        get: function () {
            return tutility.isEqual;
        }
    });
    Object.defineProperty(exports, 'isFunction', {
        enumerable: true,
        get: function () {
            return tutility.isFunction;
        }
    });
    Object.defineProperty(exports, 'isObject', {
        enumerable: true,
        get: function () {
            return tutility.isObject;
        }
    });
    Object.defineProperty(exports, 'noop', {
        enumerable: true,
        get: function () {
            return tutility.noop;
        }
    });
    Object.defineProperty(exports, 'removeItemFromLocal', {
        enumerable: true,
        get: function () {
            return tutility.removeItemFromLocal;
        }
    });
    Object.defineProperty(exports, 'removeItemFromSession', {
        enumerable: true,
        get: function () {
            return tutility.removeItemFromSession;
        }
    });
    Object.defineProperty(exports, 'setDataToLocal', {
        enumerable: true,
        get: function () {
            return tutility.setDataToLocal;
        }
    });
    Object.defineProperty(exports, 'setDataToSession', {
        enumerable: true,
        get: function () {
            return tutility.setDataToSession;
        }
    });
    Object.defineProperty(exports, 'sort', {
        enumerable: true,
        get: function () {
            return tutility.sort;
        }
    });
    exports.BadgeComponent = BadgeComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.DynamicFieldsComponent = DynamicFieldsComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.HttpService = HttpService;
    exports.NavComponent = NavComponent;
    exports.NgLibrary = NgLibrary;
    exports.RadioComponent = RadioComponent;
    exports.ToastService = ToastService;
    exports.ɵa = COMPONENTS;
    exports.ɵb = EXPORTEDCOMPONENTS;
    exports.ɵc = DIRECTIVES;
    exports.ɵd = EXPORTEDDIRECTIVES;
    exports.ɵe = ENTRYPOINTDIRECTIVES;
    exports.ɵf = TooltipDirective;
    exports.ɵg = TooltipContentComponent;
    exports.ɵh = SERVICES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fourjs-ng-library.umd.js.map
