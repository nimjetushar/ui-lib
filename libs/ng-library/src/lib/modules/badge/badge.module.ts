import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeComponent } from './badge.component';
import { BadgeDirective } from './badge.directive';

@NgModule({
  declarations: [BadgeComponent, BadgeDirective],
  imports: [CommonModule],
  exports: [BadgeComponent, BadgeDirective],
})
export class BadgeModule {}
