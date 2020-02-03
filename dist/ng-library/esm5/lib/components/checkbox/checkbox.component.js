/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.modelChange = new EventEmitter();
        this.handleChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.handleOnChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.checked = event.target.checked;
        this.handleChange.emit(this.checked);
        this.modelChange.emit(this.checked);
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 't-checkbox',
                    template: "<label class=\"checkbox\" [class.disabled]=\"disabled\">{{label}}\n  <input type=\"checkbox\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\"\n    (change)=\"handleOnChange($event)\" [(ngModel)]=\"model\">\n  <span class=\"fa checkmark checkmark-primary active\"></span>\n</label>",
                    styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.checkbox{display:inline;position:relative;padding-left:1.25rem;margin-bottom:.75rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox input{position:relative;opacity:0}.checkbox.disabled{opacity:.5;cursor:default;pointer-events:none}.checkbox .checkmark-primary{position:absolute;top:.25rem;left:0;height:1rem;width:1rem}.checkbox .checkmark-primary.active{background-color:#fff;border:.0625rem solid #0069b1}.checkbox .checkmark:after{content:\"\";position:absolute;display:none;bottom:0;left:0;top:-1px;right:0}.checkbox .checkmark.active:after{content:\"\\f00c\";color:#fff}.checkbox input:checked~.checkmark{background-color:#0069b1}.checkbox input:checked~.checkmark:after{display:block;font-size:.8125rem;height:1rem;line-height:15px}.checkbox .checkmark.disabled:after{color:#dfdfdf;margin-left:.03125rem;margin-bottom:.03125rem}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        label: [{ type: Input }],
        name: [{ type: Input }],
        disabled: [{ type: Input }],
        model: [{ type: Input }],
        modelChange: [{ type: Output }],
        handleChange: [{ type: Output }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQWtCRTtRQU5VLGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakUsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUk1RCxDQUFDOzs7OztJQUVqQiwwQ0FBYzs7OztJQUFkLFVBQWUsS0FBVTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsa1RBQXdDOztpQkFFekM7Ozs7O3dCQUdFLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUVMLEtBQUs7OEJBQ0wsTUFBTTsrQkFFTixNQUFNOztJQVdULHdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksaUJBQWlCOzs7SUFFNUIsa0NBQXVCOztJQUN2QixpQ0FBc0I7O0lBQ3RCLHFDQUEyQjs7SUFFM0Isa0NBQXdCOztJQUN4Qix3Q0FBMkU7O0lBRTNFLHlDQUE0RTs7SUFFNUUsb0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbW9kZWw6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSBoYW5kbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgaGFuZGxlT25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcbiAgfVxufVxuIl19