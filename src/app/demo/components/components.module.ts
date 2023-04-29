import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CheckboxModule,
  DropdownModule,
  DynamicFieldsModule,
  NavigationModule,
  RadioModule,
} from '@fourjs/ng-library';

import { Common } from '../common';
import { AlertDemoComponent } from './alert-demo/alert-demo.component';
import { BadgeDemoComponent } from './badge-demo/badge-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { DynamicFieldsDemoComponent } from './dynamic-fields-demo/dynamic-fields-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { ScrollTopDemoComponent } from './scroll-top-demo/scroll-top-demo.component';

const routes: Routes = [
  { path: 'alert', component: AlertDemoComponent },
  { path: 'badge', component: BadgeDemoComponent },
  { path: 'button', component: ButtonDemoComponent },
  { path: 'checkbox', component: CheckboxDemoComponent },
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'dynamicFields', component: DynamicFieldsDemoComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'navigateTop', component: ScrollTopDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'alert',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    AlertModule,
    BadgeModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    DynamicFieldsModule,
    RadioModule,
    NavigationModule,
  ],
  declarations: [
    AlertDemoComponent,
    BadgeDemoComponent,
    ButtonDemoComponent,
    CheckboxDemoComponent,
    DropdownDemoComponent,
    DynamicFieldsDemoComponent,
    RadioDemoComponent,
    ScrollTopDemoComponent,
  ],
})
export class ComponentsModule {}
