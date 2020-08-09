import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, ComponentRef, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
let TooltipDirective = class TooltipDirective {
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
};
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
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
export { TooltipDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZm91cmpzL25nLWxpYnJhcnkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsS0FBSyxFQUFFLHdCQUF3QixFQUNsQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFVekIsWUFDWSxnQkFBa0MsRUFDbEMsUUFBa0M7UUFEbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQVJyQyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMscUJBQWdCLEdBQXdDLFFBQVEsQ0FBQztJQVF0RSxDQUFDO0lBSUwsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzNEO2FBQU07WUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3pCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUlELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksY0FBYyxFQUFFO1lBQ3hDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBakRpQyxnQkFBZ0I7WUFDeEIsd0JBQXdCOztBQVYzQjtJQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztpREFBa0M7QUFDM0M7SUFBUixLQUFLLEVBQUU7O3lEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs7MERBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFOzswREFBa0U7QUFZMUU7SUFGQyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLFlBQVksQ0FBQyxZQUFZLENBQUM7Ozs7NENBMEIxQjtBQUlEO0lBRkMsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN4QixZQUFZLENBQUMsWUFBWSxDQUFDOzs7OzRDQWMxQjtBQTNEUSxnQkFBZ0I7SUFINUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7S0FDekIsQ0FBQztxQ0FZZ0MsZ0JBQWdCO1FBQ3hCLHdCQUF3QjtHQVpyQyxnQkFBZ0IsQ0E0RDVCO1NBNURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZixcbiAgICBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL3Rvb3RsaXAuY29udGVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3RUb29sdGlwXSdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoJ3RUb29sdGlwJykgY29udGVudDogc3RyaW5nIHwgVG9vbHRpcENvbnRlbnQ7XG4gICAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG5cbiAgICBwcml2YXRlIHRvb2x0aXA6IENvbXBvbmVudFJlZjxUb29sdGlwQ29udGVudD47XG4gICAgcHJpdmF0ZSB2aXNpYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzaW4nKVxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBEaXNhYmxlZCB8fCB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVG9vbHRpcENvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UuaG9zdEVsZW1lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuaW5zdGFuY2UucGxhY2VtZW50ID0gdGhpcy50b29sdGlwUGxhY2VtZW50O1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmluc3RhbmNlLmFuaW1hdGlvbiA9IHRoaXMudG9vbHRpcEFuaW1hdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoIXRvb2x0aXApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICB0b29sdGlwLmhvc3RFbGVtZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRvb2x0aXAucGxhY2VtZW50ID0gdGhpcy50b29sdGlwUGxhY2VtZW50O1xuICAgICAgICAgICAgdG9vbHRpcC5hbmltYXRpb24gPSB0aGlzLnRvb2x0aXBBbmltYXRpb247XG4gICAgICAgICAgICB0b29sdGlwLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVG9vbHRpcENvbnRlbnQpIHtcbiAgICAgICAgICAgICh0aGlzLmNvbnRlbnQpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==