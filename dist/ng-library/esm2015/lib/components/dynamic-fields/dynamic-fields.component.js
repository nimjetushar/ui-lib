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
export function DynamicFieldOptions() { }
if (false) {
    /** @type {?|undefined} */
    DynamicFieldOptions.prototype.dropdown;
    /** @type {?|undefined} */
    DynamicFieldOptions.prototype.defaultBtn;
}
export class DynamicFieldsComponent {
    constructor() {
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
    set options(val) {
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
                template: "<div class=\"dynamic-fields\">\n  <div *ngFor=\"let field of renderFields\" [ngSwitch]=\"field.type\" class='input-element'>\n\n    <!-- input type text -->\n    <div *ngSwitchCase=\"'text'\" class='input-text'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"text\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <div *ngSwitchCase=\"'number'\" class='input-number'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <input [id]='field.model' type=\"number\" [name]='field.name'\n        [(ngModel)]=\"data[field.model]\" />\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'checkbox'\" class='input-checkbox'>\n      <t-checkbox [label]=\"field.label\" [(model)]=\"data[field.model]\" [name]='field.name'>\n      </t-checkbox>\n    </div>\n\n    <!-- input type checkbox -->\n    <div *ngSwitchCase=\"'radio'\" class='input-radio'>\n      <label [for]=\"field.model\">\n        <span>{{field.label}}</span>\n        <input [id]='field.model' type=\"radio\" [(ngModel)]=\"data[field.model]\"\n          [name]='field.name' />\n      </label>\n    </div>\n\n    <!-- dropdown -->\n    <div *ngSwitchCase=\"'select'\" class='input-select'>\n      <label [for]=\"field.model\">{{field.label}}</label>\n      <select [id]='field.model' [(ngModel)]=\"data[field.model]\">\n        <option *ngFor=\"let item of dropdownOptions[field.options]\" [value]=\"item.value\">\n          {{item.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"default-button\" *ngIf=\"!disableDefaultAction\">\n      <t-button [label]=\"primaryBtnLabel\" type=\"primary\" (click)=\"primaryClick()\">\n      </t-button>\n      <t-button *ngIf=\"!removeSecBtn\" [label]=\"secondaryBtnLabel\" type=\"secondary\"\n        (click)=\"secondaryClick()\">\n      </t-button>\n    </div>\n    <div class=\"custom-action-button\" *ngIf=\"disableDefaultAction\">\n      <span>\n        <t-button></t-button>\n      </span>\n    </div>\n  </div>\n</div>",
                styles: [".dynamic-fields .button-container{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields .button-container t-button{margin:0 .3125rem}.dynamic-fields input,.dynamic-fields select{margin:0 .625rem;outline:0}.dynamic-fields .input-checkbox,.dynamic-fields .input-number,.dynamic-fields .input-radio,.dynamic-fields .input-select,.dynamic-fields .input-text{margin:.625rem .3125rem}"]
            }] }
];
DynamicFieldsComponent.propDecorators = {
    fields: [{ type: Input }],
    options: [{ type: Input }],
    disableDefaultAction: [{ type: Input }],
    customActionBtn: [{ type: Input }],
    primaryHandler: [{ type: Output }],
    secondaryHandler: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUd2RSw0QkFPQzs7O0lBTkMsdUJBQWM7O0lBQ2Qsc0JBQTBEOztJQUMxRCx1QkFBYzs7SUFDZCxzQkFBYzs7SUFDZCwwQkFBbUI7O0lBQ25CLHlCQUFpQjs7Ozs7QUFHbkIseUNBT0M7OztJQU5DLHVDQUF5Qzs7SUFDekMseUNBSUU7O0FBUUosTUFBTSxPQUFPLHNCQUFzQjtJQUxuQzs7UUE2Qlcsb0JBQWUsR0FJbEIsRUFBRSxDQUFDO1FBRUMsbUJBQWMsR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRSxxQkFBZ0IsR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RixpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQTJCLEVBQUUsQ0FBQztRQUNsQyxvQkFBZSxHQUFrQyxFQUFFLENBQUM7UUFDcEQsb0JBQWUsR0FBVyxRQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQVcsT0FBTyxDQUFDO0lBY3RDLENBQUM7Ozs7OztJQWhEQyxJQUFhLE1BQU0sQ0FBQyxHQUFhO1FBQy9CLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxJQUFhLE9BQU8sQ0FBQyxHQUF3QjtRQUMzQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7Ozs7SUFvQkQsWUFBWTtRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qixza0VBQThDOzthQUUvQzs7O3FCQUlFLEtBQUs7c0JBTUwsS0FBSzttQ0FhTCxLQUFLOzhCQUVMLEtBQUs7NkJBTUwsTUFBTTsrQkFDTixNQUFNOzs7O0lBVFAsc0RBQXVDOztJQUV2QyxpREFJUzs7SUFFVCxnREFBb0Y7O0lBQ3BGLGtEQUFzRjs7SUFFdEYsOENBQTRCOztJQUM1QixzQ0FBa0M7O0lBQ2xDLGlEQUFvRDs7SUFDcEQsaURBQW1DOztJQUNuQyxtREFBb0M7O0lBQ3BDLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdHlwZTogJ3RleHQnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc2VsZWN0JyB8ICdudW1iZXInO1xuICBtb2RlbDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0ZpZWxkT3B0aW9ucyB7XG4gIGRyb3Bkb3duPzogeyBba2V5OiBzdHJpbmddOiBEcm9wZG93bltdIH07XG4gIGRlZmF1bHRCdG4/OiB7XG4gICAgcHJpbWFyeUxhYmVsPzogc3RyaW5nO1xuICAgIHNlY29uZGFyeUxhYmVsPzogc3RyaW5nO1xuICAgIHJlbW92ZVNlY0J0bj86IGJvb2xlYW47XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtZHluYW1pYy1maWVsZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZHNDb21wb25lbnQge1xuXG4gIC8vIGZpZWxkcyB0byBiZSByZW5kZXJlZFxuICBASW5wdXQoKSBzZXQgZmllbGRzKHZhbDogRmllbGRzW10pIHtcbiAgICBpZiAodmFsICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyRmllbGRzID0gdmFsO1xuICAgIH1cbiAgfVxuICAvLyBvcHRpb24gcGFyYW1ldGVyIHJlcXVpcmVkIGJ5IGNvbXBvbmVudCB0byByZW5kZXJcbiAgQElucHV0KCkgc2V0IG9wdGlvbnModmFsOiBEeW5hbWljRmllbGRPcHRpb25zKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbC5kcm9wZG93bikge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHZhbC5kcm9wZG93bjtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwuZGVmYXVsdEJ0bikge1xuICAgICAgICB0aGlzLnByaW1hcnlCdG5MYWJlbCA9IHZhbC5kZWZhdWx0QnRuLnByaW1hcnlMYWJlbDtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlCdG5MYWJlbCA9IHZhbC5kZWZhdWx0QnRuLnNlY29uZGFyeUxhYmVsO1xuICAgICAgICB0aGlzLnJlbW92ZVNlY0J0biA9IHZhbC5kZWZhdWx0QnRuLnJlbW92ZVNlY0J0bjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZGlzYWJsZSBkZWZhdWx0IGFjdGlvbiBidXR0b25cbiAgQElucHV0KCkgZGlzYWJsZURlZmF1bHRBY3Rpb246IGJvb2xlYW47XG4gIC8vIGN1c3RvbSBhY3Rpb24gYnV0dG9uXG4gIEBJbnB1dCgpIGN1c3RvbUFjdGlvbkJ0bjoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgYWN0aW9uOiAocGFyYW06IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHZvaWQ7XG4gICAgYmFkZ2U/OiBzdHJpbmc7XG4gIH1bXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBwcmltYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Vjb25kYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJlbmRlckZpZWxkczogRmllbGRzW10gPSBbXTtcbiAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBkcm9wZG93bk9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogRHJvcGRvd25bXSB9ID0ge307XG4gIHByaW1hcnlCdG5MYWJlbDogc3RyaW5nID0gJ1NlYXJjaCc7XG4gIHNlY29uZGFyeUJ0bkxhYmVsOiBzdHJpbmcgPSAnUmVzZXQnO1xuICByZW1vdmVTZWNCdG46IGJvb2xlYW47XG5cbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc2Vjb25kYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG4iXX0=