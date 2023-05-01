import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';

import { ToastParameters } from './types';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private messageService: MessageService) {}

  show(toastParam: ToastParameters): void {
    const param = this.formatConfig(toastParam);
    this.messageService.add(param);
  }

  showMultiple(toastParam: ToastParameters[]): void {
    if (!toastParam || (toastParam && !toastParam.length)) {
      return;
    }
    const param: Message[] = toastParam.map((d) => this.formatConfig(d));
    this.messageService.addAll(param);
  }

  private formatConfig(toastParam: ToastParameters): Message {
    const {
      id,
      key,
      title,
      message,
      type,
      closeButton,
      timeOut,
      sticky,
      data,
    } = toastParam;

    return {
      closable: closeButton,
      data,
      id,
      key,
      summary: title,
      detail: message,
      severity: type || 'success',
      life: timeOut || 4000,
      sticky,
    };
  }
}
