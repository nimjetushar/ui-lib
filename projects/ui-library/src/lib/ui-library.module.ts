import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { Components, ExportedComponents } from './components/components';
import { SERVICES } from './services/services';
import { DIRECTIVES, entryPointDirectives, exportedDirectives } from './directives/directives';

@NgModule({
  declarations: [
    ...Components,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...ExportedComponents,
    ...exportedDirectives
  ],
  entryComponents: [
    ...entryPointDirectives
  ]
})
export class UiLibrary { }
