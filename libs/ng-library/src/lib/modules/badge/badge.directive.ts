import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

import { DomHandler } from '../../core/dom/domHandler';
import { badgeStyles } from './badge.constant';

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
    this.elementRef.nativeElement.style.position = 'relative';

    const badge = this.document.createElement('span');
    DomHandler.addClass(badge, 'badge');
    this.addStyles(badge);
    this.renderer.appendChild(badge, this.document.createTextNode(this.tBadge));
    this.renderer.appendChild(this.elementRef.nativeElement, badge);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tBadge'].currentValue !== changes['tBadge'].previousValue) {
      const badge = this.elementRef.nativeElement.querySelector('.badge');

      if (badge) {
        badge.innerHTML = '';
        this.renderer.appendChild(badge, this.document.createTextNode(this.tBadge));
        this.addStyles(badge);
      }
    }
  }

  private addStyles(element: HTMLSpanElement): void {
    const dotStyles: Record<string, string> =
      this.tBadge !== '' ? {} : { width: '0.5rem', 'min-width': '0.5em', height: '0.5rem' };

    const badgeCssProperties: Record<string, string> = {
      ...badgeStyles,
      ...dotStyles,
      position: 'absolute',
      top: '0',
      right: '0',
      'transform-origin': '100% 0',
      transform: 'translate(50%,-50%)',
      'border-radius': this.tBadge?.length !== 1 ? '50%' : '10px',
    };
    for (const prop in badgeCssProperties) {
      element.style.setProperty(prop, badgeCssProperties[prop]);
    }
  }
}
