import { __decorate, __extends, __metadata } from "tslib";
import { Component, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';
var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable: no-output-on-prefix
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this._tooltipPosition = 'top';
        return _this;
    }
    DropdownComponent_1 = DropdownComponent;
    Object.defineProperty(DropdownComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "tooltipPosition", {
        get: function () {
            return this._tooltipPosition;
        },
        set: function (value) {
            this._tooltipPosition = value || 'top';
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    DropdownComponent.prototype.onChangeHandler = function (event) {
        this.writeValue(event.value);
    };
    DropdownComponent.prototype.focusHandler = function (event) {
        this.onFocus.emit(event);
    };
    DropdownComponent.prototype.blurHandler = function (event) {
        this.onBlur.emit(event);
    };
    var DropdownComponent_1;
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
                    useExisting: forwardRef(function () { return DropdownComponent_1; }),
                    multi: true
                }],
            encapsulation: ViewEncapsulation.None,
            styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"]
        })
    ], DropdownComponent);
    return DropdownComponent;
}(UiInput));
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQW9CcEQ7SUFBdUMscUNBQU87SUFBOUM7UUFBQSxxRUFxREM7UUF6QkMsc0NBQXNDO1FBQzVCLGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLakQsc0JBQWdCLEdBQW9CLEtBQUssQ0FBQzs7SUFrQnBELENBQUM7MEJBckRZLGlCQUFpQjtJQUc1QixzQkFBSSxzQ0FBTzthQUdYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFMRCxVQUFZLEtBQWlCO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBYUQsc0JBQUksOENBQWU7YUFHbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBTEQsVUFBb0IsS0FBc0I7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFpQkQsc0NBQVUsR0FBVixVQUFXLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztJQWpERDtRQURDLEtBQUssRUFBRTs7O29EQUdQO0lBS1E7UUFBUixLQUFLLEVBQUU7O3VEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs7dURBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOztxREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7OzBEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7MERBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzttREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOztzREFBYztJQUV0QjtRQURDLEtBQUssRUFBRTs7OzREQUdQO0lBSVE7UUFBUixLQUFLLEVBQUU7OytEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTs7MkRBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzt3REFBb0I7SUFHbEI7UUFBVCxNQUFNLEVBQUU7a0NBQVUsWUFBWTtzREFBMkI7SUFDaEQ7UUFBVCxNQUFNLEVBQUU7a0NBQVMsWUFBWTtxREFBMkI7SUE5QjlDLGlCQUFpQjtRQVg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw4aEJBQXdDO1lBRXhDLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFpQixFQUFqQixDQUFpQixDQUFDO29CQUNoRCxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDO1lBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FxRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJERCxDQUF1QyxPQUFPLEdBcUQ3QztTQXJEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVWlJbnB1dCB9IGZyb20gJy4uLy4uL2NsYXNzL3VpSW5wdXQuY2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxudHlwZSBUb29sdGlwUG9zaXRpb24gPSAncmlnaHQnIHwgJ2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBVaUlucHV0IHtcblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRHJvcGRvd25bXSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBEcm9wZG93bltdIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBzdGF0aWNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBQb3NpdGlvbih2YWx1ZTogVG9vbHRpcFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fdG9vbHRpcFBvc2l0aW9uID0gdmFsdWUgfHwgJ3RvcCc7XG4gIH1cbiAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpOiBUb29sdGlwUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwUG9zaXRpb247XG4gIH1cbiAgQElucHV0KCkgYXV0b0Rpc3BsYXlGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHZhbHVlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogRHJvcGRvd25bXTtcbiAgcHJpdmF0ZSBfdG9vbHRpcFBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEcm9wZG93bik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIGZvY3VzSGFuZGxlcihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGJsdXJIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==