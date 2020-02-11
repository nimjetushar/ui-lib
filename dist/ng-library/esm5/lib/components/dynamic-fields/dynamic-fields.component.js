/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var DynamicFieldsComponent = /** @class */ (function () {
    function DynamicFieldsComponent() {
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
        this._data = {};
    }
    Object.defineProperty(DynamicFieldsComponent.prototype, "fields", {
        // fields to be rendered
        set: 
        // fields to be rendered
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val && val.length) {
                this.renderFields = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "buttonOptions", {
        // option parameter required by component to render
        set: 
        // option parameter required by component to render
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                var primaryLabel = val.primaryLabel, secondaryLabel = val.secondaryLabel, removeSecondaryButton = val.removeSecondaryButton;
                this.primaryLabel = primaryLabel;
                this.secondaryLabel = secondaryLabel;
                this.removeSecondaryButton = removeSecondaryButton;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data || {};
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                this._data = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "dropdownOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropdownOptions || {};
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                this._dropdownOptions = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "disabledFields", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled || {};
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                this._disabled = data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "primaryLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._primaryLabel || 'Search';
        },
        set: /**
         * @param {?} label
         * @return {?}
         */
        function (label) {
            this._primaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldsComponent.prototype, "secondaryLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._secondaryLabel || 'Reset';
        },
        set: /**
         * @param {?} label
         * @return {?}
         */
        function (label) {
            this._secondaryLabel = label;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicFieldsComponent.prototype.primaryClick = /**
     * @return {?}
     */
    function () {
        this.primaryHandler.emit(this.data);
    };
    /**
     * @return {?}
     */
    DynamicFieldsComponent.prototype.secondaryClick = /**
     * @return {?}
     */
    function () {
        this.secondaryHandler.emit(this.data);
    };
    /**
     * @return {?}
     */
    DynamicFieldsComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.data = {};
    };
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
    return DynamicFieldsComponent;
}());
export { DynamicFieldsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU12RTtJQUFBO1FBdURZLG1CQUFjLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekUscUJBQWdCLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckYsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBbUIzQixxQkFBZ0IsR0FBZ0MsRUFBRSxDQUFDO1FBQ25ELGNBQVMsR0FBZ0MsRUFBRSxDQUFDO1FBQzVDLFVBQUssR0FBMEIsRUFBRSxDQUFDO0lBYTVDLENBQUM7SUFwRkMsc0JBQWEsMENBQU07UUFEbkIsd0JBQXdCOzs7Ozs7O1FBQ3hCLFVBQW9CLEdBQW9CO1lBQ3RDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSxpREFBYTtRQUQxQixtREFBbUQ7Ozs7Ozs7UUFDbkQsVUFBMkIsR0FBOEI7WUFDdkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0MsSUFBQSwrQkFBWSxFQUFFLG1DQUFjLEVBQUUsaURBQXFCO2dCQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQzthQUNwRDtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksd0NBQUk7Ozs7UUFLUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFSRCxVQUNTLElBQTJCO1lBQ2xDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxtREFBZTs7OztRQUtuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7OztRQVJELFVBQ29CLElBQWlDO1lBQ25ELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7YUFDOUI7UUFDSCxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLGtEQUFjOzs7O1FBS2xCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDOzs7OztRQVJELFVBQ21CLElBQWlDO1lBQ2xELElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFhRCxzQkFBSSxnREFBWTs7OztRQUdoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUM7UUFDeEMsQ0FBQzs7Ozs7UUFMRCxVQUFpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksa0RBQWM7Ozs7UUFHbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBTEQsVUFBbUIsS0FBYTtZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7OztJQVdELDZDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsK0NBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELHNDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQTNGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsdThEQUE4Qzs7aUJBRS9DOzs7eUJBSUUsS0FBSztnQ0FNTCxLQUFLO3VCQVNMLEtBQUs7a0NBVUwsS0FBSztpQ0FVTCxLQUFLO29DQVVMLEtBQUs7aUNBRUwsTUFBTTttQ0FDTixNQUFNOztJQW9DVCw2QkFBQztDQUFBLEFBNUZELElBNEZDO1NBdkZZLHNCQUFzQjs7O0lBZ0RqQyxtREFBb0M7O0lBRXBDLGdEQUFtRjs7SUFDbkYsa0RBQXFGOztJQUVyRiw4Q0FBbUM7O0lBQ25DLHVEQUErQjs7Ozs7SUFnQi9CLCtDQUE4Qjs7Ozs7SUFDOUIsaURBQWdDOzs7OztJQUNoQyxrREFBMkQ7Ozs7O0lBQzNELDJDQUFvRDs7Ozs7SUFDcEQsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIER5bmFtaWNGaWVsZHMsIER5bmFtaWNGaWVsZEJ1dHRvbk9wdGlvbnMsXG4gIER5bmFtaWNGaWVsZERpc2FibGVkT3B0aW9ucywgRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zLCBEeW5hbWljRmllbGREYXRhTW9kZWxcbn0gZnJvbSAnLi9keW5hbWljRmllbGRzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtZHluYW1pYy1maWVsZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZHNDb21wb25lbnQge1xuXG4gIC8vIGZpZWxkcyB0byBiZSByZW5kZXJlZFxuICBASW5wdXQoKSBzZXQgZmllbGRzKHZhbDogRHluYW1pY0ZpZWxkc1tdKSB7XG4gICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHZhbDtcbiAgICB9XG4gIH1cbiAgLy8gb3B0aW9uIHBhcmFtZXRlciByZXF1aXJlZCBieSBjb21wb25lbnQgdG8gcmVuZGVyXG4gIEBJbnB1dCgpIHNldCBidXR0b25PcHRpb25zKHZhbDogRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucykge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGNvbnN0IHsgcHJpbWFyeUxhYmVsLCBzZWNvbmRhcnlMYWJlbCwgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uIH0gPSB2YWw7XG4gICAgICB0aGlzLnByaW1hcnlMYWJlbCA9IHByaW1hcnlMYWJlbDtcbiAgICAgIHRoaXMuc2Vjb25kYXJ5TGFiZWwgPSBzZWNvbmRhcnlMYWJlbDtcbiAgICAgIHRoaXMucmVtb3ZlU2Vjb25kYXJ5QnV0dG9uID0gcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhKGRhdGE6IER5bmFtaWNGaWVsZERhdGFNb2RlbCkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZpZWxkRGF0YU1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkcm9wZG93bk9wdGlvbnMoZGF0YTogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2Ryb3Bkb3duT3B0aW9ucyA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkcm9wZG93bk9wdGlvbnMoKTogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25PcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkRmllbGRzKGRhdGE6IER5bmFtaWNGaWVsZERpc2FibGVkT3B0aW9ucykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZEZpZWxkcygpOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpIGhpZGVEZWZhdWx0QWN0aW9uOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBwcmltYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPER5bmFtaWNGaWVsZERhdGFNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWNvbmRhcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8RHluYW1pY0ZpZWxkRGF0YU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZW5kZXJGaWVsZHM6IER5bmFtaWNGaWVsZHNbXSA9IFtdO1xuICByZW1vdmVTZWNvbmRhcnlCdXR0b246IGJvb2xlYW47XG5cbiAgc2V0IHByaW1hcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpbWFyeUxhYmVsID0gbGFiZWw7XG4gIH1cbiAgZ2V0IHByaW1hcnlMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcmltYXJ5TGFiZWwgfHwgJ1NlYXJjaCc7XG4gIH1cblxuICBzZXQgc2Vjb25kYXJ5TGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY29uZGFyeUxhYmVsID0gbGFiZWw7XG4gIH1cbiAgZ2V0IHNlY29uZGFyeUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZGFyeUxhYmVsIHx8ICdSZXNldCc7XG4gIH1cblxuICBwcml2YXRlIF9wcmltYXJ5TGFiZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5TGFiZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJvcGRvd25PcHRpb25zOiBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IER5bmFtaWNGaWVsZERpc2FibGVkT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9kYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwgPSB7fTtcblxuICBwcmltYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5wcmltYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBzZWNvbmRhcnlDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlY29uZGFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gIH1cbn1cbiJdfQ==