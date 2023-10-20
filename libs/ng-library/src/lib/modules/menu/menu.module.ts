import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BadgeModule } from '../badge';
import { HeaderComponent } from './header/header.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent, MenuIconComponent],
  imports: [CommonModule, RouterModule, BadgeModule],
  exports: [NavComponent, HeaderComponent],
})
export class MenuModule {}
