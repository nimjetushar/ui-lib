import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let ToastComponent = class ToastComponent {
    constructor() {
        this.position = 'top-right';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ToastComponent.prototype, "baseZIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastComponent.prototype, "key", void 0);
ToastComponent = __decorate([
    Component({
        selector: 't-toast',
        template: "<p-toast \r\n    [position]=\"position\"\r\n    [style.z-index]=\"baseZIndex\"\r\n    [key]=\"key\"\r\n></p-toast>",
        encapsulation: ViewEncapsulation.None,
        styles: ["p-toast .ui-toast .ui-toast-message.ui-toast-message-success{background-color:#82b20a}p-toast .ui-toast .ui-toast-message.ui-toast-message-error{background-color:#d20f55}p-toast .ui-toast .ui-toast-message.ui-toast-message-info{background-color:#00a8e4}p-toast .ui-toast .ui-toast-message.ui-toast-message-warn{background-color:#ffa81e}"]
    })
], ToastComponent);
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFBM0I7UUFFVyxhQUFRLEdBQTBHLFdBQVcsQ0FBQztJQUd6SSxDQUFDO0NBQUEsQ0FBQTtBQUhVO0lBQVIsS0FBSyxFQUFFOztnREFBK0g7QUFDOUg7SUFBUixLQUFLLEVBQUU7O2tEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7MkNBQWE7QUFKVixjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLDhIQUFxQztRQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLGNBQWMsQ0FLMUI7U0FMWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAndG9wLWNlbnRlcicgfCAnYm90dG9tLWNlbnRlcicgfCAnY2VudGVyJyA9ICd0b3AtcmlnaHQnO1xuICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xufVxuIl19