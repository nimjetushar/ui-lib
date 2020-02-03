/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip/tootlip.content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
var TooltipContentComponent = /** @class */ (function () {
    function TooltipContentComponent(element, cdr) {
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
    TooltipContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.show();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    TooltipContentComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.hostElement) {
            return;
        }
        /** @type {?} */
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    };
    /**
     * @return {?}
     */
    TooltipContentComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    };
    /**
     * @private
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    TooltipContentComponent.prototype.positionElements = /**
     * @private
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        /** @type {?} */
        var positionStrParts = positionStr.split('-');
        /** @type {?} */
        var pos0 = positionStrParts[0];
        /** @type {?} */
        var pos1 = positionStrParts[1] || 'center';
        /** @type {?} */
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        var targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        var targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        var shiftWidth = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            }),
            left: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left;
            }),
            right: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + hostElPos.width;
            })
        };
        /** @type {?} */
        var shiftHeight = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            }),
            top: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top;
            }),
            bottom: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + hostElPos.height;
            })
        };
        /** @type {?} */
        var targetElPos;
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
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipContentComponent.prototype.position = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParentBCR = { top: 0, left: 0 };
        /** @type {?} */
        var elBCR = this.offset(nativeEl);
        /** @type {?} */
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipContentComponent.prototype.offset = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    /**
     * @private
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    TooltipContentComponent.prototype.getStyle = /**
     * @private
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    function (nativeEl, cssProp) {
        if (((/** @type {?} */ (nativeEl))).currentStyle) { // IE
            return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return ((/** @type {?} */ (window.getComputedStyle(nativeEl))))[cssProp];
        }
        // finally try and get inline style
        return ((/** @type {?} */ (nativeEl.style)))[cssProp];
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipContentComponent.prototype.isStaticPositioned = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipContentComponent.prototype.parentOffsetEl = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipContentComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'tooltip-content',
                    template: "\n            <div class=\"tooltip {{ placement }}\"\n                [style.top]=\"top + 'px'\"\n                [style.left]=\"left + 'px'\"\n                [class.in]=\"isIn\"\n                [class.fade]=\"isFade\"\n                role=\"tooltip\">\n                <div class=\"tooltip-inner\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n            </div>",
                    styles: [".tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    TooltipContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TooltipContentComponent.propDecorators = {
        animation: [{ type: Input }],
        content: [{ type: Input }],
        hostElement: [{ type: Input }],
        placement: [{ type: Input }]
    };
    return TooltipContentComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vdGxpcC5jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC90b290bGlwLmNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFDaEIsVUFBVSxFQUFFLGlCQUFpQixFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTZCSSxpQ0FBb0IsT0FBbUIsRUFDM0IsR0FBc0I7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWHpCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsY0FBUyxHQUF3QyxRQUFRLENBQUM7UUFFbkUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFNBQUksR0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN2QixRQUFHLEdBQVcsQ0FBQyxNQUFNLENBQUM7SUFJdEIsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHNDQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU87U0FDVjs7WUFFSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUks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TyxnREFBYzs7Ozs7SUFBdEIsVUFBdUIsUUFBcUI7O1lBQ3BDLFlBQVksR0FBUSxRQUFRLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRO1FBQ2hFLE9BQU8sWUFBWSxJQUFJLFlBQVksS0FBSyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5RixZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztTQUM1QztRQUNELE9BQU8sWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7Z0JBcExKLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDhhQVdLOztpQkFFbEI7Ozs7Z0JBbkJHLFVBQVU7Z0JBQUUsaUJBQWlCOzs7NEJBc0I1QixLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQStKViw4QkFBQztDQUFBLEFBckxELElBcUxDOzs7SUFsS0csNENBQW1DOztJQUNuQywwQ0FBeUI7O0lBQ3pCLDhDQUFrQzs7SUFDbEMsNENBQW1FOztJQUVuRSx5Q0FBd0I7O0lBQ3hCLHVDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUN2QixzQ0FBc0I7Ozs7O0lBRVYsMENBQTJCOzs7OztJQUNuQyxzQ0FBOEI7O0FBeUp0QyxPQUFPLEVBQUUsdUJBQXVCLElBQUksY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ3Rvb2x0aXAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcCB7eyBwbGFjZW1lbnQgfX1cIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5pbl09XCJpc0luXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5mYWRlXT1cImlzRmFkZVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90b29sdGlwLnNjc3MnXVxyXG59KVxyXG5jbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgaXNGYWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZWZ0OiBudW1iZXIgPSAtMTAwMDAwO1xyXG4gICAgdG9wOiBudW1iZXIgPSAtMTAwMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhvc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnBvc2l0aW9uRWxlbWVudHModGhpcy5ob3N0RWxlbWVudCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgICB0aGlzLnRvcCA9IHAudG9wO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHAubGVmdDtcclxuICAgICAgICB0aGlzLmlzSW4gPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmFkZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3AgPSAtMTAwMDAwO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IC0xMDAwMDA7XHJcbiAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZhZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzKGhvc3RFbDogSFRNTEVsZW1lbnQsIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwb3NpdGlvblN0cjogc3RyaW5nLCBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZSk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgcG9zMCA9IHBvc2l0aW9uU3RyUGFydHNbMF07XHJcbiAgICAgICAgY29uc3QgcG9zMSA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcic7XHJcbiAgICAgICAgY29uc3QgaG9zdEVsUG9zID0gYXBwZW5kVG9Cb2R5ID8gdGhpcy5vZmZzZXQoaG9zdEVsKSA6IHRoaXMucG9zaXRpb24oaG9zdEVsKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxIZWlnaHQgPSB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoIC8gMiAtIHRhcmdldEVsV2lkdGggLyAyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWZ0OiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmlnaHQ6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcclxuICAgICAgICAgICAgY2VudGVyOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCAvIDIgLSB0YXJnZXRFbEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvcDogKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm90dG9tOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH07XHJcbiAgICAgICAgc3dpdGNoIChwb3MwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczBdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRFbFBvcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICAgICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcclxuICAgICAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCk7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9mZnNldChuYXRpdmVFbDogYW55KTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxcclxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3R5bGUobmF0aXZlRWw6IEhUTUxFbGVtZW50LCBjc3NQcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICgobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGUpIHsgLy8gSUVcclxuICAgICAgICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdGl2ZUVsKSBhcyBhbnkpW2Nzc1Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluYWxseSB0cnkgYW5kIGdldCBpbmxpbmUgc3R5bGVcclxuICAgICAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKG5hdGl2ZUVsLCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcclxuICAgICAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgYXMgVG9vbHRpcENvbnRlbnQgfTtcclxuIl19