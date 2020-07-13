import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.position = 'top-right';
    }
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
    return ToastComponent;
}());
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFO0lBQUE7UUFFVyxhQUFRLEdBQTBHLFdBQVcsQ0FBQztJQUd6SSxDQUFDO0lBSFU7UUFBUixLQUFLLEVBQUU7O29EQUErSDtJQUM5SDtRQUFSLEtBQUssRUFBRTs7c0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzsrQ0FBYTtJQUpWLGNBQWM7UUFOMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsOEhBQXFDO1lBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csY0FBYyxDQUsxQjtJQUFELHFCQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3QtdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcC1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ3RvcC1jZW50ZXInIHwgJ2JvdHRvbS1jZW50ZXInIHwgJ2NlbnRlcicgPSAndG9wLXJpZ2h0JztcbiAgQElucHV0KCkgYmFzZVpJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBrZXk6IHN0cmluZztcbn1cbiJdfQ==