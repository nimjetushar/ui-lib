/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DropdownComponent extends UiInput {
    constructor() {
        super(...arguments);
        this.tooltipPosition = 'top';
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
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 't-dropdown',
                template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n\n    (onChange)=\"onChangeHandler($event)\">\n</p-dropdown>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DropdownComponent)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUVwRCw4QkFHQzs7O0lBRkMseUJBQWM7O0lBQ2QseUJBQVc7O0FBYWIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQU87SUFWOUM7O1FBMkJXLG9CQUFlLEdBQXdDLEtBQUssQ0FBQztJQWV4RSxDQUFDOzs7OztJQTlCQyxJQUNJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBZ0JELFVBQVUsQ0FBQyxLQUFlO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwrVkFBd0M7Z0JBRXhDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7O2FBQ0g7OztzQkFHRSxLQUFLO3VCQVFMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBUk4scUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLG1DQUF5Qjs7SUFDekIsd0NBQTZCOztJQUM3Qix3Q0FBNkI7O0lBQzdCLGlDQUFzQjs7SUFDdEIsb0NBQXNCOztJQUN0Qiw0Q0FBc0U7O0lBQ3RFLDRDQUFrQzs7SUFFbEMsa0NBQVc7Ozs7O0lBRVgscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVaUlucHV0IH0gZnJvbSAnLi4vLi4vY2xhc3MvdWlJbnB1dC5jbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVpSW5wdXQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbHVlOiBEcm9wZG93bltdKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBvcHRpb25zKCk6IERyb3Bkb3duW10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXRpY0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogYW55O1xuICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb246ICdyaWdodCcgfCAnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcblxuICB2YWx1ZTogYW55O1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IERyb3Bkb3duW107XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRHJvcGRvd24pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZShldmVudC52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==