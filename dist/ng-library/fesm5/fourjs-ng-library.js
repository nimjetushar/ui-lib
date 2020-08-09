import { __decorate, __metadata, __extends, __spread, __values } from 'tslib';
import { EventEmitter, Input, Output, Component, forwardRef, ViewEncapsulation, HostListener, ElementRef, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, Directive, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { filter } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

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
    NavComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NavComponent.prototype, "menuItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NavComponent.prototype, "expanded", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NavComponent.prototype, "diableDefaultClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NavComponent.prototype, "sliderStatus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NavComponent.prototype, "menuClickTrigger", void 0);
    NavComponent = __decorate([
        Component({
            selector: 't-nav',
            template: "<div class=\"main-container-sidebar\" id=\"main-container-sidebar\" [ngClass]=\"{'sidebar-expanded': expanded}\">\n  <div class=\"header\">\n    <div class=\"sidebar-toggle\" (click)=\"toggleMenu()\">\n      <i class=\"fa {{expanded ? 'fa-times' : 'fa-bars'}}\"></i>\n    </div>\n  </div>\n  <div id=\"sidebar-content\" class=\"sidebar-content\">\n    <ul role=\"menu\" id=\"main-nav\" class=\"main-nav\">\n      <li role=\"menuitem\" class=\"list-item\" *ngFor=\"let menuItem of menuItems;let idx = index\"\n        [class.selected]=\"selectedMenu?.idx === idx\">\n        <div class=\"menu-item\" (click)=\"onMenuClick(menuItem, idx)\">\n          <t-badge class=\"badge\" [badge]=\"menuItem?.badge\"></t-badge>\n          <span class=\"label\">{{menuItem.label}}</span>\n        </div>\n\n        <ul role=\"menu\" class=\"sub-nav\" [class.expanded]=\"expandedMenu === idx\">\n          <li role=\"menuitem\" *ngFor=\"let subMenuItem of menuItem.children; let childIdx = index\"\n            (click)=\"onSubMenuClick(menuItem, subMenuItem, idx, childIdx)\" class=\"list-item\"\n            [class.active]=\"selectedMenu?.subMenuIdx === childIdx\" tabindex=\"-1\">\n            <div class=\"menu-item\">\n              <span class=\"label\">\n                {{subMenuItem.label}}\n              </span>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"main-container-sidbar overlay\" *ngIf=\"expanded\" (click)=\"toggleMenu()\"></div>\n",
            styles: ["#main-container-sidebar{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar .header{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar .header>:not(:last-child){margin-right:0}#main-container-sidebar .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar .sidebar-toggle i.fa{font-size:2.1875rem;color:#fff}#main-container-sidebar .list-item{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar .list-item>:not(:last-child){margin-bottom:0}#main-container-sidebar .menu-item{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar .menu-item>:not(:last-child){margin-right:.625rem}#main-container-sidebar .badge{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar .label{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar .main-nav .label{font-weight:700}#main-container-sidebar .sub-nav{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar .sub-nav .list-item{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar .sub-nav .label{font-weight:400}#main-container-sidebar .sub-nav .menu-item{height:2.1875rem;padding:0}#main-container-sidebar .sub-nav.expanded{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar .selected>.menu-item{border-left:4px solid #0069b1}#main-container-sidebar .selected .badge,#main-container-sidebar .selected .label{color:#0069b1}#main-container-sidebar .selected .active{background-color:#e5eaee}.main-container-sidbar.overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded{left:0}"]
        }),
        __metadata("design:paramtypes", [Router])
    ], NavComponent);
    return NavComponent;
}());

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
    return HeaderComponent;
}());

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "badge", void 0);
    BadgeComponent = __decorate([
        Component({
            selector: 't-badge',
            template: "<i class=\"fa {{badge}}\" aria-hidden=\"true\"></i>"
        })
    ], BadgeComponent);
    return BadgeComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "badge", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "isLarge", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonComponent.prototype, "badgePosition", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonComponent.prototype, "type", null);
    ButtonComponent = __decorate([
        Component({
            selector: 't-button',
            template: "\n    <button class=\"btn waves-effect waves-light {{buttonType}}\"\n      [ngClass]=\"{'disabled': disabled, 'btn-large': isLarge, 'btn-small': !isLarge}\" [disabled]=\"disabled\">\n      <t-badge *ngIf=\"badge\" [class]=\"bPos\" [badge]=\"badge\"></t-badge>\n      {{label}}\n    </button>\n  ",
            styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.btn,.btn-floating,.btn-large,.btn-small,.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.btn-floating:hover,.btn-large:hover,.btn-small:hover,.btn:hover,.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.btn,.btn-flat,.btn-large,.btn-small{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-flat.disabled,.btn-flat:disabled,.btn-flat[disabled],.btn-floating.disabled,.btn-floating:disabled,.btn-floating[disabled],.btn-large.disabled,.btn-large:disabled,.btn-large[disabled],.btn-small.disabled,.btn-small:disabled,.btn-small[disabled],.btn.disabled,.btn:disabled,.btn[disabled],.disabled.btn-large,.disabled.btn-small{pointer-events:none;background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-flat.disabled:hover,.btn-flat:disabled:hover,.btn-flat[disabled]:hover,.btn-floating.disabled:hover,.btn-floating:disabled:hover,.btn-floating[disabled]:hover,.btn-large.disabled:hover,.btn-large:disabled:hover,.btn-large[disabled]:hover,.btn-small.disabled:hover,.btn-small:disabled:hover,.btn-small[disabled]:hover,.btn.disabled:hover,.btn:disabled:hover,.btn[disabled]:hover,.disabled.btn-large:hover,.disabled.btn-small:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn,.btn-flat,.btn-floating,.btn-large,.btn-small{font-size:14px;outline:0}.btn i,.btn-flat i,.btn-floating i,.btn-large i,.btn-small i{font-size:1.3rem;line-height:inherit}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#757575;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn-large:hover,.btn-small:hover,.btn:hover{background-color:#828282}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#757575;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#757575}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#757575;border-radius:50%;-ms-transform:scale(0);transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,.1)}.btn-flat.btn-flat[disabled],.btn-flat.disabled{background-color:transparent!important;color:#b3b3b3!important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}t-badge.left{margin-right:.5rem}t-badge.right{margin-left:.5rem}.primary{background:#0069b1}.primary:hover{background:#003f81}.secondary{background:#757575}.secondary:hover{background:#616161}.tertiary{background:#757575}.tertiary:hover{background:#616161}"]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicFieldsComponent.prototype, "fields", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "buttonOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "data", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "dropdownOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DynamicFieldsComponent.prototype, "disabledFields", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DynamicFieldsComponent.prototype, "hideDefaultAction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DynamicFieldsComponent.prototype, "primaryHandler", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DynamicFieldsComponent.prototype, "secondaryHandler", void 0);
    DynamicFieldsComponent = __decorate([
        Component({
            selector: 't-dynamic-fields',
            template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\">\n      </t-checkbox>\n    </div>\n\n    <!-- input type radio -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <t-radio [label]=\"field.label\" [(ngModel)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\"></t-radio>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <t-dropdown [placeholder]=\"field.label\" [(ngModel)]=\"data[field.model]\" [options]=\"dropdownOptions[field.model]\"\n        [name]='field.name' [disabled]=\"disabledFields[field.model]\">\n      </t-dropdown>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!hideDefaultAction\">\n      <t-button [label]=\"primaryLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecondaryButton\" [label]=\"secondaryLabel\" type=\"secondary\" (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n  </div>\n</div>",
            styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
        })
    ], DynamicFieldsComponent);
    return DynamicFieldsComponent;
}());

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.modelChange = new EventEmitter();
    }
    CheckboxComponent.prototype.handleOnChange = function (event) {
        this.checked = event.target.checked;
        this.modelChange.emit(this.checked);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "model", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "readonly", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CheckboxComponent.prototype, "modelChange", void 0);
    CheckboxComponent = __decorate([
        Component({
            selector: 't-checkbox',
            template: "<label class=\"checkbox\" [class.disabled]=\"disabled\">{{label}}\n  <input type=\"checkbox\" \n    [name]=\"name\" \n    [(ngModel)]=\"model\"\n    [checked]=\"checked\" \n    [disabled]=\"disabled\" \n    [readonly]=\"readonly\"\n    \n    (change)=\"handleOnChange($event)\"\n    />\n  <span class=\"fa checkmark checkmark-primary active\"></span>\n</label>",
            styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.checkbox{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox input{position:relative;opacity:0}.checkbox.disabled{opacity:.5;cursor:default;pointer-events:none}.checkbox .checkmark-primary{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox .checkmark-primary.active{background-color:#fff;border:.0625rem solid #0069b1}.checkbox .checkmark:after{content:\"\";position:absolute;display:none;bottom:0;left:0;top:-1px;right:0}.checkbox .checkmark.active:after{content:\"\\f00c\";color:#fff}.checkbox input:checked~.checkmark{background-color:#0069b1}.checkbox input:checked~.checkmark:after{display:block;font-size:.8125rem;height:1rem;line-height:15px}.checkbox .checkmark.disabled:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"]
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RadioComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RadioComponent.prototype, "model", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], RadioComponent.prototype, "modelChange", void 0);
    RadioComponent = __decorate([
        Component({
            selector: 't-radio',
            template: "<label class=\"radio\" [class.disabled]=\"disabled\" [ngClass]=\"{'active': checked}\">\n  &nbsp;{{label}}\n  <input type=\"radio\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\" (change)=\"handleOnChange($event)\"\n    [(ngModel)]=\"model\" [value]=\"value\">\n</label>",
            styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.radio{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio input{position:relative;opacity:0}.radio:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled{opacity:.5;cursor:default;pointer-events:none}.radio.active:before{content:'';border:5px solid #0069b1}"]
        })
    ], RadioComponent);
    return RadioComponent;
}());

var noop = function () { };
var ɵ0 = noop;
var UiInput = /** @class */ (function () {
    function UiInput() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    UiInput.prototype.writeValue = function (obj) { };
    UiInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiInput.prototype.setDisabledState = function (isDisabled) { };
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
    DropdownComponent_1 = DropdownComponent;
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
    var DropdownComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DropdownComponent.prototype, "options", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "readonly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "staticLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "tooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropdownComponent.prototype, "tooltipPosition", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "autoDisplayFirst", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "scrollHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "autofocus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DropdownComponent.prototype, "onFocus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DropdownComponent.prototype, "onBlur", void 0);
    DropdownComponent = DropdownComponent_1 = __decorate([
        Component({
            selector: 't-dropdown',
            template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n    [autoDisplayFirst]=\"autoDisplayFirst\"\n    [scrollHeight]=\"scrollHeight\"\n    [autofocus]=\"autofocus\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return DropdownComponent_1; }),
                    multi: true
                }],
            encapsulation: ViewEncapsulation.None,
            styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"]
        })
    ], DropdownComponent);
    return DropdownComponent;
}(UiInput));

var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.position = 'top-right';
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ToastComponent.prototype, "position", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ToastComponent.prototype, "baseZIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ToastComponent.prototype, "key", void 0);
    ToastComponent = __decorate([
        Component({
            selector: 't-toast',
            template: "<p-toast \r\n    [position]=\"position\"\r\n    [style.z-index]=\"baseZIndex\"\r\n    [key]=\"key\"\r\n></p-toast>",
            encapsulation: ViewEncapsulation.None,
            styles: ["p-toast .ui-toast .ui-toast-message.ui-toast-message-success{background-color:#82b20a}p-toast .ui-toast .ui-toast-message.ui-toast-message-error{background-color:#d20f55}p-toast .ui-toast .ui-toast-message.ui-toast-message-info{background-color:#00a8e4}p-toast .ui-toast .ui-toast-message.ui-toast-message-warn{background-color:#ffa81e}"]
        })
    ], ToastComponent);
    return ToastComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NavigateTopComponent.prototype, "height", void 0);
    __decorate([
        HostListener('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigateTopComponent.prototype, "scrollEvent", null);
    NavigateTopComponent = __decorate([
        Component({
            selector: 't-navigate-top',
            template: "<div class=\"navigate-top\" *ngIf=\"enableNavigator\" (click)=\"navigateToTop()\">\n    <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n</div>",
            styles: [".navigate-top{position:fixed;right:2em;bottom:10em;padding:.7em 1em;border-radius:50px;font-size:1em;background:rgba(0,0,0,.7);color:#fff;cursor:pointer}.navigate-top i{position:relative;top:0;transition:.3s}.navigate-top:hover{background:#000}.navigate-top:hover i{top:-7px}"]
        })
    ], NavigateTopComponent);
    return NavigateTopComponent;
}());

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent = __decorate([
        Component({
            selector: 't-alert',
            template: "<p>alert works!</p>\n",
            styles: [""]
        })
    ], AlertComponent);
    return AlertComponent;
}());

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
    TooltipContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipContentComponent.prototype, "animation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipContentComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", HTMLElement)
    ], TooltipContentComponent.prototype, "hostElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipContentComponent.prototype, "placement", void 0);
    TooltipContentComponent = __decorate([
        Component({
            // tslint:disable-next-line: component-selector
            selector: 'tooltip-content',
            template: "\n            <div class=\"tooltip {{ placement }}\"\n                [style.top]=\"top + 'px'\"\n                [style.left]=\"left + 'px'\"\n                [class.in]=\"isIn\"\n                [class.fade]=\"isFade\"\n                role=\"tooltip\">\n                <div class=\"tooltip-inner\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n            </div>",
            styles: [".tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"]
        }),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], TooltipContentComponent);
    return TooltipContentComponent;
}());

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
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        Input('tTooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipAnimation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipPlacement", void 0);
    __decorate([
        HostListener('focusin'),
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "show", null);
    __decorate([
        HostListener('focusout'),
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "hide", null);
    TooltipDirective = __decorate([
        Directive({
            selector: '[tTooltip]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef,
            ComponentFactoryResolver])
    ], TooltipDirective);
    return TooltipDirective;
}());

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
    NgLibrary = __decorate([
        NgModule({
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
        })
    ], NgLibrary);
    return NgLibrary;
}());

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
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    HttpService.ɵprov = ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(ɵɵinject(HttpClient)); }, token: HttpService, providedIn: "root" });
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
}());

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
    ToastService.ctorParameters = function () { return [
        { type: MessageService }
    ]; };
    ToastService.ɵprov = ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(ɵɵinject(MessageService)); }, token: ToastService, providedIn: "root" });
    ToastService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [MessageService])
    ], ToastService);
    return ToastService;
}());

/*
 * Public API Surface of ng-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, BadgeComponent, ButtonComponent, CheckboxComponent, DropdownComponent, DynamicFieldsComponent, HeaderComponent, HttpService, NavComponent, NavigateTopComponent, NgLibrary, RadioComponent, ToastComponent, ToastService, TooltipDirective, COMPONENTS as ɵa, EXPORTEDCOMPONENTS as ɵb, NavComponent as ɵc, HeaderComponent as ɵd, BadgeComponent as ɵe, ButtonComponent as ɵf, DynamicFieldsComponent as ɵg, CheckboxComponent as ɵh, RadioComponent as ɵi, DropdownComponent as ɵj, UiInput as ɵk, ToastComponent as ɵl, NavigateTopComponent as ɵm, AlertComponent as ɵn, DIRECTIVES as ɵo, EXPORTEDDIRECTIVES as ɵp, ENTRYPOINTDIRECTIVES as ɵq, TooltipDirective as ɵr, TooltipContentComponent as ɵs, SERVICES as ɵt };
//# sourceMappingURL=fourjs-ng-library.js.map
