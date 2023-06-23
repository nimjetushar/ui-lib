import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  ToastConfig,
  ToastPosition,
  ToastService,
  ToastType,
} from '@fourjs/ng-library';

import { IOptions } from '../../../common';

@Component({
  selector: 'ui-library-documentation-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToastDemoComponent {
  readonly options: IOptions<keyof ToastConfig> = {
    name: 'ToastService',
    componentType: 'Service',
    methods: [
      {
        method: 'show',
        parameter: ['ToastConfig'],
        description: 'Display single toast message',
      },
      {
        method: 'showAll',
        parameter: ['Array<ToastConfig>'],
        description: 'Display multiple toast message',
      },
    ],
    options: [
      {
        parameter: 'position',
        type: 'string',
        default: 'top-right',
        description: `Position of the component, valid values are "top-right", "top-left",
         "bottom-left", "bottom-right", "top-center, "bottom-center" and "center".`,
      },
      {
        parameter: 'baseZIndex',
        type: 'number',
        default: '10',
        description: 'Base zIndex value to use in layering.',
      },
      {
        parameter: 'title',
        type: 'string',
        description: 'Notification title',
      },
      {
        parameter: 'message',
        type: 'string',
        description: 'Notification message',
      },
      {
        parameter: 'type',
        type: 'string',
        default: 'success',
        description: 'Specifies type of notification to show',
      },
      {
        parameter: 'timeout',
        type: 'number',
        default: '4000',
        description: 'Timeout for toast auto close',
      },
      {
        parameter: 'closeButton',
        type: 'boolean',
        default: 'false',
        description: 'Display close button',
      },
    ],
  };

  readonly toastPositions: ToastPosition[] = [
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    'top-center',
    'bottom-center',
    'center',
  ];
  readonly toastComp =
    '<t-toast baseZIndex="1050" position="top-right"></t-toast>';

  readonly toastType: ToastType[] = ['success', 'error', 'warn', 'info'];

  constructor(private toastService: ToastService) {}

  showToast(type: 'success' | 'error' | 'warn' | 'info'): void {
    this.toastService.show({
      title: 'Title',
      message: 'message',
      type,
      closeButton: true,
    });
  }

  multipleToast(): void {
    this.toastService.showMultiple([
      { title: 'Title', message: 'message', type: 'success' },
      { title: 'Title', message: 'message', type: 'warn' },
      { title: 'Title', message: 'message', type: 'info' },
    ]);
  }
}
