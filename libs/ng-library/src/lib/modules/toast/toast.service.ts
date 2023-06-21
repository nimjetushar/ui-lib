import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ToastParameters } from './types';
import { ToastComponent } from './toast/toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  show(toastParam: ToastParameters): void {
    this.displayToast(toastParam);
  }

  showMultiple(toastParam: ToastParameters[]): void {
    if (toastParam.length) {
      for (const item of toastParam) {
        this.displayToast(item);
      }
    }
  }

  private displayToast(config: ToastParameters): void {
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(ToastComponent);
    const modalComponent = modalComponentFactory.create(this.injector);
    modalComponent.instance.config = config;

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
  }
}
