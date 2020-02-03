/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
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
        _this.tooltipPosition = 'top';
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
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 't-dropdown',
                    template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n\n    (onChange)=\"onChangeHandler($event)\">\n</p-dropdown>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return DropdownComponent; })),
                            multi: true
                        }],
                    styles: [""]
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
        tooltipDisabled: [{ type: Input }]
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
    DropdownComponent.prototype.tooltipPosition;
    /** @type {?} */
    DropdownComponent.prototype.tooltipDisabled;
    /** @type {?} */
    DropdownComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFcEQsOEJBR0M7OztJQUZDLHlCQUFjOztJQUNkLHlCQUFXOztBQUdiO0lBVXVDLDZDQUFPO0lBVjlDO1FBQUEscUVBMENDO1FBZlUscUJBQWUsR0FBd0MsS0FBSyxDQUFDOztJQWV4RSxDQUFDO0lBOUJDLHNCQUNJLHNDQUFPOzs7O1FBR1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFORCxVQUNZLEtBQWlCO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQW1CRCxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBZTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsMkNBQWU7Ozs7SUFBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLCtWQUF3QztvQkFFeEMsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7O2lCQUNIOzs7MEJBR0UsS0FBSzsyQkFRTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFjUix3QkFBQztDQUFBLEFBMUNELENBVXVDLE9BQU8sR0FnQzdDO1NBaENZLGlCQUFpQjs7O0lBVTVCLHFDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQixtQ0FBeUI7O0lBQ3pCLHdDQUE2Qjs7SUFDN0Isd0NBQTZCOztJQUM3QixpQ0FBc0I7O0lBQ3RCLG9DQUFzQjs7SUFDdEIsNENBQXNFOztJQUN0RSw0Q0FBa0M7O0lBRWxDLGtDQUFXOzs7OztJQUVYLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVWlJbnB1dCB9IGZyb20gJy4uLy4uL2NsYXNzL3VpSW5wdXQuY2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBVaUlucHV0IHtcblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRHJvcGRvd25bXSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBEcm9wZG93bltdIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzdGF0aWNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IGFueTtcbiAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uOiAncmlnaHQnIHwgJ2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgdmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBEcm9wZG93bltdO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERyb3Bkb3duKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUoZXZlbnQudmFsdWUpO1xuICB9XG59XG4iXX0=