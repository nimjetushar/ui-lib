import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReferenceComponent } from './demo/components/reference/reference.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gettingStarted',
    loadChildren: () => import('./demo/getting-started/getting-started.module').then(m => m.GettingStartedModule),
  },
  {
    path: 'styles',
    loadChildren: () => import('./demo/styles/styles.module').then(m => m.StylesModule),
  },
  {
    path: 'component',
    loadChildren: () => import('./demo/components/components.module').then(m => m.ComponentsModule),
  },
  {
    path: 'directive',
    loadChildren: () => import('./demo/directives/directives.module').then(m => m.DirectivesModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./demo/services/services.module').then(m => m.ServicesModule),
  },
  {
    path: 'utility',
    loadChildren: () => import('./demo/utility/utility.module').then(m => m.UtilityModule),
  },
  {
    path: 'reference',
    component: ReferenceComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
