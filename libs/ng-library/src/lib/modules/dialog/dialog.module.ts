import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './component/dialog/dialog.component';
import { ButtonModule } from '../button';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { DialogHeaderComponent } from './component/dialog-header/dialog-header.component';

@NgModule({
  declarations: [DialogComponent, ConfirmationComponent, DialogHeaderComponent],
  imports: [CommonModule, ButtonModule],
  exports: [DialogComponent],
})
export class DialogModule {}
