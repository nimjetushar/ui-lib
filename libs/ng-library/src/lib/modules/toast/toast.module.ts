import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule as PrimengToastModule } from 'primeng/toast';

import { ToastService } from './toast.service';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, PrimengToastModule],
  providers: [MessageService, ToastService],
  exports: [ToastComponent],
})
export class ToastModule {}
