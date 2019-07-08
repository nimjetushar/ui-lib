import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { Components, ExportedComponents } from './components/components';
import { Services } from './services/services';
import { ExportedDirectives, Directives, EntryPointDirectives } from './directives/directives';

@NgModule({
  declarations: [
    ...Components,
    ...Directives
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ...Services
  ],
  exports: [
    ...ExportedComponents,
    ...ExportedDirectives
  ],
  entryComponents: [
    ...EntryPointDirectives
  ]
})
export class UiLibrary { }
