import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule, UITemplate } from '@fourjs/ng-library';

import { CodeSectionComponent } from './component/code-section/code-section.component';
import { CommonNoteComponent } from './component/common-note/common-note.component';
import { CopyCodeComponent } from './component/copy-code/copy-code.component';
import { DemoWrapperComponent } from './component/demo-wrapper/demo-wrapper.component';
import { OptionsGridComponent } from './component/options-grid/options-grid.component';

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
