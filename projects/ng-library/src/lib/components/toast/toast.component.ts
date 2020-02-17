import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 't-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {

  @Input() position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'center' = 'top-right';
  @Input() autoZIndex: boolean;
  @Input() baseZIndex: number;
}
