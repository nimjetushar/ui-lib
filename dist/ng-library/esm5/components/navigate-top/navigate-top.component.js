import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var NavigateTopComponent = /** @class */ (function () {
    function NavigateTopComponent() {
        this.height = 500;
    }
    NavigateTopComponent.prototype.navigateToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    NavigateTopComponent.prototype.enableBtn = function () {
        if (this.height) {
            var top_1 = window.pageYOffset || document.documentElement.scrollTop;
            return top_1 > this.height;
        }
        return true;
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
    return NavigateTopComponent;
}());
export { NavigateTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGUtdG9wL25hdmlnYXRlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pEO0lBQUE7UUFFVyxXQUFNLEdBQVcsR0FBRyxDQUFDO0lBYWhDLENBQUM7SUFYQyw0Q0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFNLEtBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBQ3JFLE9BQU8sS0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFaUTtRQUFSLEtBQUssRUFBRTs7d0RBQXNCO0lBRm5CLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDZKQUE0Qzs7U0FFN0MsQ0FBQztPQUNXLG9CQUFvQixDQWVoQztJQUFELDJCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LW5hdmlnYXRlLXRvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0ZS10b3AuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0ZS10b3AuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZVRvcENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSA1MDA7XG5cbiAgbmF2aWdhdGVUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxuXG4gIGVuYWJsZUJ0bigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgcmV0dXJuIHRvcCA+IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19