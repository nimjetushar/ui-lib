import {
    Directive, HostListener, ComponentRef, ViewContainerRef,
    Input, ComponentFactoryResolver
} from '@angular/core';
import { TooltipContent } from './tootlip.content';

@Directive({
    selector: '[tTooltip]'
})
export class TooltipDirective {

    @Input('tTooltip') content: string | TooltipContent;
    @Input() tooltipDisabled: boolean;
    @Input() tooltipAnimation: boolean = true;
    @Input() tooltipPlacement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

    private tooltip: ComponentRef<TooltipContent>;
    private visible: boolean;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private resolver: ComponentFactoryResolver
    ) { }

    @HostListener('focusin')
    @HostListener('mouseenter')
    show(): void {
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
        } else {
            const tooltip = this.content;
            if (!tooltip) { return; }
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    hide(): void {
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
