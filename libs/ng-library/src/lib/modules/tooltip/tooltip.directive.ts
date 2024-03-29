import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { ConnectedOverlayScrollHandler } from '../../core/dom/connectedOverlayScrollHandler';
import { DomHandler } from '../../core/dom/domHandler';
import { ZIndexUtils, zIndex } from '../../utility/zIndex.utility';
import { TooltipOptions, TooltipPosition } from './types';

@Directive({
  selector: '[tTooltip]',
})
export class TooltipDirective implements AfterViewInit, OnDestroy, OnChanges {
  @Input() tooltipPosition!: TooltipPosition;
  @Input() tooltipEvent!: string;
  @Input() appendTo: any;
  @Input() positionStyle!: string;
  @Input() tooltipStyleClass!: string;
  @Input() tooltipZIndex!: string;
  @Input() escape = true;
  @Input() showDelay!: number;
  @Input() hideDelay!: number;
  @Input() life!: number;
  @Input() positionTop!: number;
  @Input() positionLeft!: number;
  @Input() autoHide = true;
  @Input() fitContent = true;
  @Input() hideOnEscape = true;
  @Input() tTooltip!: string;
  @Input('tooltipDisabled')
  get tooltipDisabled(): boolean {
    return this._disabled;
  }
  set tooltipDisabled(val: boolean) {
    this._disabled = val;
    this.deactivate();
  }

  @Input() tooltipOptions!: TooltipOptions;

  private _tooltipOptions: TooltipOptions = {
    tooltipPosition: 'right',
    tooltipEvent: 'hover',
    appendTo: 'body',
    tooltipZIndex: 'auto',
    escape: true,
    positionTop: 0,
    positionLeft: 0,
    autoHide: true,
    hideOnEscape: false,
  };

