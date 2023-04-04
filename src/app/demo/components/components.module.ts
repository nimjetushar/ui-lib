import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, ButtonModule } from '@fourjs/ng-library';

import { Common } from '../common';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { BadgeDemoComponent } from './badge-demo/badge-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
// import { BadgeComponent } from './badge/badge.component';
// import { ButtonComponent } from './button/button.component';
// import { DynamicFieldsDemoComponent } from './dynamic-fields/dynamic-fields.component';
// import { CheckboxComponent } from './checkbox/checkbox.component';
// import { RadioDemoComponent } from './radio-demo/radio-demo.component';
// import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
// import { ScrollTopDemoComponent } from './scroll-top-demo/scroll-top-demo.component';
// import { AlertDemoComponent } from './alert-demo/alert-demo.component';

const routes: Routes = [
  { path: 'badge', component: BadgeDemoComponent },
  { path: 'button', component: ButtonDemoComponent },
  // { path: 'dynamicFields', component: DynamicFieldsDemoComponent },
  // { path: 'checkbox', component: CheckboxComponent },
  // { path: 'radio', component: RadioDemoComponent },
  // { path: 'dropdown', component: DropdownDemoComponent },
  // { path: 'navigateTop', component: ScrollTopDemoComponent },
  // { path: 'alert', component: AlertDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'alert',
  },
];

@NgModule({
  declarations: [
    ButtonDemoComponent,
    BadgeDemoComponent,
    CheckboxDemoComponent,
    // DynamicFieldsDemoComponent,
    // CheckboxComponent,
    // RadioDemoComponent,
    // DropdownDemoComponent,
    // ScrollTopDemoComponent,
    // AlertDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    ButtonModule,
    BadgeModule,
  ],
})
export class ComponentsModule {}
