/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var DynamicFieldsComponent = /** @class */ (function () {
    function DynamicFieldsComponent() {
        this.data = {};
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this._dropdownOptions = {};
        this._disabled = {};
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
        hideDefaultAction: [{ type: Input }],
        dropdownOptions: [{ type: Input }],
        disabledFields: [{ type: Input }],
        primaryHandler: [{ type: Output }],
        secondaryHandler: [{ type: Output }]
    };
    return DynamicFieldsComponent;
}());
export { DynamicFieldsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RTtJQUFBO1FBdUJXLFNBQUksR0FBMkIsRUFBRSxDQUFDO1FBdUJqQyxtQkFBYyxHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFFLHFCQUFnQixHQUF5QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRGLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQW1CM0IscUJBQWdCLEdBQW9CLEVBQUUsQ0FBQztRQUN2QyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQWF6QyxDQUFDO0lBMUVDLHNCQUFhLDBDQUFNO1FBRG5CLHdCQUF3Qjs7Ozs7OztRQUN4QixVQUFvQixHQUFvQjtZQUN0QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQWEsaURBQWE7UUFEMUIsbURBQW1EOzs7Ozs7O1FBQ25ELFVBQTJCLEdBQThCO1lBQ3ZELElBQUksR0FBRyxFQUFFO2dCQUNDLElBQUEsK0JBQVksRUFBRSxtQ0FBYyxFQUFFLGlEQUFxQjtnQkFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7YUFDcEQ7UUFDSCxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLG1EQUFlOzs7O1FBS25CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7Ozs7O1FBUkQsVUFDb0IsSUFBcUI7WUFDdkMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksa0RBQWM7Ozs7UUFLbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBUkQsVUFDbUIsSUFBb0I7WUFDckMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTtJQVdELHNCQUFJLGdEQUFZOzs7O1FBR2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQztRQUN4QyxDQUFDOzs7OztRQUxELFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxrREFBYzs7OztRQUdsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUM7UUFDekMsQ0FBQzs7Ozs7UUFMRCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBVUQsNkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsc0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBakZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix1OERBQThDOztpQkFFL0M7Ozt5QkFJRSxLQUFLO2dDQU1MLEtBQUs7dUJBU0wsS0FBSztvQ0FDTCxLQUFLO2tDQUVMLEtBQUs7aUNBVUwsS0FBSztpQ0FVTCxNQUFNO21DQUNOLE1BQU07O0lBbUNULDZCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0E3RVksc0JBQXNCOzs7SUFrQmpDLHNDQUEyQzs7SUFDM0MsbURBQW9DOztJQXNCcEMsZ0RBQW9GOztJQUNwRixrREFBc0Y7O0lBRXRGLDhDQUFtQzs7SUFDbkMsdURBQStCOzs7OztJQWdCL0IsK0NBQThCOzs7OztJQUM5QixpREFBZ0M7Ozs7O0lBQ2hDLGtEQUErQzs7Ozs7SUFDL0MsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNGaWVsZHMsIER5bmFtaWNGaWVsZEJ1dHRvbk9wdGlvbnMsIERpc2FibGVkRmllbGRzLCBEcm9wZG93bk9wdGlvbnMgfSBmcm9tICcuL2R5bmFtaWNGaWVsZHMuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1keW5hbWljLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCB7XG5cbiAgLy8gZmllbGRzIHRvIGJlIHJlbmRlcmVkXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBEeW5hbWljRmllbGRzW10pIHtcbiAgICBpZiAodmFsICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyRmllbGRzID0gdmFsO1xuICAgIH1cbiAgfVxuICAvLyBvcHRpb24gcGFyYW1ldGVyIHJlcXVpcmVkIGJ5IGNvbXBvbmVudCB0byByZW5kZXJcbiAgQElucHV0KCkgc2V0IGJ1dHRvbk9wdGlvbnModmFsOiBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc3QgeyBwcmltYXJ5TGFiZWwsIHNlY29uZGFyeUxhYmVsLCByZW1vdmVTZWNvbmRhcnlCdXR0b24gfSA9IHZhbDtcbiAgICAgIHRoaXMucHJpbWFyeUxhYmVsID0gcHJpbWFyeUxhYmVsO1xuICAgICAgdGhpcy5zZWNvbmRhcnlMYWJlbCA9IHNlY29uZGFyeUxhYmVsO1xuICAgICAgdGhpcy5yZW1vdmVTZWNvbmRhcnlCdXR0b24gPSByZW1vdmVTZWNvbmRhcnlCdXR0b247XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBASW5wdXQoKSBoaWRlRGVmYXVsdEFjdGlvbjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZHJvcGRvd25PcHRpb25zKGRhdGE6IERyb3Bkb3duT3B0aW9ucykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bk9wdGlvbnMgPSBkYXRhO1xuICAgIH1cbiAgfVxuICBnZXQgZHJvcGRvd25PcHRpb25zKCk6IERyb3Bkb3duT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duT3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZEZpZWxkcyhkYXRhOiBEaXNhYmxlZEZpZWxkcykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGRhdGE7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZEZpZWxkcygpOiBEaXNhYmxlZEZpZWxkcyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHt9O1xuICB9XG5cbiAgQE91dHB1dCgpIHByaW1hcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWNvbmRhcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVuZGVyRmllbGRzOiBEeW5hbWljRmllbGRzW10gPSBbXTtcbiAgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uOiBib29sZWFuO1xuXG4gIHNldCBwcmltYXJ5TGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaW1hcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBwcmltYXJ5TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeUxhYmVsIHx8ICdTZWFyY2gnO1xuICB9XG5cbiAgc2V0IHNlY29uZGFyeUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlMYWJlbCA9IGxhYmVsO1xuICB9XG4gIGdldCBzZWNvbmRhcnlMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlMYWJlbCB8fCAnUmVzZXQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJpbWFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlY29uZGFyeUxhYmVsOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Ryb3Bkb3duT3B0aW9uczogRHJvcGRvd25PcHRpb25zID0ge307XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBEaXNhYmxlZEZpZWxkcyA9IHt9O1xuXG4gIHByaW1hcnlDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnByaW1hcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHNlY29uZGFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgfVxufVxuIl19