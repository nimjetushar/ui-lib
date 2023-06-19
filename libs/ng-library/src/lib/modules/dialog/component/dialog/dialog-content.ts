import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tDynamicDialogContent]',
})
export class DialogContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
