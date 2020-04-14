import { __decorate, __metadata } from "tslib";
import { Component, Input, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
let TooltipContentComponent = class TooltipContentComponent {
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
    ngAfterViewInit() {
        this.show();
        this.cdr.detectChanges();
    }
    show() {
        if (!this.hostElement) {
            return;
        }
        const p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    }
    hide() {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    }
    positionElements(hostEl, targetEl, positionStr, appendToBody = false) {
        const positionStrParts = positionStr.split('-');
        const pos0 = positionStrParts[0];
        const pos1 = positionStrParts[1] || 'center';
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        const targetElWidth = targetEl.offsetWidth;
        const targetElHeight = targetEl.offsetHeight;
        const shiftWidth = {
            center: () => {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: () => {
                return hostElPos.left;
            },
            right: () => {
                return hostElPos.left + hostElPos.width;
            }
        };
        const shiftHeight = {
            center: () => {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: () => {
                return hostElPos.top;
            },
            bottom: () => {
                return hostElPos.top + hostElPos.height;
            }
        };
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
    position(nativeEl) {
        let offsetParentBCR = { top: 0, left: 0 };
        const elBCR = this.offset(nativeEl);
        const offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    }
    offset(nativeEl) {
        const boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    }
    getStyle(nativeEl, cssProp) {
        if (nativeEl.currentStyle) { // IE
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        // finally try and get inline style
        return nativeEl.style[cssProp];
    }
    isStaticPositioned(nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    }
    parentOffsetEl(nativeEl) {
        let offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    }
};
TooltipContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TooltipContentComponent.prototype, "animation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipContentComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", HTMLElement)
], TooltipContentComponent.prototype, "hostElement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipContentComponent.prototype, "placement", void 0);
TooltipContentComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef])
], TooltipContentComponent);
export { TooltipContentComponent as TooltipContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vdGxpcC5jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy90b29sdGlwL3Rvb3RsaXAuY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUMvQixVQUFVLEVBQUUsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBbUJ2QixJQUFNLHVCQUF1QixHQUE3QixNQUFNLHVCQUF1QjtJQVl6QixZQUFvQixPQUFtQixFQUMzQixHQUFzQjtRQURkLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYekIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFTLEdBQXdDLFFBQVEsQ0FBQztRQUVuRSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBSSxHQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLFFBQUcsR0FBVyxDQUFDLE1BQU0sQ0FBQztJQUl0QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxH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UUFBUSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pFLE9BQU8sWUFBWSxJQUFJLFlBQVksS0FBSyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5RixZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztTQUM1QztRQUNELE9BQU8sWUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztDQUNKLENBQUE7O1lBeEpnQyxVQUFVO1lBQ3RCLGlCQUFpQjs7QUFYekI7SUFBUixLQUFLLEVBQUU7OzBEQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzhCQUFjLFdBQVc7NERBQUM7QUFDekI7SUFBUixLQUFLLEVBQUU7OzBEQUEyRDtBQUxqRSx1QkFBdUI7SUFqQjVCLFNBQVMsQ0FBQztRQUNQLCtDQUErQztRQUMvQyxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7bUJBV0s7O0tBRWxCLENBQUM7cUNBYStCLFVBQVU7UUFDdEIsaUJBQWlCO0dBYmhDLHVCQUF1QixDQW9LNUI7QUFFRCxPQUFPLEVBQUUsdUJBQXVCLElBQUksY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ3Rvb2x0aXAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcCB7eyBwbGFjZW1lbnQgfX1cIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5pbl09XCJpc0luXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5mYWRlXT1cImlzRmFkZVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90b29sdGlwLnNjc3MnXVxyXG59KVxyXG5jbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgaXNGYWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZWZ0OiBudW1iZXIgPSAtMTAwMDAwO1xyXG4gICAgdG9wOiBudW1iZXIgPSAtMTAwMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhvc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnBvc2l0aW9uRWxlbWVudHModGhpcy5ob3N0RWxlbWVudCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgICB0aGlzLnRvcCA9IHAudG9wO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHAubGVmdDtcclxuICAgICAgICB0aGlzLmlzSW4gPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmFkZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3AgPSAtMTAwMDAwO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IC0xMDAwMDA7XHJcbiAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZhZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzKGhvc3RFbDogSFRNTEVsZW1lbnQsIHRhcmdldEVsOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwb3NpdGlvblN0cjogc3RyaW5nLCBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZSk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgcG9zMCA9IHBvc2l0aW9uU3RyUGFydHNbMF07XHJcbiAgICAgICAgY29uc3QgcG9zMSA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcic7XHJcbiAgICAgICAgY29uc3QgaG9zdEVsUG9zID0gYXBwZW5kVG9Cb2R5ID8gdGhpcy5vZmZzZXQoaG9zdEVsKSA6IHRoaXMucG9zaXRpb24oaG9zdEVsKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxIZWlnaHQgPSB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoIC8gMiAtIHRhcmdldEVsV2lkdGggLyAyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWZ0OiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmlnaHQ6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcclxuICAgICAgICAgICAgY2VudGVyOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCAvIDIgLSB0YXJnZXRFbEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvcDogKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm90dG9tOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH07XHJcbiAgICAgICAgc3dpdGNoIChwb3MwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczBdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRFbFBvcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICAgICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcclxuICAgICAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCk7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9mZnNldChuYXRpdmVFbDogYW55KTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxcclxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3R5bGUobmF0aXZlRWw6IEhUTUxFbGVtZW50LCBjc3NQcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICgobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGUpIHsgLy8gSUVcclxuICAgICAgICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdGl2ZUVsKSBhcyBhbnkpW2Nzc1Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluYWxseSB0cnkgYW5kIGdldCBpbmxpbmUgc3R5bGVcclxuICAgICAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKG5hdGl2ZUVsLCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcclxuICAgICAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgYXMgVG9vbHRpcENvbnRlbnQgfTtcclxuIl19