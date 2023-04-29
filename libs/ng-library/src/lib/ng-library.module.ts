import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from './modules/alert';
import { BadgeModule } from './modules/badge';
import { CheckboxModule } from './modules/checkbox';
import { ButtonModule } from './modules/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,
    BadgeModule,
    ButtonModule,
    CheckboxModule,
  ],
  providers: [],
  exports: [AlertModule, BadgeModule, ButtonModule, CheckboxModule],
})
export class NgLibrary {}
