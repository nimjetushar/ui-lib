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
        this.handleChange = new EventEmitter();
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
        this.handleChange.emit(value);
        this.modelChange.emit(value);
    };
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
    RadioComponent.prototype.handleChange;
    /** @type {?} */
    RadioComponent.prototype.checked;
    /**
     * @type {?}
     * @private
     */
    RadioComponent.prototype._model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUFBO1FBVVcsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFTOUIsZ0JBQVcsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFbkYsaUJBQVksR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFZaEcsQ0FBQztJQXJCQyxzQkFBYSxpQ0FBSzs7OztRQUlsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQU5ELFVBQW1CLEtBQXVCO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JELENBQUM7OztPQUFBOzs7OztJQVdELHVDQUFjOzs7O0lBQWQsVUFBZSxLQUFVOztZQUNqQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUMvRCxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLHlTQUFxQzs7aUJBRXRDOzs7d0JBR0UsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQU9MLE1BQU07K0JBRU4sTUFBTTs7SUFZVCxxQkFBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLGNBQWM7OztJQUV6QiwrQkFBdUI7O0lBQ3ZCLGtDQUEyQjs7SUFDM0IsOEJBQXNCOztJQUN0QiwrQkFBd0M7O0lBU3hDLHFDQUE2Rjs7SUFFN0Ysc0NBQThGOztJQUU5RixpQ0FBaUI7Ozs7O0lBQ2pCLGdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgc2V0IG1vZGVsKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBnZXQgbW9kZWwoKTogYm9vbGVhbiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICB9XG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKSBoYW5kbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4oKTtcblxuICBjaGVja2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9tb2RlbDogYm9vbGVhbiB8IHN0cmluZztcblxuICBoYW5kbGVPbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuY2hlY2tlZCA9IChjaGVja2VkICYmIHRoaXMudmFsdWUgPT09IHRoaXMubW9kZWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHZhbHVlID0gY2hlY2tlZCA/IHRoaXMudmFsdWUgOiBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=