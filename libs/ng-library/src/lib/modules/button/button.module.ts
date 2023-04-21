import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule } from '../badge';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, BadgeModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
