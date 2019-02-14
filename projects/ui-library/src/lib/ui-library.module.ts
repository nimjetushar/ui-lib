import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Components, ExportedComponents } from './components/components';
import { Services } from './services/services';

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [...Services],
  exports: [
    ...ExportedComponents
  ]
})
export class UiLibrary { }
