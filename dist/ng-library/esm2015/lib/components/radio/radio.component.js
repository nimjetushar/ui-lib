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
        this.modelChange.emit(value);
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 't-radio',
                template: "<label class=\"radio\" [class.disabled]=\"disabled\" [ngClass]=\"{'active': checked}\">\n  &nbsp;{{label}}\n  <input type=\"radio\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\" (change)=\"handleOnChange($event)\"\n    [(ngModel)]=\"model\" [value]=\"value\">\n</label>",
                styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.radio{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio input{position:relative;opacity:0}.radio:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled{opacity:.5;cursor:default;pointer-events:none}.radio.active:before{content:'';border:5px solid #0069b1}"]
            }] }
];
RadioComponent.propDecorators = {
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }]
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
    RadioComponent.prototype.checked;
    /**
     * @type {?}
     * @private
     */
    RadioComponent.prototype._model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQVVXLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBVTlCLGdCQUFXLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBWS9GLENBQUM7Ozs7O0lBckJDLElBQ0ksS0FBSyxDQUFDLEtBQXVCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFRRCxjQUFjLENBQUMsS0FBVTs7Y0FDakIsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Y0FDL0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix5U0FBcUM7O2FBRXRDOzs7b0JBR0UsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQVNMLE1BQU07Ozs7SUFiUCwrQkFBdUI7O0lBQ3ZCLGtDQUEyQjs7SUFDM0IsOEJBQXNCOztJQUN0QiwrQkFBd0M7O0lBVXhDLHFDQUE2Rjs7SUFFN0YsaUNBQWlCOzs7OztJQUVqQixnQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZXQgbW9kZWwodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGdldCBtb2RlbCgpOiBib29sZWFuIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gIH1cblxuICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4oKTtcblxuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX21vZGVsOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIGhhbmRsZU9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5jaGVja2VkID0gKGNoZWNrZWQgJiYgdGhpcy52YWx1ZSA9PT0gdGhpcy5tb2RlbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdmFsdWUgPSBjaGVja2VkID8gdGhpcy52YWx1ZSA6IGZhbHNlO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==