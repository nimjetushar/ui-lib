import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertModule } from './modules/alert';
import { BadgeModule } from './modules/badge';
import { BlurDirective } from './modules/blur';
import { ButtonModule } from './modules/button';
import { CheckboxModule } from './modules/checkbox';
import { DialogModule } from './modules/dialog';
import { DropdownModule } from './modules/dropdown';
import { DynamicFieldsModule } from './modules/dynamic-fields';
import { MenuModule } from './modules/menu';
import { NavigationModule } from './modules/navigate-top';
import { RadioModule } from './modules/radio';
import { ToastModule } from './modules/toast';
import { TooltipModule } from './modules/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,
    BadgeModule,
    BlurDirective,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    DynamicFieldsModule,
    MenuModule,
    NavigationModule,
    RadioModule,
    ToastModule,
    TooltipModule,
    DialogModule,
  ],
  providers: [],
  exports: [
    AlertModule,
    BadgeModule,
    BlurDirective,
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
