/**
 * @fileoverview added by tsickle
 * Generated from: lib/class/uiInput.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { noop } from 'tutility';
// tslint:disable: no-empty
var 
// tslint:disable: no-empty
UiInput = /** @class */ (function () {
    function UiInput() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    UiInput.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    UiInput.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { };
    return UiInput;
}());
// tslint:disable: no-empty
export { UiInput };
if (false) {
    /** @type {?} */
    UiInput.prototype.onChange;
    /** @type {?} */
    UiInput.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlJbnB1dC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzcy91aUlucHV0LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFJaEM7OztJQUFBO1FBRUksYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQVEsSUFBSSxDQUFDO0lBWTFCLENBQUM7Ozs7O0lBWEcsNEJBQVU7Ozs7SUFBVixVQUFXLEdBQVEsSUFBVSxDQUFDOzs7OztJQUU5QixrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELG1DQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsa0NBQWdCOzs7O0lBQWhCLFVBQWtCLFVBQW1CLElBQVUsQ0FBQztJQUNwRCxjQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7O0lBYkcsMkJBQXFCOztJQUNyQiw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ3R1dGlsaXR5JztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOiBuby1lbXB0eVxyXG5cclxuZXhwb3J0IGNsYXNzIFVpSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgb25DaGFuZ2U6IGFueSA9IG5vb3A7XHJcbiAgICBvblRvdWNoZWQ6IGFueSA9IG5vb3A7XHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB9XHJcbn1cclxuIl19