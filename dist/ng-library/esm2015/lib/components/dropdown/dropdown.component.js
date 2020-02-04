/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DropdownComponent extends UiInput {
    constructor() {
        super(...arguments);
        // tslint:disable: no-output-on-prefix
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this._tooltipPosition = 'top';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        this._options = value;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipPosition(value) {
        this._tooltipPosition = value || 'top';
    }
    /**
     * @return {?}
     */
    get tooltipPosition() {
        return this._tooltipPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.onChange(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeHandler(event) {
        this.writeValue(event.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focusHandler(event) {
        this.onFocus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    blurHandler(event) {
        this.onBlur.emit(event);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 't-dropdown',
                template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n    [autoDisplayFirst]=\"autoDisplayFirst\"\n    [scrollHeight]=\"scrollHeight\"\n    [autofocus]=\"autofocus\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DropdownComponent)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRXBELDhCQUdDOzs7SUFGQyx5QkFBYzs7SUFDZCx5QkFBVzs7QUFnQmIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQU87SUFYOUM7OztRQXVDWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS2pELHFCQUFnQixHQUFvQixLQUFLLENBQUM7SUFrQnBELENBQUM7Ozs7O0lBbERDLElBQ0ksT0FBTyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFTRCxJQUFhLGVBQWUsQ0FBQyxLQUFzQjtRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBY0QsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDhoQkFBd0M7Z0JBRXhDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7Z0JBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7c0JBR0UsS0FBSzt1QkFRTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBTUwsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBR0wsTUFBTTtxQkFDTixNQUFNOzs7O0lBbkJQLHFDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQixtQ0FBeUI7O0lBQ3pCLHdDQUE2Qjs7SUFDN0Isd0NBQTZCOztJQUM3QixpQ0FBc0I7O0lBQ3RCLG9DQUFzQjs7SUFPdEIsNkNBQW1DOztJQUNuQyx5Q0FBOEI7O0lBQzlCLHNDQUE0Qjs7SUFHNUIsb0NBQTBEOztJQUMxRCxtQ0FBeUQ7O0lBRXpELGtDQUFXOzs7OztJQUVYLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVpSW5wdXQgfSBmcm9tICcuLi8uLi9jbGFzcy91aUlucHV0LmNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93biB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59XG5cbnR5cGUgVG9vbHRpcFBvc2l0aW9uID0gJ3JpZ2h0JyB8ICdsZWZ0JyB8ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgVWlJbnB1dCB7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsdWU6IERyb3Bkb3duW10pIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogRHJvcGRvd25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgc3RhdGljTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwOiBhbnk7XG4gIEBJbnB1dCgpIHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbikge1xuICAgIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbiA9IHZhbHVlIHx8ICd0b3AnO1xuICB9XG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogVG9vbHRpcFBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFBvc2l0aW9uO1xuICB9XG4gIEBJbnB1dCgpIGF1dG9EaXNwbGF5Rmlyc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBhdXRvZm9jdXM6IGJvb2xlYW47XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB2YWx1ZTogYW55O1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IERyb3Bkb3duW107XG4gIHByaXZhdGUgX3Rvb2x0aXBQb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gJ3RvcCc7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRHJvcGRvd24pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZShldmVudC52YWx1ZSk7XG4gIH1cblxuICBmb2N1c0hhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBibHVySGFuZGxlcihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=