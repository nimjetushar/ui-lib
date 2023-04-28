import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '@fourjs/ng-library';

import { CommonNoteComponent } from './common-note/common-note.component';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';

@NgModule({
  declarations: [CommonNoteComponent, DemoWrapperComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ToastModule],
  exports: [
    CommonNoteComponent,
    FormsModule,
    ToastModule,
    HttpClientModule,
    DemoWrapperComponent,
  ],
})
export class Common {}
