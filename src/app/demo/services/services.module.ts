import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule, DialogModule } from '@fourjs/ng-library';

import { Common } from '../../common';
import { ToastDemoComponent } from './toast-demo/toast-demo.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

const routes: Routes = [
  { path: 'dialog', component: DialogDemoComponent },
  { path: 'toast', component: ToastDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'http',
  },
];

@NgModule({
  declarations: [ToastDemoComponent, DialogDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    ButtonModule,
    DialogModule,
  ],
})
export class ServicesModule {}
