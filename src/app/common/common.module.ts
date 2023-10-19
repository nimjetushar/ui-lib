import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule, UITemplate } from '@fourjs/ng-library';

import { CommonNoteComponent } from './common-note/common-note.component';
import { CopyCodeComponent } from './copy-code/copy-code.component';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { OptionsGridComponent } from './options-grid/options-grid.component';

@NgModule({
  declarations: [CommonNoteComponent, DemoWrapperComponent, OptionsGridComponent, CopyCodeComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ToastModule, UITemplate],
  exports: [CommonNoteComponent, FormsModule, ToastModule, HttpClientModule, DemoWrapperComponent, UITemplate],
})
export class Common {}
