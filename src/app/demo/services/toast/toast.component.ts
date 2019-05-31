import { Options } from './../../common/demo-wrapper/demo-wrapper.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { ToastService } from 'projects/ui-library/src/lib/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {

  public options: Options = {
    name: 'ToastService',
    componentType: 'Service',
    methods: [
      {
        method: 'show',
        param: ['params: ToastParameters'],
        desc: 'Accepts ToastParameters and return ActiveToast<any>'
      }
    ],
    options: [
      {
        parameter: 'title',
        type: 'string',
        desc: 'Notification title'
      },
      {
        parameter: 'message',
        type: 'string',
        desc: 'Notification message'
      },
      {
        parameter: 'type',
        type: 'string',
        default: 'success',
        desc: 'Specifies type of notification to show'
      },
      {
        parameter: 'enableHtml',
        type: 'boolean',
        default: false,
        desc: 'Html content within toast'
      },
      {
        parameter: 'timeOut',
        type: 'number',
        default: '10000',
        desc: 'Timeout for toast auto close'
      },
      {
        parameter: 'extendedTimeOut',
        type: 'boolean',
        default: false,
        desc: 'Disable both timeOut and extendedTimeOut'
      },
      {
        parameter: 'disableTimeOut',
        type: 'number',
        default: '1000',
        desc: 'Time to close after a user hovers over toast'
      },
      {
        parameter: 'closeButton',
        type: 'boolean',
        default: false,
        desc: 'Display close button'
      },
      {
        parameter: 'toastComponent',
        type: 'Component',
        default: 'Toast',
        desc: 'Angular component that will be used'
      },
      {
        parameter: 'easing',
        type: 'string',
        default: 'ease-in',
        desc: 'Toast component easing'
      },
      {
        parameter: 'easeTime',
        type: 'string | number',
        default: '300',
        desc: 'Time spent easing'
      },
      {
        parameter: 'progressBar',
        type: 'boolean',
        default: 'false',
        desc: 'Show progress bar'
      },
      {
        parameter: 'progressAnimation',
        type: 'decreasing | increasing',
        default: 'decreasing',
        desc: 'Changes the animation of the progress bar'
      },
      {
        parameter: 'positionClass',
        type: 'string',
        default: 'toast-top-right',
        desc: 'Class on toast container'
      },
      {
        parameter: 'tapToDismiss',
        type: 'boolean',
        default: 'true',
        desc: 'Close on click'
      },
      {
        parameter: 'onActivateTick',
        type: 'boolean',
        default: 'false',
        desc: `Fires changeDetectorRef.detectChanges() when activated.
        Helps show toast from asynchronous events outside of Angular's change detection`
      },
      {
        parameter: 'titleClass',
        type: 'string',
        default: 'toast-title',
        desc: 'Class inside toast on title'
      },
      {
        parameter: 'messageClass',
        type: 'string',
        default: 'toast-message',
        desc: 'Class inside toast on message'
      }
    ]
  };

  constructor(private toastService: ToastService) { }

  showToast(type: 'success'): void {
    this.toastService.show({ title: 'Title', message: 'message', type: type, progressBar: true });
  }
}
