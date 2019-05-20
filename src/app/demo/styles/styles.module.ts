import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Common } from '../common/common.module';
import { ColorPalletComponent } from './color-pallet/color-pallet.component';

const routes: Routes = [
  { path: 'colorPallet', component: ColorPalletComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'colorPallet'
  }
];

@NgModule({
  declarations: [
    ColorPalletComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class StylesModule { }
