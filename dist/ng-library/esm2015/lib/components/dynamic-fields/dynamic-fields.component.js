/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class DynamicFieldsComponent {
    constructor() {
        this.data = {};
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
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
    hideDefaultAction: [{ type: Input }],
    dropdownOptions: [{ type: Input }],
    disabledFields: [{ type: Input }],
    primaryHandler: [{ type: Output }],
    secondaryHandler: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicFieldsComponent.prototype.data;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBdUJXLFNBQUksR0FBMkIsRUFBRSxDQUFDO1FBdUJqQyxtQkFBYyxHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFFLHFCQUFnQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRGLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQW1CM0IscUJBQWdCLEdBQW9CLEVBQUUsQ0FBQztRQUN2QyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQWF6QyxDQUFDOzs7Ozs7SUExRUMsSUFBYSxNQUFNLENBQUMsR0FBb0I7UUFDdEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7OztJQUVELElBQWEsYUFBYSxDQUFDLEdBQThCO1FBQ3ZELElBQUksR0FBRyxFQUFFO2tCQUNELEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEdBQUc7WUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxJQUNJLGVBQWUsQ0FBQyxJQUFxQjtRQUN2QyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELElBQ0ksY0FBYyxDQUFDLElBQW9CO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFRRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsSUFBSSxjQUFjLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUM7SUFDekMsQ0FBQzs7OztJQU9ELFlBQVk7UUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdThEQUE4Qzs7YUFFL0M7OztxQkFJRSxLQUFLOzRCQU1MLEtBQUs7bUJBU0wsS0FBSztnQ0FDTCxLQUFLOzhCQUVMLEtBQUs7NkJBVUwsS0FBSzs2QkFVTCxNQUFNOytCQUNOLE1BQU07Ozs7SUF4QlAsc0NBQTJDOztJQUMzQyxtREFBb0M7O0lBc0JwQyxnREFBb0Y7O0lBQ3BGLGtEQUFzRjs7SUFFdEYsOENBQW1DOztJQUNuQyx1REFBK0I7Ozs7O0lBZ0IvQiwrQ0FBOEI7Ozs7O0lBQzlCLGlEQUFnQzs7Ozs7SUFDaEMsa0RBQStDOzs7OztJQUMvQywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY0ZpZWxkcywgRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucywgRGlzYWJsZWRGaWVsZHMsIERyb3Bkb3duT3B0aW9ucyB9IGZyb20gJy4vZHluYW1pY0ZpZWxkcy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWR5bmFtaWMtZmllbGRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGRzQ29tcG9uZW50IHtcblxuICAvLyBmaWVsZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgc2V0IGZpZWxkcyh2YWw6IER5bmFtaWNGaWVsZHNbXSkge1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB2YWw7XG4gICAgfVxuICB9XG4gIC8vIG9wdGlvbiBwYXJhbWV0ZXIgcmVxdWlyZWQgYnkgY29tcG9uZW50IHRvIHJlbmRlclxuICBASW5wdXQoKSBzZXQgYnV0dG9uT3B0aW9ucyh2YWw6IER5bmFtaWNGaWVsZEJ1dHRvbk9wdGlvbnMpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjb25zdCB7IHByaW1hcnlMYWJlbCwgc2Vjb25kYXJ5TGFiZWwsIHJlbW92ZVNlY29uZGFyeUJ1dHRvbiB9ID0gdmFsO1xuICAgICAgdGhpcy5wcmltYXJ5TGFiZWwgPSBwcmltYXJ5TGFiZWw7XG4gICAgICB0aGlzLnNlY29uZGFyeUxhYmVsID0gc2Vjb25kYXJ5TGFiZWw7XG4gICAgICB0aGlzLnJlbW92ZVNlY29uZGFyeUJ1dHRvbiA9IHJlbW92ZVNlY29uZGFyeUJ1dHRvbjtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIEBJbnB1dCgpIGhpZGVEZWZhdWx0QWN0aW9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkcm9wZG93bk9wdGlvbnMoZGF0YTogRHJvcGRvd25PcHRpb25zKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2Ryb3Bkb3duT3B0aW9ucyA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkcm9wZG93bk9wdGlvbnMoKTogRHJvcGRvd25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25PcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkRmllbGRzKGRhdGE6IERpc2FibGVkRmllbGRzKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkRmllbGRzKCk6IERpc2FibGVkRmllbGRzIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwge307XG4gIH1cblxuICBAT3V0cHV0KCkgcHJpbWFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZW5kZXJGaWVsZHM6IER5bmFtaWNGaWVsZHNbXSA9IFtdO1xuICByZW1vdmVTZWNvbmRhcnlCdXR0b246IGJvb2xlYW47XG5cbiAgc2V0IHByaW1hcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpbWFyeUxhYmVsID0gbGFiZWw7XG4gIH1cbiAgZ2V0IHByaW1hcnlMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcmltYXJ5TGFiZWwgfHwgJ1NlYXJjaCc7XG4gIH1cblxuICBzZXQgc2Vjb25kYXJ5TGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY29uZGFyeUxhYmVsID0gbGFiZWw7XG4gIH1cbiAgZ2V0IHNlY29uZGFyeUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZGFyeUxhYmVsIHx8ICdSZXNldCc7XG4gIH1cblxuICBwcml2YXRlIF9wcmltYXJ5TGFiZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5TGFiZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJvcGRvd25PcHRpb25zOiBEcm9wZG93bk9wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IERpc2FibGVkRmllbGRzID0ge307XG5cbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc2Vjb25kYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG4iXX0=