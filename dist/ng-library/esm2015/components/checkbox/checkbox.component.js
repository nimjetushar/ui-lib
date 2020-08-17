import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class CheckboxComponent {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    handleOnChange(event) {
        this.checked = event.target.checked;
        this.modelChange.emit(this.checked);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU92RSxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBYVksZ0JBQVcsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQVE1RTtJQUpDLGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2tGQWZVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDUDlCLGdDQUFvRDtRQUFBLFlBQ2xEO1FBQUEsZ0NBU0E7UUFQRSx5SUFBbUIsd0ZBS1QsMEJBQXNCLElBTGI7UUFGckIsaUJBU0E7UUFBQSwwQkFBMkQ7UUFDN0QsaUJBQVE7O1FBWGdCLHdDQUEyQjtRQUFDLGVBQ2xEO1FBRGtELHlDQUNsRDtRQUNFLGVBQWE7UUFBYiwrQkFBYSxzQkFBQSx3QkFBQSwwQkFBQSwwQkFBQTs7a0RES0osaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbW9kZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgaGFuZGxlT25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xuICB9XG59XG4iLCI8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPnt7bGFiZWx9fVxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgW25hbWVdPVwibmFtZVwiIFxuICAgIFsobmdNb2RlbCldPVwibW9kZWxcIlxuICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIiBcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBcbiAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgIFxuICAgIChjaGFuZ2UpPVwiaGFuZGxlT25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cbiAgPHNwYW4gY2xhc3M9XCJmYSBjaGVja21hcmsgY2hlY2ttYXJrLXByaW1hcnkgYWN0aXZlXCI+PC9zcGFuPlxuPC9sYWJlbD4iXX0=