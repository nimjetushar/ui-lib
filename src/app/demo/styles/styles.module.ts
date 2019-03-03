import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Common } from '../common/common.module';
import { ColorPalletComponent } from './color-pallet/color-pallet.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  { path: 'colorPallet', component: ColorPalletComponent },
  { path: 'reference', component: ReferenceComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'colorPallet'
  }
];

@NgModule({
  declarations: [
    ColorPalletComponent,
    ReferenceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class StylesModule { }
