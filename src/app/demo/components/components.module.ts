import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common } from '../common/common.module';
import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [
  { path: 'badge', component: BadgeComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'badge'
  }
];

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class ComponentsModule { }
