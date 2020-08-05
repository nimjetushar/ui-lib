import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = function (a0) { return { "active": a0 }; };
export class RadioComponent {
    constructor() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    set model(value) {
        this._model = value;
        this.checked = value === this.value ? true : false;
    }
    get model() {
        return this._model;
    }
    handleOnChange(event) {
        const checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        const value = checked ? this.value : false;
        this.modelChange.emit(value);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3ZFLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBVVcsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFVOUIsZ0JBQVcsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7S0FZOUY7SUFyQkMsSUFDSSxLQUFLLENBQUMsS0FBdUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBUUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7NEVBMUJVLGNBQWM7bURBQWQsY0FBYztRQ1AzQixnQ0FDRTtRQUFBLFlBQ0E7UUFBQSxnQ0FFRjtRQUY4RSxrR0FBVSwwQkFBc0IsSUFBQyx5SEFBQTtRQUE3RyxpQkFFRjtRQUFBLGlCQUFROztRQUphLHdDQUEyQjtRQUFDLGlFQUErQjtRQUM5RSxlQUNBO1FBREEsZ0RBQ0E7UUFBb0IsZUFBYTtRQUFiLCtCQUFhLHdCQUFBLDBCQUFBLHNCQUFBLG9CQUFBOztrRERLdEIsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFTTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IG1vZGVsKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBnZXQgbW9kZWwoKTogYm9vbGVhbiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICB9XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+KCk7XG5cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIF9tb2RlbDogYm9vbGVhbiB8IHN0cmluZztcblxuICBoYW5kbGVPbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuY2hlY2tlZCA9IChjaGVja2VkICYmIHRoaXMudmFsdWUgPT09IHRoaXMubW9kZWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHZhbHVlID0gY2hlY2tlZCA/IHRoaXMudmFsdWUgOiBmYWxzZTtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCI8bGFiZWwgY2xhc3M9XCJyYWRpb1wiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogY2hlY2tlZH1cIj5cbiAgJm5ic3A7e3tsYWJlbH19XG4gIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBbbmFtZV09XCJuYW1lXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjaGFuZ2UpPVwiaGFuZGxlT25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiIFt2YWx1ZV09XCJ2YWx1ZVwiPlxuPC9sYWJlbD4iXX0=