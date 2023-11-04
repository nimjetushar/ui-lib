import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

import { DomHandler } from '../../core';
import { buttonSizeInput, buttonTypeInput, getButtonClass } from './button.utility';
import { ButtonSize, ButtonType } from './type';

@Directive({ selector: '[tButton]' })
export class ButtonDirective implements OnInit, OnChanges {
  @Input({ transform: buttonTypeInput }) type: ButtonType = 'primary';
  @Input({ transform: buttonSizeInput }) size: ButtonSize = 'normal';
  @Input() link = false;
  @Input() disabled = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.updateButtonProperties();
  }

  ngOnChanges(): void {
    this.updateButtonProperties();
  }

  private updateButtonProperties() {
    const classObj = getButtonClass({ type: this.type, size: this.size, disabled: this.disabled, link: this.link });
    for (const key in classObj) {
      if (classObj[key]) {
        DomHandler.addClass(this.elementRef.nativeElement, key);
      }
    }
  }
}
