import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from './modules/alert';
import { BadgeModule } from './modules/badge';
import { CheckboxModule } from './modules/checkbox';
import { ButtonModule } from './modules/button';
import { MenuModule } from './modules/menu';
import { DropdownModule } from './modules/dropdown';
import { DynamicFieldsModule } from './modules/dynamic-fields';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,
    BadgeModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    DynamicFieldsModule,
    MenuModule,
  ],
  providers: [],
  exports: [
    AlertModule,
    BadgeModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    DynamicFieldsModule,
    MenuModule,
  ],
})
export class NgLibrary {}
