import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r111 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fa ", ctx_r111.iconClass, "");
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r112 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r112.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    var ctx_r113 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r113.message, i0.ɵɵsanitizeHtml);
} }
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    Object.defineProperty(AlertComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            this.setProperties(val);
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.setProperties = function (type) {
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
    };
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
    return AlertComponent;
}());
export { AlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQzdDLDhCQUNJO0lBQUEsdUJBQW1EO0lBQ3ZELGlCQUFNOzs7SUFEQyxlQUF3QjtJQUF4Qix3REFBd0I7OztJQUczQiw4QkFBaUQ7SUFBQSxZQUFTO0lBQUEsaUJBQU07OztJQUFmLGVBQVM7SUFBVCxvQ0FBUzs7O0lBQzFELDBCQUFpRjs7O0lBQTVCLCtEQUFxQjs7QURGbEY7SUFBQTtLQTJDQztJQXJDQyxzQkFDSSxnQ0FBSTthQUlSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFQRCxVQUNTLEdBQWU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQWFELHNDQUFhLEdBQWIsVUFBYyxJQUFnQjtRQUM1QixJQUFJLElBQUksRUFBRTtZQUNSLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQztnRkFyQ1UsY0FBYzt1REFBZCxjQUFjO1lDVDNCLDhCQUNJO1lBQUEsK0RBQ0k7WUFFSiw4QkFDSTtZQUFBLCtEQUFpRDtZQUNqRCwrREFBMkU7WUFDL0UsaUJBQU07WUFDTiw4QkFDSTtZQUFBLHVCQUE4QztZQUNsRCxpQkFBTTtZQUNWLGlCQUFNOztZQVhlLGtDQUFnQjtZQUNQLGVBQWlCO1lBQWpCLG9DQUFpQjtZQUlKLGVBQWE7WUFBYixnQ0FBYTtZQUNYLGVBQWU7WUFBZixrQ0FBZTs7eUJETjVEO0NBK0NDLEFBM0NELElBMkNDO1NBdENZLGNBQWM7a0RBQWQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFTTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBBbGVydFR5cGVzID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWw6IEFsZXJ0VHlwZXMpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh2YWwpO1xuICB9XG4gIGdldCB0eXBlKCk6IEFsZXJ0VHlwZXMge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlSWNvbjogYm9vbGVhbjtcblxuICBpY29uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF90eXBlOiBBbGVydFR5cGVzO1xuXG4gIHNldFByb3BlcnRpZXModHlwZTogQWxlcnRUeXBlcyk6IHZvaWQge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtY2hlY2snO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtdGltZXMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ZhLWluZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBBbGVydCB0eXBlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidC1hbGVydFwiIFtuZ0NsYXNzXT1cInR5cGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1pY29uXCIgKm5nSWY9XCIhaGlkZUljb25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSB7e2ljb25DbGFzc319XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtY29udGVudC10aXRsZVwiICpuZ0lmPVwidGl0bGVcIj57e3RpdGxlfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtY29udGVudC1tZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCIgW2lubmVySHRtbF09XCJtZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtY2xvc2VcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==