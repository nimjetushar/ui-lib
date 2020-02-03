/**
 * @fileoverview added by tsickle
 * Generated from: lib/class/uiInput.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { noop } from '../utilities';
export class UiInput {
    constructor() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { }
}
if (false) {
    /** @type {?} */
    UiInput.prototype.onChange;
    /** @type {?} */
    UiInput.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlJbnB1dC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzcy91aUlucHV0LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVwQyxNQUFNLE9BQU8sT0FBTztJQUFwQjtRQUVJLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQztJQVkxQixDQUFDOzs7OztJQVhHLFVBQVUsQ0FBQyxHQUFRLElBQVUsQ0FBQzs7Ozs7SUFFOUIsZ0JBQWdCLENBQUMsRUFBTztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBRSxVQUFtQixJQUFVLENBQUM7Q0FDbkQ7OztJQWJHLDJCQUFxQjs7SUFDckIsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgb25DaGFuZ2U6IGFueSA9IG5vb3A7XHJcbiAgICBvblRvdWNoZWQ6IGFueSA9IG5vb3A7XHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB9XHJcbn1cclxuIl19