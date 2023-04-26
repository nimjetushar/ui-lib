import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  DropdownModule,
} from '@fourjs/ng-library';

import { Common } from '../common';
import { AlertDemoComponent } from './alert-demo/alert-demo.component';
import { BadgeDemoComponent } from './badge-demo/badge-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';

const routes: Routes = [
  { path: 'alert', component: AlertDemoComponent },
  { path: 'badge', component: BadgeDemoComponent },
  { path: 'button', component: ButtonDemoComponent },
  // { path: 'dynamicFields', component: DynamicFieldsDemoComponent },
  // { path: 'checkbox', component: CheckboxComponent },
  // { path: 'radio', component: RadioDemoComponent },
  // { path: 'dropdown', component: DropdownDemoComponent },
  // { path: 'navigateTop', component: ScrollTopDemoComponent },
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
    DropdownModule,
  ],
  declarations: [
    AlertDemoComponent,
    BadgeDemoComponent,
    ButtonDemoComponent,
    // CheckboxDemoComponent,
    // DynamicFieldsDemoComponent,
    // CheckboxComponent,
    // RadioDemoComponent,
    // DropdownDemoComponent,
    // ScrollTopDemoComponent,
  ],
})
export class ComponentsModule {}
