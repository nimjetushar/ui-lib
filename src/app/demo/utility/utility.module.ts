import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '@fourjs/ng-library';

import { UtilityComponent } from './utility/utility.component';
import { Common } from '../common/common.module';

const routes: Routes = [
  { path: '', component: UtilityComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    UtilityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    ButtonModule
  ]
})
export class UtilityModule { }
