import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fa ", ctx_r54.iconClass, "");
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r55.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r56.message, i0.ɵɵsanitizeHtml);
} }
function AlertComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "i", 11);
    i0.ɵɵlistener("click", function AlertComponent_div_5_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.closeHandler(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class AlertComponent {
    constructor() {
        this.onCloseClick = new EventEmitter();
    }
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
    closeHandler() {
        this.onCloseClick.emit(true);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNDbkUsOEJBQ0k7SUFBQSx1QkFBbUQ7SUFDdkQsaUJBQU07OztJQURDLGVBQXdCO0lBQXhCLHVEQUF3Qjs7O0lBRzNCLDhCQUFpRDtJQUFBLFlBQVM7SUFBQSxpQkFBTTs7O0lBQWYsZUFBUztJQUFULG1DQUFTOzs7SUFDMUQseUJBQWlGOzs7SUFBNUIsOERBQXFCOzs7O0lBRTlFLCtCQUNJO0lBQUEsNkJBQXVFO0lBQTdCLGtMQUF3QjtJQUFDLGlCQUFJO0lBQzNFLGlCQUFNOztBRERWLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBb0JZLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7S0E4QnBFO0lBNUNDLElBQ0ksSUFBSSxDQUFDLEdBQWU7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFhRCxhQUFhLENBQUMsSUFBZ0I7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDUixRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFNBQVM7b0JBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7NEVBNUNVLGNBQWM7bURBQWQsY0FBYztRQ1QzQiw4QkFDSTtRQUFBLCtEQUNJO1FBRUosOEJBQ0k7UUFBQSwrREFBaUQ7UUFDakQsK0RBQTJFO1FBQy9FLGlCQUFNO1FBQ04sK0RBQ0k7UUFFUixpQkFBTTs7UUFYZSxrQ0FBZ0I7UUFDUCxlQUFpQjtRQUFqQixvQ0FBaUI7UUFJSixlQUFhO1FBQWIsZ0NBQWE7UUFDWCxlQUFlO1FBQWYsa0NBQWU7UUFFN0IsZUFBbUI7UUFBbkIsc0NBQW1COztrRERDckMsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFTTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgQWxlcnRUeXBlcyA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybicgfCAnaW5mbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsOiBBbGVydFR5cGVzKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbDtcbiAgICB0aGlzLnNldFByb3BlcnRpZXModmFsKTtcbiAgfVxuICBnZXQgdHlwZSgpOiBBbGVydFR5cGVzIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgaGlkZUljb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVuYWJsZUNsb3NlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBvbkNsb3NlQ2xpY2s6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpY29uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF90eXBlOiBBbGVydFR5cGVzO1xuXG4gIHNldFByb3BlcnRpZXModHlwZTogQWxlcnRUeXBlcyk6IHZvaWQge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtY2hlY2snO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgdGhpcy5pY29uQ2xhc3MgPSAnZmEtdGltZXMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ZhLWluZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBBbGVydCB0eXBlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMub25DbG9zZUNsaWNrLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0LWFsZXJ0XCIgW25nQ2xhc3NdPVwidHlwZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0LWFsZXJ0LWljb25cIiAqbmdJZj1cIiFoaWRlSWNvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIHt7aWNvbkNsYXNzfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInQtYWxlcnQtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jb250ZW50LXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jb250ZW50LW1lc3NhZ2VcIiAqbmdJZj1cIm1lc3NhZ2VcIiBbaW5uZXJIdG1sXT1cIm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidC1hbGVydC1jbG9zZVwiICpuZ0lmPVwiZW5hYmxlQ2xvc2VcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljayk9XCJjbG9zZUhhbmRsZXIoKVwiPjwvaT5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==