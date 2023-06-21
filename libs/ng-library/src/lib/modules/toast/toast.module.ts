import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastService } from './toast.service';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  providers: [ToastService],
  exports: [ToastComponent],
})
export class ToastModule {}
