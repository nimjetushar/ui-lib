import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityComponent } from './demo/utility/utility.component';

const routes: Routes = [
  {
    path: 'gettingStarted',
    loadChildren: './demo/getting-started/getting-started.module#GettingStartedModule'
  },
  {
    path: 'styles',
    loadChildren: './demo/styles/styles.module#StylesModule'
  },
  {
    path: 'utility',
    component: UtilityComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gettingStarted/setup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
