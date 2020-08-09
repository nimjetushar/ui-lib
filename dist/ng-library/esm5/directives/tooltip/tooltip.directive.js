import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, ComponentRef, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'bottom';
    }
    TooltipDirective.prototype.show = function () {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            var factory = this.resolver.resolveComponentFactory(TooltipContent);
            if (!this.visible) {
                return;
            }
            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = this.content;
            this.tooltip.instance.placement = this.tooltipPlacement;
            this.tooltip.instance.animation = this.tooltipAnimation;
        }
        else {
            var tooltip = this.content;
            if (!tooltip) {
                return;
            }
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    };
    TooltipDirective.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.tooltip) {
            this.tooltip.destroy();
        }
        if (this.content instanceof TooltipContent) {
            (this.content).hide();
        }
    };
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        Input('tTooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipAnimation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipPlacement", void 0);
    __decorate([
        HostListener('focusin'),
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "show", null);
    __decorate([
        HostListener('focusout'),
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "hide", null);
    TooltipDirective = __decorate([
        Directive({
            selector: '[tTooltip]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef,
            ComponentFactoryResolver])
    ], TooltipDirective);
    return TooltipDirective;
}());
export { TooltipDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsS0FBSyxFQUFFLHdCQUF3QixFQUNsQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbkQ7SUFVSSwwQkFDWSxnQkFBa0MsRUFDbEMsUUFBa0M7UUFEbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQVJyQyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMscUJBQWdCLEdBQXdDLFFBQVEsQ0FBQztJQVF0RSxDQUFDO0lBSUwsK0JBQUksR0FBSjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzNEO2FBQU07WUFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3pCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUlELCtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksY0FBYyxFQUFFO1lBQ3hDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQzs7Z0JBaEQ2QixnQkFBZ0I7Z0JBQ3hCLHdCQUF3Qjs7SUFWM0I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7cURBQWtDO0lBQzNDO1FBQVIsS0FBSyxFQUFFOzs2REFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7OzhEQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTs7OERBQWtFO0lBWTFFO1FBRkMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN2QixZQUFZLENBQUMsWUFBWSxDQUFDOzs7O2dEQTBCMUI7SUFJRDtRQUZDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDeEIsWUFBWSxDQUFDLFlBQVksQ0FBQzs7OztnREFjMUI7SUEzRFEsZ0JBQWdCO1FBSDVCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1NBQ3pCLENBQUM7eUNBWWdDLGdCQUFnQjtZQUN4Qix3QkFBd0I7T0FackMsZ0JBQWdCLENBNEQ1QjtJQUFELHVCQUFDO0NBQUEsQUE1REQsSUE0REM7U0E1RFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLFxuICAgIElucHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29udGVudCB9IGZyb20gJy4vdG9vdGxpcC5jb250ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdFRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgndFRvb2x0aXAnKSBjb250ZW50OiBzdHJpbmcgfCBUb29sdGlwQ29udGVudDtcbiAgICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcblxuICAgIHByaXZhdGUgdG9vbHRpcDogQ29tcG9uZW50UmVmPFRvb2x0aXBDb250ZW50PjtcbiAgICBwcml2YXRlIHZpc2libGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICApIHsgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcERpc2FibGVkIHx8IHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUb29sdGlwQ29udGVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b29sdGlwID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5ob3N0RWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UuY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5wbGFjZW1lbnQgPSB0aGlzLnRvb2x0aXBQbGFjZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UuYW5pbWF0aW9uID0gdGhpcy50b29sdGlwQW5pbWF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgIGlmICghdG9vbHRpcCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRvb2x0aXAuaG9zdEVsZW1lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdG9vbHRpcC5wbGFjZW1lbnQgPSB0aGlzLnRvb2x0aXBQbGFjZW1lbnQ7XG4gICAgICAgICAgICB0b29sdGlwLmFuaW1hdGlvbiA9IHRoaXMudG9vbHRpcEFuaW1hdGlvbjtcbiAgICAgICAgICAgIHRvb2x0aXAuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUb29sdGlwQ29udGVudCkge1xuICAgICAgICAgICAgKHRoaXMuY29udGVudCkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19