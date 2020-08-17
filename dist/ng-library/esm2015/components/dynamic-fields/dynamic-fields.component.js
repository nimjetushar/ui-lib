import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../checkbox/checkbox.component";
import * as i4 from "../radio/radio.component";
import * as i5 from "../dropdown/dropdown.component";
import * as i6 from "../button/button.component";
function DynamicFieldsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "label", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 12);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r27); const field_r20 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return (ctx_r26.data[field_r20.model] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", field_r20.model);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r20.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", field_r20.model)("name", field_r20.name)("ngModel", ctx_r21.data[field_r20.model])("disabled", ctx_r21.disabledFields[field_r20.model]);
} }
function DynamicFieldsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "label", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 14);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_2_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r31); const field_r20 = i0.ɵɵnextContext().$implicit; const ctx_r30 = i0.ɵɵnextContext(); return (ctx_r30.data[field_r20.model] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", field_r20.model);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r20.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", field_r20.model)("name", field_r20.name)("ngModel", ctx_r22.data[field_r20.model])("disabled", ctx_r22.disabledFields[field_r20.model]);
} }
function DynamicFieldsComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "t-checkbox", 16);
    i0.ɵɵlistener("modelChange", function DynamicFieldsComponent_div_1_div_3_Template_t_checkbox_modelChange_1_listener($event) { i0.ɵɵrestoreView(_r35); const field_r20 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(); return (ctx_r34.data[field_r20.model] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", field_r20.label)("model", ctx_r23.data[field_r20.model])("name", field_r20.name)("disabled", ctx_r23.disabledFields[field_r20.model]);
} }
function DynamicFieldsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "t-radio", 18);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_4_Template_t_radio_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r39); const field_r20 = i0.ɵɵnextContext().$implicit; const ctx_r38 = i0.ɵɵnextContext(); return (ctx_r38.data[field_r20.model] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", field_r20.label)("ngModel", ctx_r24.data[field_r20.model])("name", field_r20.name)("disabled", ctx_r24.disabledFields[field_r20.model]);
} }
function DynamicFieldsComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "t-dropdown", 20);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldsComponent_div_1_div_5_Template_t_dropdown_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r43); const field_r20 = i0.ɵɵnextContext().$implicit; const ctx_r42 = i0.ɵɵnextContext(); return (ctx_r42.data[field_r20.model] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", field_r20.label)("ngModel", ctx_r25.data[field_r20.model])("options", ctx_r25.dropdownOptions[field_r20.model])("name", field_r20.name)("disabled", ctx_r25.disabledFields[field_r20.model]);
} }
function DynamicFieldsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, DynamicFieldsComponent_div_1_div_1_Template, 4, 6, "div", 5);
    i0.ɵɵtemplate(2, DynamicFieldsComponent_div_1_div_2_Template, 4, 6, "div", 6);
    i0.ɵɵtemplate(3, DynamicFieldsComponent_div_1_div_3_Template, 2, 4, "div", 7);
    i0.ɵɵtemplate(4, DynamicFieldsComponent_div_1_div_4_Template, 2, 4, "div", 8);
    i0.ɵɵtemplate(5, DynamicFieldsComponent_div_1_div_5_Template, 2, 5, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r20 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", field_r20.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
} }
function DynamicFieldsComponent_div_3_t_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "t-button", 24);
    i0.ɵɵlistener("click", function DynamicFieldsComponent_div_3_t_button_2_Template_t_button_click_0_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.secondaryClick(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r46.secondaryLabel);
} }
function DynamicFieldsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "t-button", 22);
    i0.ɵɵlistener("click", function DynamicFieldsComponent_div_3_Template_t_button_click_1_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.primaryClick(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DynamicFieldsComponent_div_3_t_button_2_Template, 1, 1, "t-button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r19.primaryLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r19.removeSecondaryButton);
} }
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
    set fields(val) {
        if (val && val.length) {
            this.renderFields = val;
        }
    }
    // option parameter required by component to render
    set buttonOptions(val) {
        if (val) {
            const { primaryLabel, secondaryLabel, removeSecondaryButton } = val;
            this.primaryLabel = primaryLabel;
            this.secondaryLabel = secondaryLabel;
            this.removeSecondaryButton = removeSecondaryButton;
        }
    }
    set data(data) {
        if (data) {
            this._data = data;
        }
    }
    get data() {
        return this._data || {};
    }
    set dropdownOptions(data) {
        if (data) {
            this._dropdownOptions = data;
        }
    }
    get dropdownOptions() {
        return this._dropdownOptions || {};
    }
    set disabledFields(data) {
        if (data) {
            this._disabled = data;
        }
    }
    get disabledFields() {
        return this._disabled || {};
    }
    set primaryLabel(label) {
        this._primaryLabel = label;
    }
    get primaryLabel() {
        return this._primaryLabel || 'Search';
    }
    set secondaryLabel(label) {
        this._secondaryLabel = label;
    }
    get secondaryLabel() {
        return this._secondaryLabel || 'Reset';
    }
    primaryClick() {
        this.primaryHandler.emit(this.data);
    }
    secondaryClick() {
        this.secondaryHandler.emit(this.data);
    }
    reset() {
        this.data = {};
    }
}
DynamicFieldsComponent.ɵfac = function DynamicFieldsComponent_Factory(t) { return new (t || DynamicFieldsComponent)(); };
DynamicFieldsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DynamicFieldsComponent, selectors: [["t-dynamic-fields"]], inputs: { fields: "fields", buttonOptions: "buttonOptions", data: "data", dropdownOptions: "dropdownOptions", disabledFields: "disabledFields", hideDefaultAction: "hideDefaultAction" }, outputs: { primaryHandler: "primaryHandler", secondaryHandler: "secondaryHandler" }, decls: 4, vars: 2, consts: [[1, "dynamic-fields"], ["class", "input-element", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "button-container"], ["class", "default-button", 4, "ngIf"], [1, "input-element", 3, "ngSwitch"], ["class", "input-text", 4, "ngSwitchCase"], ["class", "input-number", 4, "ngSwitchCase"], ["class", "input-checkbox", 4, "ngSwitchCase"], ["class", "input-radio", 4, "ngSwitchCase"], ["class", "input-select", 4, "ngSwitchCase"], [1, "input-text"], [3, "for"], ["type", "text", 3, "id", "name", "ngModel", "disabled", "ngModelChange"], [1, "input-number"], ["type", "number", 3, "id", "name", "ngModel", "disabled", "ngModelChange"], [1, "input-checkbox"], [3, "label", "model", "name", "disabled", "modelChange"], [1, "input-radio"], [3, "label", "ngModel", "name", "disabled", "ngModelChange"], [1, "input-select"], [3, "placeholder", "ngModel", "options", "name", "disabled", "ngModelChange"], [1, "default-button"], ["type", "primary", 3, "label", "click"], ["type", "secondary", 3, "label", "click", 4, "ngIf"], ["type", "secondary", 3, "label", "click"]], template: function DynamicFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DynamicFieldsComponent_div_1_Template, 6, 6, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, DynamicFieldsComponent_div_3_Template, 3, 2, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.renderFields);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideDefaultAction);
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NumberValueAccessor, i3.CheckboxComponent, i4.RadioComponent, i5.DropdownComponent, i6.ButtonComponent], styles: [".dynamic-fields[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{-ms-flex-pack:end;justify-content:flex-end;display:-ms-flexbox;display:flex}.dynamic-fields[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   t-button[_ngcontent-%COMP%]{margin:0 .3125rem}.dynamic-fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin:0 .625rem;outline:0}.dynamic-fields[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-number[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-radio[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-select[_ngcontent-%COMP%], .dynamic-fields[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{margin:.625rem .3125rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicFieldsComponent, [{
        type: Component,
        args: [{
                selector: 't-dynamic-fields',
                templateUrl: './dynamic-fields.component.html',
                styleUrls: ['./dynamic-fields.component.scss']
            }]
    }], null, { fields: [{
            type: Input
        }], buttonOptions: [{
            type: Input
        }], data: [{
            type: Input
        }], dropdownOptions: [{
            type: Input
        }], disabledFields: [{
            type: Input
        }], hideDefaultAction: [{
            type: Input
        }], primaryHandler: [{
            type: Output
        }], secondaryHandler: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljLWZpZWxkcy9keW5hbWljLWZpZWxkcy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2R5bmFtaWMtZmllbGRzL2R5bmFtaWMtZmllbGRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNJbkUsK0JBQ0U7SUFBQSxpQ0FBMkI7SUFBQSxZQUFlO0lBQUEsaUJBQVE7SUFDbEQsaUNBRUY7SUFGNEQsNFJBQStCO0lBQXpGLGlCQUVGO0lBQUEsaUJBQU07Ozs7SUFIRyxlQUFtQjtJQUFuQixxQ0FBbUI7SUFBQyxlQUFlO0lBQWYscUNBQWU7SUFDbkMsZUFBa0I7SUFBbEIsb0NBQWtCLHdCQUFBLDBDQUFBLHFEQUFBOzs7O0lBSTNCLCtCQUNFO0lBQUEsaUNBQTJCO0lBQUEsWUFBZTtJQUFBLGlCQUFRO0lBQ2xELGlDQUVGO0lBRjhELDRSQUErQjtJQUEzRixpQkFFRjtJQUFBLGlCQUFNOzs7O0lBSEcsZUFBbUI7SUFBbkIscUNBQW1CO0lBQUMsZUFBZTtJQUFmLHFDQUFlO0lBQ25DLGVBQWtCO0lBQWxCLG9DQUFrQix3QkFBQSwwQ0FBQSxxREFBQTs7OztJQUszQiwrQkFDRTtJQUFBLHNDQUVhO0lBRnFCLDZSQUE2QjtJQUUvRCxpQkFBYTtJQUNmLGlCQUFNOzs7O0lBSFEsZUFBcUI7SUFBckIsdUNBQXFCLHdDQUFBLHdCQUFBLHFEQUFBOzs7O0lBTW5DLCtCQUNFO0lBQUEsbUNBQ3FEO0lBRHRCLDhSQUErQjtJQUNuQixpQkFBVTtJQUN2RCxpQkFBTTs7OztJQUZLLGVBQXFCO0lBQXJCLHVDQUFxQiwwQ0FBQSx3QkFBQSxx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Q0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBUUQsWUFBWTtRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7NEZBdEZVLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDWG5DLDhCQUNFO1FBQUEsdUVBRUU7UUFrQ0YsOEJBQ0U7UUFBQSx1RUFDRTtRQUtKLGlCQUFNO1FBQ1IsaUJBQU07O1FBNUNDLGVBQWtDO1FBQWxDLDBDQUFrQztRQXFDVCxlQUEwQjtRQUExQiw2Q0FBMEI7O2tERDNCN0Msc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7a0JBSUUsS0FBSzs7a0JBTUwsS0FBSzs7a0JBU0wsS0FBSzs7a0JBVUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRHluYW1pY0ZpZWxkcywgRHluYW1pY0ZpZWxkQnV0dG9uT3B0aW9ucyxcclxuICBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMsIER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucywgRHluYW1pY0ZpZWxkRGF0YU1vZGVsXHJcbn0gZnJvbSAnLi9keW5hbWljRmllbGRzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3QtZHluYW1pYy1maWVsZHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZpZWxkcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1maWVsZHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkc0NvbXBvbmVudCB7XHJcblxyXG4gIC8vIGZpZWxkcyB0byBiZSByZW5kZXJlZFxyXG4gIEBJbnB1dCgpIHNldCBmaWVsZHModmFsOiBEeW5hbWljRmllbGRzW10pIHtcclxuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gb3B0aW9uIHBhcmFtZXRlciByZXF1aXJlZCBieSBjb21wb25lbnQgdG8gcmVuZGVyXHJcbiAgQElucHV0KCkgc2V0IGJ1dHRvbk9wdGlvbnModmFsOiBEeW5hbWljRmllbGRCdXR0b25PcHRpb25zKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJpbWFyeUxhYmVsLCBzZWNvbmRhcnlMYWJlbCwgcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uIH0gPSB2YWw7XHJcbiAgICAgIHRoaXMucHJpbWFyeUxhYmVsID0gcHJpbWFyeUxhYmVsO1xyXG4gICAgICB0aGlzLnNlY29uZGFyeUxhYmVsID0gc2Vjb25kYXJ5TGFiZWw7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2Vjb25kYXJ5QnV0dG9uID0gcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmllbGREYXRhTW9kZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgfHwge307XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkcm9wZG93bk9wdGlvbnMoZGF0YTogRHluYW1pY0ZpZWxkRHJvcGRvd25PcHRpb25zKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLl9kcm9wZG93bk9wdGlvbnMgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgZHJvcGRvd25PcHRpb25zKCk6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25PcHRpb25zIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWRGaWVsZHMoZGF0YTogRHluYW1pY0ZpZWxkRGlzYWJsZWRPcHRpb25zKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBkaXNhYmxlZEZpZWxkcygpOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgaGlkZURlZmF1bHRBY3Rpb246IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBwcmltYXJ5SGFuZGxlcjogRXZlbnRFbWl0dGVyPER5bmFtaWNGaWVsZERhdGFNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlY29uZGFyeUhhbmRsZXI6IEV2ZW50RW1pdHRlcjxEeW5hbWljRmllbGREYXRhTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICByZW5kZXJGaWVsZHM6IER5bmFtaWNGaWVsZHNbXSA9IFtdO1xyXG4gIHJlbW92ZVNlY29uZGFyeUJ1dHRvbjogYm9vbGVhbjtcclxuXHJcbiAgc2V0IHByaW1hcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcmltYXJ5TGFiZWwgPSBsYWJlbDtcclxuICB9XHJcbiAgZ2V0IHByaW1hcnlMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlMYWJlbCB8fCAnU2VhcmNoJztcclxuICB9XHJcblxyXG4gIHNldCBzZWNvbmRhcnlMYWJlbChsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWNvbmRhcnlMYWJlbCA9IGxhYmVsO1xyXG4gIH1cclxuICBnZXQgc2Vjb25kYXJ5TGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWNvbmRhcnlMYWJlbCB8fCAnUmVzZXQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcHJpbWFyeUxhYmVsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5TGFiZWw6IHN0cmluZztcclxuICBwcml2YXRlIF9kcm9wZG93bk9wdGlvbnM6IER5bmFtaWNGaWVsZERyb3Bkb3duT3B0aW9ucyA9IHt9O1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBEeW5hbWljRmllbGREaXNhYmxlZE9wdGlvbnMgPSB7fTtcclxuICBwcml2YXRlIF9kYXRhOiBEeW5hbWljRmllbGREYXRhTW9kZWwgPSB7fTtcclxuXHJcbiAgcHJpbWFyeUNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmltYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzZWNvbmRhcnlDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kYXJ5SGFuZGxlci5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZHNcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgcmVuZGVyRmllbGRzXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIiBjbGFzcz0naW5wdXQtZWxlbWVudCc+XG5cbiAgICA8IS0tIGlucHV0IHR5cGUgdGV4dCAtLT5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBjbGFzcz0naW5wdXQtdGV4dCc+XG4gICAgICA8bGFiZWwgW2Zvcl09XCJmaWVsZC5tb2RlbFwiPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XG4gICAgICA8aW5wdXQgW2lkXT0nZmllbGQubW9kZWwnIHR5cGU9XCJ0ZXh0XCIgW25hbWVdPSdmaWVsZC5uYW1lJyBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQubW9kZWxdXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkRmllbGRzW2ZpZWxkLm1vZGVsXVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIGNsYXNzPSdpbnB1dC1udW1iZXInPlxuICAgICAgPGxhYmVsIFtmb3JdPVwiZmllbGQubW9kZWxcIj57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPlxuICAgICAgPGlucHV0IFtpZF09J2ZpZWxkLm1vZGVsJyB0eXBlPVwibnVtYmVyXCIgW25hbWVdPSdmaWVsZC5uYW1lJyBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQubW9kZWxdXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkRmllbGRzW2ZpZWxkLm1vZGVsXVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIGlucHV0IHR5cGUgY2hlY2tib3ggLS0+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPSdpbnB1dC1jaGVja2JveCc+XG4gICAgICA8dC1jaGVja2JveCBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbKG1vZGVsKV09XCJkYXRhW2ZpZWxkLm1vZGVsXVwiIFtuYW1lXT0nZmllbGQubmFtZSdcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkRmllbGRzW2ZpZWxkLm1vZGVsXVwiPlxuICAgICAgPC90LWNoZWNrYm94PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBpbnB1dCB0eXBlIHJhZGlvIC0tPlxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz0naW5wdXQtcmFkaW8nPlxuICAgICAgPHQtcmFkaW8gW2xhYmVsXT1cImZpZWxkLmxhYmVsXCIgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLm1vZGVsXVwiIFtuYW1lXT0nZmllbGQubmFtZSdcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkRmllbGRzW2ZpZWxkLm1vZGVsXVwiPjwvdC1yYWRpbz5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gZHJvcGRvd24gLS0+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz0naW5wdXQtc2VsZWN0Jz5cbiAgICAgIDx0LWRyb3Bkb3duIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5tb2RlbF1cIiBbb3B0aW9uc109XCJkcm9wZG93bk9wdGlvbnNbZmllbGQubW9kZWxdXCJcbiAgICAgICAgW25hbWVdPSdmaWVsZC5uYW1lJyBbZGlzYWJsZWRdPVwiZGlzYWJsZWRGaWVsZHNbZmllbGQubW9kZWxdXCI+XG4gICAgICA8L3QtZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYnV0dG9uXCIgKm5nSWY9XCIhaGlkZURlZmF1bHRBY3Rpb25cIj5cbiAgICAgIDx0LWJ1dHRvbiBbbGFiZWxdPVwicHJpbWFyeUxhYmVsXCIgdHlwZT1cInByaW1hcnlcIiAoY2xpY2spPVwicHJpbWFyeUNsaWNrKClcIj5cbiAgICAgIDwvdC1idXR0b24+XG4gICAgICA8dC1idXR0b24gKm5nSWY9XCIhcmVtb3ZlU2Vjb25kYXJ5QnV0dG9uXCIgW2xhYmVsXT1cInNlY29uZGFyeUxhYmVsXCIgdHlwZT1cInNlY29uZGFyeVwiIChjbGljayk9XCJzZWNvbmRhcnlDbGljaygpXCI+XG4gICAgICA8L3QtYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==