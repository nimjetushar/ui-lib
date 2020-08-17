import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
    BadgeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeComponent, selectors: [["t-badge"]], inputs: { badge: "badge" }, decls: 1, vars: 3, consts: [["aria-hidden", "true"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "i", 0);
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("fa ", ctx.badge, "");
        } }, encapsulation: 2 });
    return BadgeComponent;
}());
export { BadgeComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeComponent, [{
        type: Component,
        args: [{
                selector: 't-badge',
                template: "<i class=\"fa {{badge}}\" aria-hidden=\"true\"></i>"
            }]
    }], null, { badge: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWpEO0lBQUE7S0FPQztnRkFIWSxjQUFjO3VEQUFkLGNBQWM7WUFGZCx1QkFBK0M7O1lBQTVDLCtDQUFvQjs7eUJBSnBDO0NBU0MsQUFQRCxJQU9DO1NBSFksY0FBYztrREFBZCxjQUFjO2NBSjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLHFEQUFpRDthQUM1RDs7a0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1iYWRnZScsXG4gIHRlbXBsYXRlOiBgPGkgY2xhc3M9XCJmYSB7e2JhZGdlfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+YFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgYmFkZ2U6IHN0cmluZztcbn1cbiJdfQ==