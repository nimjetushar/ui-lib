import {
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { defaultToastPosition } from './toast';
import { ToastConfig } from './types';
import { ToastComponent } from './component/toast/toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastInstance: ComponentRef<ToastComponent> | undefined;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  show(toastParam: ToastConfig): void {
    this.displayToast(toastParam);
  }

  showMultiple(toastParam: ToastConfig[]): void {
    if (toastParam.length) {
      for (const item of toastParam) {
        this.displayToast(item);
      }
    }
  }

  private displayToast(config: ToastConfig): void {
    if (!this.toastInstance) {
      const modalComponentFactory =
        this.resolver.resolveComponentFactory(ToastComponent);
      const modalComponent = modalComponentFactory.create(this.injector);
      this.toastInstance = modalComponent;
      this.toastInstance.instance.position =
        config.position ?? defaultToastPosition;
      this.toastInstance.instance.baseZIndex = config.baseZIndex ?? 10;

      const toastRefSub = this.toastInstance.instance.toastRef.subscribe(() => {
        this.toastInstance = undefined;
        toastRefSub.unsubscribe();
      });
      this.document.body.appendChild(modalComponent.location.nativeElement);
    }

    this.toastInstance.instance.add(config);
    this.toastInstance.hostView.detectChanges();
  }
}
