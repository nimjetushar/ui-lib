export class DomHandler {
  public static zindex = 1000;

  private static calculatedScrollbarWidth: number | null = null;

  private static calculatedScrollbarHeight: number | null = null;

  //   private static browser: any;

  public static addClass(element: HTMLElement, className: string): void {
    if (element && className) {
      if (element.classList) element.classList.add(className);
      else element.className += ' ' + className;
    }
  }

  public static addMultipleClasses(
    element: HTMLElement,
    className: string
  ): void {
    if (element && className) {
      if (element.classList) {
        const styles: string[] = className.trim().split(' ');
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        const styles: string[] = className.split(' ');
        for (let i = 0; i < styles.length; i++) {
          element.className += ' ' + styles[i];
        }
      }
    }
  }

  public static removeClass(element: HTMLElement, className: string): void {
    if (element && className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
            'gi'
          ),
          ' '
        );
    }
  }

  public static hasClass(element: HTMLElement, className: string): boolean {
    if (element && className) {
      if (element.classList) return element.classList.contains(className);
      else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(
          element.className
        );
    }

    return false;
  }

  public static siblings(element: HTMLElement): HTMLElement[] {
    return Array.prototype.filter.call(
      (element.parentNode as HTMLElement).children,
      function (child) {
        return child !== element;
      }
    );
  }

  public static find(element: HTMLElement, selector: string): HTMLElement[] {
    return Array.from(element.querySelectorAll(selector));
  }

  public static findSingle(
    element: HTMLElement,
    selector: string
  ): HTMLElement | null {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }

  public static index(element: HTMLElement): number {
    const children = (element.parentNode as HTMLElement).childNodes;
    let num = 0;
    for (let i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }

  //   public static indexWithinGroup(element: HTMLElement, attributeName: string): number {
  //     const children = element.parentNode ? element.parentNode.childNodes : [];
  //     let num = 0;
  //     for (let i = 0; i < children.length; i++) {
  //         const item = children[i] as HTMLElement
  //       if (item == element) return num;
  //       if (
  //         item.attributes &&
  //         item.attributes[attributeName] &&
  //         item.nodeType == 1
  //       )
  //         num++;
  //     }
  //     return -1;
  //   }

  //   public static appendOverlay(
  //     overlay: any,
  //     target: any,
  //     appendTo: any = 'self'
  //   ) {
  //     if (appendTo !== 'self' && overlay && target) {
  //       this.appendChild(overlay, target);
  //     }
  //   }

  //   public static alignOverlay(
  //     overlay: any,
  //     target: any,
  //     appendTo: any = 'self',
  //     calculateMinWidth = true
  //   ) {
  //     if (overlay && target) {
  //       if (calculateMinWidth) {
  //         overlay.style.minWidth = `${DomHandler.getOuterWidth(target)}px`;
  //       }

  //       if (appendTo === 'self') {
  //         this.relativePosition(overlay, target);
  //       } else {
  //         this.absolutePosition(overlay, target);
  //       }
  //     }
  //   }

  //   public static relativePosition(element: any, target: any): void {
  //     const getClosestRelativeElement = (el) => {
  //       if (!el) return;

  //       return getComputedStyle(el).getPropertyValue('position') === 'relative'
  //         ? el
  //         : getClosestRelativeElement(el.parentElement);
  //     };

  //     const elementDimensions = element.offsetParent
  //       ? { width: element.offsetWidth, height: element.offsetHeight }
  //       : this.getHiddenElementDimensions(element);
  //     const targetHeight = target.offsetHeight;
  //     const targetOffset = target.getBoundingClientRect();
  //     const windowScrollTop = this.getWindowScrollTop();
  //     const windowScrollLeft = this.getWindowScrollLeft();
  //     const viewport = this.getViewport();
  //     const relativeElement = getClosestRelativeElement(element);
  //     const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
  //       top: -1 * windowScrollTop,
  //       left: -1 * windowScrollLeft,
  //     };
  //     let top: number, left: number;

  //     if (
  //       targetOffset.top + targetHeight + elementDimensions.height >
  //       viewport.height
  //     ) {
  //       top =
  //         targetOffset.top - relativeElementOffset.top - elementDimensions.height;
  //       element.style.transformOrigin = 'bottom';
  //       if (targetOffset.top + top < 0) {
  //         top = -1 * targetOffset.top;
  //       }
  //     } else {
  //       top = targetHeight + targetOffset.top - relativeElementOffset.top;
  //       element.style.transformOrigin = 'top';
  //     }

  //     const horizontalOverflow =
  //       targetOffset.left + elementDimensions.width - viewport.width;
  //     const targetLeftOffsetInSpaceOfRelativeElement =
  //       targetOffset.left - relativeElementOffset.left;
  //     if (elementDimensions.width > viewport.width) {
  //       // element wider then viewport and cannot fit on screen (align at left side of viewport)
  //       left = (targetOffset.left - relativeElementOffset.left) * -1;
  //     } else if (horizontalOverflow > 0) {
  //       // element wider then viewport but can be fit on screen (align at right side of viewport)
  //       left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
  //     } else {
  //       // element fits on screen (align with target)
  //       left = targetOffset.left - relativeElementOffset.left;
  //     }

  //     element.style.top = top + 'px';
  //     element.style.left = left + 'px';
  //   }

  //   public static absolutePosition(element: any, target: any): void {
  //     const elementDimensions = element.offsetParent
  //       ? { width: element.offsetWidth, height: element.offsetHeight }
  //       : this.getHiddenElementDimensions(element);
  //     const elementOuterHeight = elementDimensions.height;
  //     const elementOuterWidth = elementDimensions.width;
  //     const targetOuterHeight = target.offsetHeight;
  //     const targetOuterWidth = target.offsetWidth;
  //     const targetOffset = target.getBoundingClientRect();
  //     const windowScrollTop = this.getWindowScrollTop();
  //     const windowScrollLeft = this.getWindowScrollLeft();
  //     const viewport = this.getViewport();
  //     let top: number, left: number;

  //     if (
  //       targetOffset.top + targetOuterHeight + elementOuterHeight >
  //       viewport.height
  //     ) {
  //       top = targetOffset.top + windowScrollTop - elementOuterHeight;
  //       element.style.transformOrigin = 'bottom';

  //       if (top < 0) {
  //         top = windowScrollTop;
  //       }
  //     } else {
  //       top = targetOuterHeight + targetOffset.top + windowScrollTop;
  //       element.style.transformOrigin = 'top';
  //     }

  //     if (targetOffset.left + elementOuterWidth > viewport.width)
  //       left = Math.max(
  //         0,
  //         targetOffset.left +
  //           windowScrollLeft +
  //           targetOuterWidth -
  //           elementOuterWidth
  //       );
  //     else left = targetOffset.left + windowScrollLeft;

  //     element.style.top = top + 'px';
  //     element.style.left = left + 'px';
  //   }

  static getParents(
    element: HTMLElement,
    parents: HTMLElement[] = []
  ): HTMLElement[] {
    return element['parentNode'] === null
      ? parents
      : this.getParents(
          element.parentNode as HTMLElement,
          parents.concat([element.parentNode as HTMLElement])
        );
  }

  static getScrollableParents(element: HTMLElement | null): HTMLElement[] {
    const scrollableParents: HTMLElement[] = [];

    if (element) {
      const parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node: HTMLElement) => {
        const styleDeclaration = window['getComputedStyle'](node, null);
        return (
          overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) ||
          overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) ||
          overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'))
        );
      };

      for (const parent of parents) {
        const scrollSelectors =
          parent.nodeType === 1 && parent.dataset['scrollselectors'];
        if (scrollSelectors) {
          const selectors = scrollSelectors.split(',');
          for (const selector of selectors) {
            const el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }

        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }

    return scrollableParents;
  }

  public static getHiddenElementOuterHeight(element: HTMLElement): number {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    const elementHeight = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementHeight;
  }

  public static getHiddenElementOuterWidth(element: HTMLElement): number {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    const elementWidth = element.offsetWidth;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementWidth;
  }

  public static getHiddenElementDimensions(element: HTMLElement): {
    width: number;
    height: number;
  } {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  }

  //   public static scrollInView(container, item) {
  //     const borderTopValue: string =
  //       getComputedStyle(container).getPropertyValue('borderTopWidth');
  //     const borderTop: number = borderTopValue ? parseFloat(borderTopValue) : 0;
  //     const paddingTopValue: string =
  //       getComputedStyle(container).getPropertyValue('paddingTop');
  //     const paddingTop: number = paddingTopValue
  //       ? parseFloat(paddingTopValue)
  //       : 0;
  //     const containerRect = container.getBoundingClientRect();
  //     const itemRect = item.getBoundingClientRect();
  //     const offset =
  //       itemRect.top +
  //       document.body.scrollTop -
  //       (containerRect.top + document.body.scrollTop) -
  //       borderTop -
  //       paddingTop;
  //     const scroll = container.scrollTop;
  //     const elementHeight = container.clientHeight;
  //     const itemHeight = this.getOuterHeight(item);

  //     if (offset < 0) {
  //       container.scrollTop = scroll + offset;
  //     } else if (offset + itemHeight > elementHeight) {
  //       container.scrollTop = scroll + offset - elementHeight + itemHeight;
  //     }
  //   }

  public static fadeIn(element: HTMLElement, duration: number): void {
    element.style.opacity = '0';

    let last = +new Date();
    let opacity = 0;
    const tick = function () {
      opacity =
        +element.style.opacity.replace(',', '.') +
        (new Date().getTime() - last) / duration;
      element.style.opacity = `${opacity}`;
      last = +new Date();

      if (+opacity < 1) {
        (window.requestAnimationFrame && window.requestAnimationFrame(tick)) ||
          setTimeout(tick, 16);
      }
    };

    tick();
  }

  //   public static fadeOut(element, ms) {
  //     let opacity = 1,
  //       interval = 50,
  //       duration = ms,
  //       gap = interval / duration;

  //     const fading = setInterval(() => {
  //       opacity = opacity - gap;

  //       if (opacity <= 0) {
  //         opacity = 0;
  //         clearInterval(fading);
  //       }

  //       element.style.opacity = opacity;
  //     }, interval);
  //   }

  public static getWindowScrollTop(): number {
    const doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }

  public static getWindowScrollLeft(): number {
    const doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }

  //   public static matches(element, selector: string): boolean {
  //     const p = Element.prototype;
  //     const f =
  //       p['matches'] ||
  //       p.webkitMatchesSelector ||
  //       p['mozMatchesSelector'] ||
  //       p['msMatchesSelector'] ||
  //       function (s) {
  //         return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
  //       };
  //     return f.call(element, selector);
  //   }

  public static getOuterWidth(el: HTMLElement, margin?: boolean) {
    let width = el.offsetWidth;

    if (margin) {
      const style = getComputedStyle(el);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }

    return width;
  }

  //   public static getHorizontalPadding(el) {
  //     const style = getComputedStyle(el);
  //     return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  //   }

  //   public static getHorizontalMargin(el) {
  //     const style = getComputedStyle(el);
  //     return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  //   }

  public static innerWidth(el: HTMLElement) {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
  }

  //   public static width(el) {
  //     let width = el.offsetWidth;
  //     const style = getComputedStyle(el);

  //     width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  //     return width;
  //   }

  //   public static getInnerHeight(el) {
  //     let height = el.offsetHeight;
  //     const style = getComputedStyle(el);

  //     height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  //     return height;
  //   }

  public static getOuterHeight(el: HTMLElement, margin?: boolean) {
    let height = el.offsetHeight;

    if (margin) {
      const style = getComputedStyle(el);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    return height;
  }

  //   public static getHeight(el): number {
  //     let height = el.offsetHeight;
  //     const style = getComputedStyle(el);

  //     height -=
  //       parseFloat(style.paddingTop) +
  //       parseFloat(style.paddingBottom) +
  //       parseFloat(style.borderTopWidth) +
  //       parseFloat(style.borderBottomWidth);

  //     return height;
  //   }

  //   public static getWidth(el): number {
  //     let width = el.offsetWidth;
  //     const style = getComputedStyle(el);

  //     width -=
  //       parseFloat(style.paddingLeft) +
  //       parseFloat(style.paddingRight) +
  //       parseFloat(style.borderLeftWidth) +
  //       parseFloat(style.borderRightWidth);

  //     return width;
  //   }

  public static getViewport(): { width: number; height: number } {
    const win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;

    return { width: w, height: h };
  }

  //   public static getOffset(el) {
  //     const rect = el.getBoundingClientRect();

  //     return {
  //       top:
  //         rect.top +
  //         (window.pageYOffset ||
  //           document.documentElement.scrollTop ||
  //           document.body.scrollTop ||
  //           0),
  //       left:
  //         rect.left +
  //         (window.pageXOffset ||
  //           document.documentElement.scrollLeft ||
  //           document.body.scrollLeft ||
  //           0),
  //     };
  //   }

  public static replaceElementWith(
    element: HTMLElement,
    replacementElement: HTMLElement
  ): HTMLElement {
    const parentNode = element.parentNode;
    if (!parentNode) throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }

  public static getUserAgent(): string | void {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }

  public static isIE() {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return true;
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return true;
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return true;
    }

    // other browser
    return false;
  }

  //   public static isIOS() {
  //     return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  //   }

  public static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }

  public static isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  public static appendChild(element: HTMLElement, target: any) {
    if (this.isElement(target)) target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else throw 'Cannot append ' + target + ' to ' + element;
  }

  public static removeChild(element: HTMLElement, target: any) {
    if (this.isElement(target)) target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else throw 'Cannot remove ' + element + ' from ' + target;
  }

  //   public static removeElement(element: Element) {
  //     if (!('remove' in Element.prototype))
  //       element.parentNode.removeChild(element);
  //     else element.remove();
  //   }

  public static isElement(obj: any) {
    return typeof HTMLElement === 'object'
      ? obj instanceof HTMLElement
      : obj &&
          typeof obj === 'object' &&
          obj !== null &&
          obj.nodeType === 1 &&
          typeof obj.nodeName === 'string';
  }

  public static calculateScrollbarWidth(el?: HTMLElement): number {
    if (el) {
      const style = getComputedStyle(el);
      return (
        el.offsetWidth -
        el.clientWidth -
        parseFloat(style.borderLeftWidth) -
        parseFloat(style.borderRightWidth)
      );
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;

      const scrollDiv = document.createElement('div');
      scrollDiv.className = 'p-scrollbar-measure';
      document.body.appendChild(scrollDiv);

      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);

      this.calculatedScrollbarWidth = scrollbarWidth;

      return scrollbarWidth;
    }
  }

  public static calculateScrollbarHeight(): number {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;

    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'p-scrollbar-measure';
    document.body.appendChild(scrollDiv);

    const scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);

    this.calculatedScrollbarWidth = scrollbarHeight;

    return scrollbarHeight;
  }

  public static invokeElementMethod(
    element: HTMLElement,
    methodName: string,
    args?: any[]
  ): void {
    (element as any)[methodName].apply(element, args);
  }

  //   public static clearSelection(): void {
  //     if (window.getSelection) {
  //       if (window.getSelection().empty) {
  //         window.getSelection().empty();
  //       } else if (
  //         window.getSelection().removeAllRanges &&
  //         window.getSelection().rangeCount > 0 &&
  //         window.getSelection().getRangeAt(0).getClientRects().length > 0
  //       ) {
  //         window.getSelection().removeAllRanges();
  //       }
  //     } else if (document['selection'] && document['selection'].empty) {
  //       try {
  //         document['selection'].empty();
  //       } catch (error) {
  //         //ignore IE bug
  //       }
  //     }
  //   }

  //   public static getBrowser() {
  //     if (!this.browser) {
  //       const matched = this.resolveUserAgent();
  //       this.browser = {};

  //       if (matched.browser) {
  //         this.browser[matched.browser] = true;
  //         this.browser['version'] = matched.version;
  //       }

  //       if (this.browser['chrome']) {
  //         this.browser['webkit'] = true;
  //       } else if (this.browser['webkit']) {
  //         this.browser['safari'] = true;
  //       }
  //     }

  //     return this.browser;
  //   }

  //   public static resolveUserAgent() {
  //     const ua = navigator.userAgent.toLowerCase();
  //     const match =
  //       /(chrome)[ \/]([\w.]+)/.exec(ua) ||
  //       /(webkit)[ \/]([\w.]+)/.exec(ua) ||
  //       /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
  //       /(msie) ([\w.]+)/.exec(ua) ||
  //       (ua.indexOf('compatible') < 0 &&
  //         /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
  //       [];

  //     return {
  //       browser: match[1] || '',
  //       version: match[2] || '0',
  //     };
  //   }

  //   public static isInteger(value): boolean {
  //     if (Number.isInteger) {
  //       return Number.isInteger(value);
  //     } else {
  //       return (
  //         typeof value === 'number' &&
  //         isFinite(value) &&
  //         Math.floor(value) === value
  //       );
  //     }
  //   }

  public static isHidden(element: HTMLElement): boolean {
    return !element || element.offsetParent === null;
  }

  public static isVisible(element: HTMLElement) {
    return element && element.offsetParent != null;
  }

  public static isExist(element: HTMLElement) {
    return (
      element !== null &&
      typeof element !== 'undefined' &&
      element.nodeName &&
      element.parentNode
    );
  }

  public static focus(element: HTMLElement, options?: FocusOptions): void {
    element && document.activeElement !== element && element.focus(options);
  }

  public static getFocusableElements(element: HTMLElement) {
    const focusableElements = DomHandler.find(
      element,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]):not(.p-disabled)`
    );

    const visibleFocusableElements = [];
    for (const focusableElement of focusableElements) {
      if (
        focusableElement.offsetWidth ||
        focusableElement.offsetHeight ||
        focusableElement.getClientRects().length
      )
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }

  //   public static getNextFocusableElement(element: HTMLElement, reverse = false) {
  //     const focusableElements = DomHandler.getFocusableElements(element);
  //     let index = 0;
  //     if (focusableElements && focusableElements.length > 0) {
  //       const focusedIndex = focusableElements.indexOf(
  //         focusableElements[0].ownerDocument.activeElement
  //       );

  //       if (reverse) {
  //         if (focusedIndex == -1 || focusedIndex === 0) {
  //           index = focusableElements.length - 1;
  //         } else {
  //           index = focusedIndex - 1;
  //         }
  //       } else if (
  //         focusedIndex != -1 &&
  //         focusedIndex !== focusableElements.length - 1
  //       ) {
  //         index = focusedIndex + 1;
  //       }
  //     }

  //     return focusableElements[index];
  //   }

  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }

  //   public static getSelection() {
  //     if (window.getSelection) return window.getSelection().toString();
  //     else if (document.getSelection) return document.getSelection().toString();
  //     else if (document['selection'])
  //       return document['selection'].createRange().text;

  //     return null;
  //   }

  //   public static getTargetElement(target: any, el?: HTMLElement) {
  //     if (!target) return null;

  //     switch (target) {
  //       case 'document':
  //         return document;
  //       case 'window':
  //         return window;
  //       case '@next':
  //         return el?.nextElementSibling;
  //       case '@prev':
  //         return el?.previousElementSibling;
  //       case '@parent':
  //         return el?.parentElement;
  //       case '@grandparent':
  //         return el?.parentElement.parentElement;
  //       default:
  //         const type = typeof target;

  //         if (type === 'string') {
  //           return document.querySelector(target);
  //         } else if (
  //           type === 'object' &&
  //           target.hasOwnProperty('nativeElement')
  //         ) {
  //           return this.isExist(target.nativeElement)
  //             ? target.nativeElement
  //             : undefined;
  //         }

  //         const isFunction = (obj: any) =>
  //           !!(obj && obj.constructor && obj.call && obj.apply);
  //         const element = isFunction(target) ? target() : target;

  //         return (element && element.nodeType === 9) || this.isExist(element)
  //           ? element
  //           : null;
  //     }
  //   }

  public static isClient() {
    return !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );
  }

  //   public static getAttribute(element: HTMLElement, name: string) {
  //     if (element) {
  //       const value = element.getAttribute(name);

  //       if (!isNaN(value)) {
  //         return +value;
  //       }

  //       if (value === 'true' || value === 'false') {
  //         return value === 'true';
  //       }

  //       return value;
  //     }

  //     return undefined;
  //   }
}
