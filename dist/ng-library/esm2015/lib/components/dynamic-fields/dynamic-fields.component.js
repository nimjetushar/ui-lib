/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class DynamicFieldsComponent {
    constructor() {
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
        this._data = {};
    }
    // fields to be rendered
    /**
     * @param {?} val
     * @return {?}
     */
    set fields(val) {
        if (val && val.length) {
            this.renderFields = val;
        }
    }
    // option parameter required by component to render
    /**
     * @param {?} val
     * @return {?}
     */
    set buttonOptions(val) {
        if (val) {
            const { primaryLabel, secondaryLabel, removeSecondaryButton } = val;
            this.primaryLabel = primaryLabel;
            this.secondaryLabel = secondaryLabel;
            this.removeSecondaryButton = removeSecondaryButton;
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (data) {
            this._data = data;
        }
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data || {};
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dropdownOptions(data) {
        if (data) {
            this._dropdownOptions = data;
        }
    }
    /**
     * @return {?}
     */
    get dropdownOptions() {
        return this._dropdownOptions || {};
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set disabledFields(data) {
        if (data) {
            this._disabled = data;
        }
    }
    /**
     * @return {?}
     */
    get disabledFields() {
        return this._disabled || {};
    }
    /**
     * @param {?} label
     * @return {?}
     */
    set primaryLabel(label) {
        this._primaryLabel = label;
    }
    /**
     * @return {?}
     */
    get primaryLabel() {
        return this._primaryLabel || 'Search';
    }
    /**
     * @param {?} label
     * @return {?}
     */
    set secondaryLabel(label) {
        this._secondaryLabel = label;
    }
    /**
     * @return {?}
     */
    get secondaryLabel() {
        return this._secondaryLabel || 'Reset';
    }
    /**
     * @return {?}
     */
    primaryClick() {
        this.primaryHandler.emit(this.data);
    }
    /**
     * @return {?}
     */
    secondaryClick() {
        this.secondaryHandler.emit(this.data);
    }
    /**
     * @return {?}
     */
    reset() {
        this.data = {};
    }
}
DynamicFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 't-dynamic-fields',
                template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name' [(ngModel)]=\"data[field.model]\"\n        [disabled]=\"disabledFields[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\">\n      </t-checkbox>\n    </div>\n\n    <!-- input type radio -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <t-radio [label]=\"field.label\" [(ngModel)]=\"data[field.model]\" [name]='field.name'\n        [disabled]=\"disabledFields[field.model]\"></t-radio>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <t-dropdown [placeholder]=\"field.label\" [(ngModel)]=\"data[field.model]\" [options]=\"dropdownOptions[field.model]\"\n        [name]='field.name' [disabled]=\"disabledFields[field.model]\">\n      </t-dropdown>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!hideDefaultAction\">\n      <t-button [label]=\"primaryLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecondaryButton\" [label]=\"secondaryLabel\" type=\"secondary\" (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n  </div>\n</div>",
                styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
            }] }
];
DynamicFieldsComponent.propDecorators = {
    fields: [{ type: Input }],
    buttonOptions: [{ type: Input }],
    data: [{ type: Input }],
    dropdownOptions: [{ type: Input }],
    disabledFields: [{ type: Input }],
    hideDefaultAction: [{ type: Input }],
    primaryHandler: [{ type: Output }],
    secondaryHandler: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicFieldsComponent.prototype.hideDefaultAction;
    /** @type {?} */
    DynamicFieldsComponent.prototype.primaryHandler;
    /** @type {?} */
    DynamicFieldsComponent.prototype.secondaryHandler;
    /** @type {?} */
    DynamicFieldsComponent.prototype.renderFields;
    /** @type {?} */
    DynamicFieldsComponent.prototype.removeSecondaryButton;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldsComponent.prototype._primaryLabel;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldsComponent.prototype._secondaryLabel;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldsComponent.prototype._dropdownOptions;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldsComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldsComponent.prototype._data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVd2RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBdURZLG1CQUFjLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekUscUJBQWdCLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckYsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBbUIzQixxQkFBZ0IsR0FBZ0MsRUFBRSxDQUFDO1FBQ25ELGNBQVMsR0FBZ0MsRUFBRSxDQUFDO1FBQzVDLFVBQUssR0FBMEIsRUFBRSxDQUFDO0lBYTVDLENBQUM7Ozs7OztJQXBGQyxJQUFhLE1BQU0sQ0FBQyxHQUFvQjtRQUN0QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsSUFBYSxhQUFhLENBQUMsR0FBOEI7UUFDdkQsSUFBSSxHQUFHLEVBQUU7a0JBQ0QsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsR0FBRztZQUNuRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVELElBQ0ksSUFBSSxDQUFDLElBQTJCO1FBQ2xDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQ0ksZUFBZSxDQUFDLElBQWlDO1FBQ25ELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsSUFDSSxjQUFjLENBQUMsSUFBaUM7UUFDbEQsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQVVELElBQUksWUFBWSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLGNBQWMsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQztJQUN6QyxDQUFDOzs7O0lBUUQsWUFBWTtRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix1OERBQThDOzthQUUvQzs7O3FCQUlFLEtBQUs7NEJBTUwsS0FBSzttQkFTTCxLQUFLOzhCQVVMLEtBQUs7NkJBVUwsS0FBSztnQ0FVTCxLQUFLOzZCQUVMLE1BQU07K0JBQ04sTUFBTTs7OztJQUhQLG1EQUFvQzs7SUFFcEMsZ0RBQW1GOztJQUNuRixrREFBcUY7O0lBRXJGLDhDQUFtQzs7SUFDbkMsdURBQStCOzs7OztJQWdCL0IsK0NBQThCOzs7OztJQUM5QixpREFBZ0M7Ozs7O0lBQ2hDLGtEQUEyRDs7Ozs7SUFDM0QsMkNBQW9EOzs7OztJQUNwRCx1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRHluYW1pY0ZpZWxkcywgRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucyxcbiAgRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zLCBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMsIER5bmFtaWNGaWVsZERhdGFNb2RlbFxufSBmcm9tICcuL2R5bmFtaWNGaWVsZHMuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1keW5hbWljLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCB7XG5cbiAgLy8gZmllbGRzIHRvIGJlIHJlbmRlcmVkXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBEeW5hbWljRmllbGRzW10pIHtcbiAgICBpZiAodmFsICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyRmllbGRzID0gdmFsO1xuICAgIH1cbiAgfVxuICAvLyBvcHRpb24gcGFyYW1ldGVyIHJlcXVpcmVkIGJ5IGNvbXBvbmVudCB0byByZW5kZXJcbiAgQElucHV0KCkgc2V0IGJ1dHRvbk9wdGlvbnModmFsOiBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc3QgeyBwcmltYXJ5TGFiZWwsIHNlY29uZGFyeUxhYmVsLCByZW1vdmVTZWNvbmRhcnlCdXR0b24gfSA9IHZhbDtcbiAgICAgIHRoaXMucHJpbWFyeUxhYmVsID0gcHJpbWFyeUxhYmVsO1xuICAgICAgdGhpcy5zZWNvbmRhcnlMYWJlbCA9IHNlY29uZGFyeUxhYmVsO1xuICAgICAgdGhpcy5yZW1vdmVTZWNvbmRhcnlCdXR0b24gPSByZW1vdmVTZWNvbmRhcnlCdXR0b247XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGEoZGF0YTogRHluYW1pY0ZpZWxkRGF0YU1vZGVsKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmllbGREYXRhTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRyb3Bkb3duT3B0aW9ucyhkYXRhOiBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZHJvcGRvd25PcHRpb25zID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRyb3Bkb3duT3B0aW9ucygpOiBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bk9wdGlvbnMgfHwge307XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWRGaWVsZHMoZGF0YTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkRmllbGRzKCk6IER5bmFtaWNGaWVsZERpc2FibGVkT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KCkgaGlkZURlZmF1bHRBY3Rpb246IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHByaW1hcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8RHluYW1pY0ZpZWxkRGF0YU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJlbmRlckZpZWxkczogRHluYW1pY0ZpZWxkc1tdID0gW107XG4gIHJlbW92ZVNlY29uZGFyeUJ1dHRvbjogYm9vbGVhbjtcblxuICBzZXQgcHJpbWFyeUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmltYXJ5TGFiZWwgPSBsYWJlbDtcbiAgfVxuICBnZXQgcHJpbWFyeUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlMYWJlbCB8fCAnU2VhcmNoJztcbiAgfVxuXG4gIHNldCBzZWNvbmRhcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vjb25kYXJ5TGFiZWwgPSBsYWJlbDtcbiAgfVxuICBnZXQgc2Vjb25kYXJ5TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5TGFiZWwgfHwgJ1Jlc2V0JztcbiAgfVxuXG4gIHByaXZhdGUgX3ByaW1hcnlMYWJlbDogc3RyaW5nO1xuICBwcml2YXRlIF9zZWNvbmRhcnlMYWJlbDogc3RyaW5nO1xuICBwcml2YXRlIF9kcm9wZG93bk9wdGlvbnM6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9kaXNhYmxlZDogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zID0ge307XG4gIHByaXZhdGUgX2RhdGE6IER5bmFtaWNGaWVsZERhdGFNb2RlbCA9IHt9O1xuXG4gIHByaW1hcnlDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1hcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHNlY29uZGFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgfVxufVxuIl19