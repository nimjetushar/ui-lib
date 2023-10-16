import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BlurDirective } from '../blur';
import { TooltipModule } from '../tooltip';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, BlurDirective, ReactiveFormsModule, TooltipModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
