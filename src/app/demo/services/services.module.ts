import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '@fourjs/ng-library';

import { Common } from '../common';
import { ToastDemoComponent } from './toast-demo/toast-demo.component';

const routes: Routes = [
  { path: 'toast', component: ToastDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'http',
  },
];

@NgModule({
  declarations: [ToastDemoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), Common, ButtonModule],
})
export class ServicesModule {}
