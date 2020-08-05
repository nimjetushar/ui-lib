var noop = function () { };
var UiInput = /** @class */ (function () {
    function UiInput() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    UiInput.prototype.writeValue = function (obj) { };
    UiInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiInput.prototype.setDisabledState = function (isDisabled) { };
    return UiInput;
}());
export { UiInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlJbnB1dC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNsYXNzL3VpSW5wdXQuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsSUFBTSxJQUFJLEdBQUcsY0FBUSxDQUFDLENBQUM7QUFFdkI7SUFBQTtRQUVJLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQztJQVkxQixDQUFDO0lBWEcsNEJBQVUsR0FBVixVQUFXLEdBQVEsSUFBVSxDQUFDO0lBRTlCLGtDQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQ0FBaUIsR0FBakIsVUFBa0IsRUFBTztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCLFVBQWtCLFVBQW1CLElBQVUsQ0FBQztJQUNwRCxjQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tZW1wdHlcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgb25DaGFuZ2U6IGFueSA9IG5vb3A7XHJcbiAgICBvblRvdWNoZWQ6IGFueSA9IG5vb3A7XHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB9XHJcbn1cclxuIl19