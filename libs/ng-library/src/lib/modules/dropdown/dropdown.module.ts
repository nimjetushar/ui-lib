import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BlurDirective } from '../blur';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, FormsModule, BlurDirective],
  exports: [DropdownComponent],
})
export class DropdownModule {}
