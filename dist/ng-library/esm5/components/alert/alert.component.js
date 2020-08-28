import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r114 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fa ", ctx_r114.iconClass, "");
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r115 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r115.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    var ctx_r116 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r116.message, i0.ɵɵsanitizeHtml);
} }
function AlertComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "i", 11);
    i0.ɵɵlistener("click", function AlertComponent_div_5_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r119); var ctx_r118 = i0.ɵɵnextContext(); return ctx_r118.closeHandler(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.onCloseClick = new EventEmitter();
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
    AlertComponent.prototype.closeHandler = function () {
        this.onCloseClick.emit(true);
    };
    AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
    AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["t-alert"]], inputs: { type: "type", title: "title", message: "message", hideIcon: "hideIcon", enableClose: "enableClose" }, outputs: { onCloseClick: "onCloseClick" }, decls: 6, vars: 5, consts: [[1, "t-alert", 3, "ngClass"], ["class", "t-alert-icon", 4, "ngIf"], [1, "t-alert-content"], ["class", "t-alert-content-title", 4, "ngIf"], ["class", "t-alert-content-message", 3, "innerHtml", 4, "ngIf"], ["class", "t-alert-close", 4, "ngIf"], [1, "t-alert-icon"], ["aria-hidden", "true"], [1, "t-alert-content-title"], [1, "t-alert-content-message", 3, "innerHtml"], [1, "t-alert-close"], ["aria-hidden", "true", 1, "fa", "fa-times", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AlertComponent_div_1_Template, 2, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, AlertComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵtemplate(4, AlertComponent_div_4_Template, 1, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, AlertComponent_div_5_Template, 2, 0, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.enableClose);
        } }, directives: [i1.NgClass, i1.NgIf], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.t-alert[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;padding:4px;border-radius:4px}.t-alert.success[_ngcontent-%COMP%]{background-color:#82b20a}.t-alert.error[_ngcontent-%COMP%]{background-color:#b00020}.t-alert.warn[_ngcontent-%COMP%]{background-color:#ffa81e}.t-alert.info[_ngcontent-%COMP%]{background-color:#00a8e4}.t-alert-icon[_ngcontent-%COMP%]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;padding:0 0 0 14px;font-size:1.125rem;font-weight:lighter;color:#fff}.t-alert-content[_ngcontent-%COMP%]{padding-left:24px;color:#fff}.t-alert-content-title[_ngcontent-%COMP%]{font-size:.9375rem;font-weight:700;word-break:break-word}.t-alert-content-message[_ngcontent-%COMP%]{font-size:.8125rem;word-break:break-word}.t-alert-close[_ngcontent-%COMP%]{margin-left:auto;padding:0 10px;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;cursor:pointer}"] });
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
        }], enableClose: [{
            type: Input
        }], onCloseClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNDbkUsOEJBQ0k7SUFBQSx1QkFBbUQ7SUFDdkQsaUJBQU07OztJQURDLGVBQXdCO0lBQXhCLHdEQUF3Qjs7O0lBRzNCLDhCQUFpRDtJQUFBLFlBQVM7SUFBQSxpQkFBTTs7O0lBQWYsZUFBUztJQUFULG9DQUFTOzs7SUFDMUQseUJBQWlGOzs7SUFBNUIsK0RBQXFCOzs7O0lBRTlFLCtCQUNJO0lBQUEsNkJBQXVFO0lBQTdCLG1MQUF3QjtJQUFDLGlCQUFJO0lBQzNFLGlCQUFNOztBRE5WO0lBQUE7UUFvQlksaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQThCcEU7SUE1Q0Msc0JBQ0ksZ0NBQUk7YUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBUEQsVUFDUyxHQUFlO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFnQkQsc0NBQWEsR0FBYixVQUFjLElBQWdCO1FBQzVCLElBQUksSUFBSSxFQUFFO1lBQ1IsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Z0ZBNUNVLGNBQWM7dURBQWQsY0FBYztZQ1QzQiw4QkFDSTtZQUFBLCtEQUNJO1lBRUosOEJBQ0k7WUFBQSwrREFBaUQ7WUFDakQsK0RBQTJFO1lBQy9FLGlCQUFNO1lBQ04sK0RBQ0k7WUFFUixpQkFBTTs7WUFYZSxrQ0FBZ0I7WUFDUCxlQUFpQjtZQUFqQixvQ0FBaUI7WUFJSixlQUFhO1lBQWIsZ0NBQWE7WUFDWCxlQUFlO1lBQWYsa0NBQWU7WUFFN0IsZUFBbUI7WUFBbkIsc0NBQW1COzt5QkRSbEQ7Q0FzREMsQUFsREQsSUFrREM7U0E3Q1ksY0FBYztrREFBZCxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQVNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBBbGVydFR5cGVzID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWw6IEFsZXJ0VHlwZXMpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh2YWwpO1xuICB9XG4gIGdldCB0eXBlKCk6IEFsZXJ0VHlwZXMge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlSWNvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgZW5hYmxlQ2xvc2U6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIG9uQ2xvc2VDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGljb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3R5cGU6IEFsZXJ0VHlwZXM7XG5cbiAgc2V0UHJvcGVydGllcyh0eXBlOiBBbGVydFR5cGVzKTogdm9pZCB7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS1jaGVjayc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS10aW1lcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtaW5mbyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIEFsZXJ0IHR5cGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZUhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsb3NlQ2xpY2suZW1pdCh0cnVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInQtYWxlcnRcIiBbbmdDbGFzc109XCJ0eXBlXCI+XG4gICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtaWNvblwiICpuZ0lmPVwiIWhpZGVJY29uXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEge3tpY29uQ2xhc3N9fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWNvbnRlbnQtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWNvbnRlbnQtbWVzc2FnZVwiICpuZ0lmPVwibWVzc2FnZVwiIFtpbm5lckh0bWxdPVwibWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWNsb3NlXCIgKm5nSWY9XCJlbmFibGVDbG9zZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKT1cImNsb3NlSGFuZGxlcigpXCI+PC9pPlxuICAgIDwvZGl2PlxuPC9kaXY+Il19