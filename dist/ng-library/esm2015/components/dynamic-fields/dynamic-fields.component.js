/**
 * @fileoverview added by tsickle
 * Generated from: components/dynamic-fields/dynamic-fields.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV3ZFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUF1RFksbUJBQWMsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxxQkFBZ0IsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRixpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFtQjNCLHFCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFDbkQsY0FBUyxHQUFnQyxFQUFFLENBQUM7UUFDNUMsVUFBSyxHQUEwQixFQUFFLENBQUM7SUFhNUMsQ0FBQzs7Ozs7O0lBcEZDLElBQWEsTUFBTSxDQUFDLEdBQW9CO1FBQ3RDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxJQUFhLGFBQWEsQ0FBQyxHQUE4QjtRQUN2RCxJQUFJLEdBQUcsRUFBRTtrQkFDRCxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxHQUFHO1lBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsSUFBMkI7UUFDbEMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFDSSxlQUFlLENBQUMsSUFBaUM7UUFDbkQsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBQyxJQUFpQztRQUNsRCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBVUQsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELElBQUksY0FBYyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFRRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7WUEzRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHU4REFBOEM7O2FBRS9DOzs7cUJBSUUsS0FBSzs0QkFNTCxLQUFLO21CQVNMLEtBQUs7OEJBVUwsS0FBSzs2QkFVTCxLQUFLO2dDQVVMLEtBQUs7NkJBRUwsTUFBTTsrQkFDTixNQUFNOzs7O0lBSFAsbURBQW9DOztJQUVwQyxnREFBbUY7O0lBQ25GLGtEQUFxRjs7SUFFckYsOENBQW1DOztJQUNuQyx1REFBK0I7Ozs7O0lBZ0IvQiwrQ0FBOEI7Ozs7O0lBQzlCLGlEQUFnQzs7Ozs7SUFDaEMsa0RBQTJEOzs7OztJQUMzRCwyQ0FBb0Q7Ozs7O0lBQ3BELHVDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEeW5hbWljRmllbGRzLCBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zLFxuICBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMsIER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucywgRHluYW1pY0ZpZWxkRGF0YU1vZGVsXG59IGZyb20gJy4vZHluYW1pY0ZpZWxkcy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWR5bmFtaWMtZmllbGRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGRzQ29tcG9uZW50IHtcblxuICAvLyBmaWVsZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgc2V0IGZpZWxkcyh2YWw6IER5bmFtaWNGaWVsZHNbXSkge1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB2YWw7XG4gICAgfVxuICB9XG4gIC8vIG9wdGlvbiBwYXJhbWV0ZXIgcmVxdWlyZWQgYnkgY29tcG9uZW50IHRvIHJlbmRlclxuICBASW5wdXQoKSBzZXQgYnV0dG9uT3B0aW9ucyh2YWw6IER5bmFtaWNGaWVsZEJ1dHRvbk9wdGlvbnMpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjb25zdCB7IHByaW1hcnlMYWJlbCwgc2Vjb25kYXJ5TGFiZWwsIHJlbW92ZVNlY29uZGFyeUJ1dHRvbiB9ID0gdmFsO1xuICAgICAgdGhpcy5wcmltYXJ5TGFiZWwgPSBwcmltYXJ5TGFiZWw7XG4gICAgICB0aGlzLnNlY29uZGFyeUxhYmVsID0gc2Vjb25kYXJ5TGFiZWw7XG4gICAgICB0aGlzLnJlbW92ZVNlY29uZGFyeUJ1dHRvbiA9IHJlbW92ZVNlY29uZGFyeUJ1dHRvbjtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YShkYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkYXRhKCk6IER5bmFtaWNGaWVsZERhdGFNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwge307XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHJvcGRvd25PcHRpb25zKGRhdGE6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bk9wdGlvbnMgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZHJvcGRvd25PcHRpb25zKCk6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duT3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZEZpZWxkcyhkYXRhOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWRGaWVsZHMoKTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwge307XG4gIH1cblxuICBASW5wdXQoKSBoaWRlRGVmYXVsdEFjdGlvbjogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcHJpbWFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Vjb25kYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPER5bmFtaWNGaWVsZERhdGFNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVuZGVyRmllbGRzOiBEeW5hbWljRmllbGRzW10gPSBbXTtcbiAgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uOiBib29sZWFuO1xuXG4gIHNldCBwcmltYXJ5TGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaW1hcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBwcmltYXJ5TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeUxhYmVsIHx8ICdTZWFyY2gnO1xuICB9XG5cbiAgc2V0IHNlY29uZGFyeUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBzZWNvbmRhcnlMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlMYWJlbCB8fCAnUmVzZXQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJpbWFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlY29uZGFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Ryb3Bkb3duT3B0aW9uczogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zID0ge307XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBfZGF0YTogRHluYW1pY0ZpZWxkRGF0YU1vZGVsID0ge307XG5cbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc2Vjb25kYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG4iXX0=