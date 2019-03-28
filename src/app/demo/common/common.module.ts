import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { UiLibrary } from 'ui-library';

@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [
    CommonModule,
    UiLibrary
  ],
  exports: [DemoWrapperComponent, UiLibrary]
})
export class Common { }
