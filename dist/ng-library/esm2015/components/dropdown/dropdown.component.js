var DropdownComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';
let DropdownComponent = DropdownComponent_1 = class DropdownComponent extends UiInput {
    constructor() {
        super(...arguments);
        // tslint:disable: no-output-on-prefix
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this._tooltipPosition = 'top';
    }
    set options(value) {
        this._options = value;
    }
    get options() {
        return this._options;
    }
    set tooltipPosition(value) {
        this._tooltipPosition = value || 'top';
    }
    get tooltipPosition() {
        return this._tooltipPosition;
    }
    writeValue(value) {
        this.value = value;
        this.onChange(value);
    }
    onChangeHandler(event) {
        this.writeValue(event.value);
    }
    focusHandler(event) {
        this.onFocus.emit(event);
    }
    blurHandler(event) {
        this.onBlur.emit(event);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DropdownComponent.prototype, "options", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "staticLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "tooltip", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DropdownComponent.prototype, "tooltipPosition", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "autoDisplayFirst", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "autofocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DropdownComponent.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DropdownComponent.prototype, "onBlur", void 0);
DropdownComponent = DropdownComponent_1 = __decorate([
    Component({
        selector: 't-dropdown',
        template: "<p-dropdown \n    [options]=\"options\" \n    [ngModel]=\"value\" \n    [placeholder]=\"placeholder\"\n    [filter]=\"filter\"\n    [readonly]=\"readonly\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tooltip]=\"tooltip\"\n    [tooltipPosition]=\"tooltipPosition\"\n    [autoDisplayFirst]=\"autoDisplayFirst\"\n    [scrollHeight]=\"scrollHeight\"\n    [autofocus]=\"autofocus\"\n\n    (onChange)=\"onChangeHandler($event)\"\n    (onFocus)=\"focusHandler($event)\"\n    (onBlur)=\"blurHandler($event)\">\n</p-dropdown>\n",
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DropdownComponent_1),
                multi: true
            }],
        encapsulation: ViewEncapsulation.None,
        styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"]
    })
], DropdownComponent);
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFvQnBELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFrQixTQUFRLE9BQU87SUFBOUM7O1FBNEJFLHNDQUFzQztRQUM1QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS2pELHFCQUFnQixHQUFvQixLQUFLLENBQUM7SUFrQnBELENBQUM7SUFsREMsSUFBSSxPQUFPLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBVUQsSUFBSSxlQUFlLENBQUMsS0FBc0I7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBY0QsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFpQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBbERDO0lBREMsS0FBSyxFQUFFOzs7Z0RBR1A7QUFLUTtJQUFSLEtBQUssRUFBRTs7bURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzttREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7O2lEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7c0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztzREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OytDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O2tEQUFjO0FBRXRCO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFJUTtJQUFSLEtBQUssRUFBRTs7MkRBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFOzt1REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O29EQUFvQjtBQUdsQjtJQUFULE1BQU0sRUFBRTs4QkFBVSxZQUFZO2tEQUEyQjtBQUNoRDtJQUFULE1BQU0sRUFBRTs4QkFBUyxZQUFZO2lEQUEyQjtBQTlCOUMsaUJBQWlCO0lBWDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDhoQkFBd0M7UUFFeEMsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBaUIsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1FBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyxpQkFBaUIsQ0FxRDdCO1NBckRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVaUlucHV0IH0gZnJvbSAnLi4vLi4vY2xhc3MvdWlJbnB1dC5jbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG50eXBlIFRvb2x0aXBQb3NpdGlvbiA9ICdyaWdodCcgfCAnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVpSW5wdXQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbHVlOiBEcm9wZG93bltdKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBvcHRpb25zKCk6IERyb3Bkb3duW10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXRpY0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogYW55O1xuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBUb29sdGlwUG9zaXRpb24pIHtcbiAgICB0aGlzLl90b29sdGlwUG9zaXRpb24gPSB2YWx1ZSB8fCAndG9wJztcbiAgfVxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbjtcbiAgfVxuICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBEcm9wZG93bltdO1xuICBwcml2YXRlIF90b29sdGlwUG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERyb3Bkb3duKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgZm9jdXNIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgYmx1ckhhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19