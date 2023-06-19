import { Directive, ElementRef, Inject, Input } from '@angular/core';

import { DialogConfig } from '../type';
import { DialogRef } from './dialogRef.class';

@Directive()
export class Dialog {
  @Input() config!: DialogConfig;
  @Input() dialogRef!: DialogRef;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  cancel(): void {
    this.removeElement();
    this.dialogRef.close(undefined);
  }

  protected removeElement(): void {
    this.elementRef.nativeElement.remove();
    this.dialogRef.destroy();
  }
}
