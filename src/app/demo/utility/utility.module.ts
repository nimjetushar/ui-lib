import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '@fourjs/ng-library';

import { Common } from '../../common';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  { path: '', component: UtilityComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [UtilityComponent],
  imports: [CommonModule, RouterModule.forChild(routes), Common, ButtonModule],
})
export class UtilityModule {}
