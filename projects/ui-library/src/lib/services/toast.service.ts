import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast, ComponentType, IndividualConfig } from 'ngx-toastr';
export { ActiveToast } from 'ngx-toastr';

export interface ToastParameters extends IndividualConfig {
  message?: string;
  title?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private defaultParam: Partial<ToastParameters> = {
    type: 'success',
    enableHtml: true,
    timeOut: 10000,
    closeButton: false
  };

  constructor(private toastr: ToastrService) { }

  show(toastParam: Partial<ToastParameters>): ActiveToast<any> {
    const param = Object.assign({}, this.defaultParam, toastParam);

    switch (toastParam.type) {
      case 'info':
        return this.toastr.info(toastParam.message, toastParam.title, param);
      case 'success':
        return this.toastr.success(toastParam.message, toastParam.title, param);
      case 'error':
        return this.toastr.error(toastParam.message, toastParam.title, param);
      case 'warning':
        return this.toastr.warning(toastParam.message, toastParam.title, param);
      default:
        throw new Error('invalid parameter');
    }
  }
}
