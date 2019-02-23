import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperComponent } from './demo/developer/developer.component';
import { ColorPalletComponent } from './demo/color-pallet/color-pallet.component';
import { SetupComponent } from './demo/setup/setup.component';

const routes: Routes = [
  {
    path: 'developer',
    component: DeveloperComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'colorPallet',
    component: ColorPalletComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'setup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
