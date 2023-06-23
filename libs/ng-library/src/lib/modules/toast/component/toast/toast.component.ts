import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';

import { ToastConfig, ToastPosition } from '../../types';
import { getUiqueIdentifier } from '../../../../core/utilities';
import { ToastItemConfig } from '../toast-item/toast-item.component';
import { defaultToastPosition } from '../../toast';

@Component({
  selector: 't-toast',
  template: `
    <ng-container *ngFor="let config of configs; trackBy: trackToast">
      <t-toast-item [config]="config" (onClose)="onCloseHandler($event)" />
    </ng-container>
  `,
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  position: ToastPosition = defaultToastPosition;
  configs: ToastItemConfig[] = [];
  toastRef = new Subject();

  @HostBinding('id') id = getUiqueIdentifier();

  @HostBinding('class') get hostClass() {
    return `t-toast t-toast-${this.position ?? defaultToastPosition}`;
  }

  @HostBinding('style.zIndex') baseZIndex!: number;

  constructor(private cd: ChangeDetectorRef, private elementRef: ElementRef) {}

  add(config: ToastConfig): void {
    this.configs.push({ id: getUiqueIdentifier(), ...config });
  }

  trackToast(_: number, item: ToastItemConfig): string {
    return item.id;
  }

  onCloseHandler(config: ToastItemConfig): void {
    this.configs = this.configs.filter((c) => c.id !== config.id);
    if (this.configs.length === 0) {
      this.elementRef.nativeElement.remove();
      this.toastRef.next(null);
      this.toastRef.complete();
    }
    this.cd.detectChanges();
  }
}
