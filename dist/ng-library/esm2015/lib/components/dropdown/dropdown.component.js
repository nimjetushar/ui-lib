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
                template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
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
    tooltipDisabled: [{ type: Input }],
    autoDisplayFirst: [{ type: Input }],
    scrollHeight: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRXBELDhCQUdDOzs7SUFGQyx5QkFBYzs7SUFDZCx5QkFBVzs7QUFnQmIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQU87SUFYOUM7OztRQXVDWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS2pELHFCQUFnQixHQUFvQixLQUFLLENBQUM7SUFrQnBELENBQUM7Ozs7O0lBbERDLElBQ0ksT0FBTyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFTRCxJQUFhLGVBQWUsQ0FBQyxLQUFzQjtRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBY0QsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZhQUF3QztnQkFFeEMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQztnQkFDRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztzQkFHRSxLQUFLO3VCQVFMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFNTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFHTCxNQUFNO3FCQUNOLE1BQU07Ozs7SUFuQlAscUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLG1DQUF5Qjs7SUFDekIsd0NBQTZCOztJQUM3Qix3Q0FBNkI7O0lBQzdCLGlDQUFzQjs7SUFDdEIsb0NBQXNCOztJQU90Qiw0Q0FBa0M7O0lBQ2xDLDZDQUFtQzs7SUFDbkMseUNBQThCOztJQUc5QixvQ0FBMEQ7O0lBQzFELG1DQUF5RDs7SUFFekQsa0NBQVc7Ozs7O0lBRVgscUNBQTZCOzs7OztJQUM3Qiw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVWlJbnB1dCB9IGZyb20gJy4uLy4uL2NsYXNzL3VpSW5wdXQuY2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxudHlwZSBUb29sdGlwUG9zaXRpb24gPSAncmlnaHQnIHwgJ2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBVaUlucHV0IHtcblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRHJvcGRvd25bXSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBEcm9wZG93bltdIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzdGF0aWNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IGFueTtcbiAgQElucHV0KCkgc2V0IHRvb2x0aXBQb3NpdGlvbih2YWx1ZTogVG9vbHRpcFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XG4gIH1cbiAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpOiBUb29sdGlwUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XG4gIH1cbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHZhbHVlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogRHJvcGRvd25bXTtcbiAgcHJpdmF0ZSBfdG9vbHRpcFBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEcm9wZG93bik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIGZvY3VzSGFuZGxlcihldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGJsdXJIYW5kbGVyKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==