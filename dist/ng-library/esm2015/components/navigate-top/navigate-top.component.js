import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let NavigateTopComponent = class NavigateTopComponent {
    constructor() {
        this.height = 500;
    }
    navigateToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    enableBtn() {
        if (this.height) {
            const top = window.pageYOffset || document.documentElement.scrollTop;
            return top > this.height;
        }
        return true;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], NavigateTopComponent.prototype, "height", void 0);
NavigateTopComponent = __decorate([
    Component({
        selector: 't-navigate-top',
        template: "<div class=\"navigate-top\" *ngIf=\"enableBtn()\" (click)=\"navigateToTop()\">\n    <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n</div>",
        styles: [""]
    })
], NavigateTopComponent);
export { NavigateTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGUtdG9wL25hdmlnYXRlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBRVcsV0FBTSxHQUFXLEdBQUcsQ0FBQztJQWFoQyxDQUFDO0lBWEMsYUFBYTtRQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQWJVO0lBQVIsS0FBSyxFQUFFOztvREFBc0I7QUFGbkIsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsNkpBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBZWhDO1NBZlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LW5hdmlnYXRlLXRvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0ZS10b3AuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0ZS10b3AuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZVRvcENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSA1MDA7XG5cbiAgbmF2aWdhdGVUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxuXG4gIGVuYWJsZUJ0bigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgcmV0dXJuIHRvcCA+IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19