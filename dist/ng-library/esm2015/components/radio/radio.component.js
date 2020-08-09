import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let RadioComponent = class RadioComponent {
    constructor() {
        this.value = true;
        this.modelChange = new EventEmitter();
    }
    set model(value) {
        this._model = value;
        this.checked = value === this.value ? true : false;
    }
    get model() {
        return this._model;
    }
    handleOnChange(event) {
        const checked = event.target.checked;
        this.checked = (checked && this.value === this.model) ? true : false;
        const value = checked ? this.value : false;
        this.modelChange.emit(value);
    }
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
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUEzQjtRQUtXLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBVTlCLGdCQUFXLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBWS9GLENBQUM7SUFwQkMsSUFBSSxLQUFLLENBQUMsS0FBdUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBUUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7QUF6QlU7SUFBUixLQUFLLEVBQUU7OzZDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7O2dEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7NENBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7NkNBQWdDO0FBRXhDO0lBREMsS0FBSyxFQUFFOzs7MkNBSVA7QUFLUztJQUFULE1BQU0sRUFBRTs4QkFBYyxZQUFZO21EQUEwRDtBQWZsRixjQUFjO0lBTDFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLHlTQUFxQzs7S0FFdEMsQ0FBQztHQUNXLGNBQWMsQ0EyQjFCO1NBM0JZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZXQgbW9kZWwodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGdldCBtb2RlbCgpOiBib29sZWFuIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gIH1cblxuICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbiB8IHN0cmluZz4oKTtcblxuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX21vZGVsOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIGhhbmRsZU9uQ2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5jaGVja2VkID0gKGNoZWNrZWQgJiYgdGhpcy52YWx1ZSA9PT0gdGhpcy5tb2RlbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdmFsdWUgPSBjaGVja2VkID8gdGhpcy52YWx1ZSA6IGZhbHNlO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==