import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DynamicFieldsComponent } from './dynamic-fields.component';
import { ButtonModule } from '../button';
import { DropdownModule } from '../dropdown';
import { RadioModule } from '../radio';
import { CheckboxModule } from '../checkbox';

@NgModule({
  declarations: [DynamicFieldsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    RadioModule,
  ],
  exports: [DynamicFieldsComponent],
})
export class DynamicFieldsModule {}
