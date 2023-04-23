import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from '@fourjs/ng-library';

import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';

@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [CommonModule, ToastModule],
  exports: [DemoWrapperComponent],
})
export class DemoBaseModule {}
