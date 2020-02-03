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
export class NavComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        this.menuItems = [];
        this.sliderStatus = new EventEmitter();
        this.menuClickTrigger = new EventEmitter();
        this.selectedMenu = (/** @type {?} */ ({}));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set expanded(status) {
        document.getElementsByTagName('body')[0].style.overflow = status ? 'hidden' : 'auto';
        this._expanded = status;
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} route
         * @return {?}
         */
        (route) => {
            /** @type {?} */
            let i = 0;
            /** @type {?} */
            let k = -1;
            /** @type {?} */
            const curRoute = route.url;
            /** @type {?} */
            const menuItemLen = this.menuItems.length;
            /** @type {?} */
            const menuHighlight = (/**
             * @param {?} menu
             * @return {?}
             */
            (menu) => {
                if (curRoute.includes(menu.route)) {
                    this.selectedMenu = { idx: i, subMenuIdx: k };
                    this.expandedMenu = i;
                    return true;
                }
            });
            for (i = 0; i < menuItemLen; i++) {
                /** @type {?} */
                const menuItem = this.menuItems[i];
                if (menuItem.route && !menuItem.children) {
                    /** @type {?} */
                    const dobreak = menuHighlight(menuItem);
                    if (dobreak) {
                        return;
                    }
                }
                if (menuItem.children) {
                    /** @type {?} */
                    const subMenuLen = menuItem.children.length;
                    for (k = 0; k < subMenuLen; k++) {
                        /** @type {?} */
                        const subMenu = menuItem.children[k];
                        /** @type {?} */
                        const dobreak = menuHighlight(subMenu);
                        if (dobreak) {
                            return;
                        }
                    }
                }
            }
            this.selectedMenu = (/** @type {?} */ ({}));
            this.expandedMenu = undefined;
        }));
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        this.expanded = !this.expanded;
        this.sliderStatus.emit(this.expanded);
    }
    /**
     * @param {?} menu
     * @param {?} index
     * @return {?}
     */
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
    /**
     * @param {?} menu
     * @param {?} subMenu
     * @param {?} index
     * @param {?} subIdx
     * @return {?}
     */
    onSubMenuClick(menu, subMenu, index, subIdx) {
        this.selectedMenu = { idx: index, subMenuIdx: subIdx };
        if (!this.diableDefaultClick) {
            this._router.navigate([subMenu.route]);
            this.toggleMenu();
        }
        this.menuClickTrigger.emit({ isParent: false, menu, subMenu });
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 't-nav',
                template: "<div class=\"main-container-sidebar\" id=\"main-container-sidebar\" [ngClass]=\"{'sidebar-expanded': expanded}\">\n  <div class=\"header\">\n    <div class=\"sidebar-toggle\" (click)=\"toggleMenu()\">\n      <i class=\"fa {{expanded ? 'fa-times' : 'fa-bars'}}\"></i>\n    </div>\n  </div>\n  <div id=\"sidebar-content\" class=\"sidebar-content\">\n    <ul role=\"menu\" id=\"main-nav\" class=\"main-nav\">\n      <li role=\"menuitem\" class=\"list-item\" *ngFor=\"let menuItem of menuItems;let idx = index\"\n        [class.selected]=\"selectedMenu?.idx === idx\">\n        <div class=\"menu-item\" (click)=\"onMenuClick(menuItem, idx)\">\n          <t-badge class=\"badge\" [badge]=\"menuItem?.badge\"></t-badge>\n          <span class=\"label\">{{menuItem.label}}</span>\n        </div>\n\n        <ul role=\"menu\" class=\"sub-nav\" [class.expanded]=\"expandedMenu === idx\">\n          <li role=\"menuitem\" *ngFor=\"let subMenuItem of menuItem.children; let childIdx = index\"\n            (click)=\"onSubMenuClick(menuItem, subMenuItem, idx, childIdx)\" class=\"list-item\"\n            [class.active]=\"selectedMenu?.subMenuIdx === childIdx\" tabindex=\"-1\">\n            <div class=\"menu-item\">\n              <span class=\"label\">\n                {{subMenuItem.label}}\n              </span>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"main-container-sidbar overlay\" *ngIf=\"expanded\" (click)=\"toggleMenu()\"></div>\n",
                styles: ["#main-container-sidebar{position:absolute;left:-18.75rem;top:0;bottom:0;width:18.75rem;height:100vh;background:#f2f2f2;transition:left 250ms ease-in-out;z-index:20}#main-container-sidebar .header{-ms-flex:2 0 auto;flex:2 0 auto;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;height:4.5rem;background-color:#000;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}#main-container-sidebar .header>:not(:last-child){margin-right:0}#main-container-sidebar .sidebar-toggle{cursor:pointer;position:relative;height:100%;padding-top:1.1875rem;padding-left:1.8125rem;padding-right:1.8125rem}#main-container-sidebar .sidebar-toggle i.fa{font-size:2.1875rem;color:#fff}#main-container-sidebar .list-item{display:-ms-flexbox;display:flex;flex-direction:column;-ms-flex-direction:column;-webkit-flex-align:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;width:100%}#main-container-sidebar .list-item>:not(:last-child){margin-bottom:0}#main-container-sidebar .menu-item{width:100%;cursor:pointer;height:2.8125rem;padding-left:1.8125rem;padding-right:1.125rem;color:#283764;display:-ms-flexbox;display:flex;flex-direction:row;-ms-flex-direction:row;-webkit-flex-align:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;-ms-flex:2 0 auto;flex:2 0 auto}#main-container-sidebar .menu-item>:not(:last-child){margin-right:.625rem}#main-container-sidebar .badge{font-size:1.25rem;cursor:pointer;font-weight:700;width:1.875rem;margin-left:-3px}#main-container-sidebar .label{letter-spacing:.0625rem;color:inherit;font-size:.9375rem;text-transform:uppercase;cursor:pointer;width:100%}#main-container-sidebar .main-nav .label{font-weight:700}#main-container-sidebar .sub-nav{list-style:none;padding:0;width:100%;opacity:0;position:absolute;left:-62.4375rem}#main-container-sidebar .sub-nav .list-item{padding-right:1.125rem;padding-left:3.75rem}#main-container-sidebar .sub-nav .label{font-weight:400}#main-container-sidebar .sub-nav .menu-item{height:2.1875rem;padding:0}#main-container-sidebar .sub-nav.expanded{opacity:1;position:relative;left:0;transition:opacity 250ms ease-in-out}#main-container-sidebar .selected>.menu-item{border-left:4px solid #0069b1}#main-container-sidebar .selected .badge,#main-container-sidebar .selected .label{color:#0069b1}#main-container-sidebar .selected .active{background-color:#e5eaee}.main-container-sidbar.overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:11;width:100%;height:100%;background:rgba(0,0,0,.5);cursor:pointer}#main-container-sidebar.sidebar-expanded{left:0}"]
            }] }
];
/** @nocollapse */
NavComponent.ctorParameters = () => [
    { type: Router }
];
NavComponent.propDecorators = {
    menuItems: [{ type: Input }],
    expanded: [{ type: Input }],
    diableDefaultClick: [{ type: Input }],
    sliderStatus: [{ type: Output }],
    menuClickTrigger: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4Qyw4QkFLQzs7O0lBSkMseUJBQWM7O0lBQ2QseUJBQWU7O0lBQ2YseUJBQWU7O0lBQ2YsNEJBQXNCOztBQVF4QixNQUFNLE9BQU8sWUFBWTs7OztJQW9CdkIsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFsQjFCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFVMUIsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBNEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6SCxpQkFBWSxHQUF3QyxtQkFBQSxFQUFFLEVBQU8sQ0FBQztJQUl2QixDQUFDOzs7OztJQWpCeEMsSUFBYSxRQUFRLENBQUMsTUFBZTtRQUNuQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQWFELFFBQVE7UUFDTixJQUFJLENB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SUFDSCxDQUFDOzs7Ozs7OztJQUVELGNBQWMsQ0FBQyxJQUFjLEVBQUUsT0FBaUIsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUM3RSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLHcrQ0FBbUM7O2FBRXBDOzs7O1lBZFEsTUFBTTs7O3dCQWlCWixLQUFLO3VCQUNMLEtBQUs7aUNBT0wsS0FBSzsyQkFFTCxNQUFNOytCQUNOLE1BQU07Ozs7SUFYUCxpQ0FBb0M7O0lBUXBDLDBDQUFxQzs7SUFFckMsb0NBQW1FOztJQUNuRSx3Q0FBeUg7O0lBRXpILG9DQUFxQjs7SUFDckIsb0NBQThEOzs7OztJQUU5RCxpQ0FBMkI7Ozs7O0lBRWYsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJvdXRlPzogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBNZW51SXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogTWVudUl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBzZXQgZXhwYW5kZWQoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9IHN0YXR1cyA/ICdoaWRkZW4nIDogJ2F1dG8nO1xuICAgIHRoaXMuX2V4cGFuZGVkID0gc3RhdHVzO1xuICB9XG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cbiAgQElucHV0KCkgZGlhYmxlRGVmYXVsdENsaWNrOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzbGlkZXJTdGF0dXM6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1lbnVDbGlja1RyaWdnZXI6IEV2ZW50RW1pdHRlcjx7IGlzUGFyZW50OiBib29sZWFuLCBtZW51OiBNZW51SXRlbSwgc3ViTWVudT86IE1lbnVJdGVtIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGV4cGFuZGVkTWVudTogbnVtYmVyO1xuICBzZWxlY3RlZE1lbnU6IHsgaWR4OiBudW1iZXIsIHN1Yk1lbnVJZHg6IG51bWJlciB9ID0ge30gYXMgYW55O1xuXG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICkuc3Vic2NyaWJlKChyb3V0ZTogTmF2aWdhdGlvbkVuZCkgPT4ge1xuICAgICAgbGV0IGkgPSAwLCBrID0gLTE7XG4gICAgICBjb25zdCBjdXJSb3V0ZSA9IHJvdXRlLnVybCxcbiAgICAgICAgbWVudUl0ZW1MZW4gPSB0aGlzLm1lbnVJdGVtcy5sZW5ndGgsXG4gICAgICAgIG1lbnVIaWdobGlnaHQgPSAobWVudTogTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoY3VyUm91dGUuaW5jbHVkZXMobWVudS5yb3V0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0geyBpZHg6IGksIHN1Yk1lbnVJZHg6IGsgfTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gaTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG1lbnVJdGVtTGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSB0aGlzLm1lbnVJdGVtc1tpXTtcbiAgICAgICAgaWYgKG1lbnVJdGVtLnJvdXRlICYmICFtZW51SXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IGRvYnJlYWsgPSBtZW51SGlnaGxpZ2h0KG1lbnVJdGVtKTtcbiAgICAgICAgICBpZiAoZG9icmVhaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IHN1Yk1lbnVMZW4gPSBtZW51SXRlbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgZm9yIChrID0gMDsgayA8IHN1Yk1lbnVMZW47IGsrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgY29uc3QgZG9icmVhayA9IG1lbnVIaWdobGlnaHQoc3ViTWVudSk7XG4gICAgICAgICAgICBpZiAoZG9icmVhaykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0ge30gYXMgYW55O1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB0aGlzLnNsaWRlclN0YXR1cy5lbWl0KHRoaXMuZXhwYW5kZWQpO1xuICB9XG5cbiAgb25NZW51Q2xpY2sobWVudTogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobWVudS5yb3V0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaW5kZXgsIHN1Yk1lbnVJZHg6IC0xIH07XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW21lbnUucm91dGVdKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmRlZE1lbnUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmV4cGFuZGVkTWVudSAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gaW5kZXg7XG4gICAgICB0aGlzLm1lbnVDbGlja1RyaWdnZXIuZW1pdCh7IGlzUGFyZW50OiB0cnVlLCBtZW51IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBvblN1Yk1lbnVDbGljayhtZW51OiBNZW51SXRlbSwgc3ViTWVudTogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIsIHN1YklkeDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaW5kZXgsIHN1Yk1lbnVJZHg6IHN1YklkeCB9O1xuXG4gICAgaWYgKCF0aGlzLmRpYWJsZURlZmF1bHRDbGljaykge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtzdWJNZW51LnJvdXRlXSk7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5tZW51Q2xpY2tUcmlnZ2VyLmVtaXQoeyBpc1BhcmVudDogZmFsc2UsIG1lbnUsIHN1Yk1lbnUgfSk7XG4gIH1cbn1cbiJdfQ==