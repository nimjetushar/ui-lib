/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/radio/radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class RadioComponent {
    constructor() {
        this.value = true;
        this.modelChange = new EventEmitter();
        this.handleChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set model(value) {
        this._model = value;
        this.checked = value === this.value ? true : false;
    }
    /**
     * @return {?}
     */
    get model() {
        return this._model;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleOnChange(event) {
        /** @type {?} */
        const checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        /** @type {?} */
        const value = checked ? this.value : false;
        this.handleChange.emit(value);
        this.modelChange.emit(value);
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 't-radio',
                template: "<label class=\"radio\" [class.disabled]=\"disabled\" [ngClass]=\"{'active': checked}\">\n  &nbsp;{{label}}\n  <input type=\"radio\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\"\n    (change)=\"handleOnChange($event)\" [(ngModel)]=\"model\" [value]=\"value\">\n</label>",
                styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.radio{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio input{position:relative;opacity:0}.radio:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled{opacity:.5;cursor:default;pointer-events:none}.radio.active:before{content:'';border:5px solid #0069b1}"]
            }] }
];
RadioComponent.propDecorators = {
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    handleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.label;
    /** @type {?} */
    RadioComponent.prototype.disabled;
    /** @type {?} */
    RadioComponent.prototype.name;
    /** @type {?} */
    RadioComponent.prototype.value;
    /** @type {?} */
    RadioComponent.prototype.modelChange;
    /** @type {?} */
    RadioComponent.prototype.handleChange;
    /** @type {?} */
    RadioComponent.prototype.checked;
    /**
     * @type {?}
     * @private
     */
    RadioComponent.prototype._model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQVVXLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBUzlCLGdCQUFXLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRW5GLGlCQUFZLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBWWhHLENBQUM7Ozs7O0lBckJDLElBQWEsS0FBSyxDQUFDLEtBQXVCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFRRCxjQUFjLENBQUMsS0FBVTs7Y0FDakIsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Y0FDL0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix5U0FBcUM7O2FBRXRDOzs7b0JBR0UsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFFTCxLQUFLOzBCQU9MLE1BQU07MkJBRU4sTUFBTTs7OztJQWRQLCtCQUF1Qjs7SUFDdkIsa0NBQTJCOztJQUMzQiw4QkFBc0I7O0lBQ3RCLCtCQUF3Qzs7SUFTeEMscUNBQTZGOztJQUU3RixzQ0FBOEY7O0lBRTlGLGlDQUFpQjs7Ozs7SUFDakIsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBzZXQgbW9kZWwodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGdldCBtb2RlbCgpOiBib29sZWFuIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gIH1cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpIGhhbmRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPigpO1xuXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX21vZGVsOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIGhhbmRsZU9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5jaGVja2VkID0gKGNoZWNrZWQgJiYgdGhpcy52YWx1ZSA9PT0gdGhpcy5tb2RlbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdmFsdWUgPSBjaGVja2VkID8gdGhpcy52YWx1ZSA6IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==