import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[tBlur]',
  standalone: true,
})
export class BlurDirective {
  @Output()
  tBlur = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    const nativeElement = this.elementRef.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);
    if (!clickedInside) {
      this.tBlur.emit(event);
    }
  }

  constructor(private elementRef: ElementRef) {}
}
