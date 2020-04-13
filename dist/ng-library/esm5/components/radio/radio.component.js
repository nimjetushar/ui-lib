import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    Object.defineProperty(RadioComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.checked = value === this.value ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.handleOnChange = function (event) {
        var checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        var value = checked ? this.value : false;
        this.modelChange.emit(value);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RadioComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RadioComponent.prototype, "model", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], RadioComponent.prototype, "modelChange", void 0);
    RadioComponent = __decorate([
        Component({
            selector: 't-radio',
            template: "<label class=\"radio\" [class.disabled]=\"disabled\" [ngClass]=\"{'active': checked}\">\n  &nbsp;{{label}}\n  <input type=\"radio\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\" (change)=\"handleOnChange($event)\"\n    [(ngModel)]=\"model\" [value]=\"value\">\n</label>",
            styles: [".hide{display:none!important}.disable{pointer-events:none;opacity:.4}.z-depth-1{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.inline-block{display:inline-block;vertical-align:top}.radio{display:inline;position:relative;padding-left:1.25rem;cursor:pointer;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio input{position:relative;opacity:0}.radio:before{content:'';width:1.125rem;height:1.125rem;border-radius:50%;border:1px solid #0069b1;display:inline-block;position:absolute;left:0;top:2px}.radio.disabled{opacity:.5;cursor:default;pointer-events:none}.radio.active:before{content:'';border:5px solid #0069b1}"]
        })
    ], RadioComponent);
    return RadioComponent;
}());
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkU7SUFBQTtRQUtXLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBVTlCLGdCQUFXLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBWS9GLENBQUM7SUFwQkMsc0JBQUksaUNBQUs7YUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBTkQsVUFBVSxLQUF1QjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQVdELHVDQUFjLEdBQWQsVUFBZSxLQUFVO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JFLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF4QlE7UUFBUixLQUFLLEVBQUU7O2lEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O29EQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs7Z0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7aURBQWdDO0lBRXhDO1FBREMsS0FBSyxFQUFFOzs7K0NBSVA7SUFLUztRQUFULE1BQU0sRUFBRTtrQ0FBYyxZQUFZO3VEQUEwRDtJQWZsRixjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLHlTQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IG1vZGVsKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBnZXQgbW9kZWwoKTogYm9vbGVhbiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICB9XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCBzdHJpbmc+KCk7XG5cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIF9tb2RlbDogYm9vbGVhbiB8IHN0cmluZztcblxuICBoYW5kbGVPbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuY2hlY2tlZCA9IChjaGVja2VkICYmIHRoaXMudmFsdWUgPT09IHRoaXMubW9kZWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHZhbHVlID0gY2hlY2tlZCA/IHRoaXMudmFsdWUgOiBmYWxzZTtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=