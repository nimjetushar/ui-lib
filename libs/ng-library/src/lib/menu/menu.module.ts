import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [NavComponent, HeaderComponent],
})
export class MenuModule {}
