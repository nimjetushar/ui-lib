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
    ngOnInit() { }
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
/** @nocollapse */
DynamicFieldsComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUcvRSw0QkFPQzs7O0lBTkMsdUJBQWM7O0lBQ2Qsc0JBQTBEOztJQUMxRCx1QkFBYzs7SUFDZCxzQkFBYzs7SUFDZCwwQkFBbUI7O0lBQ25CLHlCQUFpQjs7Ozs7QUFHbkIsNkJBT0M7OztJQU5DLDJCQUF5Qzs7SUFDekMsNkJBSUU7O0FBUUosTUFBTSxPQUFPLHNCQUFzQjtJQXdDakM7O1FBaEJTLG9CQUFlLEdBSWxCLEVBQUUsQ0FBQztRQUVDLG1CQUFjLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUUscUJBQWdCLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEYsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUEyQixFQUFFLENBQUM7UUFDbEMsb0JBQWUsR0FBa0MsRUFBRSxDQUFDO1FBQ3BELG9CQUFlLEdBQVcsUUFBUSxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLE9BQU8sQ0FBQztJQUdwQixDQUFDOzs7Ozs7SUFyQ2pCLElBQWEsTUFBTSxDQUFDLEdBQWE7UUFDL0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7OztJQUVELElBQWEsT0FBTyxDQUFDLEdBQVk7UUFDL0IsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzthQUNyQztZQUNELElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2FBQ2pEO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBc0JELFFBQVEsS0FBVyxDQUFDOzs7O0lBRXBCLFlBQVk7UUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc2tFQUE4Qzs7YUFFL0M7Ozs7O3FCQUlFLEtBQUs7c0JBTUwsS0FBSzttQ0FhTCxLQUFLOzhCQUVMLEtBQUs7NkJBTUwsTUFBTTsrQkFDTixNQUFNOzs7O0lBVFAsc0RBQXVDOztJQUV2QyxpREFJUzs7SUFFVCxnREFBb0Y7O0lBQ3BGLGtEQUFzRjs7SUFFdEYsOENBQTRCOztJQUM1QixzQ0FBa0M7O0lBQ2xDLGlEQUFvRDs7SUFDcEQsaURBQW1DOztJQUNuQyxtREFBb0M7O0lBQ3BDLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB0eXBlOiAndGV4dCcgfCAnY2hlY2tib3gnIHwgJ3JhZGlvJyB8ICdzZWxlY3QnIHwgJ251bWJlcic7XG4gIG1vZGVsOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb3B0aW9ucz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcbiAgZHJvcGRvd24/OiB7IFtrZXk6IHN0cmluZ106IERyb3Bkb3duW10gfTtcbiAgZGVmYXVsdEJ0bj86IHtcbiAgICBwcmltYXJ5TGFiZWw/OiBzdHJpbmc7XG4gICAgc2Vjb25kYXJ5TGFiZWw/OiBzdHJpbmc7XG4gICAgcmVtb3ZlU2VjQnRuPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1keW5hbWljLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gZmllbGRzIHRvIGJlIHJlbmRlcmVkXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBGaWVsZHNbXSkge1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB2YWw7XG4gICAgfVxuICB9XG4gIC8vIG9wdGlvbiBwYXJhbWV0ZXIgcmVxdWlyZWQgYnkgY29tcG9uZW50IHRvIHJlbmRlclxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyh2YWw6IE9wdGlvbnMpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBpZiAodmFsLmRyb3Bkb3duKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gdmFsLmRyb3Bkb3duO1xuICAgICAgfVxuICAgICAgaWYgKHZhbC5kZWZhdWx0QnRuKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUJ0bkxhYmVsID0gdmFsLmRlZmF1bHRCdG4ucHJpbWFyeUxhYmVsO1xuICAgICAgICB0aGlzLnNlY29uZGFyeUJ0bkxhYmVsID0gdmFsLmRlZmF1bHRCdG4uc2Vjb25kYXJ5TGFiZWw7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VjQnRuID0gdmFsLmRlZmF1bHRCdG4ucmVtb3ZlU2VjQnRuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBkaXNhYmxlIGRlZmF1bHQgYWN0aW9uIGJ1dHRvblxuICBASW5wdXQoKSBkaXNhYmxlRGVmYXVsdEFjdGlvbjogYm9vbGVhbjtcbiAgLy8gY3VzdG9tIGFjdGlvbiBidXR0b25cbiAgQElucHV0KCkgY3VzdG9tQWN0aW9uQnRuOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBhY3Rpb246IChwYXJhbTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gdm9pZDtcbiAgICBiYWRnZT86IHN0cmluZztcbiAgfVtdID0gW107XG5cbiAgQE91dHB1dCgpIHByaW1hcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWNvbmRhcnlIYW5kbGVyOiBFdmVudEVtaXR0ZXI8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVuZGVyRmllbGRzOiBGaWVsZHNbXSA9IFtdO1xuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIGRyb3Bkb3duT3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBEcm9wZG93bltdIH0gPSB7fTtcbiAgcHJpbWFyeUJ0bkxhYmVsOiBzdHJpbmcgPSAnU2VhcmNoJztcbiAgc2Vjb25kYXJ5QnRuTGFiZWw6IHN0cmluZyA9ICdSZXNldCc7XG4gIHJlbW92ZVNlY0J0bjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucHJpbWFyeUhhbmRsZXIuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc2Vjb25kYXJ5Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlIYW5kbGVyLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG4iXX0=