import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.modelChange = new EventEmitter();
    }
    CheckboxComponent.prototype.handleOnChange = function (event) {
        this.checked = event.target.checked;
        this.modelChange.emit(this.checked);
    };
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
    CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["t-checkbox"]], inputs: { label: "label", name: "name", disabled: "disabled", model: "model", readonly: "readonly" }, outputs: { modelChange: "modelChange" }, decls: 4, vars: 8, consts: [[1, "checkbox"], ["type", "checkbox", 3, "name", "ngModel", "checked", "disabled", "readonly", "ngModelChange", "change"], [1, "fa", "checkmark", "checkmark-primary", "active"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementStart(2, "input", 1);
            i0.ɵɵlistener("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; })("change", function CheckboxComponent_Template_input_change_2_listener($event) { return ctx.handleOnChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx.label, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.model)("checked", ctx.checked)("disabled", ctx.disabled)("readonly", ctx.readonly);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.checkbox[_ngcontent-%COMP%]{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;opacity:0}.checkbox.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;pointer-events:none}.checkbox[_ngcontent-%COMP%]   .checkmark-primary[_ngcontent-%COMP%]{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox[_ngcontent-%COMP%]   .checkmark-primary.active[_ngcontent-%COMP%]{background-color:#fff;border:.0625rem solid #0069b1}.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:none;bottom:0;left:1px;top:-1px;right:0}.checkbox[_ngcontent-%COMP%]   .checkmark.active[_ngcontent-%COMP%]:after{content:\"\\f00c\";color:#fff}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#0069b1}.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block;font-size:.75rem;height:1rem;line-height:15px}.checkbox[_ngcontent-%COMP%]   .checkmark.disabled[_ngcontent-%COMP%]:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"] });
    return CheckboxComponent;
}());
export { CheckboxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 't-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss']
            }]
    }], null, { label: [{
            type: Input
        }], name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], model: [{
            type: Input
        }], readonly: [{
            type: Input
        }], modelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUV2RTtJQUFBO1FBYVksZ0JBQVcsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQVE1RTtJQUpDLDBDQUFjLEdBQWQsVUFBZSxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7c0ZBZlUsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUNQOUIsZ0NBQW9EO1lBQUEsWUFDbEQ7WUFBQSxnQ0FTQTtZQVBFLHlJQUFtQix3RkFLVCwwQkFBc0IsSUFMYjtZQUZyQixpQkFTQTtZQUFBLDBCQUEyRDtZQUM3RCxpQkFBUTs7WUFYZ0Isd0NBQTJCO1lBQUMsZUFDbEQ7WUFEa0QseUNBQ2xEO1lBQ0UsZUFBYTtZQUFiLCtCQUFhLHNCQUFBLHdCQUFBLDBCQUFBLDBCQUFBOzs0QkRGakI7Q0F1QkMsQUFyQkQsSUFxQkM7U0FoQlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6Qzs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtb2RlbDogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICBoYW5kbGVPbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxsYWJlbCBjbGFzcz1cImNoZWNrYm94XCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+e3tsYWJlbH19XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICBbbmFtZV09XCJuYW1lXCIgXG4gICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiXG4gICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIFxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXG4gICAgXG4gICAgKGNoYW5nZSk9XCJoYW5kbGVPbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAvPlxuICA8c3BhbiBjbGFzcz1cImZhIGNoZWNrbWFyayBjaGVja21hcmstcHJpbWFyeSBhY3RpdmVcIj48L3NwYW4+XG48L2xhYmVsPiJdfQ==