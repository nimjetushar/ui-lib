/**
 * @fileoverview added by tsickle
 * Generated from: directives/tooltip/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'bottom';
    }
    /**
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            /** @type {?} */
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
            /** @type {?} */
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
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
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
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tTooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    TooltipDirective.propDecorators = {
        content: [{ type: Input, args: ['tTooltip',] }],
        tooltipDisabled: [{ type: Input }],
        tooltipAnimation: [{ type: Input }],
        tooltipPlacement: [{ type: Input }],
        show: [{ type: HostListener, args: ['focusin',] }, { type: HostListener, args: ['mouseenter',] }],
        hide: [{ type: HostListener, args: ['focusout',] }, { type: HostListener, args: ['mouseleave',] }]
    };
    return TooltipDirective;
}());
export { TooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFlBQVksRUFBZ0IsZ0JBQWdCLEVBQ3ZELEtBQUssRUFBRSx3QkFBd0IsRUFDbEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBYUksMEJBQW9CLGdCQUFrQyxFQUMxQyxRQUFrQztRQUQxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBUHJDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxxQkFBZ0IsR0FBd0MsUUFBUSxDQUFDO0lBTzFFLENBQUM7Ozs7SUFJRCwrQkFBSTs7O0lBRko7UUFHSSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7O2dCQUM1QixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7WUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDM0Q7YUFBTTs7Z0JBQ0csT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3pCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQzs7OztJQUlELCtCQUFJOzs7SUFGSjtRQUdJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxjQUFjLEVBQUU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOztnQkE3REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO2lCQUN6Qjs7OztnQkFQMEMsZ0JBQWdCO2dCQUNoRCx3QkFBd0I7OzswQkFTOUIsS0FBSyxTQUFDLFVBQVU7a0NBQ2hCLEtBQUs7bUNBQ0wsS0FBSzttQ0FDTCxLQUFLO3VCQVNMLFlBQVksU0FBQyxTQUFTLGNBQ3RCLFlBQVksU0FBQyxZQUFZO3VCQTRCekIsWUFBWSxTQUFDLFVBQVUsY0FDdkIsWUFBWSxTQUFDLFlBQVk7O0lBZTlCLHVCQUFDO0NBQUEsQUE5REQsSUE4REM7U0EzRFksZ0JBQWdCOzs7SUFFekIsbUNBQW9EOztJQUNwRCwyQ0FBa0M7O0lBQ2xDLDRDQUEwQzs7SUFDMUMsNENBQTBFOzs7OztJQUUxRSxtQ0FBOEM7Ozs7O0lBQzlDLG1DQUF5Qjs7Ozs7SUFFYiw0Q0FBMEM7Ozs7O0lBQ2xELG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZixcbiAgICBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL3Rvb3RsaXAuY29udGVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3RUb29sdGlwXSdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoJ3RUb29sdGlwJykgY29udGVudDogc3RyaW5nIHwgVG9vbHRpcENvbnRlbnQ7XG4gICAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG5cbiAgICBwcml2YXRlIHRvb2x0aXA6IENvbXBvbmVudFJlZjxUb29sdGlwQ29udGVudD47XG4gICAgcHJpdmF0ZSB2aXNpYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQgfHwgdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLmhvc3RFbGVtZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLnBsYWNlbWVudCA9IHRoaXMudG9vbHRpcFBsYWNlbWVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5hbmltYXRpb24gPSB0aGlzLnRvb2x0aXBBbmltYXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgaWYgKCF0b29sdGlwKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdG9vbHRpcC5ob3N0RWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0b29sdGlwLnBsYWNlbWVudCA9IHRoaXMudG9vbHRpcFBsYWNlbWVudDtcbiAgICAgICAgICAgIHRvb2x0aXAuYW5pbWF0aW9uID0gdGhpcy50b29sdGlwQW5pbWF0aW9uO1xuICAgICAgICAgICAgdG9vbHRpcC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRvb2x0aXBDb250ZW50KSB7XG4gICAgICAgICAgICAodGhpcy5jb250ZW50KS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=