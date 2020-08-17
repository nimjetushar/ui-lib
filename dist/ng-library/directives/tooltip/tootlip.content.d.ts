import { AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
declare class TooltipContentComponent implements AfterViewInit {
    private element;
    private cdr;
    animation: boolean;
    content: string;
    hostElement: HTMLElement;
    placement: 'top' | 'bottom' | 'left' | 'right';
    isFade: boolean;
    isIn: boolean;
    left: number;
    top: number;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    show(): void;
    hide(): void;
    private positionElements;
    private position;
    private offset;
    private getStyle;
    private isStaticPositioned;
    private parentOffsetEl;
    static ɵfac: i0.ɵɵFactoryDef<TooltipContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TooltipContentComponent, "tooltip-content", never, { "animation": "animation"; "content": "content"; "hostElement": "hostElement"; "placement": "placement"; }, {}, never, ["*"]>;
}
export { TooltipContentComponent as TooltipContent };
