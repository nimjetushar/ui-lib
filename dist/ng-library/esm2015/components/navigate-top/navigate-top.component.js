import { __decorate, __metadata } from "tslib";
import { Component, Input, HostListener } from '@angular/core';
let NavigateTopComponent = class NavigateTopComponent {
    constructor() {
        this.height = 500;
    }
    scrollEvent() {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        this.enableNavigator = (top > this.height);
    }
    navigateToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
export { NavigateTopComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGUtdG9wL25hdmlnYXRlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUFqQztRQUVXLFdBQU0sR0FBVyxHQUFHLENBQUM7SUFhaEMsQ0FBQztJQVJDLFdBQVc7UUFDVCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGLENBQUE7QUFiVTtJQUFSLEtBQUssRUFBRTs7b0RBQXNCO0FBSzlCO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7Ozt1REFJN0I7QUFWVSxvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixtS0FBNEM7O0tBRTdDLENBQUM7R0FDVyxvQkFBb0IsQ0FlaEM7U0FmWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1uYXZpZ2F0ZS10b3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGUtdG9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGUtdG9wLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVUb3BDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gNTAwO1xuXG4gIGVuYWJsZU5hdmlnYXRvcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgc2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5lbmFibGVOYXZpZ2F0b3IgPSAodG9wID4gdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgbmF2aWdhdGVUb1RvcCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxufVxuIl19