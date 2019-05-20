import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityComponent } from './demo/utility/utility.component';
import { ReferenceComponent } from './demo/reference/reference.component';

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
    path: 'component',
    loadChildren: './demo/components/components.module#ComponentsModule'
  },
  {
    path: 'services',
    loadChildren: './demo/services/services.module#ServicesModule'
  },
  {
    path: 'utility',
    component: UtilityComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
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
