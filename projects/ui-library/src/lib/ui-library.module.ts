import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components, ExportedComponents } from './components/components';
import { Services } from './services/services';

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule
  ],
  providers: [...Services],
  exports: [
    ...ExportedComponents
  ]
})
export class UiLibrary { }
