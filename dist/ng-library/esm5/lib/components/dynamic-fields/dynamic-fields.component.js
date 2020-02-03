/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-fields/dynamic-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Fields() { }
if (false) {
    /** @type {?} */
    Fields.prototype.label;
    /** @type {?} */
    Fields.prototype.type;
    /** @type {?} */
    Fields.prototype.model;
    /** @type {?|undefined} */
    Fields.prototype.name;
    /** @type {?|undefined} */
    Fields.prototype.disabled;
    /** @type {?|undefined} */
    Fields.prototype.options;
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.dropdown;
    /** @type {?|undefined} */
    Options.prototype.defaultBtn;
}
var DynamicFieldsComponent = /** @class */ (function () {
    function DynamicFieldsComponent() {
        // custom action button
        this.customActionBtn = [];
        this.primaryHandler = new EventEmitter();
        this.secondaryHandler = new EventEmitter();
        this.renderFields = [];
        this.data = {};
        this.dropdownOptions = {};
        this.primaryBtnLabel = 'Search';
        this.secondaryBtnLabel = 'Reset';
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
    Object.defineProperty(DynamicFieldsComponent.prototype, "options", {
        // option parameter required by component to render
        set: 
        // option parameter required by component to render
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                if (val.dropdown) {
                    this.dropdownOptions = val.dropdown;
                }
                if (val.defaultBtn) {
                    this.primaryBtnLabel = val.defaultBtn.primaryLabel;
                    this.secondaryBtnLabel = val.defaultBtn.secondaryLabel;
                    this.removeSecBtn = val.defaultBtn.removeSecBtn;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicFieldsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
                    template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'>\n      </t-checkbox>\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <label [for]=\"field.model\">\n        <span>{{field.label}}</span>\n        <input [id]='field.model' type=\"radio\" [(ngModel)]=\"data[field.model]\"\n          [name]='field.name' />\n      </label>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <select [id]='field.model' [(ngModel)]=\"data[field.model]\">\n        <option *ngFor=\"let item of dropdownOptions[field.options]\" [value]=\"item.value\">\n          {{item.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!disableDefaultAction\">\n      <t-button [label]=\"primaryBtnLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecBtn\" [label]=\"secondaryBtnLabel\" type=\"secondary\"\n        (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n    <div class=\"custom-action-button\" *ngIf=\"disableDefaultAction\">\n      <span>\n        <t-button></t-button>\n      </span>\n    </div>\n  </div>\n</div>",
                    styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
                }] }
    ];
    /** @nocollapse */
    DynamicFieldsComponent.ctorParameters = function () { return []; };
    DynamicFieldsComponent.propDecorators = {
        fields: [{ type: Input }],
        options: [{ type: Input }],
        disableDefaultAction: [{ type: Input }],
        customActionBtn: [{ type: Input }],
        primaryHandler: [{ type: Output }],
        secondaryHandler: [{ type: Output }]
    };
    return DynamicFieldsComponent;
}());
export { DynamicFieldsComponent };
if (false) {
    /** @type {?} */
    DynamicFieldsComponent.prototype.disableDefaultAction;
    /** @type {?} */
    DynamicFieldsComponent.prototype.customActionBtn;
    /** @type {?} */
    DynamicFieldsComponent.prototype.primaryHandler;
    /** @type {?} */
    DynamicFieldsComponent.prototype.secondaryHandler;
    /** @type {?} */
    DynamicFieldsComponent.prototype.renderFields;
    /** @type {?} */
    DynamicFieldsComponent.prototype.data;
    /** @type {?} */
    DynamicFieldsComponent.prototype.dropdownOptions;
    /** @type {?} */
    DynamicFieldsComponent.prototype.primaryBtnLabel;
    /** @type {?} */
    DynamicFieldsComponent.prototype.secondaryBtnLabel;
    /** @type {?} */
    DynamicFieldsComponent.prototype.removeSecBtn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUcvRSw0QkFPQzs7O0lBTkMsdUJBQWM7O0lBQ2Qsc0JBQTBEOztJQUMxRCx1QkFBYzs7SUFDZCxzQkFBYzs7SUFDZCwwQkFBbUI7O0lBQ25CLHlCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLDJCQUF5Qzs7SUFDekMsNkJBSUU7O0FBR0o7SUE2Q0U7O1FBaEJTLG9CQUFlLEdBSWxCLEVBQUUsQ0FBQztRQUVDLG1CQUFjLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUUscUJBQWdCLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEYsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUEyQixFQUFFLENBQUM7UUFDbEMsb0JBQWUsR0FBa0MsRUFBRSxDQUFDO1FBQ3BELG9CQUFlLEdBQVcsUUFBUSxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLE9BQU8sQ0FBQztJQUdwQixDQUFDO0lBckNqQixzQkFBYSwwQ0FBTTtRQURuQix3QkFBd0I7Ozs7Ozs7UUFDeEIsVUFBb0IsR0FBYTtZQUMvQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQWEsMkNBQU87UUFEcEIsbURBQW1EOzs7Ozs7O1FBQ25ELFVBQXFCLEdBQVk7WUFDL0IsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO2dCQUNELElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2lCQUNqRDthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFzQkQseUNBQVE7OztJQUFSLGNBQW1CLENBQUM7Ozs7SUFFcEIsNkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsc0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qixza0VBQThDOztpQkFFL0M7Ozs7O3lCQUlFLEtBQUs7MEJBTUwsS0FBSzt1Q0FhTCxLQUFLO2tDQUVMLEtBQUs7aUNBTUwsTUFBTTttQ0FDTixNQUFNOztJQXdCVCw2QkFBQztDQUFBLEFBNURELElBNERDO1NBdkRZLHNCQUFzQjs7O0lBc0JqQyxzREFBdUM7O0lBRXZDLGlEQUlTOztJQUVULGdEQUFvRjs7SUFDcEYsa0RBQXNGOztJQUV0Riw4Q0FBNEI7O0lBQzVCLHNDQUFrQzs7SUFDbEMsaURBQW9EOztJQUNwRCxpREFBbUM7O0lBQ25DLG1EQUFvQzs7SUFDcEMsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHR5cGU6ICd0ZXh0JyB8ICdjaGVja2JveCcgfCAncmFkaW8nIHwgJ3NlbGVjdCcgfCAnbnVtYmVyJztcbiAgbW9kZWw6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvcHRpb25zPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICBkcm9wZG93bj86IHsgW2tleTogc3RyaW5nXTogRHJvcGRvd25bXSB9O1xuICBkZWZhdWx0QnRuPzoge1xuICAgIHByaW1hcnlMYWJlbD86IHN0cmluZztcbiAgICBzZWNvbmRhcnlMYWJlbD86IHN0cmluZztcbiAgICByZW1vdmVTZWNCdG4/OiBib29sZWFuO1xuICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWR5bmFtaWMtZmllbGRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBmaWVsZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgc2V0IGZpZWxkcyh2YWw6IEZpZWxkc1tdKSB7XG4gICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHZhbDtcbiAgICB9XG4gIH1cbiAgLy8gb3B0aW9uIHBhcmFtZXRlciByZXF1aXJlZCBieSBjb21wb25lbnQgdG8gcmVuZGVyXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbDogT3B0aW9ucykge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGlmICh2YWwuZHJvcGRvd24pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMgPSB2YWwuZHJvcGRvd247XG4gICAgICB9XG4gICAgICBpZiAodmFsLmRlZmF1bHRCdG4pIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5QnRuTGFiZWwgPSB2YWwuZGVmYXVsdEJ0bi5wcmltYXJ5TGFiZWw7XG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5QnRuTGFiZWwgPSB2YWwuZGVmYXVsdEJ0bi5zZWNvbmRhcnlMYWJlbDtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWNCdG4gPSB2YWwuZGVmYXVsdEJ0bi5yZW1vdmVTZWNCdG47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGRpc2FibGUgZGVmYXVsdCBhY3Rpb24gYnV0dG9uXG4gIEBJbnB1dCgpIGRpc2FibGVEZWZhdWx0QWN0aW9uOiBib29sZWFuO1xuICAvLyBjdXN0b20gYWN0aW9uIGJ1dHRvblxuICBASW5wdXQoKSBjdXN0b21BY3Rpb25CdG46IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGFjdGlvbjogKHBhcmFtOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xuICAgIGJhZGdlPzogc3RyaW5nO1xuICB9W10gPSBbXTtcblxuICBAT3V0cHV0KCkgcHJpbWFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZW5kZXJGaWVsZHM6IEZpZWxkc1tdID0gW107XG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZHJvcGRvd25PcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IERyb3Bkb3duW10gfSA9IHt9O1xuICBwcmltYXJ5QnRuTGFiZWw6IHN0cmluZyA9ICdTZWFyY2gnO1xuICBzZWNvbmRhcnlCdG5MYWJlbDogc3RyaW5nID0gJ1Jlc2V0JztcbiAgcmVtb3ZlU2VjQnRuOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBwcmltYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5wcmltYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBzZWNvbmRhcnlDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlY29uZGFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0ge307XG4gIH1cbn1cbiJdfQ==