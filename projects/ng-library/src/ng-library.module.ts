import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

import { EXPORTEDCOMPONENTS, COMPONENTS } from './components/components';
import { SERVICES } from './services/services';
import { DIRECTIVES, ENTRYPOINTDIRECTIVES, EXPORTEDDIRECTIVES } from './directives/directives';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    ToastModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    // module export
    // component export
    ...EXPORTEDCOMPONENTS,
    // directive export
    ...EXPORTEDDIRECTIVES
  ],
  entryComponents: [
    ...ENTRYPOINTDIRECTIVES
  ]
})
export class NgLibrary { }
