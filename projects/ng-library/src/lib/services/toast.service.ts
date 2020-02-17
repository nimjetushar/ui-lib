import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/message';

export interface ToastParameters {
  id?: any;
  key?: string;
  title?: string;
  message?: string;
  type?: 'success' | 'error' | 'warn' | 'info';
  closeButton?: boolean;
  timeOut?: number;
  sticky?: boolean;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class ToastService {

  private defaultParam: Message = {
    severity: 'success',
    life: 5000
  };

  constructor(private messageService: MessageService) { }

  show(toastParam: ToastParameters): void {
    const param = this.formatConfig(toastParam);
    this.messageService.add(param);
  }

  showMultiple(toastParam: ToastParameters[]): void {
    if (!toastParam || toastParam && !toastParam.length) { return; }
    const param: Message[] = [];
    for (const item of toastParam) {
      param.push(this.formatConfig(item));
    }
    this.messageService.addAll(param);
  }

  private formatConfig(toastParam: ToastParameters): Message {
    const param: Message = Object.assign({}, this.defaultParam);

    const { id, key, title, message, type, closeButton, timeOut, sticky, data } = toastParam;

    if (id) {
      param.id = id;
    }

    if (key) {
      param.key = key;
    }

    if (title) {
      param.summary = title;
    }

    if (message) {
      param.detail = message;
    }

    if (type) {
      param.severity = type;
    }

    if (closeButton) {
      param.closable = closeButton;
    }

    if (timeOut) {
      param.life = timeOut;
    }

    if (sticky) {
      param.sticky = sticky;
    }

    if (data) {
      param.data = data;
    }

    return param;
  }
}
