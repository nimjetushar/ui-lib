/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.modelChange = new EventEmitter();
        this.handleChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleOnChange(event) {
        this.checked = event.target.checked;
        this.handleChange.emit(this.checked);
        this.modelChange.emit(this.checked);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 't-checkbox',
                template: "<label class=\"checkbox\" [class.disabled]=\"disabled\">{{label}}\n  <input type=\"checkbox\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\"\n    (change)=\"handleOnChange($event)\" [(ngModel)]=\"model\">\n  <span class=\"fa checkmark checkmark-primary active\"></span>\n</label>",
                styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.checkbox{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox input{position:relative;opacity:0}.checkbox.disabled{opacity:.5;cursor:default;pointer-events:none}.checkbox .checkmark-primary{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox .checkmark-primary.active{background-color:#fff;border:.0625rem solid #0069b1}.checkbox .checkmark:after{content:\"\";position:absolute;display:none;bottom:0;left:0;top:-1px;right:0}.checkbox .checkmark.active:after{content:\"\\f00c\";color:#fff}.checkbox input:checked~.checkmark{background-color:#0069b1}.checkbox input:checked~.checkmark:after{display:block;font-size:.8125rem;height:1rem;line-height:15px}.checkbox .checkmark.disabled:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    handleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.model;
    /** @type {?} */
    CheckboxComponent.prototype.modelChange;
    /** @type {?} */
    CheckboxComponent.prototype.handleChange;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBTlUsZ0JBQVcsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVqRSxpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBSTVELENBQUM7Ozs7O0lBRWpCLGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrVEFBd0M7O2FBRXpDOzs7OztvQkFHRSxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU07MkJBRU4sTUFBTTs7OztJQVBQLGtDQUF1Qjs7SUFDdkIsaUNBQXNCOztJQUN0QixxQ0FBMkI7O0lBRTNCLGtDQUF3Qjs7SUFDeEIsd0NBQTJFOztJQUUzRSx5Q0FBNEU7O0lBRTVFLG9DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIG1vZGVsOiBib29sZWFuO1xuICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KCkgaGFuZGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gIH1cbn1cbiJdfQ==