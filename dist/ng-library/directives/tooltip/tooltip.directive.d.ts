import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TooltipContent } from './tootlip.content';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TooltipDirective, "[tTooltip]", never, { "content": "tTooltip"; "tooltipDisabled": "tooltipDisabled"; "tooltipAnimation": "tooltipAnimation"; "tooltipPlacement": "tooltipPlacement"; }, {}, never>;
}
