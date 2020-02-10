/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/radio/radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    Object.defineProperty(RadioComponent.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._model = value;
            this.checked = value === this.value ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    RadioComponent.prototype.handleOnChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        /** @type {?} */
        var value = checked ? this.value : false;
        this.modelChange.emit(value);
    };
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
    return RadioComponent;
}());
export { RadioComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUFBO1FBVVcsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFVOUIsZ0JBQVcsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFZL0YsQ0FBQztJQXJCQyxzQkFDSSxpQ0FBSzs7OztRQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBUEQsVUFDVSxLQUF1QjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTs7Ozs7SUFXRCx1Q0FBYzs7OztJQUFkLFVBQWUsS0FBVTs7WUFDakIsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDL0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix5U0FBcUM7O2lCQUV0Qzs7O3dCQUdFLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFTTCxNQUFNOztJQVlULHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksY0FBYzs7O0lBRXpCLCtCQUF1Qjs7SUFDdkIsa0NBQTJCOztJQUMzQiw4QkFBc0I7O0lBQ3RCLCtCQUF3Qzs7SUFVeEMscUNBQTZGOztJQUU3RixpQ0FBaUI7Ozs7O0lBRWpCLGdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlbCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX21vZGVsID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWUgPT09IHRoaXMudmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgZ2V0IG1vZGVsKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPigpO1xuXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfbW9kZWw6IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgaGFuZGxlT25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrZWQgPSAoY2hlY2tlZCAmJiB0aGlzLnZhbHVlID09PSB0aGlzLm1vZGVsKSA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB2YWx1ZSA9IGNoZWNrZWQgPyB0aGlzLnZhbHVlIDogZmFsc2U7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19