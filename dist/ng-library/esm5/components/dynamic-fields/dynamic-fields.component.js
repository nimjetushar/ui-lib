/**
 * @fileoverview added by tsickle
 * Generated from: components/dynamic-fields/dynamic-fields.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXZFO0lBQUE7UUF1RFksbUJBQWMsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxxQkFBZ0IsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRixpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFtQjNCLHFCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFDbkQsY0FBUyxHQUFnQyxFQUFFLENBQUM7UUFDNUMsVUFBSyxHQUEwQixFQUFFLENBQUM7SUFhNUMsQ0FBQztJQXBGQyxzQkFBYSwwQ0FBTTtRQURuQix3QkFBd0I7Ozs7Ozs7UUFDeEIsVUFBb0IsR0FBb0I7WUFDdEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7YUFDekI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFhLGlEQUFhO1FBRDFCLG1EQUFtRDs7Ozs7OztRQUNuRCxVQUEyQixHQUE4QjtZQUN2RCxJQUFJLEdBQUcsRUFBRTtnQkFDQyxJQUFBLCtCQUFZLEVBQUUsbUNBQWMsRUFBRSxpREFBcUI7Z0JBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO2FBQ3BEO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx3Q0FBSTs7OztRQUtSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDOzs7OztRQVJELFVBQ1MsSUFBMkI7WUFDbEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLG1EQUFlOzs7O1FBS25CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7Ozs7O1FBUkQsVUFDb0IsSUFBaUM7WUFDbkQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksa0RBQWM7Ozs7UUFLbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBUkQsVUFDbUIsSUFBaUM7WUFDbEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTtJQWFELHNCQUFJLGdEQUFZOzs7O1FBR2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztRQUN4QyxDQUFDOzs7OztRQUxELFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxrREFBYzs7OztRQUdsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUM7UUFDekMsQ0FBQzs7Ozs7UUFMRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBV0QsNkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsc0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix1OERBQThDOztpQkFFL0M7Ozt5QkFJRSxLQUFLO2dDQU1MLEtBQUs7dUJBU0wsS0FBSztrQ0FVTCxLQUFLO2lDQVVMLEtBQUs7b0NBVUwsS0FBSztpQ0FFTCxNQUFNO21DQUNOLE1BQU07O0lBb0NULDZCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0F2Rlksc0JBQXNCOzs7SUFnRGpDLG1EQUFvQzs7SUFFcEMsZ0RBQW1GOztJQUNuRixrREFBcUY7O0lBRXJGLDhDQUFtQzs7SUFDbkMsdURBQStCOzs7OztJQWdCL0IsK0NBQThCOzs7OztJQUM5QixpREFBZ0M7Ozs7O0lBQ2hDLGtEQUEyRDs7Ozs7SUFDM0QsMkNBQW9EOzs7OztJQUNwRCx1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRHluYW1pY0ZpZWxkcywgRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucyxcbiAgRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zLCBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMsIER5bmFtaWNGaWVsZERhdGFNb2RlbFxufSBmcm9tICcuL2R5bmFtaWNGaWVsZHMuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1keW5hbWljLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCB7XG5cbiAgLy8gZmllbGRzIHRvIGJlIHJlbmRlcmVkXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBEeW5hbWljRmllbGRzW10pIHtcbiAgICBpZiAodmFsICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyRmllbGRzID0gdmFsO1xuICAgIH1cbiAgfVxuICAvLyBvcHRpb24gcGFyYW1ldGVyIHJlcXVpcmVkIGJ5IGNvbXBvbmVudCB0byByZW5kZXJcbiAgQElucHV0KCkgc2V0IGJ1dHRvbk9wdGlvbnModmFsOiBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc3QgeyBwcmltYXJ5TGFiZWwsIHNlY29uZGFyeUxhYmVsLCByZW1vdmVTZWNvbmRhcnlCdXR0b24gfSA9IHZhbDtcbiAgICAgIHRoaXMucHJpbWFyeUxhYmVsID0gcHJpbWFyeUxhYmVsO1xuICAgICAgdGhpcy5zZWNvbmRhcnlMYWJlbCA9IHNlY29uZGFyeUxhYmVsO1xuICAgICAgdGhpcy5yZW1vdmVTZWNvbmRhcnlCdXR0b24gPSByZW1vdmVTZWNvbmRhcnlCdXR0b247XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGEoZGF0YTogRHluYW1pY0ZpZWxkRGF0YU1vZGVsKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmllbGREYXRhTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRyb3Bkb3duT3B0aW9ucyhkYXRhOiBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fZHJvcGRvd25PcHRpb25zID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRyb3Bkb3duT3B0aW9ucygpOiBEeW5hbWljRmllbGREcm9wZG93bk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bk9wdGlvbnMgfHwge307XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWRGaWVsZHMoZGF0YTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkRmllbGRzKCk6IER5bmFtaWNGaWVsZERpc2FibGVkT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KCkgaGlkZURlZmF1bHRBY3Rpb246IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHByaW1hcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8RHluYW1pY0ZpZWxkRGF0YU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJlbmRlckZpZWxkczogRHluYW1pY0ZpZWxkc1tdID0gW107XG4gIHJlbW92ZVNlY29uZGFyeUJ1dHRvbjogYm9vbGVhbjtcblxuICBzZXQgcHJpbWFyeUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmltYXJ5TGFiZWwgPSBsYWJlbDtcbiAgfVxuICBnZXQgcHJpbWFyeUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlMYWJlbCB8fCAnU2VhcmNoJztcbiAgfVxuXG4gIHNldCBzZWNvbmRhcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vjb25kYXJ5TGFiZWwgPSBsYWJlbDtcbiAgfVxuICBnZXQgc2Vjb25kYXJ5TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5TGFiZWwgfHwgJ1Jlc2V0JztcbiAgfVxuXG4gIHByaXZhdGUgX3ByaW1hcnlMYWJlbDogc3RyaW5nO1xuICBwcml2YXRlIF9zZWNvbmRhcnlMYWJlbDogc3RyaW5nO1xuICBwcml2YXRlIF9kcm9wZG93bk9wdGlvbnM6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9kaXNhYmxlZDogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zID0ge307XG4gIHByaXZhdGUgX2RhdGE6IER5bmFtaWNGaWVsZERhdGFNb2RlbCA9IHt9O1xuXG4gIHByaW1hcnlDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1hcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHNlY29uZGFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgfVxufVxuIl19