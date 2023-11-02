import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule, UITemplate } from '@fourjs/ng-library';

import { CodeSectionComponent } from './code-section/code-section.component';
import { CommonNoteComponent } from './common-note/common-note.component';
import { CopyCodeComponent } from './copy-code/copy-code.component';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { OptionsGridComponent } from './options-grid/options-grid.component';

@NgModule({
  declarations: [
    CommonNoteComponent,
    DemoWrapperComponent,
    OptionsGridComponent,
    CopyCodeComponent,
    CodeSectionComponent,
  ],
  imports: [CommonModule, FormsModule, ToastModule, UITemplate],
  exports: [CommonNoteComponent, DemoWrapperComponent, UITemplate],
})
export class Common {}