  private _disabled = false;
  private container!: HTMLElement;
  private tooltipText!: HTMLElement;
  private showTimeout!: ReturnType<typeof setTimeout> | null;
  private hideTimeout!: ReturnType<typeof setTimeout> | null;
  private active!: boolean;
  private mouseEnterListener!: typeof this.onMouseEnter;
  private mouseLeaveListener!: typeof this.onMouseLeave;
  private containerMouseleaveListener?: () => void;
  private clickListener!: () => void;
  private focusListener!: () => void;
  private blurListener!: () => void;
  private scrollHandler: ConnectedOverlayScrollHandler | null = null;
  private resizeListener?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public el: ElementRef,
    public zone: NgZone,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption('tooltipEvent') === 'hover') {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
          this.el.nativeElement.addEventListener('click', this.clickListener);
          this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
        } else if (this.getOption('tooltipEvent') === 'focus') {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);

          const target = this.getTarget(this.el.nativeElement);
          if (target) {
            target.addEventListener('focus', this.focusListener);
            target.addEventListener('blur', this.blurListener);
          }
        }
      });
    }
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange['tooltipPosition']) {
      this.setOption({
        tooltipPosition: simpleChange['tooltipPosition'].currentValue,
      });
    }

    if (simpleChange['tooltipEvent']) {
      this.setOption({
        tooltipEvent: simpleChange['tooltipEvent'].currentValue,
      });
    }

    if (simpleChange['appendTo']) {
      this.setOption({ appendTo: simpleChange['appendTo'].currentValue });
    }

    if (simpleChange['positionStyle']) {
      this.setOption({
        positionStyle: simpleChange['positionStyle'].currentValue,
      });
    }

    if (simpleChange['tooltipStyleClass']) {
      this.setOption({
        tooltipStyleClass: simpleChange['tooltipStyleClass'].currentValue,
      });
    }

    if (simpleChange['tooltipZIndex']) {
      this.setOption({
        tooltipZIndex: simpleChange['tooltipZIndex'].currentValue,
      });
    }

    if (simpleChange['escape']) {
      this.setOption({ escape: simpleChange['escape'].currentValue });
    }

    if (simpleChange['showDelay']) {
      this.setOption({ showDelay: simpleChange['showDelay'].currentValue });
    }

    if (simpleChange['hideDelay']) {
      this.setOption({ hideDelay: simpleChange['hideDelay'].currentValue });
    }

    if (simpleChange['life']) {
      this.setOption({ life: simpleChange['life'].currentValue });
    }

    if (simpleChange['positionTop']) {
      this.setOption({ positionTop: simpleChange['positionTop'].currentValue });
    }

    if (simpleChange['positionLeft']) {
      this.setOption({
        positionLeft: simpleChange['positionLeft'].currentValue,
      });
    }

    if (simpleChange['tooltipDisabled']) {
      this.setOption({ disabled: simpleChange['tooltipDisabled'].currentValue });
    }

    if (simpleChange['tTooltip']) {
      this.setOption({ tooltipLabel: simpleChange['tTooltip'].currentValue });

      if (this.active) {
        if (simpleChange['tTooltip'].currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }

    if (simpleChange['autoHide']) {
      this.setOption({ autoHide: simpleChange['autoHide'].currentValue });
    }

    if (simpleChange['tooltipOptions']) {
      this._tooltipOptions = {
        ...this._tooltipOptions,
        ...simpleChange['tooltipOptions'].currentValue,
      };
      this.deactivate();

      if (this.active) {
        if (this.getOption('tooltipLabel')) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }

  isAutoHide(): boolean {
    return this.getOption('autoHide');
  }

  onMouseEnter() {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }

  onMouseLeave(e: any) {
    if (!this.isAutoHide()) {
      const valid =
        DomHandler.hasClass(e.toElement, 't-tooltip') ||
        DomHandler.hasClass(e.toElement, 't-tooltip-arrow') ||
        DomHandler.hasClass(e.toElement, 't-tooltip-text') ||
        DomHandler.hasClass(e.relatedTarget, 't-tooltip');
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }

  onFocus() {
    this.activate();
  }

  onBlur() {
    this.deactivate();
  }

  onInputClick() {
    this.deactivate();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }

  activate() {
    this.active = true;
    this.clearHideTimeout();

    if (this.getOption('showDelay'))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption('showDelay'));
    else this.show();

    if (this.getOption('life')) {
      const duration = this.getOption('showDelay')
        ? this.getOption('life') + this.getOption('showDelay')
        : this.getOption('life');
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }

  deactivate() {
    this.active = false;
    this.clearShowTimeout();

    if (this.getOption('hideDelay')) {
      this.clearHideTimeout(); // life timeout
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption('hideDelay'));
    } else {
      this.hide();
    }
  }

  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }

    this.container = document.createElement('div');

    const tooltipArrow = document.createElement('div');
    tooltipArrow.className = 't-tooltip-arrow';
    this.container.appendChild(tooltipArrow);

    this.tooltipText = document.createElement('div');
    this.tooltipText.className = 't-tooltip-text';

    this.updateText();

    if (this.getOption('positionStyle')) {
      this.container.style.position = this.getOption('positionStyle');
    }

    this.container.appendChild(this.tooltipText);

    if (this.getOption('appendTo') === 'body') document.body.appendChild(this.container);
    else if (this.getOption('appendTo') === 'target') DomHandler.appendChild(this.container, this.el.nativeElement);
    else DomHandler.appendChild(this.container, this.getOption('appendTo'));

    this.container.style.display = 'inline-block';

    if (this.fitContent) {
      this.container.style.width = 'fit-content';
    }

    if (!this.isAutoHide()) {
      this.bindContainerMouseleaveListener();
    }
  }

  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container;

      this.containerMouseleaveListener = this.renderer.listen(targetEl, 'mouseleave', () => {
        this.deactivate();
      });
    }
  }

  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = undefined;
    }
  }

  show() {
    if (!this.getOption('tooltipLabel') || this.getOption('disabled')) {
      return;
    }

    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);

    if (this.getOption('tooltipZIndex') === 'auto') ZIndexUtils.set('tooltip', this.container, zIndex.tooltip);
    else this.container.style.zIndex = this.getOption('tooltipZIndex');

    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }

  hide() {
    if (this.getOption('tooltipZIndex') === 'auto') {
      ZIndexUtils.clear(this.container);
    }

    this.remove();
  }

  updateText() {
    if (this.getOption('escape')) {
      this.tooltipText.innerHTML = '';
      this.tooltipText.appendChild(document.createTextNode(this.getOption('tooltipLabel')));
    } else {
      this.tooltipText.innerHTML = this.getOption('tooltipLabel');
    }
  }

  align() {
    const position = this.getOption('tooltipPosition');

    switch (position) {
      case 'top':
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();

            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;

      case 'bottom':
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();

            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;

      case 'left':
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();

          if (this.isOutOfBounds()) {
            this.alignTop();

            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;

      case 'right':
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();

          if (this.isOutOfBounds()) {
            this.alignTop();

            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }

  getHostOffset() {
    if (this.getOption('appendTo') === 'body' || this.getOption('appendTo') === 'target') {
      const offset = this.el.nativeElement.getBoundingClientRect();
      const targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      const targetTop = offset.top + DomHandler.getWindowScrollTop();

      return { left: targetLeft, top: targetTop };
    } else {
      return { left: 0, top: 0 };
    }
  }

  alignRight() {
    this.preAlign('right');
    const hostOffset = this.getHostOffset();
    const left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    const top =
      hostOffset.top +
      (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }

  alignLeft() {
    this.preAlign('left');
    const hostOffset = this.getHostOffset();
    const left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    const top =
      hostOffset.top +
      (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }

  alignTop() {
    this.preAlign('top');
    const hostOffset = this.getHostOffset();
    const left =
      hostOffset.left +
      (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    const top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }

  alignBottom() {
    this.preAlign('bottom');
    const hostOffset = this.getHostOffset();
    const left =
      hostOffset.left +
      (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    const top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption('positionLeft') + 'px';
    this.container.style.top = top + this.getOption('positionTop') + 'px';
  }

  setOption(option: TooltipOptions) {
    this._tooltipOptions = { ...this._tooltipOptions, ...option };
  }

  getOption(option: keyof TooltipOptions) {
    return this._tooltipOptions[option];
  }

  getTarget(el: HTMLElement) {
    return DomHandler.hasClass(el, 't-inputwrapper') ? DomHandler.findSingle(el, 'input') : el;
  }

  preAlign(position: string) {
    this.container.style.left = -999 + 'px';
    this.container.style.top = -999 + 'px';

    const defaultClassName = 't-tooltip t-component t-tooltip-' + position;
    this.container.className = this.getOption('tooltipStyleClass')
      ? defaultClassName + ' ' + this.getOption('tooltipStyleClass')
      : defaultClassName;
  }

  isOutOfBounds(): boolean {
    const offset = this.container.getBoundingClientRect();
    const targetTop = offset.top;
    const targetLeft = offset.left;
    const width = DomHandler.getOuterWidth(this.container);
    const height = DomHandler.getOuterHeight(this.container);
    const viewport = DomHandler.getViewport();

    return (
      targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height
    );
  }

  onWindowResize() {
    this.hide();
  }

  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.resizeListener);
    });
  }

  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = undefined;
    }
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }

    this.scrollHandler.bindScrollListener();
  }

  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }

  unbindEvents() {
    if (this.getOption('tooltipEvent') === 'hover') {
      this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
      this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener('click', this.clickListener);
    } else if (this.getOption('tooltipEvent') === 'focus') {
      const target = this.getTarget(this.el.nativeElement);
      if (target) {
        target.removeEventListener('focus', this.focusListener);
        target.removeEventListener('blur', this.blurListener);
      }
    }

    this.unbindDocumentResizeListener();
  }

  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption('appendTo') === 'body') document.body.removeChild(this.container);
      else if (this.getOption('appendTo') === 'target') this.el.nativeElement.removeChild(this.container);
      else DomHandler.removeChild(this.container, this.getOption('appendTo'));
    }

    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null as unknown as HTMLElement;
    this.scrollHandler = null;
  }

  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }

  ngOnDestroy() {
    this.unbindEvents();

    if (this.container) {
      ZIndexUtils.clear(this.container);
    }

    this.remove();

    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
}
