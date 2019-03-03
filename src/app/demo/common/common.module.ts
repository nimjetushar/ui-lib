import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';


@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoWrapperComponent]
})
export class Common { }
