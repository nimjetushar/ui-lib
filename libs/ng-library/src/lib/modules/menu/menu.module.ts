import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BadgeModule } from '../badge';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, BadgeModule],
  exports: [NavComponent, HeaderComponent],
})
export class MenuModule {}
