import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '@fourjs/ng-library';

import { CommonNoteComponent } from './common-note/common-note.component';
import { DemoBaseModule } from '../demo-base/demo-base.module';

@NgModule({
  declarations: [CommonNoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    DemoBaseModule,
  ],
  exports: [
    CommonNoteComponent,
    FormsModule,
    ToastModule,
    HttpClientModule,
    DemoBaseModule,
  ],
})
export class Common {}
