import { Directive, ElementRef, Inject, Input } from '@angular/core';

import { DialogConfig } from '../type';
import { DialogRef } from './dialogRef.class';

@Directive()
export class Dialog {
  @Input() config!: DialogConfig;
  @Input() dialogRef!: DialogRef;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  protected removeElement(): void {
    this.elementRef.nativeElement.remove();
  }
}
