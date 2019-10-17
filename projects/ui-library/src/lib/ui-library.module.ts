import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DropdownModule } from 'primeng/dropdown';

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
    ToastrModule.forRoot(),
    DropdownModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...EXPORTEDCOMPONENTS,
    ...EXPORTEDDIRECTIVES
  ],
  entryComponents: [
    ...ENTRYPOINTDIRECTIVES
  ]
})
export class UiLibrary { }
