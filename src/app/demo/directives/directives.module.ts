import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule, TooltipModule } from '@fourjs/ng-library';

import { Common } from '../../common';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';

const routes: Routes = [
  { path: 'tooltip', component: TooltipDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tooltip',
  },
];

@NgModule({
  declarations: [TooltipDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    TooltipModule,
    DropdownModule,
  ],
})
export class DirectivesModule {}
