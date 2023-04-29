import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigateTopComponent } from './navigate-top.component';

@NgModule({
  declarations: [NavigateTopComponent],
  imports: [CommonModule],
  exports: [NavigateTopComponent],
})
export class NavigationModule {}
