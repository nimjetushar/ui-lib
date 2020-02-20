/**
 * @fileoverview added by tsickle
 * Generated from: components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.position = 'top-right';
    }
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 't-toast',
                    template: "<p-toast \r\n    [position]=\"position\"\r\n    [style.z-index]=\"baseZIndex\"\r\n    [key]=\"key\"\r\n></p-toast>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["p-toast .ui-toast .ui-toast-message.ui-toast-message-success{background-color:#82b20a}p-toast .ui-toast .ui-toast-message.ui-toast-message-error{background-color:#d20f55}p-toast .ui-toast .ui-toast-message.ui-toast-message-info{background-color:#00a8e4}p-toast .ui-toast .ui-toast-message.ui-toast-message-warn{background-color:#ffa81e}"]
                }] }
    ];
    ToastComponent.propDecorators = {
        position: [{ type: Input }],
        baseZIndex: [{ type: Input }],
        key: [{ type: Input }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.position;
    /** @type {?} */
    ToastComponent.prototype.baseZIndex;
    /** @type {?} */
    ToastComponent.prototype.key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRTtJQUFBO1FBUVcsYUFBUSxHQUEwRyxXQUFXLENBQUM7SUFHekksQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw4SEFBcUM7b0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OzsyQkFHRSxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7SUFDUixxQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLGNBQWM7OztJQUV6QixrQ0FBdUk7O0lBQ3ZJLG9DQUE0Qjs7SUFDNUIsNkJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAndG9wLWNlbnRlcicgfCAnYm90dG9tLWNlbnRlcicgfCAnY2VudGVyJyA9ICd0b3AtcmlnaHQnO1xuICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xufVxuIl19