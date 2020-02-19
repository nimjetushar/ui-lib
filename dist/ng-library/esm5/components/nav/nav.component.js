/**
 * @fileoverview added by tsickle
 * Generated from: components/nav/nav.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhDLDhCQUtDOzs7SUFKQyx5QkFBYzs7SUFDZCx5QkFBZTs7SUFDZix5QkFBZTs7SUFDZiw0QkFBc0I7O0FBR3hCO0lBeUJFLHNCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWxCMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQVUxQixpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELHFCQUFnQixHQUE0RSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pILGlCQUFZLEdBQXdDLG1CQUFBLEVBQUUsRUFBTyxDQUFDO0lBSXZCLENBQUM7SUFqQnhDLHNCQUFhLGtDQUFROzs7O1FBSXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBTkQsVUFBc0IsTUFBZTtZQUNuQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7O0lBZ0JELCtCQUFROzs7SUFBUjtRQUFBLGlCQXVDQztRQXRDQyxJ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R0FBRyxTQUFTLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7Ozs7OztJQUVELHFDQUFjOzs7Ozs7O0lBQWQsVUFBZSxJQUFjLEVBQUUsT0FBaUIsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUM3RSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQix3K0NBQW1DOztpQkFFcEM7Ozs7Z0JBZFEsTUFBTTs7OzRCQWlCWixLQUFLOzJCQUNMLEtBQUs7cUNBT0wsS0FBSzsrQkFFTCxNQUFNO21DQUNOLE1BQU07O0lBK0VULG1CQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0E1RlksWUFBWTs7O0lBRXZCLGlDQUFvQzs7SUFRcEMsMENBQXFDOztJQUVyQyxvQ0FBbUU7O0lBQ25FLHdDQUF5SDs7SUFFekgsb0NBQXFCOztJQUNyQixvQ0FBOEQ7Ozs7O0lBRTlELGlDQUEyQjs7Ozs7SUFFZiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IE1lbnVJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW107XG4gIEBJbnB1dCgpIHNldCBleHBhbmRlZChzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc3RhdHVzID8gJ2hpZGRlbicgOiAnYXV0byc7XG4gICAgdGhpcy5fZXhwYW5kZWQgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuICBASW5wdXQoKSBkaWFibGVEZWZhdWx0Q2xpY2s6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNsaWRlclN0YXR1czogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbWVudUNsaWNrVHJpZ2dlcjogRXZlbnRFbWl0dGVyPHsgaXNQYXJlbnQ6IGJvb2xlYW4sIG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51PzogTWVudUl0ZW0gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZXhwYW5kZWRNZW51OiBudW1iZXI7XG4gIHNlbGVjdGVkTWVudTogeyBpZHg6IG51bWJlciwgc3ViTWVudUlkeDogbnVtYmVyIH0gPSB7fSBhcyBhbnk7XG5cbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKS5zdWJzY3JpYmUoKHJvdXRlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG4gICAgICBsZXQgaSA9IDAsIGsgPSAtMTtcbiAgICAgIGNvbnN0IGN1clJvdXRlID0gcm91dGUudXJsLFxuICAgICAgICBtZW51SXRlbUxlbiA9IHRoaXMubWVudUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgbWVudUhpZ2hsaWdodCA9IChtZW51OiBNZW51SXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChjdXJSb3V0ZS5pbmNsdWRlcyhtZW51LnJvdXRlKSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaSwgc3ViTWVudUlkeDogayB9O1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWVudUl0ZW1MZW47IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW2ldO1xuICAgICAgICBpZiAobWVudUl0ZW0ucm91dGUgJiYgIW1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3QgZG9icmVhayA9IG1lbnVIaWdobGlnaHQobWVudUl0ZW0pO1xuICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3Qgc3ViTWVudUxlbiA9IG1lbnVJdGVtLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgc3ViTWVudUxlbjsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0uY2hpbGRyZW5ba107XG4gICAgICAgICAgICBjb25zdCBkb2JyZWFrID0gbWVudUhpZ2hsaWdodChzdWJNZW51KTtcbiAgICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7fSBhcyBhbnk7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgIHRoaXMuc2xpZGVyU3RhdHVzLmVtaXQodGhpcy5leHBhbmRlZCk7XG4gIH1cblxuICBvbk1lbnVDbGljayhtZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChtZW51LnJvdXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogLTEgfTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbbWVudS5yb3V0ZV0pO1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZGVkTWVudSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwYW5kZWRNZW51ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpbmRleDtcbiAgICAgIHRoaXMubWVudUNsaWNrVHJpZ2dlci5lbWl0KHsgaXNQYXJlbnQ6IHRydWUsIG1lbnUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uU3ViTWVudUNsaWNrKG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlciwgc3ViSWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogc3ViSWR4IH07XG5cbiAgICBpZiAoIXRoaXMuZGlhYmxlRGVmYXVsdENsaWNrKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3N1Yk1lbnUucm91dGVdKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm1lbnVDbGlja1RyaWdnZXIuZW1pdCh7IGlzUGFyZW50OiBmYWxzZSwgbWVudSwgc3ViTWVudSB9KTtcbiAgfVxufVxuIl19