import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { ToastConfig, ToastType } from '../../types';
import { toastTimeOut } from '../../toast';

export type ToastItemConfig = ToastConfig & { id: string };

@Component({
  selector: 't-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 't-toast-item' },
})
export class ToastItemComponent implements OnInit, OnDestroy {
  @Input() config!: ToastItemConfig;
  @Output() onClose = new EventEmitter<ToastItemConfig>();

  @HostBinding('id') get identifier() {
    return this.config.id;
  }

  toastType: ToastType = 'success';
  iconClass!: string;

  private clearTimer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.toastType = this.config.type ?? 'success';
    this.iconClass = this.getIconClass(this.toastType);

    if (!this.config.disableTimeout) {
      this.clearTimer = setTimeout(() => {
        this.closeToast();
      }, this.config.timeout ?? toastTimeOut);
    }
  }

  ngOnDestroy(): void {
    if (this.clearTimer) {
      clearTimeout(this.clearTimer);
      this.clearTimer = undefined;
    }
  }

  closeToast(): void {
    this.onClose.emit(this.config);
  }

  private getIconClass(type: ToastType): string {
    switch (type) {
      case 'success':
        return 'fa-solid fa-check';
      case 'error':
        return 'fa-solid fa-xmark';
      case 'warn':
        return 'fa-solid fa-exclamation';
      case 'info':
        return 'fa-solid fa-info';
    }
  }
}
