import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CommonNoteComponent } from './common-note/common-note.component';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';

@NgModule({
  declarations: [
    DemoWrapperComponent,
    CommonNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    DemoWrapperComponent,
    CommonNoteComponent,
    FormsModule,
    HttpClientModule
  ]
})
export class Common { }
