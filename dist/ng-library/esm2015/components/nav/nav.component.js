import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
let NavComponent = class NavComponent {
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
};
NavComponent.ctorParameters = () => [
    { type: Router }
];
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
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFjeEMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQW9CdkIsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFsQjFCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFVMUIsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBNEUsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd6SCxpQkFBWSxHQUF3QyxFQUFTLENBQUM7SUFJdkIsQ0FBQztJQWpCL0IsSUFBSSxRQUFRLENBQUMsTUFBZTtRQUNuQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FD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QzdFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQUE7O1lBeEU4QixNQUFNOztBQWxCMUI7SUFBUixLQUFLLEVBQUU7OytDQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs7OzRDQUdQO0FBSVE7SUFBUixLQUFLLEVBQUU7O3dEQUE2QjtBQUUzQjtJQUFULE1BQU0sRUFBRTs4QkFBZSxZQUFZO2tEQUErQjtBQUN6RDtJQUFULE1BQU0sRUFBRTs4QkFBbUIsWUFBWTtzREFBaUY7QUFiOUcsWUFBWTtJQUx4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQix3K0NBQW1DOztLQUVwQyxDQUFDO3FDQXFCNkIsTUFBTTtHQXBCeEIsWUFBWSxDQTRGeEI7U0E1RlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICBsYWJlbDogc3RyaW5nO1xuICByb3V0ZT86IHN0cmluZztcbiAgYmFkZ2U/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogTWVudUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtZW51SXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgc2V0IGV4cGFuZGVkKHN0YXR1czogYm9vbGVhbikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSBzdGF0dXMgPyAnaGlkZGVuJyA6ICdhdXRvJztcbiAgICB0aGlzLl9leHBhbmRlZCA9IHN0YXR1cztcbiAgfVxuICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xuICB9XG4gIEBJbnB1dCgpIGRpYWJsZURlZmF1bHRDbGljazogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc2xpZGVyU3RhdHVzOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBtZW51Q2xpY2tUcmlnZ2VyOiBFdmVudEVtaXR0ZXI8eyBpc1BhcmVudDogYm9vbGVhbiwgbWVudTogTWVudUl0ZW0sIHN1Yk1lbnU/OiBNZW51SXRlbSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBleHBhbmRlZE1lbnU6IG51bWJlcjtcbiAgc2VsZWN0ZWRNZW51OiB7IGlkeDogbnVtYmVyLCBzdWJNZW51SWR4OiBudW1iZXIgfSA9IHt9IGFzIGFueTtcblxuICBwcml2YXRlIF9leHBhbmRlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICApLnN1YnNjcmliZSgocm91dGU6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgIGxldCBpID0gMCwgayA9IC0xO1xuICAgICAgY29uc3QgY3VyUm91dGUgPSByb3V0ZS51cmwsXG4gICAgICAgIG1lbnVJdGVtTGVuID0gdGhpcy5tZW51SXRlbXMubGVuZ3RoLFxuICAgICAgICBtZW51SGlnaGxpZ2h0ID0gKG1lbnU6IE1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGN1clJvdXRlLmluY2x1ZGVzKG1lbnUucm91dGUpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHsgaWR4OiBpLCBzdWJNZW51SWR4OiBrIH07XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtZW51SXRlbUxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5tZW51SXRlbXNbaV07XG4gICAgICAgIGlmIChtZW51SXRlbS5yb3V0ZSAmJiAhbWVudUl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICBjb25zdCBkb2JyZWFrID0gbWVudUhpZ2hsaWdodChtZW51SXRlbSk7XG4gICAgICAgICAgaWYgKGRvYnJlYWspIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVudUl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICBjb25zdCBzdWJNZW51TGVuID0gbWVudUl0ZW0uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBzdWJNZW51TGVuOyBrKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5jaGlsZHJlbltrXTtcbiAgICAgICAgICAgIGNvbnN0IGRvYnJlYWsgPSBtZW51SGlnaGxpZ2h0KHN1Yk1lbnUpO1xuICAgICAgICAgICAgaWYgKGRvYnJlYWspIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkTWVudSA9IHt9IGFzIGFueTtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gICAgdGhpcy5zbGlkZXJTdGF0dXMuZW1pdCh0aGlzLmV4cGFuZGVkKTtcbiAgfVxuXG4gIG9uTWVudUNsaWNrKG1lbnU6IE1lbnVJdGVtLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKG1lbnUucm91dGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0geyBpZHg6IGluZGV4LCBzdWJNZW51SWR4OiAtMSB9O1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFttZW51LnJvdXRlXSk7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kZWRNZW51ID09PSB1bmRlZmluZWQgfHwgdGhpcy5leHBhbmRlZE1lbnUgIT09IGluZGV4KSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGluZGV4O1xuICAgICAgdGhpcy5tZW51Q2xpY2tUcmlnZ2VyLmVtaXQoeyBpc1BhcmVudDogdHJ1ZSwgbWVudSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgb25TdWJNZW51Q2xpY2sobWVudTogTWVudUl0ZW0sIHN1Yk1lbnU6IE1lbnVJdGVtLCBpbmRleDogbnVtYmVyLCBzdWJJZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0geyBpZHg6IGluZGV4LCBzdWJNZW51SWR4OiBzdWJJZHggfTtcblxuICAgIGlmICghdGhpcy5kaWFibGVEZWZhdWx0Q2xpY2spIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbc3ViTWVudS5yb3V0ZV0pO1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgfVxuICAgIHRoaXMubWVudUNsaWNrVHJpZ2dlci5lbWl0KHsgaXNQYXJlbnQ6IGZhbHNlLCBtZW51LCBzdWJNZW51IH0pO1xuICB9XG59XG4iXX0=