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
                    template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n    [autoDisplayFirst]=\"autoDisplayFirst\"\n    [scrollHeight]=\"scrollHeight\"\n    [autofocus]=\"autofocus\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
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
        autoDisplayFirst: [{ type: Input }],
        scrollHeight: [{ type: Input }],
        autofocus: [{ type: Input }],
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
    DropdownComponent.prototype.autoDisplayFirst;
    /** @type {?} */
    DropdownComponent.prototype.scrollHeight;
    /** @type {?} */
    DropdownComponent.prototype.autofocus;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUVwRCw4QkFHQzs7O0lBRkMseUJBQWM7O0lBQ2QseUJBQVc7O0FBS2I7SUFXdUMsNkNBQU87SUFYOUM7UUFBQSxxRUErREM7O1FBeEJXLGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLakQsc0JBQWdCLEdBQW9CLEtBQUssQ0FBQzs7SUFrQnBELENBQUM7SUFsREMsc0JBQ0ksc0NBQU87Ozs7UUFHWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQU5ELFVBQ1ksS0FBaUI7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFZRCxzQkFBYSw4Q0FBZTs7OztRQUc1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBTEQsVUFBNkIsS0FBc0I7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7O0lBaUJELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFlO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBWTs7OztJQUFaLFVBQWEsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksS0FBaUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsOGhCQUF3QztvQkFFeEMsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7b0JBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OzBCQUdFLEtBQUs7MkJBUUwsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQU1MLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUdMLE1BQU07eUJBQ04sTUFBTTs7SUF1QlQsd0JBQUM7Q0FBQSxBQS9ERCxDQVd1QyxPQUFPLEdBb0Q3QztTQXBEWSxpQkFBaUI7OztJQVU1QixxQ0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6Qix3Q0FBNkI7O0lBQzdCLHdDQUE2Qjs7SUFDN0IsaUNBQXNCOztJQUN0QixvQ0FBc0I7O0lBT3RCLDZDQUFtQzs7SUFDbkMseUNBQThCOztJQUM5QixzQ0FBNEI7O0lBRzVCLG9DQUEwRDs7SUFDMUQsbUNBQXlEOztJQUV6RCxrQ0FBVzs7Ozs7SUFFWCxxQ0FBNkI7Ozs7O0lBQzdCLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVaUlucHV0IH0gZnJvbSAnLi4vLi4vY2xhc3MvdWlJbnB1dC5jbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG50eXBlIFRvb2x0aXBQb3NpdGlvbiA9ICdyaWdodCcgfCAnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVpSW5wdXQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbHVlOiBEcm9wZG93bltdKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBvcHRpb25zKCk6IERyb3Bkb3duW10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXRpY0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogYW55O1xuICBASW5wdXQoKSBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBUb29sdGlwUG9zaXRpb24pIHtcbiAgICB0aGlzLl90b29sdGlwUG9zaXRpb24gPSB2YWx1ZSB8fCAndG9wJztcbiAgfVxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbjtcbiAgfVxuICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBEcm9wZG93bltdO1xuICBwcml2YXRlIF90b29sdGlwUG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERyb3Bkb3duKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgZm9jdXNIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgYmx1ckhhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19