import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

import { IOptions } from '../../../common';

type DataType = {
  name: string;
  type: string;
  default: string;
  description: string;
};

type ColumnType<T = string> = {
  label: string;
  value: T;
  width: string;
};

@Component({
  selector: 'ui-library-documentation-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToastDemoComponent {
  readonly options: IOptions = {
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

  readonly toastPositions: string[] = [
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

  readonly parameterCol: ColumnType<keyof DataType>[] = [
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

  readonly paramData: DataType[] = [
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
      default: '0',
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
