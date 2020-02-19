import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
export declare class TooltipDirective {
    private viewContainerRef;
    private resolver;
    content: string | TooltipContent;
    tooltipDisabled: boolean;
    tooltipAnimation: boolean;
    tooltipPlacement: 'top' | 'bottom' | 'left' | 'right';
    private tooltip;
    private visible;
    constructor(viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    show(): void;
    hide(): void;
}
