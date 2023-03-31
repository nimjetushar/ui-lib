import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 't-toast',
  template: `
    <p-toast
      [position]="position"
      [style.z-index]="baseZIndex"
      [key]="key"
    ></p-toast>
  `,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  @Input() position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
    | 'center' = 'top-right';
  @Input() baseZIndex!: number;
  @Input() key!: string;
}
