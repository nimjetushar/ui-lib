import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { ToastParameters } from '../types';

@Component({
  selector: 't-toast',
  templateUrl: `./toast.component.html`,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 't-toast',
  },
})
export class ToastComponent {
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
    | 'center' = 'top-right';
  baseZIndex!: number;
  key!: string;
  config!: ToastParameters;
}
