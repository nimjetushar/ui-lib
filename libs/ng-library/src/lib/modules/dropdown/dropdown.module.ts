import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownModule as PrimeDropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, PrimeDropdownModule, FormsModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
