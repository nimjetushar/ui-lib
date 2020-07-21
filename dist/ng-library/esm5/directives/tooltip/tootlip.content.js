import { __decorate, __metadata } from "tslib";
import { Component, Input, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
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
    TooltipContentComponent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    TooltipContentComponent.prototype.show = function () {
        if (!this.hostElement) {
            return;
        }
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    };
    TooltipContentComponent.prototype.hide = function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    };
    TooltipContentComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
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
    TooltipContentComponent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipContentComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipContentComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) { // IE
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    TooltipContentComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    TooltipContentComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
            template: "\n            <div class=\"tooltip {{ placement }}\"\n                [style.top]=\"top + 'px'\"\n                [style.left]=\"left + 'px'\"\n                [class.in]=\"isIn\"\n                [class.fade]=\"isFade\"\n                role=\"tooltip\">\n                <div class=\"tooltip-inner\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n            </div>",
            styles: [".tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:.9}.tooltip .tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}"]
        }),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], TooltipContentComponent);
    return TooltipContentComponent;
}());
export { TooltipContentComponent as TooltipContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vdGxpcC5jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvdXJqcy9uZy1saWJyYXJ5LyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy90b29sdGlwL3Rvb3RsaXAuY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUMvQixVQUFVLEVBQUUsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBbUJ2QjtJQVlJLGlDQUNZLE9BQW1CLEVBQ25CLEdBQXNCO1FBRHRCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaekIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFTLEdBQXdDLFFBQVEsQ0FBQztRQUVuRSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBSSxHQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLFFBQUcsR0FBVyxDQUFDLE1BQU0sQ0FBQztJQUtsQixDQUFDO0lBRUwsaURBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELHNDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVPLGtEQUFnQixHQUF4QixVQUNJLE1BQW1CLEVBQUUsUUFBcUIsRUFDMUMsV0FBbUIsRUFBRSxZQUE2QjtRQUE3Qiw2QkFBQSxFQUFBLG9CQUE2QjtRQUdsRCxJQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDO1FBQzdDLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBTSxVQUFVLEdBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNKLE9BQU8sU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDNUMsQ0FBQztTQUNKLENBQUM7UUFFRixJQUFNLFdBQVcsR0FBUTtZQUNyQixNQUFNLEVBQUU7Z0JBQ0osT0FBTyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDckUsQ0FBQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQztZQUNELE1BQU0sRUFBRTtnQkFDSixPQUFPLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxDQUFDO1NBQ0osQ0FBQztRQUVGLElBQUksV0FBMEMsQ0FBQztRQUMvQyxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssT0FBTztnQkFDUixXQUFXLEdBQUc7b0JBQ1YsR0FBRyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtpQkFDM0IsQ0FBQztnQkFDRixNQUFNO1lBRVYsS0FBSyxNQUFNO2dCQUNQLFdBQVcsR0FBRztvQkFDVixHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksR0FBRyxhQUFhO2lCQUN2QyxDQUFDO2dCQUNGLE1BQU07WUFFVixLQUFLLFFBQVE7Z0JBQ1QsV0FBVyxHQUFHO29CQUNWLEdBQUcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7aUJBQzNCLENBQUM7Z0JBQ0YsTUFBTTtZQUVWO2dCQUNJLFdBQVcsR0FBRztvQkFDVixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxjQUFjO29CQUNuQyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2lCQUMzQixDQUFDO2dCQUNGLE1BQU07U0FDYjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTywwQ0FBUSxHQUFoQixVQUFpQixRQUFxQjtRQUNsQyxJQUFJLGVBQWUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLGNBQWMsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3BDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlDLGVBQWUsQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzNFLGVBQWUsQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO1NBQ2pGO1FBRUQsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1RCxPQUFPO1lBQ0gsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsV0FBVztZQUN2RCxNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO1lBQzFELEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHO1lBQ3BDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxJQUFJO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBRU8sd0NBQU0sR0FBZCxVQUFlLFFBQWE7UUFDeEIsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1RCxPQUFPO1lBQ0gsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsV0FBVztZQUN2RCxNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO1lBQzFELEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRixJQUFJLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7U0FDckcsQ0FBQztJQUNOLENBQUM7SUFFTywwQ0FBUSxHQUFoQixVQUFpQixRQUFxQixFQUFFLE9BQWU7UUFDbkQsSUFBSyxRQUFnQixDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUs7WUFDdkMsT0FBUSxRQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE9BQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO1FBRUQsbUNBQW1DO1FBQ25DLE9BQVEsUUFBUSxDQUFDLEtBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sb0RBQWtCLEdBQTFCLFVBQTJCLFFBQXFCO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDMUUsQ0FBQztJQUVPLGdEQUFjLEdBQXRCLFVBQXVCLFFBQXFCO1FBQ3hDLElBQUksWUFBWSxHQUFRLFFBQVEsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqRSxPQUFPLFlBQVksSUFBSSxZQUFZLEtBQUssTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUYsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7U0FDNUM7UUFDRCxPQUFPLFlBQVksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7O2dCQXpKb0IsVUFBVTtnQkFDZCxpQkFBaUI7O0lBWnpCO1FBQVIsS0FBSyxFQUFFOzs4REFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7OzREQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtrQ0FBYyxXQUFXO2dFQUFDO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzs4REFBMkQ7SUFMakUsdUJBQXVCO1FBakI1QixTQUFTLENBQUM7WUFDUCwrQ0FBK0M7WUFDL0MsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsOGFBV0s7O1NBRWxCLENBQUM7eUNBY3VCLFVBQVU7WUFDZCxpQkFBaUI7T0FkaEMsdUJBQXVCLENBdUs1QjtJQUFELDhCQUFDO0NBQUEsQUF2S0QsSUF1S0M7QUFFRCxPQUFPLEVBQUUsdUJBQXVCLElBQUksY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ3Rvb2x0aXAtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcCB7eyBwbGFjZW1lbnQgfX1cIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5pbl09XCJpc0luXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5mYWRlXT1cImlzRmFkZVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90b29sdGlwLnNjc3MnXVxyXG59KVxyXG5jbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgaXNGYWRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZWZ0OiBudW1iZXIgPSAtMTAwMDAwO1xyXG4gICAgdG9wOiBudW1iZXIgPSAtMTAwMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5ob3N0RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwID0gdGhpcy5wb3NpdGlvbkVsZW1lbnRzKHRoaXMuaG9zdEVsZW1lbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgICAgdGhpcy50b3AgPSBwLnRvcDtcclxuICAgICAgICB0aGlzLmxlZnQgPSBwLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5pc0luID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZhZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9wID0gLTEwMDAwMDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAtMTAwMDAwO1xyXG4gICAgICAgIHRoaXMuaXNJbiA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGYWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zaXRpb25FbGVtZW50cyhcclxuICAgICAgICBob3N0RWw6IEhUTUxFbGVtZW50LCB0YXJnZXRFbDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgcG9zaXRpb25TdHI6IHN0cmluZywgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gZmFsc2VcclxuICAgICk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHJQYXJ0cyA9IHBvc2l0aW9uU3RyLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgcG9zMCA9IHBvc2l0aW9uU3RyUGFydHNbMF07XHJcbiAgICAgICAgY29uc3QgcG9zMSA9IHBvc2l0aW9uU3RyUGFydHNbMV0gfHwgJ2NlbnRlcic7XHJcbiAgICAgICAgY29uc3QgaG9zdEVsUG9zID0gYXBwZW5kVG9Cb2R5ID8gdGhpcy5vZmZzZXQoaG9zdEVsKSA6IHRoaXMucG9zaXRpb24oaG9zdEVsKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbFdpZHRoID0gdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxIZWlnaHQgPSB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRXaWR0aDogYW55ID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoIC8gMiAtIHRhcmdldEVsV2lkdGggLyAyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWZ0OiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmlnaHQ6ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy5sZWZ0ICsgaG9zdEVsUG9zLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpZnRIZWlnaHQ6IGFueSA9IHtcclxuICAgICAgICAgICAgY2VudGVyOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodCAvIDIgLSB0YXJnZXRFbEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvcDogKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG9zdEVsUG9zLnRvcDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm90dG9tOiAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wICsgaG9zdEVsUG9zLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRFbFBvczogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH07XHJcbiAgICAgICAgc3dpdGNoIChwb3MwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczBdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGhvc3RFbFBvcy5sZWZ0IC0gdGFyZ2V0RWxXaWR0aFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzaGlmdFdpZHRoW3BvczFdKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRFbFBvcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uKG5hdGl2ZUVsOiBIVE1MRWxlbWVudCk6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFBhcmVudEJDUiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICAgICAgY29uc3QgZWxCQ1IgPSB0aGlzLm9mZnNldChuYXRpdmVFbCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50RWwgPSB0aGlzLnBhcmVudE9mZnNldEVsKG5hdGl2ZUVsKTtcclxuICAgICAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IHdpbmRvdy5kb2N1bWVudCkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCk7XHJcbiAgICAgICAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgbmF0aXZlRWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCB8fCBuYXRpdmVFbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogZWxCQ1IudG9wIC0gb2Zmc2V0UGFyZW50QkNSLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWxCQ1IubGVmdCAtIG9mZnNldFBhcmVudEJDUi5sZWZ0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9mZnNldChuYXRpdmVFbDogYW55KTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSBuYXRpdmVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxcclxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3R5bGUobmF0aXZlRWw6IEhUTUxFbGVtZW50LCBjc3NQcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICgobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGUpIHsgLy8gSUVcclxuICAgICAgICAgICAgcmV0dXJuIChuYXRpdmVFbCBhcyBhbnkpLmN1cnJlbnRTdHlsZVtjc3NQcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdGl2ZUVsKSBhcyBhbnkpW2Nzc1Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluYWxseSB0cnkgYW5kIGdldCBpbmxpbmUgc3R5bGVcclxuICAgICAgICByZXR1cm4gKG5hdGl2ZUVsLnN0eWxlIGFzIGFueSlbY3NzUHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKG5hdGl2ZUVsLCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyZW50T2Zmc2V0RWwobmF0aXZlRWw6IEhUTUxFbGVtZW50KTogYW55IHtcclxuICAgICAgICBsZXQgb2Zmc2V0UGFyZW50OiBhbnkgPSBuYXRpdmVFbC5vZmZzZXRQYXJlbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSB3aW5kb3cuZG9jdW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgYXMgVG9vbHRpcENvbnRlbnQgfTtcclxuIl19