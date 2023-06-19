import { Directive, ElementRef, Inject } from '@angular/core';

import { DialogConfig } from '../type';
import { DialogRef } from './dialogRef.class';

@Directive()
export class Dialog {
  config!: DialogConfig;
  dialogRef!: DialogRef;

  constructor(@Inject(ElementRef) protected elementRef: ElementRef) {}

  cancel(): void {
    this.removeElement();
    this.dialogRef.close(undefined);
  }

  protected removeElement(): void {
    this.elementRef.nativeElement.remove();
    this.dialogRef.destroy();
  }
}
