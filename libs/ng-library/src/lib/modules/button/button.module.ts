import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule } from '../badge';
import { ButtonComponent } from './button.component';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [ButtonComponent, ButtonDirective],
  imports: [CommonModule, BadgeModule],
  exports: [ButtonComponent, ButtonDirective],
})
export class ButtonModule {}
