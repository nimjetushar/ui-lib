import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fa ", ctx_r54.iconClass, "");
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r55.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r56.message, i0.ɵɵsanitizeHtml);
} }
export class AlertComponent {
    set type(val) {
        this._type = val;
        this.setProperties(val);
    }
    get type() {
        return this._type;
    }
    setProperties(type) {
        if (type) {
            switch (type) {
                case 'success':
                    this.iconClass = 'fa-check';
                    break;
                case 'error':
                    this.iconClass = 'fa-times';
                    break;
                case 'warn':
                    this.iconClass = 'fa-exclamation-triangle';
                    break;
                case 'info':
                    this.iconClass = 'fa-info';
                    break;
                default:
                    throw new Error('invalid Alert type');
            }
        }
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["t-alert"]], inputs: { type: "type", title: "title", message: "message", hideIcon: "hideIcon" }, decls: 7, vars: 4, consts: [[1, "t-alert", 3, "ngClass"], ["class", "t-alert-icon", 4, "ngIf"], [1, "t-alert-content"], ["class", "t-alert-content-title", 4, "ngIf"], ["class", "t-alert-content-message", 3, "innerHtml", 4, "ngIf"], [1, "t-alert-close"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "t-alert-icon"], ["aria-hidden", "true"], [1, "t-alert-content-title"], [1, "t-alert-content-message", 3, "innerHtml"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AlertComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, AlertComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵtemplate(4, AlertComponent_div_4_Template, 1, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelement(6, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.message);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.t-alert[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;padding:4px;border-radius:4px}.t-alert.success[_ngcontent-%COMP%]{background-color:#82b20a}.t-alert.error[_ngcontent-%COMP%]{background-color:#d20f55}.t-alert.warn[_ngcontent-%COMP%]{background-color:#ffa81e}.t-alert.info[_ngcontent-%COMP%]{background-color:#00a8e4}.t-alert-icon[_ngcontent-%COMP%]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;padding:0 14px;font-size:1.125rem;font-weight:lighter;color:#fff}.t-alert-content-title[_ngcontent-%COMP%]{font-size:1.1875rem;font-weight:700}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 't-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], message: [{
            type: Input
        }], hideIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQzdDLDhCQUNJO0lBQUEsdUJBQW1EO0lBQ3ZELGlCQUFNOzs7SUFEQyxlQUF3QjtJQUF4Qix1REFBd0I7OztJQUczQiw4QkFBaUQ7SUFBQSxZQUFTO0lBQUEsaUJBQU07OztJQUFmLGVBQVM7SUFBVCxtQ0FBUzs7O0lBQzFELDBCQUFpRjs7O0lBQTVCLDhEQUFxQjs7QURHbEYsTUFBTSxPQUFPLGNBQWM7SUFDekIsSUFDSSxJQUFJLENBQUMsR0FBZTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQVVELGFBQWEsQ0FBQyxJQUFnQjtRQUM1QixJQUFJLElBQUksRUFBRTtZQUNSLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7NEVBckNVLGNBQWM7bURBQWQsY0FBYztRQ1QzQiw4QkFDSTtRQUFBLCtEQUNJO1FBRUosOEJBQ0k7UUFBQSwrREFBaUQ7UUFDakQsK0RBQTJFO1FBQy9FLGlCQUFNO1FBQ04sOEJBQ0k7UUFBQSx1QkFBOEM7UUFDbEQsaUJBQU07UUFDVixpQkFBTTs7UUFYZSxrQ0FBZ0I7UUFDUCxlQUFpQjtRQUFqQixvQ0FBaUI7UUFJSixlQUFhO1FBQWIsZ0NBQWE7UUFDWCxlQUFlO1FBQWYsa0NBQWU7O2tEREcvQyxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQVNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEFsZXJ0VHlwZXMgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm4nIHwgJ2luZm8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbDogQWxlcnRUeXBlcykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWw7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHZhbCk7XG4gIH1cbiAgZ2V0IHR5cGUoKTogQWxlcnRUeXBlcyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZGVJY29uOiBib29sZWFuO1xuXG4gIGljb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3R5cGU6IEFsZXJ0VHlwZXM7XG5cbiAgc2V0UHJvcGVydGllcyh0eXBlOiBBbGVydFR5cGVzKTogdm9pZCB7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS1jaGVjayc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS10aW1lcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIEFsZXJ0IHR5cGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0LWFsZXJ0XCIgW25nQ2xhc3NdPVwidHlwZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWljb25cIiAqbmdJZj1cIiFoaWRlSWNvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIHt7aWNvbkNsYXNzfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jb250ZW50LXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jb250ZW50LW1lc3NhZ2VcIiAqbmdJZj1cIm1lc3NhZ2VcIiBbaW5uZXJIdG1sXT1cIm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jbG9zZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvZGl2PlxuPC9kaXY+Il19