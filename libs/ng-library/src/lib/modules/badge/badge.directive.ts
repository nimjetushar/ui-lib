import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';

import { badgeStyles } from './badge.component';

@Directive({
  selector: '[tBadge]',
})
export class BadgeDirective implements OnInit {
  @Input() tBadge!: string | number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.position = 'relative';

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
    };

    const child = this.document.createElement('span');
    child.classList.add('badge');
    for (const prop in badgeCssProperties) {
      child.style.setProperty(prop, badgeCssProperties[prop]);
    }
    child.innerText = this.tBadge.toString();
    this.renderer.appendChild(this.elementRef.nativeElement, child);
  }
}
