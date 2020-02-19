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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhDLDhCQUtDOzs7SUFKQyx5QkFBYzs7SUFDZCx5QkFBZTs7SUFDZix5QkFBZTs7SUFDZiw0QkFBc0I7O0FBUXhCLE1BQU0sT0FBTyxZQUFZOzs7O0lBb0J2QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWxCMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQVUxQixpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELHFCQUFnQixHQUE0RSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pILGlCQUFZLEdBQXdDLG1CQUFBLEVBQUUsRUFBTyxDQUFDO0lBSXZCLENBQUM7Ozs7O0lBakJ4QyxJQUFhLFFBQVEsQ0FBQyxNQUFlO1FBQ25DLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBYUQsUUFBUTtRQUNOLElBQUksQ0FBQyxP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LENBQUM7Ozs7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQWMsRUFBRSxPQUFpQixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQzdFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBaEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsdytDQUFtQzs7YUFFcEM7Ozs7WUFkUSxNQUFNOzs7d0JBaUJaLEtBQUs7dUJBQ0wsS0FBSztpQ0FPTCxLQUFLOzJCQUVMLE1BQU07K0JBQ04sTUFBTTs7OztJQVhQLGlDQUFvQzs7SUFRcEMsMENBQXFDOztJQUVyQyxvQ0FBbUU7O0lBQ25FLHdDQUF5SDs7SUFFekgsb0NBQXFCOztJQUNyQixvQ0FBOEQ7Ozs7O0lBRTlELGlDQUEyQjs7Ozs7SUFFZiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IE1lbnVJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW107XG4gIEBJbnB1dCgpIHNldCBleHBhbmRlZChzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc3RhdHVzID8gJ2hpZGRlbicgOiAnYXV0byc7XG4gICAgdGhpcy5fZXhwYW5kZWQgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuICBASW5wdXQoKSBkaWFibGVEZWZhdWx0Q2xpY2s6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHNsaWRlclN0YXR1czogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbWVudUNsaWNrVHJpZ2dlcjogRXZlbnRFbWl0dGVyPHsgaXNQYXJlbnQ6IGJvb2xlYW4sIG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51PzogTWVudUl0ZW0gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZXhwYW5kZWRNZW51OiBudW1iZXI7XG4gIHNlbGVjdGVkTWVudTogeyBpZHg6IG51bWJlciwgc3ViTWVudUlkeDogbnVtYmVyIH0gPSB7fSBhcyBhbnk7XG5cbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKS5zdWJzY3JpYmUoKHJvdXRlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG4gICAgICBsZXQgaSA9IDAsIGsgPSAtMTtcbiAgICAgIGNvbnN0IGN1clJvdXRlID0gcm91dGUudXJsLFxuICAgICAgICBtZW51SXRlbUxlbiA9IHRoaXMubWVudUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgbWVudUhpZ2hsaWdodCA9IChtZW51OiBNZW51SXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChjdXJSb3V0ZS5pbmNsdWRlcyhtZW51LnJvdXRlKSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7IGlkeDogaSwgc3ViTWVudUlkeDogayB9O1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWVudUl0ZW1MZW47IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW2ldO1xuICAgICAgICBpZiAobWVudUl0ZW0ucm91dGUgJiYgIW1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3QgZG9icmVhayA9IG1lbnVIaWdobGlnaHQobWVudUl0ZW0pO1xuICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3Qgc3ViTWVudUxlbiA9IG1lbnVJdGVtLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgc3ViTWVudUxlbjsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudUl0ZW0uY2hpbGRyZW5ba107XG4gICAgICAgICAgICBjb25zdCBkb2JyZWFrID0gbWVudUhpZ2hsaWdodChzdWJNZW51KTtcbiAgICAgICAgICAgIGlmIChkb2JyZWFrKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZE1lbnUgPSB7fSBhcyBhbnk7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgIHRoaXMuc2xpZGVyU3RhdHVzLmVtaXQodGhpcy5leHBhbmRlZCk7XG4gIH1cblxuICBvbk1lbnVDbGljayhtZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChtZW51LnJvdXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogLTEgfTtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbbWVudS5yb3V0ZV0pO1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZGVkTWVudSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwYW5kZWRNZW51ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBpbmRleDtcbiAgICAgIHRoaXMubWVudUNsaWNrVHJpZ2dlci5lbWl0KHsgaXNQYXJlbnQ6IHRydWUsIG1lbnUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uU3ViTWVudUNsaWNrKG1lbnU6IE1lbnVJdGVtLCBzdWJNZW51OiBNZW51SXRlbSwgaW5kZXg6IG51bWJlciwgc3ViSWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpbmRleCwgc3ViTWVudUlkeDogc3ViSWR4IH07XG5cbiAgICBpZiAoIXRoaXMuZGlhYmxlRGVmYXVsdENsaWNrKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3N1Yk1lbnUucm91dGVdKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm1lbnVDbGlja1RyaWdnZXIuZW1pdCh7IGlzUGFyZW50OiBmYWxzZSwgbWVudSwgc3ViTWVudSB9KTtcbiAgfVxufVxuIl19