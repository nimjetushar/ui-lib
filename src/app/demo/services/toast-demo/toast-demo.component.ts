import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

import { IOptions } from '../../common';

@Component({
  selector: 'ui-library-documentation-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemoComponent {
  options: IOptions = {
    name: 'ToastService',
    componentType: 'Service',
    methods: [
      {
        method: 'show',
        parameter: ['params: ToastParameters'],
        description: 'Display single toast message',
      },
      {
        method: 'showAll',
        parameter: ['params: ToastParameters[]'],
        description: 'Display multiple toast message',
      },
    ],
    options: [
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
        parameter: 'timeOut',
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
      {
        parameter: 'id',
        type: 'any',
        description: 'Identifier of the toast',
      },
      {
        parameter: 'sticky',
        type: 'boolean',
        description:
          'Whether the toast should be closed automatically based on life property or kept visible.',
      },
    ],
  };

  toastPositions: string[] = [
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    'top-center',
    'bottom-center',
    'center',
  ];
  toastComp = '<t-toast baseZIndex="1050" position="top-right"></t-toast>';

  parameterCol: any[] = [
    {
      label: 'Name',
      value: 'name',
      width: '20%',
    },
    {
      label: 'Type',
      value: 'type',
      width: '20%',
    },
    {
      label: 'Default',
      value: 'default',
      width: '20%',
    },
    {
      label: 'description',
      value: 'description',
      width: '40%',
    },
  ];

  paramData: any[] = [
    {
      name: 'position',
      type: 'string',
      default: 'top-right',
      description: `Position of the component, valid values are "top-right", "top-left",
       "bottom-left", "bottom-right", "top-center, "bottom-center" and "center".`,
    },
    {
      name: 'baseZIndex',
      type: 'number',
      default: 0,
      description: 'Base zIndex value to use in layering.',
    },
  ];

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
