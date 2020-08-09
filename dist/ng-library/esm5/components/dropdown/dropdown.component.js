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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQW9CcEQ7SUFBdUMscUNBQU87SUFBOUM7UUFBQSxxRUFxREM7UUF6QkMsc0NBQXNDO1FBQzVCLGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLakQsc0JBQWdCLEdBQW9CLEtBQUssQ0FBQzs7SUFrQnBELENBQUM7MEJBckRZLGlCQUFpQjtJQUc1QixzQkFBSSxzQ0FBTzthQUdYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFMRCxVQUFZLEtBQWlCO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBYUQsc0JBQUksOENBQWU7YUFHbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBTEQsVUFBb0IsS0FBc0I7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFpQkQsc0NBQVUsR0FBVixVQUFXLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztJQWpERDtRQURDLEtBQUssRUFBRTs7O29EQUdQO0lBS1E7UUFBUixLQUFLLEVBQUU7O3VEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs7dURBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOztxREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7OzBEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7MERBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzttREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOztzREFBYztJQUV0QjtRQURDLEtBQUssRUFBRTs7OzREQUdQO0lBSVE7UUFBUixLQUFLLEVBQUU7OytEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTs7MkRBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzt3REFBb0I7SUFHbEI7UUFBVCxNQUFNLEVBQUU7a0NBQVUsWUFBWTtzREFBMkI7SUFDaEQ7UUFBVCxNQUFNLEVBQUU7a0NBQVMsWUFBWTtxREFBMkI7SUE5QjlDLGlCQUFpQjtRQVg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw4aEJBQXdDO1lBRXhDLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFpQixFQUFqQixDQUFpQixDQUFDO29CQUNoRCxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDO1lBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FxRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJERCxDQUF1QyxPQUFPLEdBcUQ3QztTQXJEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFVpSW5wdXQgfSBmcm9tICcuLi8uLi9jbGFzcy91aUlucHV0LmNsYXNzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd24ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxudHlwZSBUb29sdGlwUG9zaXRpb24gPSAncmlnaHQnIHwgJ2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndC1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVpSW5wdXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcHRpb25zKHZhbHVlOiBEcm9wZG93bltdKSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBvcHRpb25zKCk6IERyb3Bkb3duW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBzdGF0aWNMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBUb29sdGlwUG9zaXRpb24pIHtcclxuICAgIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbiA9IHZhbHVlIHx8ICd0b3AnO1xyXG4gIH1cclxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFBvc2l0aW9uO1xyXG4gIH1cclxuICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHZhbHVlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM6IERyb3Bkb3duW107XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcFBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRHJvcGRvd24pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMud3JpdGVWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19