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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFvQnBELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFrQixTQUFRLE9BQU87SUFBOUM7O1FBNEJFLHNDQUFzQztRQUM1QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS2pELHFCQUFnQixHQUFvQixLQUFLLENBQUM7SUFrQnBELENBQUM7SUFsREMsSUFBSSxPQUFPLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBVUQsSUFBSSxlQUFlLENBQUMsS0FBc0I7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBY0QsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFpQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBbERDO0lBREMsS0FBSyxFQUFFOzs7Z0RBR1A7QUFLUTtJQUFSLEtBQUssRUFBRTs7bURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzttREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7O2lEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7c0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztzREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OytDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O2tEQUFjO0FBRXRCO0lBREMsS0FBSyxFQUFFOzs7d0RBR1A7QUFJUTtJQUFSLEtBQUssRUFBRTs7MkRBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFOzt1REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O29EQUFvQjtBQUdsQjtJQUFULE1BQU0sRUFBRTs4QkFBVSxZQUFZO2tEQUEyQjtBQUNoRDtJQUFULE1BQU0sRUFBRTs4QkFBUyxZQUFZO2lEQUEyQjtBQTlCOUMsaUJBQWlCO0lBWDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDhoQkFBd0M7UUFFeEMsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBaUIsQ0FBQztnQkFDaEQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1FBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyxpQkFBaUIsQ0FxRDdCO1NBckRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVWlJbnB1dCB9IGZyb20gJy4uLy4uL2NsYXNzL3VpSW5wdXQuY2xhc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93biB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG50eXBlIFRvb2x0aXBQb3NpdGlvbiA9ICdyaWdodCcgfCAnbGVmdCcgfCAndG9wJyB8ICdib3R0b20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgVWlJbnB1dCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG9wdGlvbnModmFsdWU6IERyb3Bkb3duW10pIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG9wdGlvbnMoKTogRHJvcGRvd25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0YXRpY0xhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXA6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0b29sdGlwUG9zaXRpb24odmFsdWU6IFRvb2x0aXBQb3NpdGlvbikge1xyXG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XHJcbiAgfVxyXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKTogVG9vbHRpcFBvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGF1dG9EaXNwbGF5Rmlyc3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdmFsdWU6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogRHJvcGRvd25bXTtcclxuICBwcml2YXRlIF90b29sdGlwUG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9ICd0b3AnO1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEcm9wZG93bik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy53cml0ZVZhbHVlKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZvY3VzSGFuZGxlcihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgYmx1ckhhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=