import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

import { defaultToastPosition } from '../toast';
import { getUiqueIdentifier } from '../../../core/utilities';
import { ToastItemConfig } from '../component/toast-item/toast-item.component';
import { ToastConfig, ToastPosition } from '../types';

@Component({
  selector: 't-toast',
  template: `
    <ng-container *ngFor="let config of configs; trackBy: trackToast">
      <t-toast-item [config]="config" />
    </ng-container>
  `,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  position: ToastPosition = defaultToastPosition;
  configs: ToastItemConfig[] = [];

  @HostBinding('id') id = getUiqueIdentifier();

  @HostBinding('class') get hostClass() {
    return `t-toast t-toast-${this.position ?? defaultToastPosition}`;
  }

  add(config: ToastConfig): void {
    this.configs.push({ id: getUiqueIdentifier(), ...config });
  }

  trackToast(_: number, item: ToastItemConfig): string {
    return item.id;
  }
}
