import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { BadgeModule } from '../badge';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, BadgeModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
