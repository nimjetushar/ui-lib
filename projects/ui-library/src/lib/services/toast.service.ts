import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface ToastParameters {
  message?: string;
  title?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  enableHtml?: boolean;
  timeOut?: number;
  closeButton?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private defaultParam: ToastParameters = {
    type: 'success',
    enableHtml: true,
    timeOut: 0,
    closeButton: false
  };

  constructor(private toastr: ToastrService) { }

  show(toastParam: ToastParameters): void {
    toastParam = Object.assign(this.defaultParam, toastParam);

    const param = {
      enableHtml: toastParam.enableHtml,
      timeOut: toastParam.timeOut,
      closeButton: toastParam.closeButton
    };

    switch (toastParam.type) {
      case 'info':
        this.toastr.info(toastParam.message, toastParam.title, param);
        break;
      case 'success':
        this.toastr.success(toastParam.message, toastParam.title, param);
        break;
      default:
        throw new Error(('invalid parameter'));
    }
  }
}
