import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
var _c0 = function (a0) { return { "active": a0 }; };
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    Object.defineProperty(RadioComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.checked = value === this.value ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.handleOnChange = function (event) {
        var checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        var value = checked ? this.value : false;
        this.modelChange.emit(value);
    };
    RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
    RadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["t-radio"]], inputs: { label: "label", disabled: "disabled", name: "name", value: "value", model: "model" }, outputs: { modelChange: "modelChange" }, decls: 3, vars: 11, consts: [[1, "radio", 3, "ngClass"], ["type", "radio", 3, "name", "checked", "disabled", "ngModel", "value", "change", "ngModelChange"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementStart(2, "input", 1);
            i0.ɵɵlistener("change", function RadioComponent_Template_input_change_2_listener($event) { return ctx.handleOnChange($event); })("ngModelChange", function RadioComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.disabled);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx.checked));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" \u00A0", ctx.label, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("name", ctx.name)("checked", ctx.checked)("disabled", ctx.disabled)("ngModel", ctx.model)("value", ctx.value);
        } }, directives: [i1.NgClass, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".hide[_ngcontent-%COMP%]{display:none!important}.disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.4}.z-depth-1[_ngcontent-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half[_ngcontent-%COMP%]{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.radio[_ngcontent-%COMP%]{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;opacity:0}.radio[_ngcontent-%COMP%]:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;pointer-events:none}.radio.active[_ngcontent-%COMP%]:before{content:'';border:5px solid #0069b1}"] });
    return RadioComponent;
}());
export { RadioComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 't-radio',
                templateUrl: './radio.component.html',
                styleUrls: ['./radio.component.scss']
            }]
    }], null, { label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], model: [{
            type: Input
        }], modelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXZFO0lBQUE7UUFVVyxVQUFLLEdBQXFCLElBQUksQ0FBQztRQVU5QixnQkFBVyxHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztLQVk5RjtJQXJCQyxzQkFDSSxpQ0FBSzthQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFQRCxVQUNVLEtBQXVCO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBV0QsdUNBQWMsR0FBZCxVQUFlLEtBQVU7UUFDdkIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztnRkExQlUsY0FBYzt1REFBZCxjQUFjO1lDUDNCLGdDQUNFO1lBQUEsWUFDQTtZQUFBLGdDQUVGO1lBRjhFLGtHQUFVLDBCQUFzQixJQUFDLHlIQUFBO1lBQTdHLGlCQUVGO1lBQUEsaUJBQVE7O1lBSmEsd0NBQTJCO1lBQUMsaUVBQStCO1lBQzlFLGVBQ0E7WUFEQSxnREFDQTtZQUFvQixlQUFhO1lBQWIsK0JBQWEsd0JBQUEsMEJBQUEsc0JBQUEsb0JBQUE7O3lCREZuQztDQWtDQyxBQWhDRCxJQWdDQztTQTNCWSxjQUFjO2tEQUFkLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBU0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlbCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX21vZGVsID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWUgPT09IHRoaXMudmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgZ2V0IG1vZGVsKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPigpO1xuXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbW9kZWw6IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgaGFuZGxlT25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrZWQgPSAoY2hlY2tlZCAmJiB0aGlzLnZhbHVlID09PSB0aGlzLm1vZGVsKSA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB2YWx1ZSA9IGNoZWNrZWQgPyB0aGlzLnZhbHVlIDogZmFsc2U7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIiwiPGxhYmVsIGNsYXNzPVwicmFkaW9cIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGNoZWNrZWR9XCI+XG4gICZuYnNwO3t7bGFiZWx9fVxuICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgW25hbWVdPVwibmFtZVwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2hhbmdlKT1cImhhbmRsZU9uQ2hhbmdlKCRldmVudClcIlxuICAgIFsobmdNb2RlbCldPVwibW9kZWxcIiBbdmFsdWVdPVwidmFsdWVcIj5cbjwvbGFiZWw+Il19