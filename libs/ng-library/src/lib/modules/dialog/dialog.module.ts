import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './component/dialog/dialog.component';
import { ButtonModule } from '../button';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { DialogHeaderComponent } from './component/dialog-header/dialog-header.component';
import { DialogContentDirective } from './component/dialog/dialog-content';

@NgModule({
  declarations: [
    DialogComponent,
    ConfirmationComponent,
    DialogHeaderComponent,
    DialogContentDirective,
  ],
  imports: [CommonModule, ButtonModule],
  exports: [DialogComponent],
})
export class DialogModule {}
