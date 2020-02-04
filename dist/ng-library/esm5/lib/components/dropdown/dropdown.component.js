/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';
/**
 * @record
 */
export function Dropdown() { }
if (false) {
    /** @type {?} */
    Dropdown.prototype.label;
    /** @type {?} */
    Dropdown.prototype.value;
}
var DropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable: no-output-on-prefix
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this._tooltipPosition = 'top';
        return _this;
    }
    Object.defineProperty(DropdownComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "tooltipPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltipPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipPosition = value || 'top';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DropdownComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onChange(value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.onChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.writeValue(event.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.focusHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onFocus.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.blurHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onBlur.emit(event);
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 't-dropdown',
                    template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return DropdownComponent; })),
                            multi: true
                        }],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"]
                }] }
    ];
    DropdownComponent.propDecorators = {
        options: [{ type: Input }],
        readonly: [{ type: Input }],
        disabled: [{ type: Input }],
        filter: [{ type: Input }],
        placeholder: [{ type: Input }],
        staticLabel: [{ type: Input }],
        name: [{ type: Input }],
        tooltip: [{ type: Input }],
        tooltipPosition: [{ type: Input }],
        tooltipDisabled: [{ type: Input }],
        autoDisplayFirst: [{ type: Input }],
        scrollHeight: [{ type: Input }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }]
    };
    return DropdownComponent;
}(UiInput));
export { DropdownComponent };
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.readonly;
    /** @type {?} */
    DropdownComponent.prototype.disabled;
    /** @type {?} */
    DropdownComponent.prototype.filter;
    /** @type {?} */
    DropdownComponent.prototype.placeholder;
    /** @type {?} */
    DropdownComponent.prototype.staticLabel;
    /** @type {?} */
    DropdownComponent.prototype.name;
    /** @type {?} */
    DropdownComponent.prototype.tooltip;
    /** @type {?} */
    DropdownComponent.prototype.tooltipDisabled;
    /** @type {?} */
    DropdownComponent.prototype.autoDisplayFirst;
    /** @type {?} */
    DropdownComponent.prototype.scrollHeight;
    /** @type {?} */
    DropdownComponent.prototype.onFocus;
    /** @type {?} */
    DropdownComponent.prototype.onBlur;
    /** @type {?} */
    DropdownComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._tooltipPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUVwRCw4QkFHQzs7O0lBRkMseUJBQWM7O0lBQ2QseUJBQVc7O0FBS2I7SUFXdUMsNkNBQU87SUFYOUM7UUFBQSxxRUErREM7O1FBeEJXLGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLakQsc0JBQWdCLEdBQW9CLEtBQUssQ0FBQzs7SUFrQnBELENBQUM7SUFsREMsc0JBQ0ksc0NBQU87Ozs7UUFHWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQU5ELFVBQ1ksS0FBaUI7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFZRCxzQkFBYSw4Q0FBZTs7OztRQUc1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBTEQsVUFBNkIsS0FBc0I7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7O0lBaUJELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFlO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBWTs7OztJQUFaLFVBQWEsS0FBSztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsNmFBQXdDO29CQUV4QyxTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQztvQkFDRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7MEJBR0UsS0FBSzsyQkFRTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBTUwsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7MEJBR0wsTUFBTTt5QkFDTixNQUFNOztJQXVCVCx3QkFBQztDQUFBLEFBL0RELENBV3VDLE9BQU8sR0FvRDdDO1NBcERZLGlCQUFpQjs7O0lBVTVCLHFDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQixtQ0FBeUI7O0lBQ3pCLHdDQUE2Qjs7SUFDN0Isd0NBQTZCOztJQUM3QixpQ0FBc0I7O0lBQ3RCLG9DQUFzQjs7SUFPdEIsNENBQWtDOztJQUNsQyw2Q0FBbUM7O0lBQ25DLHlDQUE4Qjs7SUFHOUIsb0NBQTBEOztJQUMxRCxtQ0FBeUQ7O0lBRXpELGtDQUFXOzs7OztJQUVYLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVpSW5wdXQgfSBmcm9tICcuLi8uLi9jbGFzcy91aUlucHV0LmNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93biB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59XG5cbnR5cGUgVG9vbHRpcFBvc2l0aW9uID0gJ3JpZ2h0JyB8ICdsZWZ0JyB8ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgVWlJbnB1dCB7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsdWU6IERyb3Bkb3duW10pIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogRHJvcGRvd25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgc3RhdGljTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBhbnk7XG4gIEBJbnB1dCgpIHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbikge1xuICAgIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbiA9IHZhbHVlIHx8ICd0b3AnO1xuICB9XG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogVG9vbHRpcFBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFBvc2l0aW9uO1xuICB9XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b0Rpc3BsYXlGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB2YWx1ZTogYW55O1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IERyb3Bkb3duW107XG4gIHByaXZhdGUgX3Rvb2x0aXBQb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCc7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRHJvcGRvd24pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZShldmVudC52YWx1ZSk7XG4gIH1cblxuICBmb2N1c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBibHVySGFuZGxlcihldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=