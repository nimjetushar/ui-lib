import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

import { DomHandler } from '../../core/dom/domHandler';

@Directive({
  selector: '[tBadge]',
})
export class BadgeDirective implements OnInit, OnChanges {
  @Input({ transform: (value: string | number) => value.toString() }) tBadge!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    DomHandler.addClass(this.elementRef.nativeElement, 't-badge');
    this.createBadgeElement();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tBadge'].currentValue !== changes['tBadge'].previousValue) {
      const childElements = this.elementRef.nativeElement.children;
      for (const child of childElements) {
        this.renderer.removeChild(this.elementRef.nativeElement, child);
      }
      this.createBadgeElement();
    }
  }

  private createBadgeElement() {
    const badge = this.document.createElement('span');
    DomHandler.addClass(badge, 'badge');
    DomHandler.addClass(badge, 'badge-element');
    this.addStyles(badge);
    this.renderer.appendChild(badge, this.document.createTextNode(this.tBadge));
    this.renderer.appendChild(this.elementRef.nativeElement, badge);
  }

  private addStyles(element: HTMLSpanElement): void {
    const dotStyles: Record<string, string> =
      this.tBadge !== '' ? {} : { width: '0.5rem', 'min-width': '0.5em', height: '0.5rem' };

    const badgeCssProperties: Record<string, string> = {
      ...dotStyles,
      'border-radius': this.tBadge?.length !== 1 ? '50%' : '10px',
    };
    for (const prop in badgeCssProperties) {
      element.style.setProperty(prop, badgeCssProperties[prop]);
    }
  }
}
