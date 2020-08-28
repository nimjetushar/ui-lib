import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng/toast";
export class ToastComponent {
    constructor() {
        this.position = 'top-right';
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(); };
ToastComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["t-toast"]], inputs: { position: "position", baseZIndex: "baseZIndex", key: "key" }, decls: 1, vars: 4, consts: [[3, "position", "key"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "p-toast", 0);
    } if (rf & 2) {
        i0.ɵɵstyleProp("z-index", ctx.baseZIndex);
        i0.ɵɵproperty("position", ctx.position)("key", ctx.key);
    } }, directives: [i1.Toast], styles: ["p-toast .ui-toast .ui-toast-message.ui-toast-message-success{background-color:#82b20a}p-toast .ui-toast .ui-toast-message.ui-toast-message-error{background-color:#b00020}p-toast .ui-toast .ui-toast-message.ui-toast-message-info{background-color:#00a8e4}p-toast .ui-toast .ui-toast-message.ui-toast-message-warn{background-color:#ffa81e}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 't-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { position: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], key: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRcEUsTUFBTSxPQUFPLGNBQWM7SUFOM0I7UUFRVyxhQUFRLEdBQTBHLFdBQVcsQ0FBQztLQUd4STs7NEVBTFksY0FBYzttREFBZCxjQUFjO1FDUjNCLDZCQUlXOztRQUZQLHlDQUE0QjtRQUQ1Qix1Q0FBcUIsZ0JBQUE7O2tERE9aLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0LXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICd0b3AtY2VudGVyJyB8ICdib3R0b20tY2VudGVyJyB8ICdjZW50ZXInID0gJ3RvcC1yaWdodCc7XG4gIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG59XG4iLCI8cC10b2FzdCBcclxuICAgIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiXHJcbiAgICBbc3R5bGUuei1pbmRleF09XCJiYXNlWkluZGV4XCJcclxuICAgIFtrZXldPVwia2V5XCJcclxuPjwvcC10b2FzdD4iXX0=