import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeComponent {
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
BadgeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeComponent, selectors: [["t-badge"]], inputs: { badge: "badge" }, decls: 1, vars: 3, consts: [["aria-hidden", "true"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("fa ", ctx.badge, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeComponent, [{
        type: Component,
        args: [{
                selector: 't-badge',
                template: `<i class="fa {{badge}}" aria-hidden="true"></i>`
            }]
    }], null, { badge: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWpELE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO21EQUFkLGNBQWM7UUFGZCx1QkFBK0M7O1FBQTVDLCtDQUFvQjs7a0RBRXZCLGNBQWM7Y0FKMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsaURBQWlEO2FBQzVEOztrQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWJhZGdlJyxcbiAgdGVtcGxhdGU6IGA8aSBjbGFzcz1cImZhIHt7YmFkZ2V9fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5gXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBiYWRnZTogc3RyaW5nO1xufVxuIl19