import { Directive, HostListener, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
import * as i0 from "@angular/core";
export class TooltipDirective {
    constructor(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'bottom';
    }
    show() {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
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
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
TooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() { return ctx.show(); })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("focusout", function TooltipDirective_focusout_HostBindingHandler() { return ctx.hide(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.hide(); });
    } }, inputs: { content: ["tTooltip", "content"], tooltipDisabled: "tooltipDisabled", tooltipAnimation: "tooltipAnimation", tooltipPlacement: "tooltipPlacement" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tTooltip]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }]; }, { content: [{
            type: Input,
            args: ['tTooltip']
        }], tooltipDisabled: [{
            type: Input
        }], tooltipAnimation: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], show: [{
            type: HostListener,
            args: ['focusin']
        }, {
            type: HostListener,
            args: ['mouseenter']
        }], hide: [{
            type: HostListener,
            args: ['focusout']
        }, {
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxZQUFZLEVBQWdCLGdCQUFnQixFQUN2RCxLQUFLLEVBQUUsd0JBQXdCLEVBQ2xDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLGdCQUFnQjtJQVV6QixZQUNZLGdCQUFrQyxFQUNsQyxRQUFrQztRQURsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBUnJDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxxQkFBZ0IsR0FBd0MsUUFBUSxDQUFDO0lBUXRFLENBQUM7SUFJTCxJQUFJO1FBQ0EsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDM0Q7YUFBTTtZQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDekIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUNsRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBSUQsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxjQUFjLEVBQUU7WUFDeEMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOztnRkEzRFEsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7aUdBQWhCLFVBQU0sc0ZBQU4sVUFBTSxrRkFBTixVQUFNLHNGQUFOLFVBQU07O2tEQUFOLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7YUFDekI7O2tCQUdJLEtBQUs7bUJBQUMsVUFBVTs7a0JBQ2hCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQVVMLFlBQVk7bUJBQUMsU0FBUzs7a0JBQ3RCLFlBQVk7bUJBQUMsWUFBWTs7a0JBNEJ6QixZQUFZO21CQUFDLFVBQVU7O2tCQUN2QixZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBDb21wb25lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsXG4gICAgSW5wdXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi90b290bGlwLmNvbnRlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0VG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUge1xuXG4gICAgQElucHV0KCd0VG9vbHRpcCcpIGNvbnRlbnQ6IHN0cmluZyB8IFRvb2x0aXBDb250ZW50O1xuICAgIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0b29sdGlwQW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xuXG4gICAgcHJpdmF0ZSB0b29sdGlwOiBDb21wb25lbnRSZWY8VG9vbHRpcENvbnRlbnQ+O1xuICAgIHByaXZhdGUgdmlzaWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b29sdGlwRGlzYWJsZWQgfHwgdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLmhvc3RFbGVtZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLnBsYWNlbWVudCA9IHRoaXMudG9vbHRpcFBsYWNlbWVudDtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5pbnN0YW5jZS5hbmltYXRpb24gPSB0aGlzLnRvb2x0aXBBbmltYXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgaWYgKCF0b29sdGlwKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdG9vbHRpcC5ob3N0RWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0b29sdGlwLnBsYWNlbWVudCA9IHRoaXMudG9vbHRpcFBsYWNlbWVudDtcbiAgICAgICAgICAgIHRvb2x0aXAuYW5pbWF0aW9uID0gdGhpcy50b29sdGlwQW5pbWF0aW9uO1xuICAgICAgICAgICAgdG9vbHRpcC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRvb2x0aXBDb250ZW50KSB7XG4gICAgICAgICAgICAodGhpcy5jb250ZW50KS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=