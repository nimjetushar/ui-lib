/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip/tootlip.content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
class TooltipContentComponent {
    /**
     * @param {?} element
     * @param {?} cdr
     */
    constructor(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.animation = true;
        this.placement = 'bottom';
        this.isFade = false;
        this.isIn = false;
        this.left = -100000;
        this.top = -100000;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.show();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.hostElement) {
            return;
        }
        /** @type {?} */
        const p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    }
    /**
     * @private
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    positionElements(hostEl, targetEl, positionStr, appendToBody = false) {
        /** @type {?} */
        const positionStrParts = positionStr.split('-');
        /** @type {?} */
        const pos0 = positionStrParts[0];
        /** @type {?} */
        const pos1 = positionStrParts[1] || 'center';
        /** @type {?} */
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        const targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        const targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        const shiftWidth = {
            center: (/**
             * @return {?}
             */
            () => {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            }),
            left: (/**
             * @return {?}
             */
            () => {
                return hostElPos.left;
            }),
            right: (/**
             * @return {?}
             */
            () => {
                return hostElPos.left + hostElPos.width;
            })
        };
        /** @type {?} */
        const shiftHeight = {
            center: (/**
             * @return {?}
             */
            () => {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            }),
            top: (/**
             * @return {?}
             */
            () => {
                return hostElPos.top;
            }),
            bottom: (/**
             * @return {?}
             */
            () => {
                return hostElPos.top + hostElPos.height;
            })
        };
        /** @type {?} */
        let targetElPos;
        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    }
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    position(nativeEl) {
        /** @type {?} */
        let offsetParentBCR = { top: 0, left: 0 };
        /** @type {?} */
        const elBCR = this.offset(nativeEl);
        /** @type {?} */
        const offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        /** @type {?} */
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    }
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    offset(nativeEl) {
        /** @type {?} */
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    }
    /**
     * @private
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    getStyle(nativeEl, cssProp) {
        if (((/** @type {?} */ (nativeEl))).currentStyle) { // IE
            return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return ((/** @type {?} */ (window.getComputedStyle(nativeEl))))[cssProp];
        }
        // finally try and get inline style
        return ((/** @type {?} */ (nativeEl.style)))[cssProp];
    }
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    isStaticPositioned(nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    }
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    parentOffsetEl(nativeEl) {
        /** @type {?} */
        let offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    }
}
TooltipContentComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'tooltip-content',
                template: `
            <div class="tooltip {{ placement }}"
                [style.top]="top + 'px'"
                [style.left]="left + 'px'"
                [class.in]="isIn"
                [class.fade]="isFade"
                role="tooltip">
                <div class="tooltip-inner">
                    <ng-content></ng-content>
                    {{ content }}
                </div>
            </div>`,
                styles: [".tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"]
            }] }
];
/** @nocollapse */
TooltipContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TooltipContentComponent.propDecorators = {
    animation: [{ type: Input }],
    content: [{ type: Input }],
    hostElement: [{ type: Input }],
    placement: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipContentComponent.prototype.animation;
    /** @type {?} */
    TooltipContentComponent.prototype.content;
    /** @type {?} */
    TooltipContentComponent.prototype.hostElement;
    /** @type {?} */
    TooltipContentComponent.prototype.placement;
    /** @type {?} */
    TooltipContentComponent.prototype.isFade;
    /** @type {?} */
    TooltipContentComponent.prototype.isIn;
    /** @type {?} */
    TooltipContentComponent.prototype.left;
    /** @type {?} */
    TooltipContentComponent.prototype.top;
    /**
     * @type {?}
     * @private
     */
    TooltipContentComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TooltipContentComponent.prototype.cdr;
}
export { TooltipContentComponent as TooltipContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vdGxpcC5jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC90b290bGlwLmNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFDaEIsVUFBVSxFQUFFLGlCQUFpQixFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixNQWlCTSx1QkFBdUI7Ozs7O0lBWXpCLFlBQW9CLE9BQW1CLEVBQzNCLEdBQXNCO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVh6QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGNBQVMsR0FBd0MsUUFBUSxDQUFDO1FBRW5FLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixTQUFJLEdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDdkIsUUFBRyxHQUFXLENBQUMsTUFBTSxDQUFDO0lBSXRCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU87U0FDVjs7Y0FFSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFtQixFQUFFLFFBQXFCLEVBQy9ELFdBQW1CLEVBQUUsZUFBd0IsS0FBSzs7Y0FFNUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQ3pDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7O2NBQzFCLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFROztjQUN0QyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Y0FDdEUsYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXOztjQUNwQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVk7O2NBQ3RDLFVBQVUsR0FBUTtZQUNwQixNQUFNOzs7WUFBRSxHQUFXLEVBQUU7Z0JBQ2pCLE9BQU8sU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQTtZQUNELElBQUk7OztZQUFFLEdBQVcsRUFBRTtnQkFDZixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBQ0QsS0FBSzs7O1lBQUUsR0FBVyxFQUFFO2dCQUNoQixPQUFPLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUE7U0FDSjs7Y0FFSyxXQUFXLEdBQVE7WUFDckIsTUFBTTs7O1lBQUUsR0FBVyxFQUFFO2dCQUNqQixPQUFPLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUE7WUFDRCxHQUFHOzs7WUFBRSxHQUFXLEVBQUU7Z0JBQ2QsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsQ0FBQTtZQUNELE1BQU07OztZQUFFLEdBQVcsRUFBRTtnQkFDakIsT0FBTyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDNUMsQ0FBQyxDQUFBO1NBQ0o7O1lBRUcsV0FBMEM7UUFDOUMsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLE9BQU87Z0JBQ1IsV0FBVyxHQUFHO29CQUNWLEdBQUcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7aUJBQzNCLENBQUM7Z0JBQ0YsTUFBTTtZQUVWLEtBQUssTUFBTTtnQkFDUCxXQUFXLEdBQUc7b0JBQ1YsR0FBRyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYTtpQkFDdkMsQ0FBQztnQkFDRixNQUFNO1lBRVYsS0FBSyxRQUFRO2dCQUNULFdBQVcsR0FBRztvQkFDVixHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2lCQUMzQixDQUFDO2dCQUNGLE1BQU07WUFFVjtnQkFDSSxXQUFXLEdBQUc7b0JBQ1YsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsY0FBYztvQkFDbkMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtpQkFDM0IsQ0FBQztnQkFDRixNQUFNO1NBQ2I7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsUUFBcUI7O1lBQzlCLGVBQWUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTs7Y0FDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOztjQUM3QixjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxjQUFjLEtBQUssTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxlQUFlLENBQUMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUMzRSxlQUFlLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztTQUNqRjs7Y0FFSyxrQkFBa0IsR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUU7UUFDM0QsT0FBTztZQUNILEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFdBQVc7WUFDdkQsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsWUFBWTtZQUMxRCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsR0FBRztZQUNwQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSTtTQUMxQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLFFBQWE7O2NBQ2xCLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtRQUMzRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsV0FBVztZQUN2RCxNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO1lBQzFELEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRixJQUFJLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7U0FDckcsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsUUFBcUIsRUFBRSxPQUFlO1FBQ25ELElBQUksQ0FBQyxtQkFBQSxRQUFRLEVBQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUs7WUFDdkMsT0FBTyxDQUFDLG1CQUFBLFFBQVEsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsT0FBTyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxLQUFLLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFFBQXFCO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFFBQXFCOztZQUNwQyxZQUFZLEdBQVEsUUFBUSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsUUFBUTtRQUNoRSxPQUFPLFlBQVksSUFBSSxZQUFZLEtBQUssTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUYsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7U0FDNUM7UUFDRCxPQUFPLFlBQVksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7OztZQXBMSixTQUFTLFNBQUM7O2dCQUVQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7bUJBV0s7O2FBRWxCOzs7O1lBbkJHLFVBQVU7WUFBRSxpQkFBaUI7Ozt3QkFzQjVCLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFITiw0Q0FBbUM7O0lBQ25DLDBDQUF5Qjs7SUFDekIsOENBQWtDOztJQUNsQyw0Q0FBbUU7O0lBRW5FLHlDQUF3Qjs7SUFDeEIsdUNBQXNCOztJQUN0Qix1Q0FBdUI7O0lBQ3ZCLHNDQUFzQjs7Ozs7SUFFViwwQ0FBMkI7Ozs7O0lBQ25DLHNDQUE4Qjs7QUF5SnRDLE9BQU8sRUFBRSx1QkFBdUIsSUFBSSxjQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LFxyXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAndG9vbHRpcC1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwIHt7IHBsYWNlbWVudCB9fVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUudG9wXT1cInRvcCArICdweCdcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLmxlZnRdPVwibGVmdCArICdweCdcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmluXT1cImlzSW5cIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmZhZGVdPVwiaXNGYWRlXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0b29sdGlwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7eyBjb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YCxcclxuICAgIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuc2NzcyddXHJcbn0pXHJcbmNsYXNzIFRvb2x0aXBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuXHJcbiAgICBpc0ZhZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxlZnQ6IG51bWJlciA9IC0xMDAwMDA7XHJcbiAgICB0b3A6IG51bWJlciA9IC0xMDAwMDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaG9zdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMucG9zaXRpb25FbGVtZW50cyh0aGlzLmhvc3RFbGVtZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgdGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudG9wID0gcC50b3A7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gcC5sZWZ0O1xyXG4gICAgICAgIHRoaXMuaXNJbiA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGYWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvcCA9IC0xMDAwMDA7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gLTEwMDAwMDtcclxuICAgICAgICB0aGlzLmlzSW4gPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmFkZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uRWxlbWVudHMoaG9zdEVsOiBIVE1MRWxlbWVudCwgdGFyZ2V0RWw6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBvc2l0aW9uU3RyOiBzdHJpbmcsIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlKTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblN0clBhcnRzID0gcG9zaXRpb25TdHIuc3BsaXQoJy0nKTtcclxuICAgICAgICBjb25zdCBwb3MwID0gcG9zaXRpb25TdHJQYXJ0c1swXTtcclxuICAgICAgICBjb25zdCBwb3MxID0gcG9zaXRpb25TdHJQYXJ0c1sxXSB8fCAnY2VudGVyJztcclxuICAgICAgICBjb25zdCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWwpIDogdGhpcy5wb3NpdGlvbihob3N0RWwpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsV2lkdGggPSB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLm9mZnNldEhlaWdodDtcclxuICAgICAgICBjb25zdCBzaGlmdFdpZHRoOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyBob3N0RWxQb3Mud2lkdGggLyAyIC0gdGFyZ2V0RWxXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZnQ6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByaWdodDogKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQgKyBob3N0RWxQb3Mud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaGlmdEhlaWdodDogYW55ID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0IC8gMiAtIHRhcmdldEVsSGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9wOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib3R0b206ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldEVsUG9zOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfTtcclxuICAgICAgICBzd2l0Y2ggKHBvczApIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMF0oKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNoaWZ0SGVpZ2h0W3BvczFdKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MwXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMV0oKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogaG9zdEVsUG9zLnRvcCAtIHRhcmdldEVsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMV0oKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldEVsUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zaXRpb24obmF0aXZlRWw6IEhUTUxFbGVtZW50KTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuICAgICAgICBsZXQgb2Zmc2V0UGFyZW50QkNSID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgICAgICBjb25zdCBlbEJDUiA9IHRoaXMub2Zmc2V0KG5hdGl2ZUVsKTtcclxuICAgICAgICBjb25zdCBvZmZzZXRQYXJlbnRFbCA9IHRoaXMucGFyZW50T2Zmc2V0RWwobmF0aXZlRWwpO1xyXG4gICAgICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPT0gd2luZG93LmRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudEJDUiA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsKTtcclxuICAgICAgICAgICAgb2Zmc2V0UGFyZW50QkNSLnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3AgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudEJDUi5sZWZ0ICs9IG9mZnNldFBhcmVudEVsLmNsaWVudExlZnQgLSBvZmZzZXRQYXJlbnRFbC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgdG9wOiBlbEJDUi50b3AgLSBvZmZzZXRQYXJlbnRCQ1IudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBlbEJDUi5sZWZ0IC0gb2Zmc2V0UGFyZW50QkNSLmxlZnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2Zmc2V0KG5hdGl2ZUVsOiBhbnkpOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLFxyXG4gICAgICAgICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdHlsZShuYXRpdmVFbDogSFRNTEVsZW1lbnQsIGNzc1Byb3A6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZSkgeyAvLyBJRVxyXG4gICAgICAgICAgICByZXR1cm4gKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlW2Nzc1Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlRWwpIGFzIGFueSlbY3NzUHJvcF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IHRyeSBhbmQgZ2V0IGlubGluZSBzdHlsZVxyXG4gICAgICAgIHJldHVybiAobmF0aXZlRWwuc3R5bGUgYXMgYW55KVtjc3NQcm9wXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzU3RhdGljUG9zaXRpb25lZChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUobmF0aXZlRWwsICdwb3NpdGlvbicpIHx8ICdzdGF0aWMnKSA9PT0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDogSFRNTEVsZW1lbnQpOiBhbnkge1xyXG4gICAgICAgIGxldCBvZmZzZXRQYXJlbnQ6IGFueSA9IG5hdGl2ZUVsLm9mZnNldFBhcmVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IHdpbmRvdy5kb2N1bWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUb29sdGlwQ29udGVudENvbXBvbmVudCBhcyBUb29sdGlwQ29udGVudCB9O1xyXG4iXX0=