import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from './modules/alert';
import { BadgeModule } from './modules/badge';
import { CheckboxModule } from './modules/checkbox';
import { ButtonModule } from './modules/button';
import { MenuModule } from './modules/menu';
import { DropdownModule } from './modules/dropdown';
import { DynamicFieldsModule } from './modules/dynamic-fields';
import { NavigationModule } from './modules/navigate-top';
import { ToastModule } from './modules/toast';
import { RadioModule } from './modules/radio';
import { TooltipModule } from './modules/tooltip';

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
    NavigationModule,
    RadioModule,
    ToastModule,
    TooltipModule,
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
    NavigationModule,
    RadioModule,
    ToastModule,
    TooltipModule,
  ],
})
export class NgLibrary {}
