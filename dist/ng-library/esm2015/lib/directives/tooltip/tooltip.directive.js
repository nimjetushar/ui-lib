/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
export class TooltipDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} resolver
     */
    constructor(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'bottom';
    }
    /**
     * @return {?}
     */
    show() {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(TooltipContent);
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
            /** @type {?} */
            const tooltip = this.content;
            if (!tooltip) {
                return;
            }
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    }
    /**
     * @return {?}
     */
    hide() {
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
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tTooltip]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
TooltipDirective.propDecorators = {
    content: [{ type: Input, args: ['tTooltip',] }],
    tooltipDisabled: [{ type: Input }],
    tooltipAnimation: [{ type: Input }],
    tooltipPlacement: [{ type: Input }],
    show: [{ type: HostListener, args: ['focusin',] }, { type: HostListener, args: ['mouseenter',] }],
    hide: [{ type: HostListener, args: ['focusout',] }, { type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.content;
    /** @type {?} */
    TooltipDirective.prototype.tooltipDisabled;
    /** @type {?} */
    TooltipDirective.prototype.tooltipAnimation;
    /** @type {?} */
    TooltipDirective.prototype.tooltipPlacement;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.tooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxZQUFZLEVBQWdCLGdCQUFnQixFQUN2RCxLQUFLLEVBQUUsd0JBQXdCLEVBQ2xDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtuRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQVV6QixZQUFvQixnQkFBa0MsRUFDMUMsUUFBa0M7UUFEMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQVByQyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMscUJBQWdCLEdBQXdDLFFBQVEsQ0FBQztJQU8xRSxDQUFDOzs7O0lBSUQsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTs7a0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUMzRDthQUFNOztrQkFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDekIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNsRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDOzs7O0lBSUQsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxjQUFjLEVBQUU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7WUE3REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2FBQ3pCOzs7O1lBUDBDLGdCQUFnQjtZQUNoRCx3QkFBd0I7OztzQkFTOUIsS0FBSyxTQUFDLFVBQVU7OEJBQ2hCLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQVNMLFlBQVksU0FBQyxTQUFTLGNBQ3RCLFlBQVksU0FBQyxZQUFZO21CQTRCekIsWUFBWSxTQUFDLFVBQVUsY0FDdkIsWUFBWSxTQUFDLFlBQVk7Ozs7SUExQzFCLG1DQUFvRDs7SUFDcEQsMkNBQWtDOztJQUNsQyw0Q0FBMEM7O0lBQzFDLDRDQUEwRTs7Ozs7SUFFMUUsbUNBQThDOzs7OztJQUM5QyxtQ0FBeUI7Ozs7O0lBRWIsNENBQTBDOzs7OztJQUNsRCxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsXG4gICAgSW5wdXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi90b290bGlwLmNvbnRlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0VG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCd0VG9vbHRpcCcpIGNvbnRlbnQ6IHN0cmluZyB8IFRvb2x0aXBDb250ZW50O1xuICAgIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0b29sdGlwQW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xuXG4gICAgcHJpdmF0ZSB0b29sdGlwOiBDb21wb25lbnRSZWY8VG9vbHRpcENvbnRlbnQ+O1xuICAgIHByaXZhdGUgdmlzaWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcERpc2FibGVkIHx8IHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUb29sdGlwQ29udGVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b29sdGlwID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5ob3N0RWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UuY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5wbGFjZW1lbnQgPSB0aGlzLnRvb2x0aXBQbGFjZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UuYW5pbWF0aW9uID0gdGhpcy50b29sdGlwQW5pbWF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgIGlmICghdG9vbHRpcCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIHRvb2x0aXAuaG9zdEVsZW1lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdG9vbHRpcC5wbGFjZW1lbnQgPSB0aGlzLnRvb2x0aXBQbGFjZW1lbnQ7XG4gICAgICAgICAgICB0b29sdGlwLmFuaW1hdGlvbiA9IHRoaXMudG9vbHRpcEFuaW1hdGlvbjtcbiAgICAgICAgICAgIHRvb2x0aXAuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUb29sdGlwQ29udGVudCkge1xuICAgICAgICAgICAgKHRoaXMuY29udGVudCkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19