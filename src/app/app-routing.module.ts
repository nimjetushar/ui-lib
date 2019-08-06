import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityComponent } from './demo/utility/utility.component';
import { ReferenceComponent } from './demo/reference/reference.component';

const routes: Routes = [
  {
    path: 'gettingStarted',
    loadChildren: () => import('./demo/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'styles',
    loadChildren: () => import('./demo/styles/styles.module').then(m => m.StylesModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./demo/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./demo/services/services.module').then(m => m.ServicesModule)
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
