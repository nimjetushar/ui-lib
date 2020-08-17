import { __extends } from "tslib";
import { Component, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';
import * as i0 from "@angular/core";
import * as i1 from "primeng/dropdown";
import * as i2 from "@angular/forms";
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
    DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return ɵDropdownComponent_BaseFactory(t || DropdownComponent); };
    DropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["t-dropdown"]], inputs: { options: "options", readonly: "readonly", disabled: "disabled", filter: "filter", placeholder: "placeholder", staticLabel: "staticLabel", name: "name", tooltip: "tooltip", tooltipPosition: "tooltipPosition", autoDisplayFirst: "autoDisplayFirst", scrollHeight: "scrollHeight", autofocus: "autofocus" }, outputs: { onFocus: "onFocus", onBlur: "onBlur" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return DropdownComponent; }),
                    multi: true
                }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 12, consts: [[3, "options", "ngModel", "placeholder", "filter", "readonly", "disabled", "name", "tooltip", "tooltipPosition", "autoDisplayFirst", "scrollHeight", "autofocus", "onChange", "onFocus", "onBlur"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p-dropdown", 0);
            i0.ɵɵlistener("onChange", function DropdownComponent_Template_p_dropdown_onChange_0_listener($event) { return ctx.onChangeHandler($event); })("onFocus", function DropdownComponent_Template_p_dropdown_onFocus_0_listener($event) { return ctx.focusHandler($event); })("onBlur", function DropdownComponent_Template_p_dropdown_onBlur_0_listener($event) { return ctx.blurHandler($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("options", ctx.options)("ngModel", ctx.value)("placeholder", ctx.placeholder)("filter", ctx.filter)("readonly", ctx.readonly)("disabled", ctx.disabled)("name", ctx.name)("tooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("autoDisplayFirst", ctx.autoDisplayFirst)("scrollHeight", ctx.scrollHeight)("autofocus", ctx.autofocus);
        } }, directives: [i1.Dropdown, i2.NgControlStatus, i2.NgModel], styles: ["p-dropdown .ui-dropdown .ui-state-focus{border:1px solid #a6a6a6}p-dropdown .ui-dropdown .ui-inputtext:enabled:focus{border-color:#a6a6a6}p-dropdown .ui-dropdown .ui-dropdown-filter-icon{color:#000}p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight,p-dropdown .ui-dropdown .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight{background-color:#3d4851}"], encapsulation: 2 });
    return DropdownComponent;
}(UiInput));
export { DropdownComponent };
var ɵDropdownComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DropdownComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{
                selector: 't-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: ['./dropdown.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DropdownComponent; }),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { options: [{
            type: Input
        }], readonly: [{
            type: Input
        }], disabled: [{
            type: Input
        }], filter: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], staticLabel: [{
            type: Input
        }], name: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], autoDisplayFirst: [{
            type: Input
        }], scrollHeight: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFTcEQ7SUFXdUMscUNBQU87SUFYOUM7UUFBQSxxRUFnRUM7UUF6QkMsc0NBQXNDO1FBQzVCLGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLakQsc0JBQWdCLEdBQW9CLEtBQUssQ0FBQzs7S0FrQm5EO0lBbkRDLHNCQUNJLHNDQUFPO2FBR1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQU5ELFVBQ1ksS0FBaUI7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFZRCxzQkFDSSw4Q0FBZTthQUduQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFORCxVQUNvQixLQUFzQjtZQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQWlCRCxzQ0FBVSxHQUFWLFVBQVcsS0FBZTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxLQUFpQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Z0hBcERVLGlCQUFpQjswREFBakIsaUJBQWlCLDJhQVBqQixDQUFDO29CQUNWLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO29CQUNoRCxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDO1lDbkJKLHFDQWlCYTtZQUhULDhHQUFZLDJCQUF1QixJQUFDLCtGQUN6Qix3QkFBb0IsSUFESyw2RkFFMUIsdUJBQW1CLElBRk87WUFHeEMsaUJBQWE7O1lBaEJULHFDQUFtQixzQkFBQSxnQ0FBQSxzQkFBQSwwQkFBQSwwQkFBQSxrQkFBQSx3QkFBQSx3Q0FBQSwwQ0FBQSxrQ0FBQSw0QkFBQTs7NEJERHZCO0NBMkVDLEFBaEVELENBV3VDLE9BQU8sR0FxRDdDO1NBckRZLGlCQUFpQjs4REFBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FYN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7Z0JBQ0YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUdFLEtBQUs7O2tCQVFMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFVpSW5wdXQgfSBmcm9tICcuLi8uLi9jbGFzcy91aUlucHV0LmNsYXNzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd24ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxudHlwZSBUb29sdGlwUG9zaXRpb24gPSAncmlnaHQnIHwgJ2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndC1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVpSW5wdXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcHRpb25zKHZhbHVlOiBEcm9wZG93bltdKSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBvcHRpb25zKCk6IERyb3Bkb3duW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBzdGF0aWNMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBUb29sdGlwUG9zaXRpb24pIHtcclxuICAgIHRoaXMuX3Rvb2x0aXBQb3NpdGlvbiA9IHZhbHVlIHx8ICd0b3AnO1xyXG4gIH1cclxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCk6IFRvb2x0aXBQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFBvc2l0aW9uO1xyXG4gIH1cclxuICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHZhbHVlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM6IERyb3Bkb3duW107XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcFBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAndG9wJztcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRHJvcGRvd24pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMud3JpdGVWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPHAtZHJvcGRvd24gXG4gICAgW29wdGlvbnNdPVwib3B0aW9uc1wiIFxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCIgXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgIFt0b29sdGlwXT1cInRvb2x0aXBcIlxuICAgIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCJcbiAgICBbYXV0b0Rpc3BsYXlGaXJzdF09XCJhdXRvRGlzcGxheUZpcnN0XCJcbiAgICBbc2Nyb2xsSGVpZ2h0XT1cInNjcm9sbEhlaWdodFwiXG4gICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuXG4gICAgKG9uQ2hhbmdlKT1cIm9uQ2hhbmdlSGFuZGxlcigkZXZlbnQpXCJcbiAgICAob25Gb2N1cyk9XCJmb2N1c0hhbmRsZXIoJGV2ZW50KVwiXG4gICAgKG9uQmx1cik9XCJibHVySGFuZGxlcigkZXZlbnQpXCI+XG48L3AtZHJvcGRvd24+XG4iXX0=