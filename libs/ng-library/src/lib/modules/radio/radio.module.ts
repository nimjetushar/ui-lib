import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, FormsModule],
  exports: [RadioComponent],
})
export class RadioModule {}
