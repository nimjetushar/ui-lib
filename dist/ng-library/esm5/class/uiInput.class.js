var noop = function () { };
var UiInput = /** @class */ (function () {
    function UiInput() {
        this.onChange = noop;
        this.onTouched = noop;
    }
    UiInput.prototype.writeValue = function (_obj) { };
    UiInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UiInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    UiInput.prototype.setDisabledState = function (_isDisabled) { };
    return UiInput;
}());
export { UiInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlJbnB1dC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmb3VyanMvbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImNsYXNzL3VpSW5wdXQuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsSUFBTSxJQUFJLEdBQUcsY0FBUSxDQUFDLENBQUM7QUFFdkI7SUFBQTtRQUVJLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsY0FBUyxHQUFRLElBQUksQ0FBQztJQVkxQixDQUFDO0lBWEcsNEJBQVUsR0FBVixVQUFXLElBQVMsSUFBVSxDQUFDO0lBRS9CLGtDQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQ0FBaUIsR0FBakIsVUFBa0IsRUFBTztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCLFVBQWtCLFdBQW9CLElBQVUsQ0FBQztJQUNyRCxjQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tZW1wdHlcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgb25DaGFuZ2U6IGFueSA9IG5vb3A7XHJcbiAgICBvblRvdWNoZWQ6IGFueSA9IG5vb3A7XHJcbiAgICB3cml0ZVZhbHVlKF9vYmo6IGFueSk6IHZvaWQgeyB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGU/KF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7IH1cclxufVxyXG4iXX0=