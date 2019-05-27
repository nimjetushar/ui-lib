import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common } from '../common/common.module';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';

const routes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'dynamicFields', component: DynamicFieldsComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'badge'
  }
];

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonComponent,
    DynamicFieldsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class ComponentsModule { }
