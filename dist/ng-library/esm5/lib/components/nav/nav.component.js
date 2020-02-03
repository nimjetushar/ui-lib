/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/nav/nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
/**
 * @record
 */
export function MenuItem() { }
if (false) {
    /** @type {?} */
    MenuItem.prototype.label;
    /** @type {?|undefined} */
    MenuItem.prototype.route;
    /** @type {?|undefined} */
    MenuItem.prototype.badge;
    /** @type {?|undefined} */
    MenuItem.prototype.children;
}
var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
        this.menuItems = [];
        this.sliderStatus = new EventEmitter();
        this.menuClickTrigger = new EventEmitter();
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
        this._router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
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
        { type: Component, args: [{
                    selector: 't-nav',
                    template: "<div class=\"main-container-sidebar\" id=\"main-container-sidebar\" [ngClass]=\"{'sidebar-expanded': expanded}\">\n  <div class=\"header\">\n    <div class=\"sidebar-toggle\" (click)=\"toggleMenu()\">\n      <i class=\"fa {{expanded ? 'fa-times' : 'fa-bars'}}\"></i>\n    </div>\n  </div>\n  <div id=\"sidebar-content\" class=\"sidebar-content\">\n    <ul role=\"menu\" id=\"main-nav\" class=\"main-nav\">\n      <li role=\"menuitem\" class=\"list-item\" *ngFor=\"let menuItem of menuItems;let idx = index\"\n        [class.selected]=\"selectedMenu?.idx === idx\">\n        <div class=\"menu-item\" (click)=\"onMenuClick(menuItem, idx)\">\n          <t-badge class=\"badge\" [badge]=\"menuItem?.badge\"></t-badge>\n          <span class=\"label\">{{menuItem.label}}</span>\n        </div>\n\n        <ul role=\"menu\" class=\"sub-nav\" [class.expanded]=\"expandedMenu === idx\">\n          <li role=\"menuitem\" *ngFor=\"let subMenuItem of menuItem.children; let childIdx = index\"\n            (click)=\"onSubMenuClick(menuItem, subMenuItem, idx, childIdx)\" class=\"list-item\"\n            [class.active]=\"selectedMenu?.subMenuIdx === childIdx\" tabindex=\"-1\">\n            <div class=\"menu-item\">\n              <span class=\"label\">\n                {{subMenuItem.label}}\n              </span>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"main-container-sidbar overlay\" *ngIf=\"expanded\" (click)=\"toggleMenu()\"></div>\n",
                    styles: ["#main-container-sidebar{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar .header{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar .header>:not(:last-child){margin-right:0}#main-container-sidebar .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar .sidebar-toggle i.fa{font-size:2.1875rem;color:#fff}#main-container-sidebar .list-item{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar .list-item>:not(:last-child){margin-bottom:0}#main-container-sidebar .menu-item{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar .menu-item>:not(:last-child){margin-right:.625rem}#main-container-sidebar .badge{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar .label{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar .main-nav .label{font-weight:700}#main-container-sidebar .sub-nav{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar .sub-nav .list-item{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar .sub-nav .label{font-weight:400}#main-container-sidebar .sub-nav .menu-item{height:2.1875rem;padding:0}#main-container-sidebar .sub-nav.expanded{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar .selected>.menu-item{border-left:4px solid #0069b1}#main-container-sidebar .selected .badge,#main-container-sidebar .selected .label{color:#0069b1}#main-container-sidebar .selected .active{background-color:#e5eaee}.main-container-sidbar.overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded{left:0}"]
                }] }
    ];
    /** @nocollapse */
    NavComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    NavComponent.propDecorators = {
        menuItems: [{ type: Input }],
        expanded: [{ type: Input }],
        diableDefaultClick: [{ type: Input }],
        sliderStatus: [{ type: Output }],
        menuClickTrigger: [{ type: Output }]
    };
    return NavComponent;
}());
export { NavComponent };
if (false) {
    /** @type {?} */
    NavComponent.prototype.menuItems;
    /** @type {?} */
    NavComponent.prototype.diableDefaultClick;
    /** @type {?} */
    NavComponent.prototype.sliderStatus;
    /** @type {?} */
    NavComponent.prototype.menuClickTrigger;
    /** @type {?} */
    NavComponent.prototype.expandedMenu;
    /** @type {?} */
    NavComponent.prototype.selectedMenu;
    /**
     * @type {?}
     * @private
     */
    NavComponent.prototype._expanded;
    /**
     * @type {?}
     * @private
     */
    NavComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4Qyw4QkFLQzs7O0lBSkMseUJBQWM7O0lBQ2QseUJBQWU7O0lBQ2YseUJBQWU7O0lBQ2YsNEJBQXNCOztBQUd4QjtJQXlCRSxzQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFsQjFCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFVMUIsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBNEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6SCxpQkFBWSxHQUF3QyxtQkFBQSxFQUFFLEVBQU8sQ0FBQztJQUl2QixDQUFDO0lBakJ4QyxzQkFBYSxrQ0FBUTs7OztRQUlyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQXNCLE1BQWU7WUFDbkMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNyRixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7OztJQWdCRCwrQkFBUTs7O0lBQVI7UUFBQSxpQkF1Q0M7UUF0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QUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFRCxxQ0FBYzs7Ozs7OztJQUFkLFVBQWUsSUFBYyxFQUFFLE9BQWlCLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0JBaEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsdytDQUFtQzs7aUJBRXBDOzs7O2dCQWRRLE1BQU07Ozs0QkFpQlosS0FBSzsyQkFDTCxLQUFLO3FDQU9MLEtBQUs7K0JBRUwsTUFBTTttQ0FDTixNQUFNOztJQStFVCxtQkFBQztDQUFBLEFBakdELElBaUdDO1NBNUZZLFlBQVk7OztJQUV2QixpQ0FBb0M7O0lBUXBDLDBDQUFxQzs7SUFFckMsb0NBQW1FOztJQUNuRSx3Q0FBeUg7O0lBRXpILG9DQUFxQjs7SUFDckIsb0NBQThEOzs7OztJQUU5RCxpQ0FBMkI7Ozs7O0lBRWYsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJvdXRlPzogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBNZW51SXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogTWVudUl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBzZXQgZXhwYW5kZWQoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9IHN0YXR1cyA/ICdoaWRkZW4nIDogJ2F1dG8nO1xuICAgIHRoaXMuX2V4cGFuZGVkID0gc3RhdHVzO1xuICB9XG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cbiAgQElucHV0KCkgZGlhYmxlRGVmYXVsdENsaWNrOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzbGlkZXJTdGF0dXM6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1lbnVDbGlja1RyaWdnZXI6IEV2ZW50RW1pdHRlcjx7IGlzUGFyZW50OiBib29sZWFuLCBtZW51OiBNZW51SXRlbSwgc3ViTWVudT86IE1lbnVJdGVtIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGV4cGFuZGVkTWVudTogbnVtYmVyO1xuICBzZWxlY3RlZE1lbnU6IHsgaWR4OiBudW1iZXIsIHN1Yk1lbnVJZHg6IG51bWJlciB9ID0ge30gYXMgYW55O1xuXG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICkuc3Vic2NyaWJlKChyb3V0ZTogTmF2aWdhdGlvbkVuZCkgPT4ge1xuICAgICAgbGV0IGkgPSAwLCBrID0gLTE7XG4gICAgICBjb25zdCBjdXJSb3V0ZSA9IHJvdXRlLnVybCxcbiAgICAgICAgbWVudUl0ZW1MZW4gPSB0aGlzLm1lbnVJdGVtcy5sZW5ndGgsXG4gICAgICAgIG1lbnVIaWdobGlnaHQgPSAobWVudTogTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoY3VyUm91dGUuaW5jbHVkZXMobWVudS5yb3V0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0geyBpZHg6IGksIHN1Yk1lbnVJZHg6IGsgfTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gaTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG1lbnVJdGVtTGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSB0aGlzLm1lbnVJdGVtc1tpXTtcbiAgICAgICAgaWYgKG1lbnVJdGVtLnJvdXRlICYmICFtZW51SXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IGRvYnJlYWsgPSBtZW51SGlnaGxpZ2h0KG1lbnVJdGVtKTtcbiAgICAgICAgICBpZiAoZG9icmVhaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IHN1Yk1lbnVMZW4gPSBtZW51SXRlbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgZm9yIChrID0gMDsgayA8IHN1Yk1lbnVMZW47IGsrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgY29uc3QgZG9icmVhayA9IG1lbnVIaWdobGlnaHQoc3ViTWVudSk7XG4gICAgICAgICAgICBpZiAoZG9icmVhaykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0ge30gYXMgYW55O1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB0aGlzLnNsaWRlclN0YXR1cy5lbWl0KHRoaXMuZXhwYW5kZWQpO1xuICB9XG5cbiAgb25NZW51Q2xpY2sobWVudTogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobWVudS5yb3V0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaW5kZXgsIHN1Yk1lbnVJZHg6IC0xIH07XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW21lbnUucm91dGVdKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmRlZE1lbnUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmV4cGFuZGVkTWVudSAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gaW5kZXg7XG4gICAgICB0aGlzLm1lbnVDbGlja1RyaWdnZXIuZW1pdCh7IGlzUGFyZW50OiB0cnVlLCBtZW51IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBvblN1Yk1lbnVDbGljayhtZW51OiBNZW51SXRlbSwgc3ViTWVudTogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIsIHN1YklkeDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaW5kZXgsIHN1Yk1lbnVJZHg6IHN1YklkeCB9O1xuXG4gICAgaWYgKCF0aGlzLmRpYWJsZURlZmF1bHRDbGljaykge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtzdWJNZW51LnJvdXRlXSk7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5tZW51Q2xpY2tUcmlnZ2VyLmVtaXQoeyBpc1BhcmVudDogZmFsc2UsIG1lbnUsIHN1Yk1lbnUgfSk7XG4gIH1cbn1cbiJdfQ==