import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastService } from './toast.service';
import { ToastItemComponent } from './component/toast-item/toast-item.component';
import { ToastComponent } from './component/toast/toast.component';

@NgModule({
  declarations: [ToastComponent, ToastItemComponent],
  imports: [CommonModule],
  providers: [ToastService],
  exports: [ToastComponent],
})
export class ToastModule {}
